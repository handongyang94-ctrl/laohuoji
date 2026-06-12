# Visual Render Verification

## Purpose

Prevent the failure pattern where the edit logic is acceptable but the final Remotion picture is visibly broken: elements outside the frame, uneven alignment, captions covering faces, images cropped badly, text overflowing boxes, generated assets not fitting, or layout looking different from the intended mobile composition.

This is mandatory for implementation work. A video is not final just because Remotion rendered successfully.

## Required Checks

### 1. Still-Frame Sampling

Render or screenshot representative frames before final delivery:

- frame 0 or the first visible frame
- around 1s
- around 2s
- around 5s
- every major layout/template type
- first caption-heavy frame
- first generated-image/B-roll frame
- densest overlay frame
- one frame near the ending/CTA
- every report, diagnosis, summary, or SOP screen if the video includes an analysis/report section

If the timeline is long or highly dynamic, sample at least one frame per distinct visual pattern, not merely one frame per video.

### 2. Mobile Safe-Area Check

For 9:16 short video, treat these as default danger zones unless the user gives platform-specific rules:

- top 120 px: platform header/caption/status overlap risk
- bottom 220 px: description, buttons, progress, and interaction UI risk
- left/right 40 px: edge clipping and compression risk

Captions, CTA, product proof, key face area, numbers, and UI labels should stay in the safe area unless intentionally full-bleed.

### 3. Bounding and Overflow Check

Inspect every visible object class:

- captions
- title cards
- keyword labels
- lower thirds
- product images
- generated images
- stickers/icons
- arrows/callouts
- screenshots
- progress bars
- logos
- subtitles over B-roll
- report pages, diagnosis cards, SOP pages, and final summary screens

Reject the frame if:

- any text is cut off
- any element escapes its intended box
- line wrapping creates a one-character orphan unless deliberate
- generated image subject is cropped through a face, product, hand, or core object
- overlays touch the edge without deliberate full-bleed design
- captions cover the speaker's mouth, product proof, price, or key action
- subtitles cover report text, evidence screenshots, diagnosis conclusions, SOP steps, or CTA text

### 4. Alignment and Spacing Check

Use consistent anchors:

- captions: same baseline zone unless intentionally moved
- keyword labels: same left/center anchor across a section
- product cards: same margins and dimensions
- multi-item layouts: equal gaps and clear alignment
- arrows/callouts: point to the actual target, not near it

Reject the frame if a row/column/card stack looks hand-placed, uneven, or accidentally shifted. Do not trust approximate visual placement from code alone; inspect a rendered frame.

### 5. Asset Fit Check

For each image/video asset:

- choose `cover` only when cropping is acceptable
- choose `contain` when the full product/screenshot must be visible
- never crop important UI text in screenshots
- never crop product edges if the product is the proof
- if the face is the emotional anchor, keep eyes and mouth visible

Generated images require extra inspection because subject placement may vary. If a generated image is wrong but still pretty, it is still wrong.

### 6. Caption Readability Check

Check:

- enough contrast against footage
- no busy background behind small text
- no overly long line
- no tiny text inside compact cards
- no negative letter spacing
- mobile-readable size
- highlight emphasis is selective, not every word

If readability depends on pausing the video, it fails.

### 7. Motion and Transition Check

Preview moving sections where layout changes:

- animated text entrance/exit
- image pan/zoom
- sticker/callout movement
- transition between templates
- speed ramp
- B-roll overlay appearing over口播

Reject if movement causes text to leave the safe area, temporarily overlap the face/product, or jitter between frames.

## Practical Remotion Procedure

Use the Remotion rules for stills and rendering. Typical checks:

```bash
npx remotion still <composition-id> --frame=0 --scale=0.5
npx remotion still <composition-id> --frame=30 --scale=0.5
npx remotion still <composition-id> --frame=60 --scale=0.5
npx remotion still <composition-id> --frame=150 --scale=0.5
```

For unknown duration or data-driven timelines, inspect the timeline data first and choose frames at segment starts, midpoints, and dense overlay moments.

If Browser or Playwright is available for a local preview, use it to inspect screenshots at desktop and mobile-sized viewports. For canvas/video work, verify that the screenshot is nonblank and that the primary subject is visible.

## Final Verification Report

Before final response, include a concise verification note:

- frames checked: `<list>`
- layout result: pass/fixed/not checked
- risky moments: `<list or none>`
- render result: pass/fail/blocker
- remaining manual review need: yes/no

If visual verification was not possible, say so plainly. Do not imply the final video was visually checked when only code or render logs were checked.
