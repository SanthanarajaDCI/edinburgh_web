const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'app');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('href="#"')) {
        let matches = 0;
        content = content.replace(/href="#"/g, () => {
          matches++;
          // Generate a pseudo-link based on the file path
          const relativePath = path.relative(path.join(__dirname, 'app/(main)'), dir).replace(/\\/g, '/');
          const routeParts = relativePath.split('/');
          const baseRoute = routeParts[0] === '..' ? '' : `/${routeParts[0]}`;
          return `href="${baseRoute || '/home'}"`;
        });
        if (matches > 0) {
          fs.writeFileSync(fullPath, content);
          console.log(`Updated ${matches} links in ${fullPath}`);
        }
      }
    }
  }
}

processDir(targetDir);
