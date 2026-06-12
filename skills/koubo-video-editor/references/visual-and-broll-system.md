# Visual and B-Roll System

## Hard Gate

For any request that asks for `成片`, `完整流程`, `最终视频`, `发布版`, or equivalent, a B-roll decision pass is mandatory.

The pass must produce one of:

- `source_broll_used`: source footage B-roll is inserted.
- `generated_broll_used`: generated images/video-like stills are inserted because source footage is missing.
- `text_visual_used`: text cards/overlays are the best visual support.
- `face_only_approved`: no B-roll is used because the face is deliberately the strongest proof.

If the output is face-only because the agent forgot to scan B-roll, the output is not a finished video.

## Decision Rule

Every visual must answer: what job does this do for the viewer?

Valid jobs:

- show the thing being discussed
- prove a claim
- compress an abstract idea
- create contrast
- bridge a jump
- reset attention
- establish place or product
- intensify emotion
- clarify process
- hide a necessary口播 cut

Invalid jobs:

- "make it richer"
- "avoid being boring"
- "AI image because available"
- "random related footage"

## Source Footage vs Generated Image

Use source footage when:

- trust, proof, real place, real product, real person, or real process matters
- the user gave usable clips
- the viewer needs to inspect something concrete

Use generated images when:

- no source shot exists
- the line is conceptual or metaphorical
- the asset is a title/cover/thumbnail
- a consistent product/ad mood scene is needed
- a transition bridge is needed and realism is not the proof source

Use text-only when:

- the key value is a number, quote, contrast, list, or punchline
- a visual would distract from the line
- the point needs reading emphasis

Use no B-roll when:

- the speaker's face carries trust
- the line is an important judgment
- the viewer needs emotional contact

No-B-roll must be explicit. Write the reason in the edit plan.

## Mandatory B-Roll Scan

Before final implementation:

1. Inventory available footage with contact sheets or sampled stills.
2. Mark real proof shots: product, environment, process, sample, result, screenshot, customer scene, tool, hands, movement.
3. Map concrete script phrases to proof shots.
4. Map abstract phrases to possible generated or text visuals.
5. Mark face-only sections where direct trust matters more than cutaways.
6. Decide what must appear in the timeline.

For talking-head videos, scan especially for:

- product names
- price, number, cost, contrast
- "effect", "usage", "scene", "problem", "result", "case"
- industry claims
- next-episode tease

## B-Roll Placement Rules

- Keep face on the strongest judgment, accusation, warning, or personal stance.
- Insert B-roll when the line names a visible thing or proof source.
- Use B-roll to reset attention after 8-15 seconds of uninterrupted face, unless the speaker performance is unusually strong.
- Avoid covering a key emotional facial beat with B-roll.
- Do not place B-roll so late that the proof arrives after the claim has emotionally passed.
- If B-roll has its own audio, mute it unless the natural sound has a deliberate job.
- Pre-trim heavy B-roll clips before Remotion render.

## B-Roll Failure Modes

- Random related footage: looks richer but does not prove anything.
- Late proof: visual arrives after the viewer has already moved on.
- Over-B-roll: face disappears during trust-heavy judgment.
- Fake proof: generated image is used where real source footage should carry credibility.
- Technical overload: too many large raw clips are fed into Remotion without pre-trimming.

## Image Prompt Template

Use this for generated assets:

```text
Use case: ads-marketing / educational / product-mockup / photorealistic-natural
Asset type: Remotion short-video B-roll, 9:16
Timeline job: <what this image must do>
Primary request: <scene or subject>
Subject: <main object/person/action>
Scene/backdrop: <specific environment>
Composition: mobile-first 9:16, safe center subject, room for captions if needed
Style: <realistic/editorial/premium/simple/etc.>
Lighting/color: <match video mood>
Text policy: no text unless exact text is supplied
Avoid: watermark, logo hallucination, extra fingers, unreadable signage, random brand names
```

For product or entity-store videos, avoid fake luxury atmospheres that make the video less credible. Real, concrete, slightly imperfect visual proof often beats glossy fantasy.

## Shot Pattern Recipes

### Teaching口播

Face -> keyword card -> example/evidence -> face judgment -> process visual -> face CTA.

### Product Selling

Problem scene -> product whole -> use action -> detail -> result -> offer/CTA.

### Case Breakdown

Before state -> mistake/evidence -> turning judgment -> correction -> after/result.

### Fast Ad

Impact hook -> detail flash -> benefit text -> use/action -> contrast -> final offer.

### Story/Micro-Film

Character -> goal -> obstacle -> reaction -> choice -> consequence -> emotional landing.

## Visual Continuity Tags

When selecting or generating visuals, tag:

- color temperature
- brightness level
- movement direction
- subject position
- shot size
- focus region
- emotional tone

Adjacent visuals should either match one tag strongly or contrast one tag intentionally.
