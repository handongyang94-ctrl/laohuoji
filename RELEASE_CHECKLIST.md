# Release Checklist

Run this before publishing the repository or creating a release.

## Privacy

- No private source videos.
- No client/account data.
- No paid-course transcripts.
- No local absolute workspace paths.
- No API keys, tokens, `.env` files, private keys, or certificates.
- No generated analysis reports from real private projects.

Suggested scan:

```powershell
rg -n "D:\\\\|C:\\\\Users\\\\|api[_-]?key|secret|password|token|\\.env|\\.pem|private" .
```

## Package

- `README.md` explains what the project does.
- `LICENSE` exists.
- `docs/USAGE.md` is readable.
- `docs/QUALITY_CHECKLIST.md` is readable.
- `skills/koubo-video-editor/SKILL.md` has correct trigger words.
- `references/technical-shot-analysis.md` exists.
- Remotion template starts with placeholder assets or clear instructions.

## Functional Smoke Test

- Install the skill locally with `install-to-codex.ps1`.
- Restart Codex.
- Trigger with: `Use koubo-video-editor to do technical shot analysis`.
- In `remotion-template/`, run `npm install`.
- Run `npm run studio`.
- Render one overlay still or video if local assets are available.
