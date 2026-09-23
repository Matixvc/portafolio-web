// Genera assets/icons.svg (sprite <symbol>) con solo los iconos usados.
// Fuente: node_modules/@fortawesome/fontawesome-free (devDependency, no se publica).
// Uso: npm run icons  (se ejecuta automaticamente antes de npm run build)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const FA = path.join(ROOT, 'node_modules', '@fortawesome', 'fontawesome-free', 'svgs');

// Lista exacta de iconos usados (auditar con la busqueda de "icon-" en
// index.html + js/main.js antes de añadir o quitar entradas).
const ICONS = [
    ['brands', 'github'],
    ['brands', 'linkedin'],
    ['brands', 'whatsapp'],
    ['regular', 'envelope'],
    ['solid', 'arrow-right'],
    ['solid', 'arrow-up'],
    ['solid', 'arrow-up-right-from-square'],
    ['solid', 'bars'],
    ['solid', 'box-archive'],
    ['solid', 'brain'],
    ['solid', 'briefcase'],
    ['solid', 'check'],
    ['solid', 'circle-check'],
    ['solid', 'circle-exclamation'],
    ['solid', 'circle-notch'],
    ['solid', 'cube'],
    ['solid', 'envelope-open-text'],
    ['solid', 'film'],
    ['solid', 'floppy-disk'],
    ['solid', 'gamepad'],
    ['solid', 'gauge-high'],
    ['solid', 'graduation-cap'],
    ['solid', 'heart-pulse'],
    ['solid', 'layer-group'],
    ['solid', 'location-dot'],
    ['solid', 'paper-plane'],
    ['solid', 'person-walking'],
    ['solid', 'sliders'],
    ['solid', 'triangle-exclamation'],
    ['solid', 'vr-cardboard'],
    ['solid', 'xmark'],
];

function extractInner(svg) {
    const m = svg.match(/<svg[^>]*viewBox="([^"]+)"[^>]*>([\s\S]*)<\/svg>/);
    if (!m) throw new Error('SVG inesperado: ' + svg.slice(0, 80));
    return { viewBox: m[1], inner: m[2].trim() };
}

let symbols = '';
for (const [style, name] of ICONS) {
    const file = path.join(FA, style, name + '.svg');
    if (!fs.existsSync(file)) throw new Error('Falta icono: ' + style + '/' + name);
    const { viewBox, inner } = extractInner(fs.readFileSync(file, 'utf8'));
    symbols += `  <symbol id="icon-${name}" viewBox="${viewBox}">${inner}</symbol>\n`;
}

const out = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols}</svg>\n`;
const dest = path.join(ROOT, 'assets', 'icons.svg');
fs.writeFileSync(dest, out);
console.log(`icons: ${ICONS.length} simbolos -> assets/icons.svg (${Buffer.byteLength(out)} bytes)`);
