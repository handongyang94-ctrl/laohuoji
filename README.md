# Koubo Video Editor

A Codex skill and Remotion starter kit for Chinese talking-head short-video editing.

This project turns short-video editing into a repeatable workflow instead of a pile of loose taste judgments. It covers oral-cut cleanup, repeated-take selection, B-roll decisions, music and sound checks, subtitle/layout verification, transparent motion overlays, real-person covers, and technical shot analysis.

## What It Does

- Stage-1 oral cut: select the best repeated takes, trim breath and dead air, preserve meaning units.
- Finished-video workflow: meaning map, B-roll plan, music decision, captions, layout, render checks.
- Transparent overlay workflow: alpha-channel motion graphics for Jianying/CapCut or other editors.
- Cover workflow: 3:4 vertical cover based on a real extracted frame.
- Technical shot analysis: turn a reference video into a timecoded analysis report and reproduction SOP.

## Repository Layout

```text
skills/koubo-video-editor/      Codex / Claude skill
remotion-template/              Remotion template for overlays and covers
docs/                           Usage guide and quality checklist
install-to-codex.ps1            Windows installer for local Codex skill use
```

## Install The Skill

### Option 1: PowerShell

From the repository root:

```powershell
.\install-to-codex.ps1
```

Restart Codex after installation.

### Option 2: Manual Copy

Copy this folder:

```text
skills/koubo-video-editor
```

to:

```text
C:\Users\<your-user-name>\.codex\skills\koubo-video-editor
```

Restart Codex after copying.

## Example Prompts

Stage-1 oral cut:

```text
Use koubo-video-editor to do a stage-1 oral cut. Source files are in xxx, script is in xxx. Focus on repeated takes, breath points, dead air, false starts, and logic order.
```

Finished talking-head video:

```text
Use koubo-video-editor to make a finished short video. Source video is in xxx, script is in xxx. Include B-roll, music, captions, knowledge cards, render checks, and final inspection.
```

Transparent overlay:

```text
Use koubo-video-editor to create a transparent motion overlay for this rough cut. 1080p, 60fps, alpha channel, no base video composited.
```

Technical shot analysis:

```text
Use koubo-video-editor to analyze this reference video technically. Focus on editing technique, not film criticism. Output a shot-analysis report and a reproduction SOP.
```

## Remotion Template

The `remotion-template/` folder contains a minimal starting point for:

- transparent overlays
- caption-safe knowledge cards
- vertical cover stills

Run inside `remotion-template/`:

```bash
npm install
npm run studio
npm run render:overlay
npm run render:cover
```

Place local assets in:

```text
remotion-template/public/assets/
```

See `remotion-template/public/assets/README.md` for expected sample asset names.

## Quality Standard

This project intentionally refuses a common failure mode: calling a video "finished" just because speech is cut and captions exist.

A finished video must pass:

- meaning lock
- cut-point lock
- rhythm check
- B-roll / visual logic
- music or silence decision
- caption and layout safety
- render stability
- final visual pass

For technical shot analysis, a real deliverable must include a timecoded analysis table and a reproduction SOP. A summary without a timeline is not considered a real analysis.

## Privacy Boundary

This repository is a neutral open-source package. It does not include private source videos, historical client projects, account data, transcripts from paid courses, or local workspace paths.

## License

MIT License.
