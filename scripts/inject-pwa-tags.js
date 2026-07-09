const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const skipDirs = new Set(["scripts","icons","images","assets","css","js",".git","node_modules"]);

function walk(dir){
  let results = [];
  for(const entry of fs.readdirSync(dir, {withFileTypes:true})){
    if(entry.isDirectory()){
      if(skipDirs.has(entry.name)) continue;
      results = results.concat(walk(path.join(dir,entry.name)));
    } else if(entry.name.endsWith(".html")){
      results.push(path.join(dir, entry.name));
    }
  }
  return results;
}

const files = walk(root);
let updated = 0;
for(const file of files){
  let content = fs.readFileSync(file, "utf8");
  const isRoot = path.dirname(file) === root;
  const prefix = isRoot ? "" : "../";
  if(content.includes('rel="manifest"')) continue; // already has it

  const iconLineMatch = content.match(/<link rel="icon"[^>]*>/);
  if(!iconLineMatch) continue;

  const injection = `
<link rel="manifest" href="${prefix}manifest.json">
<link rel="apple-touch-icon" href="${prefix}images/logo-white.png">
<meta name="theme-color" content="#D4AF37">`;

  content = content.replace(iconLineMatch[0], iconLineMatch[0] + injection);
  fs.writeFileSync(file, content);
  updated++;
}
console.log(`Injected PWA tags into ${updated} files`);
