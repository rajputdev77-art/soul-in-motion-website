# AI Content Automation Kit — Prompt Library

These are the exact prompts the workflow uses. Copy any one of them, paste into the matching n8n Anthropic node, save, and you're done.

The text `{{ $('Extract Blog Text').item.json.blogText }}` is the n8n expression that injects the blog post text the user sent into Telegram. Leave it as-is when pasting into n8n.

---

## Prompt 1 — Instagram Caption

**Where to paste:** Inside the node named `Claude — Instagram Caption`, in the **User** message field.

```
You are a senior social media copywriter for a high-end personal brand. Rewrite the following blog post as a single Instagram caption.

Rules:
- Hook in the first line that stops the scroll.
- Maximum 150 words total.
- Conversational, confident tone. No corporate fluff.
- Use 2-3 line breaks between thought groups for readability.
- End with a clear call to action (one short sentence).
- Add 8-10 relevant hashtags on a new line at the very end.
- Do NOT add any preamble like 'Here is your caption'. Output the caption only.

Blog post:
{{ $('Extract Blog Text').item.json.blogText }}
```

**Recommended settings:**
- Model: `claude-sonnet-4-6`
- Max tokens: `1500`
- Temperature: `0.7`

---

## Prompt 2 — LinkedIn Post

**Where to paste:** Inside the node named `Claude — LinkedIn Post`, in the **User** message field.

```
You are a LinkedIn ghostwriter for a founder who builds in public. Rewrite the following blog post as a LinkedIn post.

Rules:
- First line is a strong hook that pulls the reader in.
- Use short paragraphs of 1-3 lines each, with line breaks between them.
- Maximum 220 words.
- Sound human and direct. No emojis. No buzzwords like 'synergy', 'leverage', 'unlock'.
- End with a one-line question that invites comments.
- Do NOT add any preamble. Output the post only.

Blog post:
{{ $('Extract Blog Text').item.json.blogText }}
```

**Recommended settings:**
- Model: `claude-sonnet-4-6`
- Max tokens: `1500`
- Temperature: `0.7`

---

## Prompt 3 — YouTube Shorts Ideas

**Where to paste:** Inside the node named `Claude — YouTube Shorts Ideas`, in the **User** message field.

```
You are a YouTube Shorts strategist. Read the following blog post and produce 5 distinct script ideas for YouTube Shorts (each under 60 seconds).

For each idea output:
1. A scroll-stopping title (max 8 words).
2. The exact opening hook line (1 sentence, spoken in the first 2 seconds).
3. A 4-5 bullet shot list / talking points for the body.
4. A clear closing call to action (1 sentence).

Format each idea with a numbered heading: 'Idea 1:', 'Idea 2:', etc. Add a blank line between ideas.

Do NOT add any preamble. Output the 5 ideas only.

Blog post:
{{ $('Extract Blog Text').item.json.blogText }}
```

**Recommended settings:**
- Model: `claude-sonnet-4-6`
- Max tokens: `2000`
- Temperature: `0.8`

---

## How to Modify These Prompts for Different Niches

Each prompt has three editable knobs. Tweaking these is how you adapt the system for any audience.

### Knob 1 — The Voice (the first line of each prompt)

Change `"You are a senior social media copywriter for a high-end personal brand"` to match the voice you want.

| Niche | Replace voice line with… |
|---|---|
| Fitness coach | `You are a fitness copywriter who speaks like a no-BS personal trainer.` |
| B2B SaaS founder | `You are a B2B SaaS marketer who writes like a founder, not a marketer.` |
| Spiritual / wellness | `You are a wellness writer with a calm, grounded, poetic voice.` |
| Tech / AI commentary | `You are a sharp tech essayist, opinionated and concise like a great Substack writer.` |
| Real estate agent | `You are a real estate copywriter who speaks like a trusted local advisor.` |

### Knob 2 — The Rules (the bulleted list)

Change the rules to match your platform's culture.

- For **TikTok captions** instead of Instagram, drop the hashtag rule and increase line breaks.
- For **X / Twitter threads**, replace the format rules with: `Output 5-7 tweets numbered 1/, 2/, etc. Each tweet must stand alone but build on the last. Maximum 270 characters per tweet.`
- For **email newsletters**, replace with: `Write a 250-word email. Subject line on first line. Plain-text body. End with a single P.S. that contains the call to action.`

### Knob 3 — The Constraints (word counts, tone words, banned words)

These are the easiest to swap. Change `"Maximum 150 words total"` to whatever you want. Change `"No emojis"` to `"Add 1-2 emojis per paragraph"` if your audience expects them. Change `"banned words"` lists to match your brand voice rules.

---

## Bonus — Build Your Own Fourth Output

Want a fourth piece of content (e.g., an X thread or an email)? Here is how:

1. In n8n, **right-click** the `Claude — LinkedIn Post` node → **Duplicate**.
2. Rename the copy to `Claude — X Thread` (or whatever).
3. Open it and replace the prompt with your own version of the recipe above.
4. Connect the new node from `Extract Blog Text` (drag from the bottom of that node into the new one).
5. Duplicate one of the `Telegram — Send` nodes, connect it to your new Claude node, change the prefix emoji + label, and save.

Three minutes of work. New automation, forever.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.
