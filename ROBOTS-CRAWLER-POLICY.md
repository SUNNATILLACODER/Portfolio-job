# AI Crawler & Search Engine Access Policy

**Domain:** `sunnatillasharipov.uz`  
**Document Status:** Live Implementation & Governance Framework  
**File Location:** [`/public/robots.txt`](file:///C:/Users/User/Desktop/Portfolio-job/public/robots.txt)

---

## 1. Crawler Taxonomy & Functional Distinction

Modern web crawlers are no longer homogeneous. They are divided into three distinct operational categories:

### Category A: Traditional Search Engine Crawlers
* **Purpose:** Index public web pages to show URLs and titles in traditional organic search listings (Google, Bing, Yandex).
* **Direct Value to You:** Direct organic search traffic and discovery.
* **Crawlers Covered:**
  * `Googlebot` & `Googlebot-Image` (Google)
  * `Bingbot` (Microsoft Bing)
  * `YandexBot` (Yandex)
  * `Applebot` (Apple Spotlight & Siri Suggestions)
* **Access Policy:** **ALLOWED (`Allow: /`)**

### Category B: Real-Time AI Search & Retrieval Bots
* **Purpose:** Fetch live page content at the moment a user asks a question in an AI assistant (ChatGPT Search, Perplexity AI, Claude) to provide citations, source links, and direct answers.
* **Direct Value to You:** Real-time visibility, referral clicks from AI queries, and citation authority.
* **Crawlers Covered:**
  * `OAI-SearchBot` (OpenAI live search retrieval — gives links/citations in ChatGPT Search)
  * `ChatGPT-User` (Triggered on demand when a ChatGPT user clicks a link or prompts the assistant to inspect a URL)
  * `PerplexityBot` (Perplexity AI real-time search engine)
  * `ClaudeBot` (Anthropic conversational retrieval)
* **Access Policy:** **ALLOWED (`Allow: /`)**

### Category C: AI Model Pre-Training & Dataset Ingestion Crawlers
* **Purpose:** Download large volumes of public web text and code to train foundational neural network weights for future model releases (e.g. GPT-5, LLaMA-4, Claude-4). These do *not* necessarily provide immediate referral traffic or real-time citations.
* **Crawlers Covered:**
  * `GPTBot` (OpenAI model pre-training)
  * `Google-Extended` (Google Gemini / Vertex AI model pre-training)
  * `CCBot` (Common Crawl foundation dataset)
  * `Meta-ExternalAgent` (Meta AI foundation models)
  * `anthropic-ai` (Anthropic model pre-training)
  * `Bytespider` (ByteDance / TikTok AI)
  * `cohere-ai` (Cohere NLP models)
  * `Diffbot` (Commercial knowledge graph extraction)
* **Current Policy:** **ALLOWED (`Allow: /`)**

---

## 2. Policy Trade-offs & Strategic Decision for Sunnatilla Sharipov

| Option | Pros | Cons | Recommendation |
| :--- | :--- | :--- | :--- |
| **Permissive (Current)** | Your name, portfolio, and code examples become part of the internal weights and training sets of future models (e.g. ChatGPT, Gemini). When someone asks an AI about developers in Tashkent, the model has innate memory of you. | Your public portfolio content is ingested into proprietary model training without royalty payments. | **Recommended for personal portfolios and developer branding** where maximal public reach is the goal. |
| **Search-Only (Restrictive)** | Prevents your code/text from being used to train foundation models, while still allowing ChatGPT Search, Google, and Bing to cite you in live queries. | Newer models without live web browsing will have no offline knowledge of your name or projects. | Suitable for proprietary closed-source commercial codebases, but counter-productive for public portfolios. |

---

## 3. How to Restrict AI Training Bots (If Desired)

If you decide you do *not* want your portfolio content ingested into base training datasets while still keeping live search discovery active, `public/robots.txt` can be switched to the following restrictive snippet with zero negative impact on Google or ChatGPT Search:

```txt
# Allow search & live AI citations
User-agent: Googlebot
User-agent: Bingbot
User-agent: OAI-SearchBot
User-agent: PerplexityBot
Allow: /

# Disallow offline model training scraping
User-agent: GPTBot
User-agent: Google-Extended
User-agent: CCBot
User-agent: Meta-ExternalAgent
User-agent: Bytespider
Disallow: /
```

*Note: The current production deployment retains full permissive access to maximize global AI entity recognition.*
