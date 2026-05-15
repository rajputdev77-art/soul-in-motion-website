# SMB Dashboard Starter Kit — Prompt Bundle

Three production-grade prompts that turn raw business data into client-ready intelligence. Paste each into Claude (claude.ai), ChatGPT, or your IDE chat.

Replace anything in `[SQUARE_BRACKETS]` with your specifics before sending.

---

## Prompt 1 — Analyze Any Business Data and Identify Key Metrics

**When to use:** A new client just sent you a CSV / spreadsheet of their business data. You need to know in 5 minutes what's in it, what matters, and what to put on the dashboard.

**How to use:** Paste the first 50 rows of the CSV (or attach the file) where indicated. Claude will tell you exactly which metrics to track and which to ignore.

```
You are a senior business analyst with 15 years of experience consulting for small businesses ($500k–$10M annual revenue).

Below is a sample of a small business's raw operational data. Your job:

1. Identify exactly what kind of business this is, based on the data.
2. List the 8 metrics this owner most needs to see on a dashboard, ranked by importance. For each metric:
   - Name
   - The exact formula using the columns in the data
   - Why it matters for this specific business
   - The healthy benchmark range for businesses of this type
3. List the 3 columns or fields that look interesting but are actually noise — and explain why a beginner would be tempted to track them.
4. Flag any data quality issues you notice (missing values, weird outliers, suspicious patterns).
5. Suggest 2-3 segmentations that would be most revealing (e.g., "split by acquisition channel", "split by customer cohort").

Format your output as four clear sections with headings: BUSINESS TYPE, KEY METRICS, NOISE TO IGNORE, DATA QUALITY ISSUES, SEGMENTATIONS.

Data sample:
[PASTE FIRST 50 ROWS OF CSV HERE — INCLUDE THE HEADER ROW]
```

---

## Prompt 2 — Write Dashboard Insight Summaries Automatically

**When to use:** Once a week or once a month. You take a screenshot or CSV export of the current dashboard state and ask Claude to write the human commentary that goes with it. This is what separates a "dashboard service" from an "insights service" — and lets you charge 3x as much.

**How to use:** Paste the current values of the dashboard's key metrics (and last period's values) into the placeholder. Claude returns a concise client-facing report.

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
- [ANY OTHER NUMBERS RELEVANT FOR THIS BUSINESS]

Output the report only. No preamble.
```

---

## Prompt 3 — Generate Monthly Business Reports From Raw Numbers

**When to use:** Month-end. The client wants a 2-3 page narrative report they can show their spouse, partner, or accountant. This is the deliverable on a $500/month retainer.

**How to use:** Paste the raw monthly aggregates plus the last 3 months for trend context. Claude returns a fully written report you can deliver as a PDF (paste into Google Docs → File → Download → PDF).

```
You are the fractional CFO of a small business owner. Each month you write them a 2-page report on the state of their business — the kind of document their accountant would also read.

Write a complete monthly business report based on the data below.

Use this exact structure with these exact section headings:

**1. Executive Summary** (1 short paragraph — the month in 4 sentences)

**2. Revenue Performance**
- Total revenue this month vs. last month vs. same month last year (state actuals + percentage changes).
- Top 3 revenue drivers (which products, channels, or customer segments contributed the most).
- One paragraph of plain-English explanation of why revenue moved the way it did.

**3. Customer Health**
- New customers acquired vs. last month.
- Repeat purchase rate change.
- LTV/CAC ratio with interpretation (is it healthy? Trending which way?).
- Any customer concentration risk (e.g., "Top 5 customers accounted for 40% of revenue — risk if any leave").

**4. Marketing Efficiency**
- Total ad spend this month vs. last month.
- CAC change.
- Best-performing channel by ROAS, worst-performing by ROAS.
- One concrete recommendation for next month's spend allocation.

**5. Watch List for Next Month** (3 bullet points, each one specific and action-oriented)

**6. The One Thing**
A single closing paragraph naming the single most important thing the owner should focus on for the next 30 days. Be opinionated.

Tone: serious, fact-based, slightly warm. No marketing language. Speak as a trusted financial advisor would, in writing.

Constraints:
- Total length: 600-900 words.
- Round all dollar figures to the nearest dollar or hundred.
- Round all percentages to 1 decimal.
- Use precise change language: "up 12.4% month over month" not "significantly higher".
- Do NOT add forward-looking promises ("we will see growth"). Only describe what the data shows.

This month's data:
[PASTE MONTHLY AGGREGATES HERE — REVENUE, ORDERS, NEW CUSTOMERS, REPEAT CUSTOMERS, MARKETING SPEND BY CHANNEL, TOP PRODUCTS, ETC.]

Last 3 months for trend context:
[PASTE THE SAME AGGREGATES FOR THE PREVIOUS 3 MONTHS]

Output the full report only. No preamble. Use clean markdown.
```

---

## Bonus — How to Productize These Three Prompts

You don't need to manually run these prompts every week. Here's the assembly line:

1. **Connect a Zapier (or n8n) trigger** to your dashboard's Google Sheet. Set it to fire every Monday at 8am.
2. The trigger reads the latest row of weekly aggregates.
3. It calls the Anthropic API with **Prompt 2** (or **Prompt 3** for monthly).
4. The output is sent to the client by email — or appended to a Google Doc that the client subscribes to.

A 30-minute setup. The client thinks you spend two hours analyzing their business every week. You spend zero. You earn $500/month.

(See Product 1 — *AI Content Automation Kit* — for the n8n pattern to copy.)

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.
