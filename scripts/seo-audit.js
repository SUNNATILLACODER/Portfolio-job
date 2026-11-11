import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const htmlPath = fs.existsSync(path.join(distDir, 'index.html'))
  ? path.join(distDir, 'index.html')
  : path.join(rootDir, 'index.html');

console.log('\n========================================');
console.log('   ULTIMATE AUTOMATED SEO AUDIT SUITE   ');
console.log('========================================\n');
console.log(`Auditing target: ${htmlPath}\n`);

let passedChecks = 0;
let warningChecks = 0;
let failedChecks = 0;

function report(status, title, details = '') {
  const icon = status === 'PASS' ? '✅' : status === 'WARN' ? '⚠️' : '❌';
  console.log(`${icon} [${status}] ${title}`);
  if (details) console.log(`   └─ ${details}`);
  if (status === 'PASS') passedChecks++;
  else if (status === 'WARN') warningChecks++;
  else failedChecks++;
}

// 1. Audit HTML Content
if (!fs.existsSync(htmlPath)) {
  report('FAIL', 'Index HTML Existence', `File not found at ${htmlPath}. Run npm run build first.`);
  process.exit(1);
}

const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

// Title Check
const titleMatch = htmlContent.match(/<title[^>]*>([^<]+)<\/title>/i);
if (titleMatch && titleMatch[1].trim()) {
  const title = titleMatch[1].trim();
  if (title.length >= 25 && title.length <= 75) {
    report('PASS', 'Title Tag', `Length ${title.length} chars: "${title}"`);
  } else {
    report('WARN', 'Title Tag Length', `Length ${title.length} is outside standard 25-75 recommendation: "${title}"`);
  }
} else {
  report('FAIL', 'Title Tag', 'Missing <title> tag in HTML.');
}

// Meta Description Check
const descMatch = htmlContent.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                  htmlContent.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
if (descMatch && descMatch[1].trim()) {
  const desc = descMatch[1].trim();
  if (desc.length >= 50 && desc.length <= 200) {
    report('PASS', 'Meta Description', `Length ${desc.length} chars.`);
  } else {
    report('WARN', 'Meta Description Length', `Length ${desc.length} chars (recommended: 50-160).`);
  }
} else {
  report('FAIL', 'Meta Description', 'Missing <meta name="description"> tag.');
}

// Canonical Tag Check
const canonicalMatch = htmlContent.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
                       htmlContent.match(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
if (canonicalMatch && canonicalMatch[1].trim()) {
  const canonicalUrl = canonicalMatch[1].trim();
  if (canonicalUrl === 'https://sunnatillasharipov.uz/') {
    report('PASS', 'Canonical URL', `Canonical is set to authoritative domain: ${canonicalUrl}`);
  } else {
    report('WARN', 'Canonical URL', `Expected "https://sunnatillasharipov.uz/", found: ${canonicalUrl}`);
  }
} else {
  report('FAIL', 'Canonical URL', 'Missing canonical tag <link rel="canonical">.');
}

// Accidental Noindex Check
const noindexMatch = htmlContent.match(/<meta\s+name=["'](?:robots|googlebot)["'][^>]*content=["'][^"']*noindex[^"']*["']/i);
if (noindexMatch) {
  report('FAIL', 'Indexing Directives', 'CRITICAL: Accidental noindex detected on homepage!');
} else {
  report('PASS', 'Indexing Directives', 'Robots directive allows index and follow.');
}

// H1 Tag Check
const h1Matches = htmlContent.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi);
if (h1Matches) {
  if (h1Matches.length === 1) {
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim();
    report('PASS', 'H1 Structure', `Exactly 1 H1 landmark detected: "${h1Text.substring(0, 50)}..."`);
  } else {
    report('WARN', 'H1 Structure', `Found ${h1Matches.length} H1 tags. Recommended: 1 primary H1.`);
  }
} else {
  report('FAIL', 'H1 Structure', 'Missing <h1> tag in HTML.');
}

// Image ALT Attributes Check
const imgTags = htmlContent.match(/<img[^>]*>/gi) || [];
let missingAltCount = 0;
imgTags.forEach((img) => {
  const hasAlt = /alt=["'][^"']*["']/i.test(img);
  if (!hasAlt) missingAltCount++;
});
if (missingAltCount === 0) {
  report('PASS', 'Image Accessibility (ALT)', `All ${imgTags.length} <img> tags have alt attributes.`);
} else {
  report('FAIL', 'Image Accessibility (ALT)', `${missingAltCount} of ${imgTags.length} images are missing alt attributes.`);
}

// JSON-LD Structured Data Check
const jsonLdMatches = htmlContent.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
if (jsonLdMatches.length > 0) {
  let validBlocks = 0;
  jsonLdMatches.forEach((block, idx) => {
    const rawJson = block.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
    try {
      const parsed = JSON.parse(rawJson);
      if (parsed['@context'] || (parsed['@graph'] && parsed['@context'])) {
        validBlocks++;
      }
    } catch (err) {
      report('FAIL', `Structured Data Block #${idx + 1}`, `Malformed JSON-LD: ${err.message}`);
    }
  });
  if (validBlocks === jsonLdMatches.length) {
    report('PASS', 'Schema.org JSON-LD', `All ${validBlocks} structured data blocks parsed successfully.`);
  }
} else {
  report('FAIL', 'Schema.org JSON-LD', 'No JSON-LD structured data blocks found.');
}

// 2. Audit Sitemap.xml
const sitemapPath = fs.existsSync(path.join(distDir, 'sitemap.xml'))
  ? path.join(distDir, 'sitemap.xml')
  : path.join(rootDir, 'public', 'sitemap.xml');

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  if (sitemapContent.includes('<urlset') && sitemapContent.includes('</urlset>')) {
    const locMatches = sitemapContent.match(/<loc>([^<]+)<\/loc>/gi) || [];
    const nonHtmlUrls = locMatches.filter(loc => /\.(txt|xml|json|manifest)$/i.test(loc));
    if (nonHtmlUrls.length === 0) {
      report('PASS', 'XML Sitemap Integrity', `Sitemap contains ${locMatches.length} valid URL entries with zero non-HTML entries.`);
    } else {
      report('FAIL', 'XML Sitemap Integrity', `Sitemap contains non-HTML documents: ${nonHtmlUrls.join(', ')}`);
    }
  } else {
    report('FAIL', 'XML Sitemap Integrity', 'Sitemap XML structure is invalid.');
  }
} else {
  report('FAIL', 'XML Sitemap Integrity', 'sitemap.xml not found.');
}

// 3. Audit Robots.txt
const robotsPath = fs.existsSync(path.join(distDir, 'robots.txt'))
  ? path.join(distDir, 'robots.txt')
  : path.join(rootDir, 'public', 'robots.txt');

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  const hasSitemapDirective = /Sitemap:\s*https:\/\/sunnatillasharipov\.uz\/sitemap\.xml/i.test(robotsContent);
  const hasGooglebot = /User-agent:\s*Googlebot/i.test(robotsContent);
  const hasBingbot = /User-agent:\s*Bingbot/i.test(robotsContent);

  if (hasSitemapDirective && hasGooglebot && hasBingbot) {
    report('PASS', 'Robots.txt Rules', 'Sitemap directive present; Googlebot & Bingbot explicitly declared.');
  } else {
    report('WARN', 'Robots.txt Rules', 'Robots.txt may be missing explicit bot declarations or Sitemap link.');
  }
} else {
  report('FAIL', 'Robots.txt Rules', 'robots.txt not found.');
}

// 4. Audit 404.html (Soft 404 Prevention)
const notFoundPath = fs.existsSync(path.join(distDir, '404.html'))
  ? path.join(distDir, '404.html')
  : path.join(rootDir, 'public', '404.html');

if (fs.existsSync(notFoundPath)) {
  const notFoundContent = fs.readFileSync(notFoundPath, 'utf-8');
  const hasNoindex = /<meta[^>]*content=["'][^"']*noindex[^"']*["']/i.test(notFoundContent);
  if (hasNoindex) {
    report('PASS', '404 Error Handler', 'Standalone 404.html configured with noindex directive to prevent soft-404s.');
  } else {
    report('WARN', '404 Error Handler', '404.html missing explicit noindex directive.');
  }
} else {
  report('WARN', '404 Error Handler', 'Standalone 404.html not found.');
}

// Summary
console.log('\n----------------------------------------');
console.log(`Results: ${passedChecks} Passed | ${warningChecks} Warnings | ${failedChecks} Failed`);
console.log('----------------------------------------\n');

if (failedChecks > 0) {
  console.error('❌ SEO Audit FAILED: Critical errors must be resolved.\n');
  process.exit(1);
} else {
  console.log('✅ SEO Audit PASSED: Production requirements satisfied!\n');
  process.exit(0);
}
