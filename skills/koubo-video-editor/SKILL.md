---
name: koubo-video-editor
description: Use this skill when the user wants to edit Chinese talking-head short videos, identify breath/cut points, select repeated takes, make a finished Remotion video, add B-roll, music, captions, knowledge cards, transparent overlay layers, design a real-person cover, or do technical shot-by-shot analysis for editing technique. Trigger on 口播剪辑, 气口, 粗剪, 精剪, 成片, B-roll, 配乐, 字幕包装, 透明动效层, Remotion, 封面, 拉片, 技术拉片, 剪辑复现, 复现 SOP.
---

# Koubo Video Editor

## Core Promise

Turn source footage plus a script into a publishable Chinese short video, or produce a clearly labeled stage asset such as a rough cut, transparent motion overlay, cover, or technical shot-analysis report.

Never call a talking-head video a finished video just because the speech is cut and captions exist. A finished video must pass meaning, cut-point, visual, B-roll, music/sound, layout, render, and final-inspection gates.

This skill supports automatic editing, but the recommended workflow is human-in-the-loop. For breath points, precise cut points, sentence heads/tails, facial state, and timeline feel, ask the user to review or fix the actual timeline in Jianying/CapCut/Premiere or their preferred editor. Treat automatic cuts as candidates, not final truth.

## Modes

### 1. Stage 1 Oral Cut

Use when the user asks for 粗剪, 气口, 选条, 去重复, 剪口播, or stage-1 timeline cleanup.

Default assumptions:

- The speaker often repeats one sentence or meaning unit many times.
- The last or second-last take is usually strongest.
- Earlier takes are backup unless the last two fail.
- Spoken wording may differ from the written script; judge by meaning, not exact text.
- The script's logic order is the authority unless the user approves restructuring.

Stage 1 must remove shooting residue: countdowns, prompts, false starts, setup waits, mouth prep, unusable breaths, duplicate attempts, and dead tails. Keep only pauses that help judgment, contrast, emotional landing, or credibility.

### 2. Finished Video

Use when the user asks for 成片, 完整跑一遍, B-roll, 音乐, 字幕包装, or final render.

A finished video requires:

1. Meaning map.
2. Locked oral cut.
3. Visual plan for every meaning unit.
4. B-roll scan or explicit face-only decision.
5. Music/sound decision.
6. Captions and layout inside the target frame.
7. Rendered frames inspected.
8. Final media parameters checked.

If B-roll or music is missing, say `stage output only`, not `finished video`.

### 3. Transparent Motion Overlay

Use when the user wants a 1080P/60fps alpha overlay to stack over an already edited video in 剪映/CapCut.

Rules:

- Render transparent video only; do not composite the base footage.
- Use ProRes 4444 or another alpha-capable format.
- Keep all cards inside safe frame.
- Choose one anchor system before layout: left stack, right stack, bottom ribbon, or centered reveal.
- Inspect the densest frame for overlap.
- If the user says cards should stay on one side, do not alternate sides.

### 4. Cover

Use when the user asks for a cover image.

Cover is a supporting capability, not the main promise of this skill. Do not oversell cover design when the user's real need is editing judgment, transparent overlays, or technical shot analysis.

Rules:

- If the user asks for the real person, extract a frame from the actual video. Do not generate or replace the face.
- Default cover ratio for Chinese short-video covers: 3:4 vertical, 1080x1440, unless the user says otherwise.
- Cover text must express the video's actual selling point, not merely repeat one comment keyword.
- Keep the design language consistent with the video's motion package.

### 5. Technical Shot Analysis

Use when the user asks for 拉片, 技术拉片, 拆剪辑手法, 分析剪辑技术, 复现某条视频, or 生成复现 SOP.

This mode is not film criticism, plot summary, account diagnosis, or generic content distillation. Its job is to turn a reference video into reproducible editing decisions.

Default outputs:

1. 拉片报告: what the video does at the level of timeline, shot, rhythm, audio, layout, subtitle, transition, B-roll, and packaging.
2. 技术动作表: timecode-by-timecode observations with evidence.
3. 复现 SOP: how to rebuild the technique in Jianying/CapCut/Remotion with available source material.
4. 风险清单: what will fail if copied mechanically.

The analysis must prioritize technique over taste:

- timeline structure
- section rhythm
- shot size and movement
- cut-point logic
- transition mechanism
- caption position and hierarchy
- card/overlay layout
- B-roll job
- music/SFX/ducking
- safe area and platform UI risk
- what can be copied directly vs what must be adapted

When generating a report page, summary card, final analysis screen, or subtitle-heavy diagnostic video, check that subtitles do not cover the report text, evidence screenshot, speaker mouth, product/proof area, or CTA. If subtitles collide with the final report area, move the report, move the subtitles, shorten the subtitle line, add a reserved subtitle lane, or split the report into multiple screens before delivery.

## Operating Workflow

### Step 1: Intake

Collect or infer:

- source video folder or rough-cut file
- script or transcript
- target platform and aspect ratio
- whether the request is stage cut, finished video, transparent overlay, or cover
- whether the request is technical shot analysis / 拉片 / 复现 SOP
- available screenshots, product shots, B-roll, music, brand assets

For folders, make an inventory. For long videos, sample frames or contact sheets. Do not rely on filenames alone.

### Step 2: Meaning Map

Split the script into meaning units:

- hook
- setup
- judgment
- evidence
- contrast
- consequence
- action
- CTA

Each unit needs a visual job:

- face
- source B-roll
- generated image
- screenshot/proof
- text card
- no cutaway

For technical shot analysis, build a technique map instead of only a meaning map:

- section purpose
- shot or layout type
- edit action
- rhythm/action trigger
- audio trigger
- subtitle/layout behavior
- reusable rule
- reproduction step

### Step 3: Cut Points

For repeated takes:

1. Group attempts by meaning unit.
2. Check last take.
3. Check second-last take.
4. Keep the best complete and natural take.
5. Remove unused duplicate attempts.
6. Trim entry and tail.
7. Replay around every risky join.

Classify pauses as:

- remove: setup silence, mouth prep, failed start, raw breath
- tighten: ordinary continuation
- keep: contrast, warning, reveal, conclusion, emotional landing

### Step 4: Visual and B-Roll

For finished-video work, scan B-roll opportunities across every body section.

Use B-roll only when it has a job:

- proof
- process
- product
- place
- action
- result
- emotional contrast
- pace relief

Do not paste random related footage just to avoid face-only video.

### Step 5: Music and Sound

Choose one:

- quiet trust bed under speech
- music-led montage
- section-based music changes
- deliberate silence

If music is used, speech must stay intelligible. Duck music under key judgments, warnings, numbers, and CTA.

### Step 6: Remotion Execution

Keep timing data separate from visual components where possible.

For heavy raw assets:

- pre-trim used segments
- transcode if needed
- keep project assets local to the Remotion project
- render stills before final video

Use the included `remotion-template` as a starting point for transparent overlays and covers.

### Step 7: Verification

Before saying an output is ready, inspect:

- first frame
- 1s
- 2s
- 5s
- every distinct layout
- every B-roll layout
- densest overlay frame
- ending/CTA

Run media checks for size, duration, FPS, audio stream, and alpha channel when relevant.

## Reference Files

Read only what the task needs:

- `references/technical-shot-analysis.md`: technical 拉片 reports and reproduction SOPs.
- `references/editor-decision-system.md`: editor mindset and information arrangement.
- `references/cutpoint-heuristics.md`: breath, silence, take selection, and cut-point rules.
- `references/visual-and-broll-system.md`: visual jobs, B-roll, screenshots, cards, generated images.
- `references/music-and-sound-system.md`: music choice, ducking, sound bridges, silence.
- `references/remotion-production-workflow.md`: Remotion project flow.
- `references/quality-rubric.md`: final gates.
- `references/visual-render-verification.md`: frame-level visual checks.
- `references/failure-cases.md`: known mistakes to avoid.

## Response Contract

For finished videos, report:

- final video path
- B-roll and music used
- frames/layouts checked
- media parameters
- any remaining human-review risk

For transparent overlays, report:

- overlay path
- resolution, FPS, codec, alpha confirmation
- densest frames checked

For covers, report:

- image path
- size and ratio
- whether the person is a real extracted frame

For technical shot analysis, report:

- reference video or source folder inspected
- report path, if a file was created
- analyzed time ranges
- key techniques extracted
- reproduction SOP path or section
- subtitle/report-layout collision check result
- remaining uncertainty if source audio, subtitles, or frames were unavailable
