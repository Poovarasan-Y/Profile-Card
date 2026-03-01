const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const badPrefix = '/Poovarasan-Y.github.io/Profile-Card/';
const replaceWith = './';

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      try {
        let content = fs.readFileSync(full, 'utf8');
        if (content.includes(badPrefix)) {
          content = content.split(badPrefix).join(replaceWith);
          fs.writeFileSync(full, content, 'utf8');
          console.log('Patched', full);
        }
      } catch (e) {
        console.error('Skipped', full, e.message);
      }
    }
  }
}

if (fs.existsSync(distDir)) {
  walk(distDir);
  console.log('Patch complete');
} else {
  console.error('dist directory not found');
  process.exit(1);
}
