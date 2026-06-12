# Technical Shot Analysis

## Purpose

Use this reference when the user asks for 拉片, 技术拉片, 剪辑手法拆解, or 复现 SOP.

The goal is not to say whether the video is good. The goal is to extract the editing technique so another editor can reproduce it with different material.

Core rule:

```text
拉片不是总结视频，而是把视频拆成可复刻的时间轴和 SOP。
```

If there is no timecoded analysis table, the output is only commentary, not a real 拉片.

## Scope

Technical 拉片 should inspect:

- timeline structure
- section function
- shot size
- camera movement
- internal subject movement
- cut timing
- transition method
- caption hierarchy
- overlay/card layout
- B-roll or screenshot job
- music, SFX, ducking, silence, and sound bridges
- pacing density
- safe-area behavior
- final report or summary layout

Do not drift into account positioning, script rewriting, audience psychology, or generic content advice unless the user asks. Mention content only when it explains an editing decision.

## Two-Line Analysis Model

Every full 拉片 must separate two lines:

1. 内容线: topic, opening, section structure, line progression, punch line every 5 seconds when relevant, information density, turning points.
2. 技术线: shot, layout, font, subtitle, graphic motion, edit rhythm, transition, sound, toolchain inference, reproduction difficulty.

The user specifically wants this skill to specialize in 技术线. Still inspect 内容线 enough to explain why the technical action appears at that point.

Do not only analyze copywriting. Do not only analyze pretty frames. The useful asset is the relationship between content pressure and technical execution.

## Input Inventory

Before analysis, identify what is actually available:

- source video
- extracted frames or contact sheet
- audio or transcript
- subtitles burned into the video
- platform UI screenshots
- target reproduction tool: Jianying/CapCut, Remotion, or both
- intended output: report only, SOP only, or report plus SOP

If the source video is unavailable and only screenshots exist, analyze only visual layout and say that cut timing, sound, and rhythm cannot be confirmed.

## Six-Step Workflow

### Step 1: Define Dimensions

Before extracting or watching frames, define what will be inspected.

Default dimensions:

- lines / transcript
- topic
- opening
- section structure
- punch line every 5 seconds when relevant
- screen layout
- font and caption behavior
- shot and camera setup
- graphic motion
- edit rhythm
- toolchain
- music and SFX
- transition
- reproduction difficulty
- estimated material and production cost

If the user says "专攻拉技术", prioritize shot, layout, font, motion, rhythm, transition, sound, and toolchain.

### Step 2: Extract Material

Use frame extraction when video is available.

Default strategy:

- coarse extraction: every 1 second or every few seconds to understand the whole structure
- fine extraction: around unclear transitions, animation, layout changes, and dense visual moments
- very fine extraction: around complex motion or transitions, down to about 0.1 seconds per frame when needed and feasible

Do not claim a technical transition was understood from transcript alone.

### Step 3: Classify Video Type

Classify before analysis, because different video types have different technical logic.

Common types:

- screen recording plus face tutorial
- pure talking-head
- narrative short
- cooking / how-to
- vlog / daily record
- product demo
- film / short-drama segment
- commercial / ad
- mixed AI visual plus real-person speech

If the type is wrong, the analysis dimensions will drift.

### Step 4: Inspect Key Frames

Inspect coarse frames first, then fine frames only in hard intervals.

Look for:

- why the frame changes
- when motion appears
- how captions cooperate with speech
- where editing creates rhythm
- where the punch line lands
- where the toolchain leaves visible traces
- where the layout reserves or fails to reserve space for subtitles

### Step 5: Generate Timecoded Analysis Table

This table is the core asset.

Minimum columns:

```text
时间段 | 台词/内容 | 画面说明 | 镜头/构图 | 字幕/字体 | 图形/动效 | 节奏变化 | 声音/音效 | 代表帧 | 关键作用
```

For a 技术线-focused report, also include:

```text
剪辑动作 | 工具链推断 | 复刻难度 | 可复现做法
```

No timecoded table means the 拉片 did not finish.

### Step 6: Generate Report and SOP

The final output must leave two assets:

1. 拉片报告: how the reference video was built.
2. 复现 SOP: how to build a similar video step by step.

The SOP must be an action sequence, not abstract advice.

## Analysis Passes

### Pass 1: Timeline Segmentation

Split the video into sections by visible or audible changes:

- hook/opening
- setup
- evidence
- demonstration
- contrast
- rhythm lift
- summary/report
- CTA/end beat

For each section, record:

- start time
- end time
- section job
- dominant visual state
- dominant audio state
- pacing feeling

### Pass 2: Shot and Layout Table

Create a table with these columns:

```text
时间段 | 画面/镜头 | 剪辑动作 | 字幕/包装 | 声音/音乐 | 技术目的 | 可复现做法
```

Rules:

- Use concrete time ranges when video is available.
- If exact timecode is uncertain, mark `约`.
- Do not invent transitions that were not visible.
- Separate observation from inference.

### Pass 3: Technique Extraction

Extract reusable technique patterns in this shape:

```text
技术名:
观察证据:
解决的问题:
复现条件:
操作步骤:
容易翻车:
适合迁移到:
不适合:
```

Examples of useful technique names:

- 开头 2 秒信息压缩
- 口播判断句落点停顿
- 证据截图插入节奏
- 字幕让位给报告卡
- B-roll 遮切口
- 音乐弱起进场
- 关键词卡片跟随气口
- 总结页分屏避让字幕

### Pass 4: Reproduction SOP

Write the SOP as actions, not theory.

For Jianying/CapCut:

1. Import source material and reference video.
2. Place reference above or beside the working timeline if possible.
3. Mark section boundaries.
4. Build the oral or voiceover spine.
5. Add B-roll, screenshots, cards, or overlays by section job.
6. Match rhythm by time range, not by blind beat counting.
7. Place subtitles after the main layout is fixed.
8. Reserve a subtitle lane before building report/summary pages.
9. Export a low-resolution check version.
10. Inspect collision, rhythm, audio, and safe area.

For Remotion:

1. Encode the time ranges as data.
2. Create reusable layout components for face, B-roll, evidence card, report card, and CTA.
3. Keep subtitle data separate from report-card data.
4. Define safe-area constants.
5. Reserve `subtitleLane` and `reportLane` so they cannot occupy the same region.
6. Render stills at section starts, caption-heavy frames, and final report frames.
7. Fix overlap before final render.

## Subtitle and Report Collision Rule

The known failure: the final report or summary screen is visually correct in isolation, but subtitles cover the report text or evidence area after the video is assembled.

Treat this as a hard failure.

When the output includes captions plus a report page, summary card, diagnosis screen, evidence screenshot, or CTA:

- reserve a subtitle lane before placing report content
- never place report body text in the same lane as burned-in subtitles
- sample the most subtitle-dense report frame
- check mouth, product/proof, report title, report body, CTA, and platform bottom UI
- if collision appears, fix layout first; do not solve it by saying the user can pause

Default 9:16 safety:

- top 120 px is risky
- bottom 220 px is risky
- left/right 40 px is risky
- if platform UI is visible, increase the bottom reserved area

Preferred fixes:

- move report text to upper or middle safe area
- shorten subtitle lines
- split long report into two screens
- use side-by-side evidence plus bullet layout only when subtitles stay below both
- hide subtitles on silent report-only pages if they are not needed
- add a semi-opaque report panel only when it improves readability and does not create a card-on-card mess

## Output Template

Use this structure for a full technical 拉片:

```text
# 技术拉片报告

## 结论

## 素材与证据范围

## 时间线结构

| 时间段 | 段落作用 | 画面状态 | 声音状态 | 节奏判断 |

## 技术动作表

| 时间段 | 画面/镜头 | 剪辑动作 | 字幕/包装 | 声音/音乐 | 技术目的 | 可复现做法 |

## 内容线拆解

## 技术线拆解

## 可复用技术

## 工具链推断

## 可复刻度评分

## 需要准备的素材

## 复刻成本估算

## 复现 SOP

## 字幕/报告页遮挡检查

## 不要机械照抄的部分

## 仍需人工确认
```

The report must be useful even if the reader has not watched the original video. Use precise observations, but do not fabricate missing details.

## Reproduction Difficulty Score

Score reproduction difficulty from 1 to 5:

- 1: can reproduce with captions, simple cuts, and existing footage
- 2: needs basic B-roll, cards, or screen recording
- 3: needs planned shooting, precise layout, and music/SFX timing
- 4: needs custom motion graphics, Remotion, complex compositing, or detailed style matching
- 5: needs high-end shooting, 3D, heavy VFX, advanced sound design, or unavailable assets

Score the reason, not just the number.

## Cost and Token Caveat

When estimating token or money cost, present it as a rough operational estimate. Cost changes with model, pricing plan, video length, frame extraction density, transcript length, and number of fine-inspection intervals.

Never present one reference cost as universal.
