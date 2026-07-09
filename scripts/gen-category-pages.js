// One-off Node generator for category index.html pages. Not shipped to production nav.
const fs = require("fs");
const path = require("path");

const categories = [
  { id:"math", label:"Math", icon:"📐" },
  { id:"number-system", label:"Number System", icon:"🔢" },
  { id:"finance", label:"Finance", icon:"💰" },
  { id:"health", label:"Health", icon:"❤️" },
  { id:"converter", label:"Converters", icon:"🔁" },
  { id:"education", label:"Education", icon:"🎓" },
  { id:"engineering", label:"Engineering", icon:"⚙️" },
  { id:"programming", label:"Programming", icon:"💻" },
  { id:"time-tools", label:"Time Tools", icon:"⏱️" },
  { id:"utilities", label:"Utilities", icon:"🧰" },
];

const tpl = (cat) => `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${cat.label} Calculators — Calculator Studio</title>
<meta name="description" content="Browse all free ${cat.label} calculators on Calculator Studio.">
<link rel="canonical" href="https://example.com/${cat.id}/index.html">
<link rel="icon" href="../icons/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="../css/style.css">
<link rel="stylesheet" href="../css/responsive.css">
<link rel="stylesheet" href="../css/animations.css">
</head>
<body>
<script>const ROOT="../";</script>
<div id="site-header"></div>
<main class="container">
  <div class="breadcrumb"><a href="../index.html">Home</a> / ${cat.label}</div>
  <section class="cat-banner">
    <div class="icon">${cat.icon}</div>
    <h1 class="calc-page-title">${cat.label} Calculators</h1>
    <p class="calc-page-desc" id="cat-desc" style="margin:0 auto"></p>
  </section>
  <div class="filter-bar">
    <input type="text" placeholder="Filter ${cat.label} calculators…" data-filter="#cat-grid" aria-label="Filter calculators">
  </div>
  <div class="grid grid-4" id="cat-grid"></div>
</main>
<div id="site-footer"></div>
<script src="../js/calc-data.js"></script>
<script src="../js/main.js"></script>
<script src="../js/theme.js"></script>
<script src="../js/search.js"></script>
<script>
document.addEventListener("DOMContentLoaded", ()=>{
  const cat = CATEGORIES.find(c=>c.id==="${cat.id}");
  document.getElementById("cat-desc").textContent = cat.desc;
  document.getElementById("cat-grid").innerHTML = calcsByCategory("${cat.id}").map(CalcUI.calcCard).join("");
});
</script>
</body>
</html>
`;

categories.forEach(cat=>{
  const dir = path.join(__dirname, "..", cat.id);
  fs.mkdirSync(dir, { recursive:true });
  fs.writeFileSync(path.join(dir, "index.html"), tpl(cat));
  console.log("wrote", cat.id);
});
