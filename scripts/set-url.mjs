// Actualiza TODAS las URLs absolutas del sitio en un solo comando.
//
// Uso:
//   npm run set-url -- --dry https://midominio.com     (muestra los cambios sin escribir)
//   npm run set-url -- https://midominio.com           (aplica los cambios)
//
// Actualiza: index.html (canonical, og:url, og:image, twitter:image, JSON-LD),
// robots.txt (Sitemap) y sitemap.xml (loc + lastmod).
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry');
const rawUrl = args.find((a) => !a.startsWith('--'));

if (!rawUrl) {
    console.error('Falta la URL. Ejemplo: npm run set-url -- https://midominio.com');
    process.exit(1);
}

let siteUrl;
try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
        throw new Error('El protocolo debe ser http o https');
    }
    // Siempre con barra final: canonical y og:url quedan consistentes
    siteUrl = parsed.origin + parsed.pathname.replace(/\/$/, '') + '/';
} catch (error) {
    console.error('URL invalida:', rawUrl, '->', error.message);
    process.exit(1);
}

// Detecta el dominio actual del proyecto para reemplazarlo
const root = path.resolve(import.meta.dirname, '..');
const indexPath = path.join(root, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const currentMatch = indexHtml.match(/<link rel="canonical" href="([^"]+)">/);

if (!currentMatch) {
    console.error('No se encontro <link rel="canonical"> en index.html');
    process.exit(1);
}

const currentUrl = currentMatch[1];
const currentBase = currentUrl.replace(/\/$/, '');
const newBase = siteUrl.replace(/\/$/, '');

const targets = [
    { file: 'index.html', replacements: [[currentBase, newBase]] },
    { file: 'robots.txt', replacements: [[currentBase, newBase]] },
    {
        file: 'sitemap.xml',
        replacements: [
            [currentBase, newBase],
            [/<lastmod>[^<]*<\/lastmod>/, '<lastmod>' + new Date().toISOString().slice(0, 10) + '</lastmod>']
        ]
    }
];

console.log('Dominio actual :', currentBase);
console.log('Dominio nuevo  :', newBase);
console.log(dryRun ? 'Modo: DRY RUN (no se escribe nada)\n' : 'Modo: APLICAR\n');

for (const target of targets) {
    const filePath = path.join(root, target.file);
    let content = fs.readFileSync(filePath, 'utf8');
    let hits = 0;

    for (const [from, to] of target.replacements) {
        const pattern = from instanceof RegExp ? from : new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = content.match(pattern);
        if (matches) {
            hits += matches.length;
            content = content.replace(pattern, to);
        }
    }

    if (hits > 0 && !dryRun) {
        fs.writeFileSync(filePath, content, 'utf8');
    }
    console.log(`${target.file}: ${hits} reemplazo(s)${dryRun ? ' (simulado)' : ''}`);
}

console.log('\nListo.' + (dryRun ? ' Ejecuta sin --dry para aplicar.' : ' Revisa con "git diff" y luego haz commit + push.'));
