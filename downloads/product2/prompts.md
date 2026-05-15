# Micro-SaaS API Blueprint — Prompt Bundle

Four production-ready prompts that turn the blueprint into actual code and copy. Paste any of these into Claude (claude.ai), ChatGPT, or your IDE's AI chat.

Replace the text in `[SQUARE_BRACKETS]` with your specifics before sending.

---

## Prompt 1 — Generate API Endpoint Ideas for Any Niche

**When to use:** You picked a niche but you're stuck on what specific endpoint to ship as v1.

**How to use:** Replace `[NICHE]` and `[BUYER_TYPE]`. Send to Claude. Pick the idea with the highest "shippable in 40 hours" score.

```
You are a product strategist who has launched 50+ profitable Micro-SaaS APIs.

Niche: [NICHE — e.g., "Indian fintech compliance"]
Buyer type: [BUYER_TYPE — e.g., "Backend engineers at Series A Indian fintechs"]

Give me 8 specific API endpoint ideas in this niche. For each idea, output:

1. Endpoint name (4 words or fewer).
2. The exact URL path and HTTP method (e.g., POST /v1/validate-pan).
3. Required input fields (JSON schema).
4. Returned output fields (JSON schema).
5. Why someone would pay for this (one sentence).
6. Realistic price point in USD per month.
7. Estimated time to ship a working v1, in hours, by a solo developer.
8. A "boring score" from 1 (very obvious / saturated) to 10 (boring and overlooked) — higher is better.

Sort the list by boring score, descending. Skip any idea that scores below 6.

Do NOT add any preamble. Output the table only.
```

---

## Prompt 2 — Write API Documentation Automatically

**When to use:** You have working code. You need polished documentation buyers will trust.

**How to use:** Paste your endpoint code (or OpenAPI spec) into the placeholder. Claude returns marketplace-ready docs.

```
You are a senior technical writer who specializes in API documentation that converts free users into paid customers.

Below is the source code (or OpenAPI spec) for my API endpoint. Generate complete, polished documentation for it.

The documentation must contain these sections, in order:

1. **One-sentence pitch** — what the API does, in plain English. No jargon.
2. **When to use this** — 3 bullet points describing real use cases.
3. **Authentication** — how to get an API key, where to put it in requests.
4. **Endpoint reference** — full HTTP method, URL, headers, request body schema, response body schema, with one runnable example for each.
5. **Code samples** — runnable cURL, Python (requests), and JavaScript (fetch) snippets. Use placeholder API keys.
6. **Error responses** — table of every error code, what it means, and how to fix it on the caller's side.
7. **Rate limits** — current limits and what happens when you hit them.
8. **Changelog placeholder** — a single empty section ready for me to fill in as I ship updates.

Tone: clear, confident, no marketing fluff. Assume the reader is a working backend engineer.

Output the documentation in clean markdown.

Source code / spec:
[PASTE YOUR CODE OR OPENAPI YAML HERE]
```

---

## Prompt 3 — Generate Stripe Metered Billing Setup Code

**When to use:** You're ready to charge but don't want to spend three days reading Stripe docs.

**How to use:** Replace the variables in the prompt. Claude returns a working Python module you can drop into your FastAPI project.

```
You are a Python backend engineer who has integrated Stripe metered billing in 100+ production APIs.

Generate a single Python module called `billing.py` for a FastAPI project. Use the official `stripe` SDK (Python).

The module must implement these functions:

1. `create_customer_with_subscription(email: str, price_id: str) -> dict` — creates a Stripe Customer, attaches a metered subscription, and returns a dict with customer_id, subscription_id, and subscription_item_id.

2. `record_usage(subscription_item_id: str, quantity: int = 1) -> None` — logs usage to Stripe (action="increment").

3. `cancel_subscription(subscription_id: str) -> None` — cancels at period end (so the customer keeps access until they've paid for what they used).

4. `get_current_usage(subscription_item_id: str) -> int` — returns the number of units logged in the current billing period (useful for showing a usage meter).

5. A FastAPI dependency `verify_active_subscription(api_key: str)` that looks up the subscription by API key (assume a `KEY_TO_SUBSCRIPTION_ITEM` dict for now), confirms it's active, and either returns the subscription_item_id or raises HTTPException 403.

Constraints:
- Use environment variables for the Stripe secret key (`STRIPE_SECRET_KEY`).
- Add type hints everywhere.
- Add docstrings on each function explaining what it does and what errors it can raise.
- Include a small `__main__` block at the bottom that demonstrates calling each function with placeholder values.

Pricing:
- Base fee: [BASE_FEE_USD, e.g., "$9 per month"]
- Per-call price beyond the free tier: [OVERAGE_PRICE, e.g., "$0.005"]
- Free tier: [FREE_TIER_CALLS, e.g., "1000 calls included per month"]

Output the full file as a single code block. No preamble.
```

---

## Prompt 4 — Write a RapidAPI Listing Description

**When to use:** Your endpoint is live and you're filling out the RapidAPI listing form.

**How to use:** Replace the bracketed fields. Claude returns the full listing copy: title, short description, long description, FAQ, and example use cases.

```
You are a marketplace copywriter who has written listings for 200+ APIs that ranked in the top 10 of their RapidAPI category.

Write a complete RapidAPI listing for the API described below.

Output these blocks in order, clearly labeled:

1. **Listing title** (under 60 characters, includes the main keyword, no hype words).
2. **Short description** (1 sentence under 150 characters — appears under the title in search results).
3. **Long description** (3-4 short paragraphs — what it does, who it's for, what makes it better than alternatives, how to get started in 30 seconds).
4. **5 example use cases** (each 1-2 sentences, naming a real type of company or workflow that would use this).
5. **FAQ section** (5 questions a developer would actually ask before buying — pricing, rate limits, data privacy, reliability, support).

Tone: confident but factual. No "revolutionary", "powerful", "cutting-edge" words. Speak to working developers.

API details:
- Name: [API_NAME]
- What it does, in one sentence: [ONE_LINER]
- Main endpoint: [METHOD AND PATH]
- Input: [WHAT THE CALLER SENDS]
- Output: [WHAT THE CALLER RECEIVES]
- Pricing: [PRICING_MODEL]
- Free tier: [FREE_TIER_DETAIL]
- Latency target: [P95 LATENCY, e.g., "under 800ms"]
- Hosted on: [HOSTING — e.g., "Railway with multi-region failover"]
- Built by: [YOUR_NAME / BRAND]

Output the listing only. No preamble.
```

---

## How to Use These Prompts in Sequence (the full launch flow)

1. **Day 1:** Run Prompt 1. Pick the highest-scoring idea. Write the API contract.
2. **Day 7 (after building v1):** Run Prompt 2 with your code. Publish the docs on a free Vercel page.
3. **Day 8:** Run Prompt 3. Drop `billing.py` into your project. Set Stripe env var. Wire it into the API.
4. **Day 9:** Run Prompt 4. Paste the output into the RapidAPI listing form. Publish.

Four prompts. One launch. About a week's work, end-to-end.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.
