// Renderiza plantillas de build con Edge headless:
//   npm run og  ->  assets/og-image.png                (desde src/og-card.html)
//   npm run cv  ->  assets/cv-matias-villalobos.pdf    (desde src/cv.html)
// Existe porque los scripts de npm pasan por cmd.exe en Windows y parte mal
// las rutas con espacios ("C:/Program Files...") cuando van entre \" \".
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];

const TARGETS = {
    og: {
        out: path.join(ROOT, 'assets', 'og-image.png'),
        url: 'file:///' + path.join(ROOT, 'src', 'og-card.html').replace(/\\/g, '/'),
        flag: () => [`--screenshot=${path.join(ROOT, 'assets', 'og-image.png')}`],
        args: ['--headless=new', '--disable-gpu', '--hide-scrollbars',
            '--force-device-scale-factor=1', '--window-size=1200,630']
    },
    cv: {
        out: path.join(ROOT, 'assets', 'cv-matias-villalobos.pdf'),
        url: 'file:///' + path.join(ROOT, 'src', 'cv.html').replace(/\\/g, '/'),
        flag: () => [`--print-to-pdf=${path.join(ROOT, 'assets', 'cv-matias-villalobos.pdf')}`],
        args: ['--headless=new', '--disable-gpu', '--no-pdf-header-footer']
    }
};

const target = TARGETS[mode];
if (!target) {
    console.error('Uso: node scripts/render.mjs <og|cv>');
    process.exit(1);
}

const EDGE_CANDIDATES = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];
const edge = EDGE_CANDIDATES.find((p) => fs.existsSync(p));
if (!edge) {
    console.error('render: Microsoft Edge no encontrado.');
    process.exit(1);
}

fs.rmSync(target.out, { force: true });

spawnSync(edge, [...target.args, ...target.flag(), target.url], {
    stdio: 'inherit',
    windowsHide: true
});

// Edge puede cerrar el proceso antes de vaciar el archivo: espera breve.
const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
const deadline = Date.now() + 10000;
while (!fs.existsSync(target.out) && Date.now() < deadline) sleep(200);

if (!fs.existsSync(target.out)) {
    console.error('render: fallo generando ' + path.relative(ROOT, target.out));
    process.exit(1);
}

const kb = Math.round(fs.statSync(target.out).size / 1024);
console.log('render: ' + path.relative(ROOT, target.out) + ' (' + kb + ' KB)');
