const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const skipDirs = new Set(["scripts","icons","images","assets","css","js",".git"]);

function walk(dir, base){
  let results = [];
  for(const entry of fs.readdirSync(dir, {withFileTypes:true})){
    if(entry.isDirectory()){
      if(skipDirs.has(entry.name)) continue;
      results = results.concat(walk(path.join(dir,entry.name), base));
    } else if(entry.name.endsWith(".html") && entry.name !== "404.html"){
      const rel = path.relative(base, path.join(dir, entry.name)).replace(/\\/g,"/");
      results.push(rel);
    }
  }
  return results;
}

const files = walk(root, root).sort();
const today = new Date().toISOString().split("T")[0];
const urls = files.map(f => `  <url><loc>https://example.com/${f}</loc><lastmod>${today}</lastmod></url>`).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(root,"sitemap.xml"), xml);
console.log(`sitemap.xml written with ${files.length} URLs`);
