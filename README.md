# Portafolio Web — Matías Villalobos

Portafolio profesional de **Unity & XR Developer** (C# · simulaciones 3D · VR/AR).
Sitio estático: HTML + Tailwind CSS + JavaScript vanilla. Sin frameworks ni dependencias en producción.

🌐 **Demo:** https://matixvc.github.io/portafolio-web/

---

## Proyectos mostrados

| Proyecto | Qué es | Stack | Enlaces |
|---|---|---|---|
| **App Mobile — Organizador Personal** | App para organizar el día a día: horario universitario, fechas con notificación de calendario, cumpleaños y evaluaciones | Expo · React Native · TypeScript | [Repo](https://github.com/Matixvc/App-Mobile) |
| **Basura Fighters — Roguelike de Reciclaje** | Roguelike web jugable: oleadas, EXP, habilidades/armas, 3 héroes, jefes, modo infinito. Un solo HTML con Canvas 2D | JavaScript · Canvas 2D · HTML5 | [Repo](https://github.com/Matixvc/Trash-Roguelike) · [Demo](https://trash-rogelike.netlify.app) |
| **PhysicsVR Prototype** | Prototipo Unity de físicas e interacción: agarrar y lanzar objetos en primera persona, escalable a VR/MR | Unity 3D · C# · Rigidbody | Código bajo solicitud (repo privado) |

> Sin capturas por ahora: las tarjetas usan mockups SVG que se sustituirán por capturas/GIF reales cuando estén listas.

---

## Estructura del proyecto

```
portafolio-web/
├── index.html              # Página única (todo el contenido)
├── src/
│   ├── input.css           # CSS fuente: directivas de Tailwind + estilos propios
│   ├── og-card.html        # Plantilla para generar assets/og-image.png (build time)
│   ├── icon-card.html      # Plantilla para generar assets/apple-touch-icon.png (build time)
│   └── cv.html             # Plantilla A4 del CV (npm run cv)
├── scripts/
│   ├── build-icons.mjs     # Genera el sprite assets/icons.svg
│   ├── render.mjs          # og-image.png y CV en PDF vía Edge headless
│   └── set-url.mjs         # Cambia el dominio en todos los metadatos
├── js/
│   └── main.js             # Menú, modal, scroll-spy, formulario de contacto y CV (IIFE)
├── dist/
│   └── styles.css          # CSS compilado y minificado (no editar a mano)
├── assets/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── icons.svg           # Sprite SVG local (se regenera con npm run icons)
│   ├── foto-perfil.jpg     # Foto de perfil (sección "Sobre mí")
│   ├── cv-matias-villalobos.pdf  # CV (se regenera con npm run cv)
│   └── og-image.png        # Vista previa para WhatsApp / LinkedIn
├── tailwind.config.js      # Colores, fuentes y sombras
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

---

## Ver en local

> ⚠️ No lo abras con doble clic (`file:///`): iconos, estilos y scripts necesitan un servidor local y con doble clic se ve roto.

```bash
npm install   # solo la primera vez
npm run build # genera dist/styles.css e icons.svg (solo la primera vez o si editas estilos/iconos)
npm run serve # abre http://localhost:3000 en el navegador
```

- `npm run serve` usa `npx serve`: la primera vez tarda (descarga el servidor).
- Para detenerlo: `Ctrl + C` en la terminal.
- Si editas `src/input.css` mientras pruebas, deja `npm run watch` corriendo en otra terminal para que `dist/styles.css` se regenere solo.
- Alternativas sin npm: `python -m http.server 8000` o la extensión **Live Server** de VS Code (clic derecho sobre `index.html`).

---

## Comandos

```bash
npm install    # solo la primera vez
npm run build  # icons + CSS minificado (regenera dist/styles.css)
npm run watch  # recompila el CSS al guardar cambios
npm run serve  # servidor local → http://localhost:3000
npm run icons  # regenera assets/icons.svg desde FontAwesome
npm run og     # regenera assets/og-image.png (requiere Microsoft Edge)
npm run cv     # regenera assets/cv-matias-villalobos.pdf (requiere Microsoft Edge)
npm run set-url -- https://tudominio.com  # cambia el dominio en los metadatos
```

---

## Formulario de contacto

Funciona con **Web3Forms** y envía a `Matias.villalobos.dev@gmail.com`.
Incluye validación en tiempo real, honeypot anti-spam, prevención de doble envío
y botón de copiar correo.

Si vacías `FORM_ENDPOINT` en `js/main.js`, el formulario no miente: abre el cliente
de correo del visitante con el mensaje ya redactado y listo para enviar.

---

## CV (descargable)

El botón "Descargar CV" apunta a `assets/cv-matias-villalobos.pdf` (ya publicado):

- Si el PDF está accesible, el botón permite la descarga.
- Si alguien lo abre sin el archivo (p. ej. clon parcial), el botón avisa en vez de forzar una descarga rota.

Para regenerarlo tras editar la plantilla `src/cv.html`:

```bash
npm run cv   # requiere Microsoft Edge
```

---

## Dominio y deploy

El sitio apunta a **https://matixvc.github.io/portafolio-web/** en `canonical`,
Open Graph, Twitter Card, JSON-LD, `robots.txt` y `sitemap.xml`.

- **GitHub Pages:** `Settings → Pages → Source: Deploy from a branch → main / (root)`.
  El CSS compilado (`dist/styles.css`) está versionado, así que funciona sin build.
- **Netlify / Vercel:** conecta el repo y publica la raíz (sin comando de build,
  o `npm run build` si prefieres regenerar el CSS en cada deploy).

Para cambiar de dominio:

```bash
npm run set-url -- --dry https://tudominio.com   # muestra los cambios sin escribir
npm run set-url -- https://tudominio.com         # los aplica
git add -A && git commit -m "chore: cambiar dominio" && git push
```

---

## Pendiente

- [ ] Capturas/GIF reales de los proyectos (sustituyen los mockups SVG).
- [ ] Versión en inglés del sitio.

## Roadmap

- [ ] Case studies con URL propia por proyecto (`/proyectos/<slug>/`).
- [ ] Analytics (cargador ya preparado en `js/main.js`, inactivo por defecto).
- [ ] CI/CD (GitHub Actions + Lighthouse CI) · ESLint/Prettier · página 404.
