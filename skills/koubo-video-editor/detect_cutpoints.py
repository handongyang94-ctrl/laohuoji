#!/usr/bin/env python3
"""Detect silence-based cut candidates for short-video editing.

This script uses ffmpeg silencedetect and emits JSON. It does not decide the
final edit by itself; use the output as candidates and compare them with the
script meaning map.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path


SILENCE_START = re.compile(r"silence_start:\s*([0-9.]+)")
SILENCE_END = re.compile(r"silence_end:\s*([0-9.]+)\s*\|\s*silence_duration:\s*([0-9.]+)")


def run(cmd: list[str]) -> subprocess.CompletedProcess[str]:
    return subprocess.run(cmd, text=True, capture_output=True, check=False)


def ffprobe_duration(path: Path) -> float | None:
    proc = run([
        "ffprobe",
        "-v",
        "error",
        "-show_entries",
        "format=duration",
        "-of",
        "default=noprint_wrappers=1:nokey=1",
        str(path),
    ])
    if proc.returncode != 0:
        return None
    try:
        return float(proc.stdout.strip())
    except ValueError:
        return None


def detect(path: Path, noise: str, min_silence: float) -> tuple[list[dict], str]:
    proc = run([
        "ffmpeg",
        "-hide_banner",
        "-nostats",
        "-i",
        str(path),
        "-af",
        f"silencedetect=noise={noise}:d={min_silence}",
        "-f",
        "null",
        "-",
    ])
    stream = "\n".join([proc.stderr, proc.stdout])
    starts: list[float] = []
    silences: list[dict] = []
    for line in stream.splitlines():
        m_start = SILENCE_START.search(line)
        if m_start:
            starts.append(float(m_start.group(1)))
            continue
        m_end = SILENCE_END.search(line)
        if m_end:
            end = float(m_end.group(1))
            dur = float(m_end.group(2))
            start = starts.pop(0) if starts else round(end - dur, 3)
            silences.append({
                "start_sec": round(start, 3),
                "end_sec": round(end, 3),
                "duration_sec": round(dur, 3),
            })
    return silences, stream


def classify(duration: float) -> str:
    if duration >= 0.45:
        return "remove_or_chapter_pause"
    if duration >= 0.2:
        return "normal_cut_candidate"
    return "micro_breath_candidate"


def build_candidates(silences: list[dict], head_pad: float, tail_pad: float) -> list[dict]:
    out = []
    for i, s in enumerate(silences, start=1):
        start = s["start_sec"]
        end = s["end_sec"]
        midpoint = (start + end) / 2
        out.append({
            "id": f"silence_{i:04d}",
            **s,
            "candidate_cut_sec": round(midpoint, 3),
            "suggested_prev_end_sec": round(max(start + tail_pad, start), 3),
            "suggested_next_start_sec": round(max(end - head_pad, start), 3),
            "pause_class": classify(s["duration_sec"]),
            "editor_warning": "Compare with ASR/script meaning before applying. Do not cut inside a useful syllable or intentional pause.",
        })
    return out


def main() -> int:
    parser = argparse.ArgumentParser(description="Detect silence-based edit cut candidates.")
    parser.add_argument("input", help="Input audio or video file")
    parser.add_argument("--noise", default="-35dB", help="ffmpeg silencedetect noise threshold, default -35dB")
    parser.add_argument("--min-silence", type=float, default=0.16, help="minimum silence duration in seconds")
    parser.add_argument("--head-pad", type=float, default=0.06, help="protect this much before next useful syllable")
    parser.add_argument("--tail-pad", type=float, default=0.08, help="protect this much after previous syllable")
    parser.add_argument("--out", help="Optional JSON output path")
    args = parser.parse_args()

    path = Path(args.input)
    if not path.exists():
        raise SystemExit(f"Input not found: {path}")

    duration = ffprobe_duration(path)
    silences, raw_log = detect(path, args.noise, args.min_silence)
    result = {
        "input": str(path),
        "duration_sec": round(duration, 3) if duration is not None else None,
        "settings": {
            "noise": args.noise,
            "min_silence": args.min_silence,
            "head_pad": args.head_pad,
            "tail_pad": args.tail_pad,
        },
        "silence_count": len(silences),
        "candidates": build_candidates(silences, args.head_pad, args.tail_pad),
        "notes": [
            "These are candidates, not final edits.",
            "Validate against meaning units, ASR punctuation, and first/last syllable integrity.",
            "Keep intentional pauses before contrast, warning, price, reveal, conclusion, or emotional landing.",
        ],
    }
    text = json.dumps(result, ensure_ascii=False, indent=2)
    if args.out:
        Path(args.out).write_text(text, encoding="utf-8")
    else:
        print(text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
