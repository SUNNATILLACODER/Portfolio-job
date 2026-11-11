# Google Search Console & Webmaster Tools Integration Guide

**Domain:** `sunnatillasharipov.uz`  
**Site URL:** `https://sunnatillasharipov.uz/`  
**Sitemap:** `https://sunnatillasharipov.uz/sitemap.xml`  

---

## 1. Domain Ownership Verification

### Option A: HTML Tag / HTML File (Already Live!)
The site currently includes both:
1. Verification meta tag: `<meta name="google-site-verification" content="google411f6c3df0513df4" />`
2. Static verification file: `https://sunnatillasharipov.uz/google411f6c3df0513df4.html`

In Google Search Console, selecting **URL prefix** (`https://sunnatillasharipov.uz/`) and clicking **Verify** via HTML tag or HTML file will confirm ownership instantly.

### Option B: DNS TXT Record (Recommended for Complete Domain Property)
To track all subdomains and protocol variants (`http://`, `https://`, `www.`):
1. Log in to your domain registrar where `sunnatillasharipov.uz` was purchased (e.g. Eskiz, Arsenal-D, or Cloudflare).
2. Go to **DNS Management** for `sunnatillasharipov.uz`.
3. Add a new DNS Record:
   * **Type:** `TXT`
   * **Host / Name:** `@` (or leave empty)
   * **Value:** The Google verification string provided by Search Console (e.g., `google-site-verification=...`)
   * **TTL:** Automatic or 3600
4. Save and return to Google Search Console to click **Verify**.

---

## 2. Submitting the XML Sitemap

1. In the left navigation menu, click **Sitemaps** under the *Indexing* section.
2. In the "Add a new sitemap" input box, type:
   ```txt
   sitemap.xml
   ```
3. Click **Submit**.
4. Confirm that the status updates to **Success** (green badge). The sitemap index will report 1 canonical page with images and multilingual alternates.

---

## 3. Immediate Indexing via URL Inspection

1. Locate the top search bar labeled **"Inspect any URL in 'https://sunnatillasharipov.uz/'"**.
2. Enter the full homepage URL:
   ```txt
   https://sunnatillasharipov.uz/
   ```
3. Press **Enter**.
4. Click **Test Live URL** to verify that Googlebot can access the live page without blocking errors.
5. Click **Request Indexing**. This places your domain at the front of the Googlebot re-crawl queue.

---

## 4. Google AI Overviews & Generative Search Settings

Google Search Console includes controls and reporting for how pages appear in AI search features:
* Ensure that the site is not using `nosnippet`, `data-nosnippet`, or `max-snippet:0` directives (we have configured `max-snippet:-1` and `max-image-preview:large` in `index.html` to permit full inclusion in AI summaries).
* Under **Page Experience** and **Core Web Vitals**, ensure all mobile metrics pass to qualify for featured snippet carousels and AI Overviews.
