const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_dump.json', 'utf8'));
const doc = data.nodes['65:67'].document;

let output = [];

function collect(node, depth = 0) {
  const indent = '  '.repeat(depth);
  let line = `${indent}[${node.type}] "${node.name}"`;
  if (node.absoluteBoundingBox) {
    const b = node.absoluteBoundingBox;
    line += ` (x:${Math.round(b.x)}, y:${Math.round(b.y)}, w:${Math.round(b.width)}, h:${Math.round(b.height)})`;
  }
  if (node.characters) {
    line += ` | TEXT: ${JSON.stringify(node.characters)}`;
    if (node.style) {
      line += ` [font: ${node.style.fontFamily} ${node.style.fontWeight}, size: ${node.style.fontSize}, letterSpacing: ${node.style.letterSpacing}, lineHeight: ${node.style.lineHeightPx}]`;
    }
  }
  if (node.fills && node.fills.length > 0) {
    const f = node.fills.map(fill => {
      if (fill.type === 'SOLID') {
        const c = fill.color || {};
        const r = Math.round((c.r || 0) * 255);
        const g = Math.round((c.g || 0) * 255);
        const b = Math.round((c.b || 0) * 255);
        return `SOLID(rgba(${r},${g},${b},${fill.opacity ?? 1}))`;
      }
      if (fill.type === 'IMAGE') {
        return `IMAGE(${fill.imageRef})`;
      }
      if (fill.type.startsWith('GRADIENT')) {
        return `${fill.type}`;
      }
      return fill.type;
    }).join(', ');
    line += ` | FILLS: ${f}`;
  }
  output.push(line);
  if (node.children) {
    node.children.forEach(c => collect(c, depth + 1));
  }
}

collect(doc);
fs.writeFileSync('figma_structure.txt', output.join('\n'));
console.log('Done! Total lines in structure:', output.length);
