# Client Portal Template — Soul in Motion

> A drop-in, secure-feeling client portal you can deploy in 10 minutes per client. Dark-themed. Mobile responsive. Zero backend required.

By Dev Rajput · Soul in Motion

---

## What's Included

```
client-portal/
├── index.html       ← Login page (password gate)
├── dashboard.html   ← The actual portal — status, files, messages, next steps
├── style.css        ← Dark "Soul in Motion" theme, fully responsive
├── script.js        ← Login, navigation, messages, file actions, session handling
└── README.md        ← This file
```

That's it. Five files. Pure HTML / CSS / vanilla JS. No build, no npm, no framework.

---

## How It Works (the 60-second version)

1. The client visits `index.html`, enters a password you've shared with them.
2. The script in `script.js` checks the password against `CLIENT_PASSWORD` (default: `client2025`).
3. If it matches, a **12-hour session token** is stored in the browser's `sessionStorage` and the user is redirected to `dashboard.html`.
4. If the user opens `dashboard.html` directly without a valid session, they are bounced back to the login.
5. Logout button clears the session and returns to login.

> **Important security note:** This is **client-side gating**, not real authentication. The password is in the JavaScript file, which a determined visitor can read. This template is designed for **soft-gating** — keeping casual eyes out of an unfinished project view, not for storing actual sensitive data. **Do not put confidential client data in this portal that you wouldn't be comfortable with the password being visible in source.** If you need real auth, see "Upgrading to Real Auth" below.

---

## Customizing the Portal Per Client

You will customize this once per client. It takes about 10 minutes.

### Step 1 — Set the password

Open `script.js`. Find this line near the top:

```js
var CLIENT_PASSWORD = 'client2025';
```

Replace `'client2025'` with a unique password for that client. A good pattern: `firstname-projectname-2026` (e.g., `'acme-redesign-2026'`).

### Step 2 — Personalize the greeting

In the same file, change:

```js
var CLIENT_NAME = 'there';
```

To the client's first name:

```js
var CLIENT_NAME = 'Sarah';
```

The dashboard headline will now read **"Hi Sarah, here's where things stand."**

### Step 3 — Update the project status content

Open `dashboard.html` and edit the four main sections (each is clearly labeled with a comment-friendly section ID):

- **`<section id="status">`** — Update the phase names, the percentage in the progress bar, and the "Next milestone" text.
- **`<section id="files">`** — Add / remove file rows. Each row is a `<li class="file-row">` block. Set `href` on the file action link to your actual file URL (Google Drive share, Dropbox link, signed S3 URL, anything).
- **`<section id="messages">`** — Replace the example messages. Use class `message-them` for things from you, `message-you` for things from the client. (Note: the messages submitted via the form are local to the browser only — they do not persist or get sent. See "Upgrading the Messages" below.)
- **`<section id="next">`** — Update the action items.

### Step 4 — (Optional) Replace the brand mark

The brand block at the top of both pages uses the gold dot + "Soul in Motion" wordmark. To swap to the client's brand:

- Find `<div class="brand-mark">` in both `index.html` and `dashboard.html`.
- Replace the entire block with `<img src="client-logo.png" alt="Client Logo" style="height:32px">` and drop their logo into the folder.

---

## Deploying to Vercel (Free, 5 Minutes)

Vercel is the fastest way to put each client's portal live on a unique URL.

### One-time setup
1. Sign up at [vercel.com](https://vercel.com) with your GitHub account.
2. Install the Vercel CLI: open Terminal / Command Prompt and run `npm i -g vercel`.
3. Run `vercel login` and follow the prompts.

### Per-client deploy

1. **Duplicate** the `client-portal/` folder. Rename the copy to something like `acme-portal/`.
2. Customize the duplicated files (Steps 1–4 above).
3. Open Terminal in that folder. Run:
   ```
   vercel
   ```
4. Vercel asks a few questions:
   - **Set up and deploy?** Yes.
   - **Which scope?** Pick your account.
   - **Link to existing project?** No.
   - **Project name?** `acme-portal` (or whatever).
   - **Directory?** `./` (current directory).
   - **Override settings?** No.
5. Within ~30 seconds Vercel returns a live URL like `https://acme-portal.vercel.app`.
6. Share **that URL + the password** with your client.

### Adding a custom domain (optional)

If you want `portal.acmecorp.com` instead of `acme-portal.vercel.app`:

1. In the Vercel dashboard, open the project → **Settings → Domains**.
2. Add the domain.
3. Vercel shows you the DNS records to add at the client's domain registrar (or your own subdomain).
4. Once DNS propagates (usually 5–30 minutes), the custom URL works.

---

## Where Files Actually Live

The portal does not host your file uploads — and that is intentional. It is **a dashboard with links**, not a file server.

Recommended hosting per file type:

| File type | Where to host | How to link |
|---|---|---|
| PDFs, Docs | Google Drive | Right-click file → Get link → set "Anyone with the link" → paste into the file row's `href` |
| Videos | Google Drive (small) or Loom (preview) | Same as above |
| Big assets / ZIPs | Dropbox or [transfer.zip](https://transfer.zip) | Same |
| Figma designs | Figma share link | Set the link directly; use action label "Open" instead of "Download" |

In `dashboard.html`, find the file row and edit:

```html
<a href="YOUR_FILE_URL_HERE" class="file-action" data-action="download">Download</a>
```

Set `data-action="open"` for external links (Figma, Notion, etc.) so the label reads "Open".

---

## Upgrading to Real Auth (when you outgrow client-side passwords)

When you have multiple clients or sensitive data, swap the front-end password for proper auth. Three free / cheap paths:

1. **Vercel Password Protection** — In Vercel project settings, enable **Password Protection** (free on Pro, but a $20/month upgrade). Replaces the front-end gate completely.
2. **Cloudflare Access** — Put the deployment behind Cloudflare Access with a one-time email login. Free for up to 50 users.
3. **Add Supabase Auth** — Replace `script.js` login function with Supabase's `signInWithPassword`. Free tier covers 50,000 monthly active users. Roughly 30 minutes of work.

Pick whichever matches your comfort level. The template is designed so the rest of the UI stays untouched.

---

## Upgrading the Messages (so they actually persist)

Currently, the message box adds messages to the page only — they vanish on refresh. Two ways to make them real:

1. **Supabase + a single table** — Add a `messages` table with `id, author, text, created_at`. Replace the message form's submit handler with a Supabase insert. Fetch messages on dashboard load. ~45 minutes of work.
2. **Use Telegram as the inbox** — Wire the form to send to a Telegram bot. The client never sees Telegram; they just see "Sent". You see every message in your phone. (See *AI Content Automation Kit* — Product 1 in this store — for the Telegram bot setup pattern.)

---

## Browser Support

Tested on: Chrome, Edge, Safari, Firefox (latest 2 versions of each). Mobile responsive down to 360 px wide.

The portal uses `IntersectionObserver` for scroll-spy nav highlighting (supported in all browsers since 2019). `sessionStorage` is required for the login session.

---

## License

Use this template freely on any number of client projects. You may modify the code as needed. You may not resell this template as-is on Gumroad / Etsy / similar marketplaces.

If you build something cool with it, tag **@soulmotion.studio** on Instagram — I'll feature the best ones.

---

Questions? **rajputdev77.gumroad.com** or DM **@soulmotion.studio** on Instagram.

— Dev Rajput
Soul in Motion
