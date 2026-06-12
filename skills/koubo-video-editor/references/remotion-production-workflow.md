# Remotion Production Workflow

This workflow turns course-derived editing judgment into a Remotion production path.

## Non-Negotiable Order

Do not start from Remotion code. Use this order:

1. Material digestion
2. Meaning map
3. A-roll / oral cut lock
4. Visual and B-roll plan
5. Music and sound plan
6. Timeline data
7. Asset preparation
8. Remotion implementation
9. Still-frame verification
10. Final render
11. Final-video verification

Skipping steps 4 or 5 means the output is not a finished video.

## Project Shape

Prefer a data-driven Remotion project:

- `src/data/meaningUnits.ts` or `.json`: script units and intent.
- `src/data/timeline.ts` or `.json`: segment timing and asset references.
- `src/data/captions.ts`: captions and highlight terms.
- `src/data/assets.ts`: source, B-roll, generated image, music, SFX inventory.
- `src/compositions/ShortVideo.tsx`: composition orchestration.
- `src/components/`: reusable visual pieces.
- `public/assets/source/`: A-roll and source clips.
- `public/assets/broll/`: pre-trimmed B-roll clips.
- `public/assets/generated/`: generated images.
- `public/assets/audio/`: music, SFX, voiceover.
- `renders/`: output videos and verification frames.

Keep editorial timing data separate from styling code.

## Material Digestion

For source folders:

- list videos/audio/images
- identify likely A-roll and B-roll
- generate contact sheets or sampled stills for large video sets
- run ASR when speech selection matters
- group repeated takes by meaning unit
- mark unusable material

Record:

- useful A-roll candidates
- source B-roll candidates
- generated-asset needs
- missing assets
- music/audio availability

## Meaning Map

Create meaning units before the timeline:

```ts
type MeaningUnit = {
  id: string;
  text: string;
  intent: "hook" | "setup" | "judgment" | "evidence" | "contrast" | "consequence" | "action" | "cta" | "transition" | "emotion";
  mustKeep: boolean;
  rhythmWeight: "light" | "normal" | "heavy";
  visualJob: "face" | "source-broll" | "generated" | "text-card" | "proof" | "no-cutaway";
  audioRole: "speech-lead" | "music-lead" | "music-bed" | "silence" | "sfx-hit";
};
```

The script's meaning order is the edit order unless the user approves a structural change.

## Timeline Data

Use explicit segment records:

```ts
type TimelineSegment = {
  id: string;
  meaningUnitId: string;
  startFrame: number;
  durationFrames: number;
  source: {
    type: "video" | "audio" | "image" | "text" | "generated";
    path?: string;
  };
  trim?: {
    fromSec: number;
    toSec: number;
  };
  caption?: string;
  visualJob?: string;
  transition?: "cut" | "match-cut" | "j-cut" | "l-cut" | "whip" | "mask" | "fade" | "none";
  emphasis?: "none" | "keyword" | "number" | "contrast" | "warning";
  audioCue?: "duck" | "sfx" | "music-entry" | "music-exit" | "silence";
  risk?: "low" | "medium" | "high";
};
```

## Frame Math

- Default fps: 30.
- Convert seconds to frames with `Math.round(sec * fps)`.
- Avoid accumulated drift by deriving every segment start from plan data.
- For caption timing, prefer ASR/manual timestamps over equal distribution.

## Captions

For口播 captions:

- Caption by meaning phrase, not every tiny word unless requested.
- Highlight numbers, contrast words, action verbs, warnings, and conclusion words.
- Keep one caption block readable on mobile.
- Never let captions cover the mouth, product proof, or key object.
- If exact transcript and spoken version differ, caption the spoken meaning.

## B-Roll and Generated Images

Use source video first for proof and realism. Use generated images when the visual job cannot be fulfilled by source footage.

Before Remotion:

- pre-trim B-roll clips to the used duration
- remove B-roll audio unless useful
- transcode heavy camera files to render-friendly H.264
- normalize aspect ratio or define object-fit/object-position

Generated image timing defaults:

- quick metaphor flash: 0.6-1.2s
- explanatory visual: 1.2-2.5s
- title/cover scene: 1.5-3.0s
- product beauty static: add subtle scale/pan in Remotion

Do not animate every generated image the same way. Match motion to script energy.

## Music and Sound

Speech is the anchor for talking-head and teaching videos.

- Decide music/silence before final render.
- Normalize or at least check speech loudness before judging music balance.
- Duck music during important speech.
- Add ambience under generated/static visuals if they feel dead.
- SFX should mark meaningful impacts, not decorate every caption.
- If no music is used, record an intentional-silence reason.

## Transitions

Default to hard cuts. Add transitions only when they solve a connection problem:

- match cut: similar action, shape, color, focus
- J-cut/L-cut: sound bridge or speech continuity
- whip/motion blur: fast ad, movement continuity
- mask/occlusion: source material naturally contains a wipe object
- fade: time passage, emotional release, chapter separation

Do not hide weak shot choice behind transitions.

## Remotion Implementation Steps

1. Scaffold or open the Remotion project.
2. Copy/prep source, B-roll, generated assets, and audio into local folders.
3. Create meaning and timeline data.
4. Build composition from timeline data.
5. Add captions and safe-area constraints.
6. Add B-roll/generative/text visuals.
7. Add music/SFX/ambient and ducking.
8. Render stills for layout check.
9. Fix layout or asset problems.
10. Render full video.
11. Extract frames from final video.
12. Run final quality rubric.

## Render Verification

At minimum:

- render one frame near 1s
- render one frame near every B-roll/generative asset
- render one frame near the densest caption/overlay
- render one ending frame
- if feasible, render a short moving preview around the densest transition
- render final video only after missing assets and obvious layout errors are resolved

If final render fails on heavy video assets, pre-trim/transcode B-roll and rerender. Do not simply remove B-roll to make the render pass unless the edit plan says B-roll is not needed.

## Output Files

For a completed implementation, leave:

- final `.mp4`
- rough-cut or locked A-roll `.mp4` if generated
- edit plan `.json` or `.ts`
- verification contact sheet
- ASR or audio check if available
- final report `.md`

