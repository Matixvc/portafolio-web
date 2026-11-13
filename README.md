# Portafolio Web — Matías Villalobos

Portafolio profesional de **Unity Developer | XR / VR Developer**.
Proyectos personales y académicos con Unity y C#, centrados en gameplay,
interacción física y experiencias 3D, con especial interés en realidad virtual y XR.
Sitio estático: HTML + Tailwind CSS + JavaScript vanilla. Sin frameworks ni dependencias en producción.

🌐 **Demo:** https://matixvc.github.io/portafolio-web/

---

## Proyectos mostrados

| Proyecto | Qué es | Stack | Enlaces |
|---|---|---|---|
| **App Mobile — Organizador Personal** | App para organizar el día a día: horario universitario, fechas con notificación de calendario, cumpleaños y evaluaciones | Expo · React Native · TypeScript | [Repo](https://github.com/Matixvc/App-Mobile) |
| **Basura Fighters — Roguelike de Reciclaje** | Roguelike web jugable: oleadas, EXP, habilidades/armas, 3 héroes, jefes, modo infinito. Un solo HTML con Canvas 2D | JavaScript · Canvas 2D · HTML5 | [Repo](https://github.com/Matixvc/Trash-Roguelike) · [Demo](https://trash-rogelike.netlify.app) |
| **PhysicsVR Prototype** | Prototipo de interacción física en Unity, en desarrollo y orientado a una futura integración con VR. Todavía no es funcional con visor | Unity · C# · Físicas 3D | [Repo](https://github.com/Matixvc/PhysicsVR_Prototype) |

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
│   └── cv.html             # Plantilla histórica del CV, separada de los PDF vigentes
├── scripts/
│   ├── build-icons.mjs     # Genera el sprite assets/icons.svg
│   ├── render.mjs          # og-image.png y CV en PDF vía Edge headless
│   └── set-url.mjs         # Cambia el dominio en todos los metadatos
├── js/
│   ├── main.js             # Menú, modal, scroll-spy, formulario de contacto y CV (IIFE)
│   └── theme.js            # Inicialización temprana y preferencias oscuro/claro/sistema
├── docs/
│   └── PROJECT_STATUS.md   # Estado, validaciones y pendientes
├── AGENTS.md               # Instrucciones del proyecto
├── dist/
│   └── styles.css          # CSS compilado y minificado (no editar a mano)
├── assets/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── icons.svg           # Sprite SVG local (se regenera con npm run icons)
│   ├── foto-perfil.jpg     # Foto de perfil (sección "Sobre mí")
│   ├── Matias_Villalobos_CV_Unity_XR_ES.pdf  # CV vigente español
│   ├── Matias_Villalobos_CV_Unity_XR_EN.pdf  # CV vigente inglés
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
npm ci        # instala las versiones del lockfile
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
npm ci         # instala las versiones del lockfile
npm run build  # icons + CSS minificado (regenera dist/styles.css)
npm run watch  # recompila el CSS al guardar cambios
npm run serve  # servidor local → http://localhost:3000
npm run icons  # regenera assets/icons.svg desde FontAwesome
npm run og     # regenera assets/og-image.png (requiere Microsoft Edge)
npm run cv     # exporta la plantilla histórica a assets/cv-matias-villalobos.pdf; no actualiza ES/EN
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

El Hero ofrece dos descargas independientes:

- Español: `assets/Matias_Villalobos_CV_Unity_XR_ES.pdf`.
- Inglés: `assets/Matias_Villalobos_CV_Unity_XR_EN.pdf`.

- Si el PDF está accesible, el botón permite la descarga.
- Si falta un archivo, solo se deshabilita su botón correspondiente.

`src/cv.html` es una plantilla histórica actualizada editorialmente; no es la fuente
de los dos PDF vigentes. El comando existente siguiente exporta esa plantilla a un
tercer archivo con nombre antiguo y no debe usarse para actualizar los CV ES/EN:

```bash
npm run cv   # requiere Microsoft Edge
```

Los PDF vigentes se conservan intactos. Queda pendiente corregir en ambos la
descripción de PhysicsVR: todavía no es funcional en VR con visor. También incluyen
40 Days of Light, cuya preparación para el portafolio web sigue pendiente.

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

- [ ] Protección adicional de Web3Forms: CAPTCHA validado por el servicio; honeypot estándar y restricción de dominio según plan. La access key es pública por diseño.
- [ ] Preparar evidencia y alcance de 40 Days of Light antes de incorporarlo al sitio.
- [ ] Sincronizar futuras revisiones de los PDF con el estado confirmado de PhysicsVR.
- [ ] Capturas/GIF reales de los proyectos (sustituyen los mockups SVG).
- [ ] Versión en inglés del sitio.

## Roadmap

- [ ] Case studies con URL propia por proyecto (`/proyectos/<slug>/`).
- [ ] Analytics (cargador ya preparado en `js/main.js`, inactivo por defecto).
- [ ] CI/CD (GitHub Actions + Lighthouse CI) · ESLint/Prettier · página 404.
