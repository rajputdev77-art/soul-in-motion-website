# AI Content Automation Kit by Soul in Motion

> The exact n8n workflow that takes a single blog post and turns it into an Instagram caption, a LinkedIn post, and 5 YouTube Shorts ideas — automatically, in under 30 seconds.

Built and used by Dev Rajput. Documented so a complete beginner can install it and have it running in one evening.

---

## What This Kit Contains

This download includes everything you need to run the AI Content Automation system on your own machine:

1. **`workflow.json`** — The complete n8n workflow file. One single click to import.
2. **`prompts.md`** — The exact AI prompts the workflow uses, ready to copy-paste or modify.
3. **`setup-guide.html`** — A printable step-by-step setup guide. Open it in your browser, follow the pictures.
4. **`README.md`** — This file. Read it first.

When the system is running you will be able to paste a blog post into a Telegram chat and receive three perfectly-formatted pieces of content back — Instagram caption, LinkedIn post, and 5 YouTube Shorts script ideas — within 30 seconds.

---

## System Requirements

You need three things, all of which are free or very low cost:

1. **A computer or a server that can run n8n**
   - Any modern Windows, Mac, or Linux machine will work.
   - Or, you can use [n8n Cloud](https://n8n.io/cloud) (free tier available).

2. **An Anthropic API key** (this is what powers the Claude AI calls)
   - Sign up at [https://console.anthropic.com](https://console.anthropic.com)
   - Go to **API Keys** → **Create Key**
   - Copy the key that begins with `sk-ant-...` and save it somewhere safe.
   - Cost: roughly $0.01 per blog post processed. Cheap.

3. **A Telegram bot** (this is the inbox for your blog posts)
   - Open Telegram on your phone, search for `@BotFather`.
   - Type `/newbot`, give it a name, give it a username.
   - BotFather will reply with an **HTTP API token** that looks like `123456:ABC-XYZ-...`. Save it.
   - Then send a message to your new bot. Open `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in a browser and copy the `chat.id` number you see in the response. Save it too.

---

## Step-by-Step Setup Instructions

Follow these exactly. If you have never used n8n before, you will still be fine.

### Step 1 — Install n8n

Pick **one** of the two options below:

**Option A: Run n8n on your own computer (free, recommended for beginners)**

1. Install Node.js version 18 or newer. Get it from [https://nodejs.org](https://nodejs.org). Click the LTS button. Run the installer. Click Next on everything.
2. Open your terminal:
   - Windows: press `Win + R`, type `cmd`, press Enter.
   - Mac: press `Cmd + Space`, type `Terminal`, press Enter.
3. In the terminal, type this and press Enter:
   ```
   npx n8n
   ```
4. Wait 1-2 minutes while it downloads. The terminal will show a line like `Editor is now accessible via: http://localhost:5678`. Open that link in your web browser.
5. Create your n8n account when prompted (this is local — only you can access it).

**Option B: Use n8n Cloud (also free to start)**

1. Go to [https://n8n.io/cloud](https://n8n.io/cloud) and sign up.
2. After signup you will land directly in the n8n editor — no install needed.

### Step 2 — Import the Workflow

1. In n8n, click the **Workflows** menu item on the left sidebar.
2. Click the **Add workflow** button (top right).
3. In the new empty workflow, click the three-dot menu (top right corner) → **Import from File**.
4. Select the `workflow.json` file from this download.
5. The full workflow will appear on screen with all the nodes connected.

### Step 3 — Add Your Credentials

The workflow will show red error icons because it does not yet have your API keys. Fix that:

1. **Anthropic credential:**
   - Click any node labeled "Anthropic Chat Model".
   - In the right panel, find the **Credential** dropdown → click **Create New**.
   - Paste your Anthropic API key (the `sk-ant-...` string from earlier) into the **API Key** field.
   - Click **Save**.

2. **Telegram credential:**
   - Click the node labeled "Telegram Trigger".
   - In the right panel, find the **Credential** dropdown → click **Create New**.
   - Paste your bot token (from BotFather) into the **Access Token** field.
   - Click **Save**.
   - Now click each "Send Message" Telegram node and select the same credential from the dropdown.

3. **Set your Chat ID:**
   - In each "Send Message" Telegram node, find the **Chat ID** field and paste the chat ID number you saved earlier.

### Step 4 — Activate and Test

1. In the top-right of the workflow editor, flip the **Active** toggle ON.
2. Open Telegram. Open the chat with your bot.
3. Paste any blog post text (a few paragraphs is fine) and send.
4. Within 10-30 seconds you should receive three messages back:
   - Instagram caption
   - LinkedIn post
   - 5 YouTube Shorts script ideas

If you do, you are done. The system is live.

---

## How to Import the Workflow JSON Into n8n (Quick Reference)

This is a simplified version of Step 2 above for when you need to re-import or share:

1. Open n8n.
2. **Workflows** → **Add workflow** → **three-dot menu** → **Import from File**.
3. Pick `workflow.json` from this download.
4. The workflow will load. Add credentials. Activate. Done.

You can also drag-and-drop the JSON file directly onto an open empty workflow canvas — n8n will import it.

---

## Troubleshooting — 5 Common Problems and Fixes

### Problem 1: "I sent a message to my bot and nothing happened."
**Fix:**
- Make sure the workflow is **Active** (top-right toggle is green).
- In the Telegram Trigger node, click **Listen for Test Event**, then send a Telegram message. If you see the data come through, the trigger works — the issue is downstream.
- Check that the Telegram credential token is correct (no extra spaces).

### Problem 2: "I get an error: 'Invalid API Key' from Anthropic."
**Fix:**
- Double-check the key. It must start with `sk-ant-` and have no trailing spaces.
- Confirm you have credit on your Anthropic account: [https://console.anthropic.com/settings/billing](https://console.anthropic.com/settings/billing). New accounts often have free credit but it expires.
- Re-create the credential in n8n from scratch — sometimes pasted keys get corrupted.

### Problem 3: "I get one of the three outputs but not the others."
**Fix:**
- This usually means one of the three Anthropic nodes errored out. Click the node that shows a red badge to see the exact error message.
- The most common cause is your blog post being too long. Keep input under ~3000 words. If longer, split it.

### Problem 4: "The output text comes back but is cut off mid-sentence."
**Fix:**
- Open the Anthropic node that produced the cut-off text.
- In the **Options** section, increase **Max Tokens** to `2000` (or higher).
- Save and re-test.

### Problem 5: "The workflow imports but I see 'Node type unknown' errors."
**Fix:**
- Your n8n version is older than the workflow requires. Update n8n:
  - For npx install: stop n8n (Ctrl+C in terminal), then run `npx n8n@latest`.
  - For Cloud: it auto-updates — check the version in **Settings** → **About**.
- Re-import the workflow after updating.

---

## Customizing the Prompts

The three AI prompts live inside the workflow nodes. To change them:

1. Click any of the three Anthropic nodes (one per platform).
2. Find the **Messages** field — the prompt is the **User** message text.
3. Edit it as you like. Save the node. Re-test.

You can also use the cleaner version in `prompts.md` — copy from there into the node.

---

## Contact

Questions? Find me at **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

If something in this kit is broken or unclear, message me. I will fix it and ship you the update for free.

— Dev Rajput
Soul in Motion
