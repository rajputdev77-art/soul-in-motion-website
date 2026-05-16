# Prompt.base — 16 Pre-Generated Example Outputs

> Prompt.base requires 4 example outputs per listing. Here are 16 ready-to-paste examples (4 per listing × 4 listings). Each one is a realistic, copy-paste-ready output of the prompt running on a sample input.

For each listing, paste each of the 4 examples into the **"Paste your output here"** textarea on Step 2/3 ("Prompt File"), then click **"Add example +"** between each. After 4, "Examples uploaded: 4/4" turns green.

---

## Listing 1 — Instagram Caption Generator (Pro)

### Example 1

```
You are not behind. You are early.

The productivity gurus tell you to wake up at 5am. Stack habits. Never check email before 11.

I tried all of it for a year.

None of it stuck until I stopped trying to be the productivity person. I just started shipping.

One small thing per day. Posted, not perfected. Shipped, not stockpiled.

Momentum is a cheat code. The system you stick to beats the system that looks good on paper.

Stop reading. Start shipping. Today.

#buildinpublic #productivity #indiehackers #shipdaily #founders #consistency #digitalcreator #worksmart #motivation
```

### Example 2

```
The first $1,000 month is the hardest. The next $1,000 takes half the time.

I made nothing for 18 months.

Then a stranger paid me $49 for a template I'd posted on Gumroad.
Then five strangers.
Then twenty.

Nothing about my work changed in month 19. The only thing that changed is I'd been shipping long enough that one piece finally found the right person.

If you've been making and the money hasn't come yet, you're not failing.
You're just early.

Ship today. The compound works.

#firstdollar #indiehackers #buildinpublic #founder #ecommerce #digitalproducts #gumroad #onlinebusiness
```

### Example 3

```
The advice "follow your passion" ruined a generation.

The honest version is uglier and more useful: get really good at something the market wants, and the passion will catch up.

I didn't fall in love with what I do.
I got competent at it. The competence created curiosity. The curiosity created depth. The depth created identity.

Now I love it.

But it started as just paying attention longer than the average person.

Don't follow passion. Build it.

#career #careeradvice #personalgrowth #founderlife #mindset #realtalk #buildinpublic #professionalgrowth
```

### Example 4

```
The 4-day workweek is not about working less.

It's about deciding which day you DON'T need.

Most of us spend Friday doing Monday over again. Status meetings about meetings. Slack threads about Slack threads.

When my team killed Friday, output went up 11%.

Because we stopped optimizing the wrong day.

Pick the day you don't need. Cut it.

The four left will be sharper.

#productivity #fourdayweek #remotework #leadership #futureofwork #worksmart #startups #operations #management
```

---

## Listing 2 — Micro-SaaS API Idea Generator (Pro)

### Example 1

```
Niche: Indian fintech compliance · Buyer: backend engineers at Series A Indian fintechs

| Idea | Endpoint | Input | Output | Why | Price | Hours | Boring |
|---|---|---|---|---|---|---|---|
| GSTIN validator | POST /v1/validate-gstin | { gstin } | { valid, businessName, state, registeredOn } | Every Indian fintech does KYC checks; current tools are slow | $19/mo | 24 | 10 |
| PAN-Aadhaar link check | POST /v1/pan-aadhaar-link | { pan, aadhaar } | { linked, lastChecked } | Mandated by Income Tax; companies need bulk check | $29/mo | 32 | 9 |
| Bank IFSC enrichment | POST /v1/ifsc | { ifsc } | { bank, branch, city, address } | UPI flows need it; existing APIs are flaky | $9/mo | 12 | 9 |
| UDYAM MSME validator | POST /v1/udyam | { udyamNumber } | { valid, name, category, registeredOn } | Vendor onboarding for B2B fintechs | $25/mo | 28 | 8 |
| CIN to director list | POST /v1/cin-directors | { cin } | { directors:[{name,din,role}] } | Lending / KYB needs it; MCA portal is unreliable | $39/mo | 40 | 8 |
| Bank statement OCR | POST /v1/parse-statement | { pdfUrl } | { transactions:[], summary } | Loan underwriting needs structured data | $49/mo | 60 | 7 |
| RBI rate fetcher | GET /v1/rbi-rate | - | { repo, reverse_repo, asOf } | Loan products need daily rate updates | $5/mo | 8 | 7 |
| Cheque MICR validator | POST /v1/validate-micr | { micr } | { valid, bank, branch } | Old-school but mandatory for some flows | $9/mo | 16 | 6 |
```

### Example 2

```
Niche: Restaurant operations · Buyer: tech leads at multi-location restaurant chains

| Idea | Endpoint | Input | Output | Why | Price | Hours | Boring |
|---|---|---|---|---|---|---|---|
| Recipe-to-cost API | POST /v1/recipe-cost | { ingredients:[{name,qty}], location } | { totalCost, perServingCost } | Daily ingredient-price-fluctuation is real; chains track it | $39/mo | 36 | 9 |
| Wait-time predictor | POST /v1/wait-time | { storeId, partySize, time } | { estimatedMinutes, confidence } | Toast/Square don't expose this well | $29/mo | 40 | 8 |
| Tip-share calculator | POST /v1/tip-split | { tipTotal, hours:[{role,hours}] } | { splits:[{role,amount}] } | State-by-state laws differ; nobody wants liability | $19/mo | 24 | 8 |
| Health code lookup | GET /v1/health-code/{stateId}/{code} | - | { description, severity, fixes } | Health inspectors cite codes; managers need plain English | $9/mo | 16 | 7 |
| Menu-to-allergen extractor | POST /v1/extract-allergens | { menuText } | { items:[{name,allergens}] } | New EU/US labeling rules force this | $25/mo | 30 | 8 |
| Inventory shrinkage detector | POST /v1/shrinkage | { startStock, sales, endStock } | { variance, suspiciousItems } | Restaurants lose 1-3% to shrinkage; nobody catches it | $49/mo | 60 | 7 |
| Driver tip-receipt formatter | POST /v1/driver-receipt | { tip, miles, time } | { formattedHtml } | DoorDash drivers want clean income docs | $5/mo | 12 | 9 |
| Reservation no-show predictor | POST /v1/noshow-risk | { partyHistory, hour, weather } | { probability, recommendation } | High-end restaurants overbook with bad math | $29/mo | 40 | 7 |
```

### Example 3

```
Niche: WordPress agencies · Buyer: technical leads at small/mid-tier WP agencies

| Idea | Endpoint | Input | Output | Why | Price | Hours | Boring |
|---|---|---|---|---|---|---|---|
| WP plugin compatibility check | POST /v1/wp-compat | { activePlugins:[], wpVersion, phpVersion } | { conflicts:[{plugin,with,severity}] } | Updates are scary; agencies need this before deploys | $39/mo | 32 | 9 |
| WP site health audit | POST /v1/wp-health | { url } | { score, issues:[], recommendations } | White-label this into client reports | $19/mo | 24 | 8 |
| WP malware signature scan | POST /v1/wp-scan | { siteId, lastScan } | { found:[], cleaned, suspicious } | Wordfence is expensive; cheaper API wins | $29/mo | 40 | 9 |
| WP theme-block converter | POST /v1/theme-to-block | { phpThemeUrl } | { blockTemplateUrl, manifest } | Migrating to Gutenberg is painful for legacy themes | $49/mo | 60 | 6 |
| WP user-role auditor | POST /v1/role-audit | { siteId } | { riskyUsers:[], overprivileged:[] } | Agencies inherit messy sites; clean once | $19/mo | 16 | 9 |
| WP performance baseline | GET /v1/wp-perf/{url} | - | { lcp, ttfb, cls, suggestions } | Lightweight alt to PageSpeed for agency dashboards | $9/mo | 12 | 7 |
| WP SMTP setup tester | POST /v1/wp-smtp-test | { siteUrl, smtpConfig } | { delivered, spamScore, fixes } | Email deliverability bugs are 80% of agency support tickets | $19/mo | 20 | 9 |
| WP database optimizer | POST /v1/wp-db-clean | { siteId } | { rowsDeleted, sizeBefore, sizeAfter } | Bloat kills sites; agencies sell this as "monthly maintenance" | $25/mo | 32 | 8 |
```

### Example 4

```
Niche: Indie game development · Buyer: solo game devs / 2-person studios

| Idea | Endpoint | Input | Output | Why | Price | Hours | Boring |
|---|---|---|---|---|---|---|---|
| Steam tag suggester | POST /v1/steam-tags | { gameDescription, genre } | { tags:[{tag, relevance}], examples:[similarGames] } | Discoverability dies if tags are wrong; nobody A/B tests them | $19/mo | 24 | 9 |
| Asset license auditor | POST /v1/asset-license | { manifestJson } | { conflicts:[], commercial:[], publicDomain:[] } | Indie devs use free assets without checking; Steam pulls games | $29/mo | 32 | 9 |
| Player drop-off heatmap | POST /v1/dropoff | { telemetryUrl } | { points:[{level, dropPct, suggestion}] } | Solo devs can't afford GameAnalytics; need cheap alternative | $39/mo | 48 | 8 |
| Localization quality grader | POST /v1/localize-check | { sourceText, targetText, lang } | { score, issues:[], idiomCorrections } | Bad fan translations kill review scores; devs ship anyway | $25/mo | 32 | 8 |
| Steam review sentiment | POST /v1/review-sentiment | { gameAppId, since } | { positives:[themes], negatives:[themes], trend } | Devs need patch-note prioritization data | $19/mo | 24 | 8 |
| Game balance Monte Carlo | POST /v1/balance-sim | { mechanics, runs } | { winRateCurve, brokenStrategies:[] } | Roguelike balance is hard to test at scale | $39/mo | 60 | 7 |
| Itch.io trend monitor | GET /v1/itch-trends | - | { rising:[{game, growth}], falling:[] } | Itch surfaces no analytics; devs scroll manually now | $9/mo | 16 | 9 |
| Discord bot for playtest feedback | POST /v1/playtest-collect | { buildId, channelId } | { structuredFeedback:[] } | Discord playtest threads are a mess; devs want structured data | $25/mo | 36 | 8 |
```

---

## Listing 3 — Weekly Biz Insight Report Writer

### Example 1

```
**Headline:** Revenue jumped 12.4% week-over-week but at a worsening efficiency cost — CAC climbed 18% and we have 2 weeks before that starts hurting margin.

**What went well:**
- Revenue: $48,320 (last week $42,980) — +12.4%
- Orders: 487 (last week 421) — +15.7%, the strongest order count in 6 weeks
- Repeat purchase rate ticked up 1.2pts to 31.8% — quietly, this is the most important number this week

**What needs attention:**
- CAC: $42 (last week $35.50) — +18%. The new TikTok campaign is acquiring at $58 — pause it Monday morning until we have creative variants
- AOV: $99.20 (last week $102.10) — small drop, watch but don't act
- Conversion rate: 2.4% (last week 2.5%) — within noise, not a real signal

**One question to think about:** If repeat purchase rate hit 35% by month-end, what does that unlock for our CAC ceiling — and which channel does it justify scaling further?
```

### Example 2

```
**Headline:** Quiet week numerically — revenue flat at $31K — but Repeat Customers grew 23% and a top SKU broke into the top 3 for the first time. The underlying engine is healthier than the topline shows.

**What went well:**
- New customers: 142 (last week 138) — within noise, but Repeat: 89 (last week 72) — +23%
- Marketing spend down 8% but revenue held — efficiency improving quietly
- The "Daily Carry Bundle" entered top-3 SKUs (was top-7 last week)

**What needs attention:**
- Sessions: 8,400 (last week 9,100) — down 7.7%. The Instagram impressions drop is real. Action: post 3x daily this week, not 2x.
- Sessions-per-order ratio worsened to 17 (best week was 12). Either traffic quality dropped or product-market fit shifted on a SKU — drill into landing-page metrics by source.
- Conversion rate: 2.1% (last week 2.3%) — meaningful drop, ties to the traffic-quality concern above

**One question to think about:** If Repeat Customers continues to grow 20%+ weekly while New Customers stays flat, is your business shifting from acquisition-led to retention-led — and is your team structured for that?
```

### Example 3

```
**Headline:** Revenue is up 9.2% but the entire gain came from one outlier order ($14,200) — strip that out and you actually had your weakest week of the quarter.

**What went well:**
- Repeat purchase rate: 38.4% (last week 36.1%) — +2.3pts, strongest in 12 weeks. The email sequence rework is paying off.
- Top SKU "Workshop Pro Kit" sold 47 units (last week 38) — your hero product is healthy

**What needs attention:**
- New customers: 22 (last week 31) — down 29%. Without that one wholesale order, this is a 3-month low. The paid acquisition channels need a hard look this week — pause anything above $60 CAC by Tuesday.
- AOV (excluding the outlier): $87 (last week $92) — soft but recoverable
- Marketing spend: $4,800 (last week $4,100) — +17% while delivering fewer customers. Bad trade.

**One question to think about:** If you can't easily land one $14K+ order every week, what's the realistic monthly forecast — and are you running the business off best-case or normal-case math?
```

### Example 4

```
**Headline:** Best week of the quarter — revenue up 28%, AOV up 14%, and your launch experiment cleared its cost in 3 days instead of the projected 10. Time to double the next iteration.

**What went well:**
- Revenue: $62,100 (last week $48,500) — +28%
- AOV: $124 (last week $108.50) — +14%. The bundle launch did exactly what you hoped.
- LTV:CAC ratio: 4.1x (last week 3.2x) — comfortably healthy, room to push spend

**What needs attention:**
- Inventory: 'Workshop Pro Kit' will stock out by Wednesday at this run-rate. PO needed today; cost double-checking with the supplier on accelerated shipping is worth $400-800 to avoid the lost week.
- Conversion rate from paid social: 1.4% (organic is 3.1%). Don't scale paid without fixing the landing variant first — the discrepancy is a flag.
- Email engagement is decaying — open rate dropped from 28% to 23% over 4 weeks. The next launch will land less hot unless you re-engage the list this week.

**One question to think about:** The bundle launch outperformed by 3x. Was it the offer, the timing, or the framing — and how do you isolate which one so the second launch isn't a coin flip?
```

---

## Listing 4 — Cloud Bill Waste Finder (AWS / GCP)

### Example 1

```
**Top 10 Waste Sources** (annualized)

| # | Source | Resources | Monthly waste | Annual savings | Confidence |
|---|---|---|---|---|---|
| 1 | Idle EC2 (CPU < 5% for 14d) | 14× m5.xlarge in us-east-1 | $2,450 | $29,400 | High |
| 2 | Oversized RDS (db.r5.4xlarge → db.r5.xlarge) | rds-prod-main, rds-prod-replica | $1,750 | $21,000 | High |
| 3 | Missing Savings Plan (production EC2) | 38 instances on-demand >9mo | $3,800 | $45,600 | High |
| 4 | NAT Gateway data processing | 2 NAT GWs processing 6TB/mo | $1,200 | $14,400 | High |
| 5 | Unattached EBS volumes | 24× volumes, 6.2TB total | $620 | $7,440 | High |
| 6 | Old snapshots (>180d, no policy) | 4.8TB in us-east-1, us-west-2 | $240 | $2,880 | High |
| 7 | Dev/staging running 24×7 | 9 instances, prod-mirror config | $1,950 | $23,400 | Med |
| 8 | S3 Standard for cold data | 18TB in 'data-archive' bucket | $310 | $3,720 | Med |
| 9 | Idle ELBs (0 requests / 7d) | 6 application LBs | $134 | $1,608 | High |
| 10 | CloudWatch logs no retention | 22 log groups, 'never expire' | $180 | $2,160 | Med |

**Total identified waste: $12,634/month · $151,608/year**

**Patterns across the data:**
- 73% of waste is in us-east-1 — single-region concentration is a hidden organizational risk too
- Dev/staging accounts for 19% of total spend but only 8% of utilization — high-leverage cleanup
- No Savings Plan coverage on production despite >9 months of steady-state usage — biggest single fix

**What I cannot determine without more data:**
- Memory utilization on the suspected oversized RDS — need CloudWatch Agent or Performance Insights to confirm Tier 2 recommendation
- Whether dev/staging instances have downstream service dependencies that would break with a scheduled shutdown — need infra team confirmation
- True cost of the NAT data processing — Cost Explorer aggregation hides per-VPC breakdown; need detailed billing report for Q3
```

### Example 2

```
**Top 10 Waste Sources** (annualized)

| # | Source | Resources | Monthly waste | Annual savings | Confidence |
|---|---|---|---|---|---|
| 1 | Underused Compute Engine VMs | 22× n2-standard-4 in europe-west1 | $4,200 | $50,400 | High |
| 2 | Persistent disks unattached | 41 disks, 9.4TB total | $1,580 | $18,960 | High |
| 3 | No Committed Use Discount on Prod | 14 sustained-use VMs (no CUD) | $2,900 | $34,800 | High |
| 4 | BigQuery slot reservations idle | 100 slots avg utilization 38% | $1,860 | $22,320 | High |
| 5 | Cloud SQL oversized | db-n1-highmem-8 with <40% mem | $940 | $11,280 | High |
| 6 | GCS Standard for archive data | 28TB in 'logs-archive' bucket | $640 | $7,680 | High |
| 7 | Cloud Run cold instances | 6 services, min-instances=2 each | $360 | $4,320 | High |
| 8 | Egress to internet from GCS | 2.1TB/mo, no CDN in front | $189 | $2,268 | Med |
| 9 | Old snapshots no lifecycle | 12TB across 3 projects | $432 | $5,184 | High |
| 10 | Unused static IPs | 18 reserved external IPs | $25 | $300 | High |

**Total identified waste: $13,126/month · $157,512/year**

**Patterns across the data:**
- Single-region concentration in europe-west1 — 81% of spend, no DR distribution
- BigQuery is the second-biggest cost center but has the lowest utilization — biggest single-decision savings (reduce slot count by 60)
- Production has zero Committed Use Discount coverage — 14 sustained VMs running for 8+ months

**What I cannot determine without more data:**
- Whether the BigQuery slot reservation is "padding" for unpredictable query spikes — need 90d slot usage chart to confirm a 60-slot recommendation
- Egress traffic breakdown (which buckets, which destinations) — would unlock a Cloud CDN recommendation with specific ROI
- Whether the unattached persistent disks have unsnapshot data — engineering team review needed before deletion
```

### Example 3

```
**Top 10 Waste Sources** (annualized)

| # | Source | Resources | Monthly waste | Annual savings | Confidence |
|---|---|---|---|---|---|
| 1 | Reserved Instances expired & not renewed | 12× t3.large now on-demand | $890 | $10,680 | High |
| 2 | Aurora replicas with 0 read traffic | 4 replicas, db.r6g.large | $1,840 | $22,080 | High |
| 3 | ElastiCache Redis oversized | cache.r5.xlarge, <10% mem used | $560 | $6,720 | High |
| 4 | Idle EKS nodes (CPU < 8%) | 8× m5.2xlarge nodes | $1,950 | $23,400 | High |
| 5 | CloudFront overprovisioning | Custom plan with min commit unused | $750 | $9,000 | Med |
| 6 | DynamoDB provisioned RCUs idle | 5 tables, P50 utilization 12% | $480 | $5,760 | High |
| 7 | Lambda concurrent execution waste | 3 functions, provisioned 100, peaks 18 | $420 | $5,040 | High |
| 8 | Old AMIs and snapshots | 167 unused AMIs, 4.1TB | $410 | $4,920 | High |
| 9 | Cross-AZ traffic (chatty service mesh) | $0.012/GB × 18TB/mo | $216 | $2,592 | High |
| 10 | Glue jobs (idle but billed) | 4 jobs running on schedule, no data | $190 | $2,280 | Med |

**Total identified waste: $7,706/month · $92,472/year**

**Patterns across the data:**
- Reserved Instance renewal lapse is a process failure — set a calendar alert + Cost Explorer anomaly alarm so this never repeats
- The Aurora read replicas without traffic suggest a misunderstanding of failover vs. read-scaling — engineering education + a decision: keep one for DR, delete three
- Provisioned-capacity services (DynamoDB, Lambda concurrency, EKS) are systematically overprovisioned — single architectural pattern, multiple symptoms

**What I cannot determine without more data:**
- Whether the EKS nodes have pod-density constraints (HPA min replicas) forcing the idle state — need cluster autoscaler config
- Aurora replica purpose — DR vs. read-scaling? Eng team meeting required before deletion
- DynamoDB workload pattern — if it's truly P50=12% with rare spikes, on-demand pricing might be cheaper than provisioned
```

### Example 4

```
**Top 10 Waste Sources** (annualized)

| # | Source | Resources | Monthly waste | Annual savings | Confidence |
|---|---|---|---|---|---|
| 1 | Old generation EC2 (m4, c4) | 18 instances still on previous-gen | $1,420 | $17,040 | High |
| 2 | RDS Multi-AZ on dev environments | 7 dev DBs running prod-tier HA | $1,180 | $14,160 | High |
| 3 | S3 Intelligent-Tiering not enabled | 84TB on Standard tier across 12 buckets | $1,600 | $19,200 | High |
| 4 | OpenSearch oversized (m5.large.search → t3.small.search) | 1 cluster, low traffic | $290 | $3,480 | High |
| 5 | Idle Lambda functions (no invocations) | 23 functions over 90d | $0 | $0 | High |
| 6 | KMS keys (deletion-pending past 30d) | 4 keys still billed | $4 | $48 | High |
| 7 | SageMaker notebook instances always-on | 2× ml.t3.medium running 24×7 | $80 | $960 | High |
| 8 | Route53 health checks for dead endpoints | 14 health checks returning 0 traffic | $9 | $108 | High |
| 9 | Glacier early-deletion charges | Pattern of pulls within 30d | $186 | $2,232 | Med |
| 10 | Data transfer charges (cross-region replica) | DR replica with 0 failover events in 18mo | $640 | $7,680 | Med |

**Total identified waste: $5,409/month · $64,908/year**

**Patterns across the data:**
- Dev environments mirroring prod-tier HA is the single biggest pattern — saves $14K/year, takes 1 hour to fix
- Storage tier-down opportunities are systematic (S3 Intelligent-Tiering, RDS storage class) — recommend a single tier-management policy across the org
- The "low-individual, high-total" stuff (Route53 checks, KMS keys, idle Lambda) reveals weak hygiene — a quarterly automated cleanup ticket would prevent recurrence

**What I cannot determine without more data:**
- Cross-region replica utilization — has it ever been used? 18mo with 0 failovers makes it a candidate to drop or downsize
- S3 access patterns per bucket — Intelligent-Tiering helps when access is unpredictable; for purely cold buckets, direct Glacier is cheaper
- Lambda function business value — they may be invoked by other accounts/teams (cross-account); need org-wide invocation logs
```

---

## How to Use This File

1. Open Prompt.base → Sell → fill Step 1 with the listing details from **PROMPTBASE-LISTINGS.md**
2. Click Next → on Step 2, paste the **Prompt template** from that same file
3. Below the prompt template, find **"Examples uploaded: 0/4"**
4. For each of the 4 examples above:
   - Click the "Paste your output here" textarea
   - Paste the example text
   - Click **"Add example +"** below the textarea
5. After 4 examples added, the warning turns green
6. Click **Next: Finish** → upload cover image (use `downloads/thumbnails/productN.png`) → Submit

Total time per listing: ~5 min.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.
