# Prompt.base — 4 Headline Prompt Listings

> Each Soul in Motion kit contains multiple prompts. Listing every individual prompt would be ~20 listings of busy work. Instead, list the **single highest-value prompt from each kit** as a Prompt.base listing priced at $4-7. Each listing's description points to the full Gumroad bundle for buyers who want the complete kit.

By Dev Rajput · Soul in Motion

---

## How to Use This File

For each of the 4 listings below:

1. Go to [promptbase.com/sell](https://promptbase.com/sell)
2. Fill in the form using the values from the listing block
3. Click **Next: Prompt File** → paste the prompt content
4. Click **Next: Pricing & Cover** → upload the matching cover image
5. Submit for review (typically approved in 24h)

For cover images, reuse the matching `downloads/thumbnails/productN.png`. Prompt.base will auto-resize.

---

## Listing 1 — Instagram Caption Generator (from AI Content Automation Kit)

| Field | Value |
|---|---|
| **What are you selling?** | Prompt |
| **Generation Type** | Text |
| **Model** | Claude Sonnet 4.6 (or "Claude" if no version listed) |
| **Name** (40 char) | `Instagram Caption Generator (Pro)` |
| **Cover image** | `downloads/thumbnails/product1.png` |
| **Suggested price** | **$5** |

**Description:**

> Turn any blog post or rough idea into a scroll-stopping Instagram caption in seconds. Hook in the first line, conversational tone, 2-3 line breaks for readability, clear CTA, and 8-10 relevant hashtags — every time. Built for personal brands and creators who post daily but don't have hours to write.
>
> This is the exact production prompt I use in my own content automation pipeline (the one that ships through n8n + Telegram + Claude). Drop in any draft, get marketing-grade output.
>
> **Want the full pipeline?** This prompt is part of the AI Content Automation Kit on Gumroad — gets you the complete n8n workflow, LinkedIn + YouTube prompts, and a printable setup guide. → rajputdev77.gumroad.com/l/oeazx

**Prompt content** (paste in the Prompt File step):

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
[PASTE YOUR BLOG POST OR DRAFT HERE]
```

**Suggested tags:** `instagram` · `social media` · `caption` · `content marketing` · `personal brand` · `claude` · `ai writing`

---

## Listing 2 — Micro-SaaS API Endpoint Idea Generator (from Micro-SaaS API Blueprint)

| Field | Value |
|---|---|
| **Generation Type** | Text |
| **Model** | Claude Sonnet 4.6 |
| **Name** (40 char) | `Micro-SaaS API Idea Generator (Pro)` |
| **Cover image** | `downloads/thumbnails/product2.png` |
| **Suggested price** | **$6** |

**Description:**

> Stuck picking what API to ship as a Micro-SaaS? This prompt produces 8 specific, profitable, "boring-on-purpose" API endpoint ideas in any niche you point it at. Each idea comes with a URL path, request/response schema, suggested price, time-to-ship estimate, and a "boring score" so you can see which ones are actually shippable in 40 hours.
>
> Built by a developer who has shipped multiple Micro-SaaS APIs. The exact prompt I use to validate new ideas before writing a line of code.
>
> **Want the full launch playbook?** This prompt is one of four in the Micro-SaaS API Blueprint on Gumroad — gets you the complete tech stack, Stripe metered billing code, RapidAPI listing strategy, and realistic income projections. → rajputdev77.gumroad.com/l/ngnwww

**Prompt content:**

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

**Suggested tags:** `saas` · `api` · `product strategy` · `micro saas` · `claude` · `developer` · `business ideas`

---

## Listing 3 — SMB Business Insight Report Writer (from SMB Dashboard Starter Kit)

| Field | Value |
|---|---|
| **Generation Type** | Text |
| **Model** | Claude Sonnet 4.6 |
| **Name** (40 char) | `Weekly Biz Insight Report Writer` |
| **Cover image** | `downloads/thumbnails/product3.png` |
| **Suggested price** | **$5** |

**Description:**

> Paste your weekly numbers (revenue, orders, AOV, conversion, CAC, etc.) and get a 90-second executive summary back — written like a fractional CFO would write it. Headline takeaway, what went well, what needs attention with specific recommendations, and one strategic question for the owner.
>
> This is the prompt that turns "a dashboard" into "an insights service" — and lets freelance analysts charge $500/month retainers instead of $50 dashboard setups.
>
> **Want the complete Looker Studio playbook?** This prompt is one of three in the SMB Dashboard Starter Kit on Gumroad — gets you the chart-by-chart rebuild blueprint, all 10 KPI formulas, and the exact pitch email + pricing tiers that close $750 setup fees. → rajputdev77.gumroad.com/l/nxkdft

**Prompt content:**

```
You are the analyst who runs a small business owner's weekly review meeting.

Below are this week's dashboard numbers compared to last week's. Write a short executive summary the owner can read in 90 seconds.

Tone: confident, direct, no jargon. Use plain English. Speak to the owner like a trusted advisor, not a consultant.

Structure:
1. **Headline (1 sentence):** the one biggest takeaway of the week. If it's good news, lead with it. If it's bad news, lead with it anyway.
2. **What went well (2-3 bullet points):** specific numbers, percentages, comparisons.
3. **What needs attention (2-3 bullet points):** the most important risks or declines, ranked by severity. Each one ends with a one-sentence "what I'd do this week" recommendation.
4. **One question to think about:** an open-ended strategic question for the owner to chew on this week.

Constraints:
- Maximum 250 words total.
- No buzzwords like "leverage", "synergy", "optimize".
- Round all numbers to the nearest whole or 1 decimal.
- If a metric changed less than 5%, do not mention it — that's noise.

This week's numbers:
- Revenue: $[NUMBER] (last week: $[NUMBER])
- Orders: [NUMBER] (last week: [NUMBER])
- AOV: $[NUMBER] (last week: $[NUMBER])
- Conversion rate: [NUMBER]% (last week: [NUMBER]%)
- Sessions: [NUMBER] (last week: [NUMBER])
- New customers: [NUMBER] (last week: [NUMBER])
- Repeat customers: [NUMBER] (last week: [NUMBER])
- Marketing spend: $[NUMBER] (last week: $[NUMBER])
- Top product this week: [NAME] ([UNITS] sold)

Output the report only. No preamble.
```

**Suggested tags:** `business analytics` · `small business` · `executive summary` · `report writing` · `claude` · `dashboards` · `freelance`

---

## Listing 4 — Cloud Cost Audit Analyst (from FinOps Audit & Savings Kit)

| Field | Value |
|---|---|
| **Generation Type** | Text |
| **Model** | Claude Sonnet 4.6 |
| **Name** (40 char) | `Cloud Bill Waste Finder (AWS / GCP)` |
| **Cover image** | `downloads/thumbnails/product5.png` |
| **Suggested price** | **$7** |

**Description:**

> Paste a sample of your AWS or GCP billing CSV (Cost & Usage Report or BigQuery export) and get a ranked, dollar-quantified waste analysis back. Top 10 sources of probable waste, each with the suspicious resources, why it's costing you, the action to take, and the annualized savings.
>
> The first-pass analysis tool I use in actual FinOps consulting engagements. Runs in 30 seconds, saves a day of manual review.
>
> **Want the full audit playbook?** This prompt is one of four in the FinOps Audit & Savings Kit on Gumroad — gets you the 25-point audit checklist, remediation report template, three cold-pitch email templates, and the productized service pricing model ($3K-$25K per engagement). → rajputdev77.gumroad.com/l/ufwjj

**Prompt content:**

```
You are a senior FinOps consultant who has audited 200+ cloud accounts and recovered eight figures of waste in the last decade.

Below is a sample of [AWS / GCP] billing data. Your job:

1. Identify the top 10 sources of likely waste, ranked by estimated monthly dollar value.

2. For each source, output:
   - Resource type / service category
   - Specific resource IDs or usage types in the data that triggered the flag
   - Why this is suspicious (in plain English a CFO understands)
   - Estimated monthly cost being wasted
   - Recommended specific action (e.g., "downsize 14 m5.4xlarge instances to m5.xlarge")
   - Estimated annual savings if action is taken
   - Implementation effort in engineering hours
   - Confidence level (High / Medium / Low) and what would raise it

3. Identify any patterns across the data (e.g., "most spend is in us-east-1 but most resources have low utilization on weekends — strongly suggests dev/staging running 24×7").

4. Identify the 3 things you cannot determine from this data and would need access to in order to confirm — e.g., "I'd need 14 days of CloudWatch CPU metrics to confirm the idle EC2 finding."

Format the output as a markdown report with clear section headings. Sort the top-10 list by estimated annual savings, descending.

Billing data sample:
[PASTE FIRST 200 ROWS OF CSV HERE — INCLUDE THE HEADER ROW]
```

**Suggested tags:** `finops` · `cloud cost` · `aws` · `gcp` · `cost optimization` · `claude` · `consulting` · `devops`

---

## After You Publish

- Each listing typically takes 24h for Prompt.base to approve.
- Once live, copy each listing's URL and add it to your Gumroad product description as **"Try the headline prompt for $5 on Prompt.base before buying the full kit"** — this turns Prompt.base into a top-of-funnel lead magnet.
- The conversion math: Prompt.base → Gumroad upsell typically converts at 8-15%. So a $5 prompt that brings 100 buyers/month = ~10-15 of them buy the $39 kit = $400-600/mo extra from upsells alone.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.
