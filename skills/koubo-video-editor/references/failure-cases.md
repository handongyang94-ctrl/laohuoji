# Failure Cases

Use these as hard reminders when applying the skill.

## Case 1: Captioned Talking-Head Was Misreported As Finished

Observed failure:

- The agent produced a talking-head rough cut with captions and title overlays.
- It rendered successfully.
- The agent called it a finished video.
- The user rejected it because there was no B-roll and no music.

Correct diagnosis:

- Meaning and caption packaging were partially complete.
- B-roll gate was missing.
- Music/sound gate was missing.
- Finished-video claim was false.

Correct behavior:

1. Say the output is only a packaged oral version.
2. Run a B-roll scan over the source folder.
3. Select source B-roll when proof footage exists.
4. Generate or create visual assets only if source footage is insufficient.
5. Add music, ambience, or intentional silence decision.
6. Re-render.
7. Extract final-video frames and inspect B-roll/caption/label layout.
8. Only then call it a finished video.

Skill rule:

If the user asks for 成片, the final answer must mention B-roll and music/sound decisions. If it cannot, do not say 成片.

## Case 2: Remotion Failed On Heavy Raw B-Roll

Observed failure:

- Several full camera B-roll clips were copied into Remotion.
- Render failed around a B-roll segment with decode/fetch failure.

Correct diagnosis:

- Editorial decision was right: B-roll was needed.
- Engineering execution was wrong: raw B-roll was too heavy for stable render.

Correct behavior:

1. Pre-trim B-roll to only the used seconds.
2. Mute or remove unused B-roll audio.
3. Transcode to render-friendly H.264.
4. Repoint Remotion to short prepared assets.
5. Rerender.

Skill rule:

Do not remove needed B-roll just to make render pass. Prepare assets properly.

## Case 3: Silence Detection Alone Leaves Breath Problems

Observed failure:

- A rough oral cut used silence/cut-point detection.
- The user still heard breath/gasps at joins.

Correct diagnosis:

- Silence detection found broad dead air, but did not fully solve breath quality.
- Good cut-point logic requires ASR word timing, waveform, semantic boundary, and ear-check around joins.

Correct behavior:

1. Re-check every join around 200-400 ms before and after the cut.
2. Preserve first syllables and final tone.
3. Remove setup breath, mouth prep, and dead tails.
4. Keep only intentional judgment pauses.
5. Re-run ASR to confirm no key word was clipped.

Skill rule:

Stage-1 lock is not achieved if joins still sound like raw shooting material.

