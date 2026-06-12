# Cut-Point and Breath Heuristics

## Goal

Approximate a good Jianying-style oral edit without pretending to know Jianying's proprietary implementation. Use audio silence, speech semantics, ASR punctuation, take repetition, and editorial judgment together.

## Cut Candidate Sources

Use all available signals:

- FFmpeg `silencedetect`: finds low-volume regions.
- ASR word timestamps: aligns words to possible sentence and phrase endings.
- Script meaning units: protects meaning and order.
- Repeated takes: identifies duplicate attempts and preferred latest takes.
- Visual state: mouth open/closed, head reset, body movement, gesture completion when available.
- Music beats: only after speech lock.

## Silence Thresholds

Start with adaptive thresholds:

- Normal indoor speech: noise threshold around `-35dB` to `-45dB`.
- Noisy environment: start around `-30dB`.
- Clean studio: start around `-45dB` to `-50dB`.
- Minimum silence for a candidate: `0.12s` for micro-breaths, `0.20s` for normal cuts, `0.45s+` for obvious dead air.

Never use a fixed threshold blindly. If many false positives appear inside words, lower sensitivity. If obvious pauses are missed, raise sensitivity.

## Three Classes of Pauses

### Remove

- long pre-speech wait
- countdown or "开始"
- "再来", "不对", "等一下"
- mouth preparation before the first useful word
- failed start
- duplicate earlier take after a better take survives
- dead tail after a completed thought

### Tighten

- ordinary breath between clauses
- hesitation that does not add trust
- filler after meaning is already clear
- pause caused by memory search

### Keep

- pause before a contrast
- pause before a warning
- pause before price, number, consequence, or conclusion
- pause that makes a judgment sound credible
- pause around a strong facial expression or reaction
- emotional landing beat in story content

## Head and Tail Protection

For every surviving spoken segment:

- keep 40-80 ms before the first audible useful syllable
- keep 80-180 ms after the final syllable depending on tone
- keep more tail after heavy judgments, emotional turns, and CTAs
- do not cut inside plosives, affricates, or final vowels
- replay around every cut point after speed changes

## Meaning-Unit Rule

A cut is invalid if it removes:

- subject/object needed to understand the sentence
- judgment
- reason
- contrast
- consequence
- action instruction
- transition needed by the script logic

For source material that deviates from the script, preserve semantic alignment over exact words.

## Repeated-Take Rule

For repeated口播 takes:

1. Group adjacent attempts that express the same meaning.
2. Check the last take first.
3. Check the second-last take next.
4. Keep the complete, natural, emotionally usable take.
5. Use earlier takes only when both later takes fail.
6. Do not delete all backups before one complete take is confirmed.

## Minimum Segment Duration

Use these as defaults, then adapt:

- Talking-head sentence segment: normally 1.2s minimum.
- Fast montage detail shot: 0.25s to 0.6s if readable.
- Product beauty shot: 0.8s to 2.5s depending on motion.
- Heavy judgment/reveal: add a landing beat of 0.12s to 0.35s.
- Text card: long enough to read aloud once, plus 0.2s.

## Practical Detection Workflow

1. Run `scripts/detect_cutpoints.py` on the source audio/video.
2. Compare silence candidates to ASR/script phrase endings.
3. Label each silence: remove, tighten, keep, ignore.
4. Create an edit decision list.
5. Apply cuts.
6. Re-render preview.
7. Re-check first syllables, tails, and semantic continuity.

## Output Fields for Cut Plans

Each cut decision should include:

- `source`
- `segment_id`
- `keep_start_sec`
- `keep_end_sec`
- `cut_in_reason`
- `cut_out_reason`
- `pause_class`: remove/tighten/keep
- `meaning_unit_id`
- `risk`: low/medium/high

High-risk cuts require manual preview.
