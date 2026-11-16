// Native fetch is built into Node.js 18+

const REPOS_TO_DELETE = [
  // 18 ta 0 KB li mutlaqo bo'sh repolar:
  "1-dars",
  "3-uyga-vazifa",
  "4-DARSs",
  "50-coinnn",
  "50-koin",
  "Contact-push",
  "dark-mode-light-mode",
  "git-checking",
  "load",
  "Loyha-ishi-responsive-qaytadan",
  "MY-PROJECT-2",
  "problem",
  "qaytadan",
  "react",
  "SUNNATILLACODER-",
  "sunnatillasharipov",
  "UyGa-VaZiFa",
  "__war1pov___",
  
  // 24 ta 1-50 KB li chala/qoralama repolar:
  "-JsonPlaychxolder-",
  "Contact",
  "contact-me",
  "50-coinnnnnnnn",
  "amazon-store",
  "json-playsxolder-project",
  "new-vidio",
  "photo-camera",
  "2-DarS",
  "2-DARSSS",
  "5--dars",
  "Imthon-java-script-1-oy",
  "karzina",
  "media-pipe",
  "Search",
  "world-info",
  "Dunyo-qolingzda-project-",
  "Tech-gear",
  "Todo-List",
  "space-mars",
  "useState",
  "VERCELL"
];

const token = process.argv[2] || process.env.GITHUB_PAT;

if (!token) {
  console.error("Xatolik: Iltimos GitHub PAT tokenni kiriting:");
  console.error("Foydalanish: node scripts/delete-chala-repos.js <SIZNING_TOKENINGIZ>");
  process.exit(1);
}

const OWNER = "SUNNATILLACODER";

async function run() {
  console.log(`\nJami o'chirilishi kerak bo'lgan repolar soni: ${REPOS_TO_DELETE.length} ta\n`);
  
  let deletedCount = 0;
  let failCount = 0;

  for (const repo of REPOS_TO_DELETE) {
    process.stdout.write(`O'chirilmoqda: ${OWNER}/${repo} ... `);
    try {
      const res = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'RepoCleaner'
        }
      });

      if (res.status === 204) {
        console.log("✅ O'CHIRILDI (204 No Content)");
        deletedCount++;
      } else if (res.status === 404) {
        console.log("⚠️ ALLAQACHON MAVJUD EMAS (404)");
      } else {
        const err = await res.json().catch(() => ({}));
        console.log(`❌ XATO (${res.status}): ${err.message || 'Noma\'lum xatolik'}`);
        failCount++;
      }
    } catch (e) {
      console.log(`❌ ALOQA XATOSI: ${e.message}`);
      failCount++;
    }
    // Rate limitdan qochish uchun 400ms kutish
    await new Promise(r => setTimeout(r, 400));
  }

  console.log(`\nNatija: ${deletedCount} ta repo o'chirildi, ${failCount} ta xato.\n`);
}

run();
