# Quality Rubric

This rubric is a gate system. A finished video must pass every required gate. Do not downgrade missing gates into "style choices".

## Verdict Labels

- `ready`: all required gates pass.
- `usable but needs human style review`: objective gates pass; only subjective taste remains.
- `stage output only`: useful intermediate output, not a finished video.
- `not locked`: meaning, cut points, B-roll, music/sound, layout, or render remains incomplete.

## Gate 1: Meaning Lock

Pass requires:

- Every required script meaning unit exists.
- Spoken variation still matches the intended meaning.
- No duplicate failed take remains.
- No required reason, contrast, consequence, proof, or action was cut.
- Timeline order follows the script unless restructuring was approved.

Evidence:

- meaning map
- ASR transcript or manual transcript
- edit decision list

Failure examples:

- a reason line is missing
- only the punchline remains
- two takes of the same line survive
- raw clip order overrides script logic

## Gate 2: Cut-Point Lock

Pass requires:

- First useful syllables are intact.
- Sentence tails land naturally.
- Dead setup waits are removed.
- Raw prompt residue, countdown, "again", false start, mouth prep, and dead tails are removed.
- Pauses are classified as remove, tighten, or keep.
- Heavy judgments and reveals have enough landing beat.
- Speed changes, if any, were followed by another cut-point check.

Evidence:

- cut-point report
- ASR after rough cut
- preview around risky joins

Failure examples:

- the sentence is semantically correct but every join still has raw shooting breath
- a syllable is clipped
- an automatic silence cut removes a judgment pause

## Gate 3: Rhythm

Pass requires:

- First 2 seconds contain a clear hook signal.
- First 5 seconds confirm value, conflict, problem, result, or path.
- No section stalls without new information.
- Fast sections remain readable.
- Slow sections are intentional and emotionally useful.
- Segment lengths vary for a reason; the rhythm is not mechanically even.

Evidence:

- timeline plan
- duration by segment
- preview notes

## Gate 4: Visual and B-Roll Logic

Pass requires:

- A B-roll scan was performed for finished-video requests.
- Every B-roll/generative/text visual has a stated job.
- If no B-roll is used, a `face_only_approved` reason exists.
- Visual focus does not jump randomly.
- Shot sizes vary with purpose.
- Movement direction either matches or intentionally contrasts.
- Brightness/color temperature jumps are intentional.
- Source footage is used when real proof matters.
- Generated images are not used as fake proof when source footage exists.

Evidence:

- contact sheet or source inventory
- B-roll decision table
- timeline segment visual jobs
- rendered frame inspection

Failure examples:

- final video has only captions and face because B-roll was forgotten
- random related footage is inserted but proves nothing
- text or overlay hides the actual product/proof

## Gate 5: Music and Sound

Pass requires:

- A music/sound decision exists: music bed, music-led, section music, or intentional silence.
- Speech remains intelligible.
- Music supports pace and emotion.
- Music does not fight key judgments, warnings, numbers, or CTA.
- Music is ducked under speech where needed.
- J-cuts/L-cuts/SFX/ambience are used only when they solve continuity, proof, rhythm, or impact.

Evidence:

- music/sound decision note
- final audio check
- ASR or listening pass after music is added
- media file has expected audio stream

Failure examples:

- no music was added because the agent forgot
- music covers the first useful word
- SFX are pasted onto every caption without meaning

## Gate 6: Captions and Layout

Pass requires:

- Captions match spoken meaning.
- Captions are mobile-readable.
- Key words are emphasized selectively.
- Captions do not cover mouth, product, proof, price, key action, or CTA.
- Captions do not cover report pages, summary cards, diagnosis text, evidence screenshots, technical-analysis conclusions, or SOP steps.
- Generated image or text-card content is not hidden by platform UI safe areas.
- Text does not overflow, clip, wrap awkwardly, or escape its box.
- Repeated elements align to a declared grid, baseline, or anchor.
- Product images, screenshots, generated images, and overlays fit their intended frame.
- No element accidentally sits outside the 9:16 composition.

Evidence:

- representative rendered stills
- final-video frame extraction
- visual inspection notes

Failure examples:

- text is technically rendered but outside the safe area
- label/caption overlaps the mouth
- B-roll tag and subtitle collide
- final report text is readable alone but becomes covered by subtitles after assembly

## Gate 9: Technical Shot Analysis

Required when the user asks for 拉片, 技术拉片, 剪辑复现, or 复现 SOP.

Pass requires:

- analysis dimensions were defined before the report
- video type was classified
- coarse frame inspection was performed when video was available
- key change intervals were inspected more closely when needed
- content line and technical line are separated
- a timecoded analysis table exists
- report and SOP are both produced unless the user asked for only one
- observation and inference are clearly separated
- toolchain inference is labeled as inference, not fact, unless there is direct evidence
- reproduction difficulty and material requirements are stated
- subtitle/report-page collision check is included when the output contains report, summary, or SOP screens

Failure examples:

- output is only a summary of what the video says
- output praises the style but gives no timecoded table
- output gives broad advice but no reproduction steps
- toolchain is asserted without evidence
- subtitles cover the final report or SOP page

## Gate 7: Asset and Render Stability

Pass requires:

- Assets resolve locally.
- Heavy raw B-roll is pre-trimmed or transcoded before render if needed.
- A representative still renders before final render.
- Dense transition or B-roll areas have been previewed when feasible.
- Final render completes.
- Final media parameters match the target.

Evidence:

- asset list
- render command/output
- ffprobe or media inspection
- final output path

Failure examples:

- Remotion fails because multiple large raw camera clips are used directly
- final file path exists but has wrong aspect ratio or no audio stream

## Gate 8: Final Visual Pass

Sample at least:

- first frame
- 1s
- 2s
- 5s
- every distinct layout
- every B-roll layout
- first generated-image frame, if any
- densest overlay frame
- ending/CTA

Pass requires:

- no incoherent overlap
- no out-of-frame element
- no hidden face/product/proof/CTA
- transitions do not create ugly temporary double exposure unless intentional
- final response reports what frames were checked

## Finished Video Rule

If Gate 1 and Gate 2 pass but Gates 4 and 5 are missing, the output is a `口播包装版`, not a finished video.

If any required gate has weak or missing evidence, use `not locked` or `stage output only`, then keep working.
