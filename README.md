# Portafolio Web — Matías I. Villalobos Cautivo

Portafolio profesional de **Unity & XR Developer** (C# / simulaciones 3D / VR-AR).
Sitio estático (HTML + Tailwind CSS compilado + JavaScript vanilla), sin frameworks y sin dependencias en tiempo de ejecución.

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
│   ├── render.mjs          # og-image.png y CV en PDF via Edge headless
│   └── set-url.mjs         # Cambia el dominio en todos los metadatos
├── js/
│   └── main.js             # Menú, modal, validación en tiempo real, scroll-spy y formulario (IIFE)
├── dist/
│   └── styles.css          # CSS compilado y minificado (no editar a mano)
├── assets/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── icons.svg           # Sprite SVG local (se regenera con npm run icons)
│   ├── foto-perfil.jpg     # Foto de perfil (sección "Sobre mí")
│   ├── cv-matias-villalobos.pdf  # CV (subir cuando esté listo; el botón se activa solo)
│   └── og-image.png        # Imagen para la vista previa en WhatsApp / LinkedIn
├── tailwind.config.js      # Colores, fuentes y sombras del sitio
├── robots.txt
├── sitemap.xml
└── site.webmanifest
```

---

## Comandos

```bash
npm install          # instala Tailwind (solo la primera vez)
npm run build        # compila dist/styles.css (minificado)
npm run watch        # recompila al guardar cambios mientras desarrollas
npm run serve        # servidor local en http://localhost:3000
npm run og           # regenera assets/og-image.png (requiere Microsoft Edge)
npm run cv           # regenera assets/cv-matias-villalobos.pdf (requiere Microsoft Edge)
npm run set-url -- https://tudominio.com   # cambia el dominio en todos los metadatos
```

> Cada vez que edites `index.html`, `js/main.js` o `src/input.css` **hay que ejecutar `npm run build`**
> (o tener `npm run watch` corriendo) para que los cambios de clases/estilos se vean.

---

## ✅ PASO HECHO: envío real del formulario (Web3Forms)

El formulario envía mensajes **directo a tu bandeja** (Matias.villalobos.dev@gmail.com)
vía Web3Forms. La clave vive en `js/main.js` (`FORM_ENDPOINT` + `WEB3FORMS_ACCESS_KEY`).

- Si algún día quieres cambiarlo: vacía `FORM_ENDPOINT` y el formulario vuelve al
  **fallback por correo** (abre el cliente de correo del visitante, nunca miente).
- Prueba recomendada tras cada deploy: enviar un mensaje real desde el sitio y
  confirmar que llega el correo (revisa spam la primera vez).

---

## ✅ Dominio configurado: GitHub Pages

El sitio apunta a **https://matixvc.github.io/portafolio-web/** en `canonical`, Open Graph,
Twitter Card, JSON-LD, `robots.txt` y `sitemap.xml`.

Para publicarlo: `Settings → Pages → Source: Deploy from a branch → main / (root)`.
El CSS compilado (`dist/styles.css`) está versionado, así que el deploy por rama funciona sin build.

Para cambiar de dominio (por ejemplo a uno propio):

```bash
npm run set-url -- --dry https://tudominio.com   # muestra los cambios sin escribir
npm run set-url -- https://tudominio.com         # los aplica
git add -A && git commit -m "chore: cambiar dominio" && git push
```

`scripts/set-url.mjs` actualiza los 7 puntos de `index.html` (canonical, `og:url`, `og:image`,
`twitter:image`, JSON-LD) más `robots.txt` y `sitemap.xml` (incluida la fecha `lastmod`),
para que nunca queden URLs inconsistentes entre archivos.

---

## Publicar el sitio

**GitHub Pages:** sube el repositorio y activa Pages en `Settings → Pages → Deploy from branch (main / root)`.

**Netlify / Vercel:** conecta el repositorio, sin comando de build (o `npm run build` si prefieres
que el CSS se genere en cada deploy) y publica la raíz del proyecto.

---

## Roadmap de mejoras pendientes

### Fase 2 — Accesibilidad ✅ (completada)
- [x] Modal con `role="dialog"`, `aria-modal`, cierre con `Esc` y con clic en el fondo, focus trap y retorno de foco.
- [x] `aria-expanded` en el botón hamburguesa y `aria-hidden` dinámico en el drawer (`true` cerrado / `false` abierto).
- [x] Skip-link "Saltar al contenido" y `aria-current` + scroll-spy en la navegación.
- [x] `:focus-visible` visible en todos los controles (se eliminaron los `focus:outline-none`).
- [x] Textos `text-[10px]` (15 usos) y `text-[11px]` subidos a 12 px o más.
- [x] `prefers-reduced-motion` respetado (`animate-ping` detenido, `scroll-smooth` desactivado, transiciones neutralizadas).
- [x] Artefactos corregidos: clase inválida `fa-[#000]` eliminada y `` `IDamageable` `` renderizado como `<code>`.
- [x] `rel="noopener noreferrer"` en todos los enlaces externos (WhatsApp incluido).
- [x] Tarjetas de proyecto sin `onclick` inline (delegación por `data-project` en `js/main.js`).
      La renderización total desde `projectDetails` queda como mejora opcional futura.

### Fase 3 — Performance ✅ (completada)
- [x] 33 iconos FontAwesome reemplazados por sprite SVG local (`assets/icons.svg`, 24 KB) y hoja `all.min.css` eliminada.
      Regenerar con `npm run icons` (se ejecuta solo dentro de `npm run build`).
- [x] Google Fonts recortado de 8 a 5 variantes (Inter 400/500/600/700 + Space Grotesk 700) con `preload` + `display=swap`.
- [x] `blur-[130px]` reducido a `blur-[70px]` en móvil (completo solo en desktop) y `backdrop-blur` limitado a desktop.

### Fase 4 — Contenido (estructura lista; faltan tus datos reales)
- [x] **Botón "Descargar CV"** en el hero, apuntando a `assets/cv-matias-villalobos.pdf`.
      Mientras el PDF no exista, `js/main.js` atenúa el botón, cambia la etiqueta a
      "CV disponible próximamente" y al hacer clic ofrece tu correo (nunca un 404).
- [x] **CV en PDF**: plantilla `src/cv.html` → `npm run cv` genera
      `assets/cv-matias-villalobos.pdf` (Edge headless). El botón del hero se activa solo;
      si borras el PDF vuelve al modo "próximamente" sin tocar código.
- [x] **Sección "Formación & Experiencia"** (`#formacion`) con línea de tiempo accesible,
      ya enlazada desde la navegación de escritorio, la móvil y el pie de página.
- [x] **Rangos reales en la timeline:** "2021 — Presente (matrícula congelada 2024–2025)".
- [x] **Foto de perfil** en la sección "Sobre mí" (`assets/foto-perfil.jpg`),
      reemplazando el ícono de Unity.
- [x] **Filtros de proyecto eliminados** (Todos/XR/Gameplay): con 3 prototipos aportaban ruido.
      El subtítulo ahora aclara que son prototipos académicos/personales.
- [x] **Rol concreto por proyecto** en `projectDetails` (`role` completado en los 3).
      `metrics`, `repo` y `demo` siguen vacíos a propósito: sin datos reales no se rellenan.
- [ ] Capturas/GIF + video (30-60 s) por proyecto y build jugable.
- [ ] Versión en inglés del sitio.

### Fase A — UX & Interacción ✅ (completada)
- [x] `main.js` envuelto en IIFE con `'use strict'` (cero variables globales).
- [x] **Menú móvil animado** (slide-down con `requestAnimationFrame`), sin saltos.
- [x] **Modal animado** (fade + scale) con cierre diferido tras la transición.
- [x] **Validación en tiempo real** del formulario: `blur` + `input`, `maxlength`,
      mensajes con `role="alert"` + `aria-describedby`, contador de caracteres.
- [x] **Scroll-spy:** la sección activa se resalta en la nav (desktop y móvil) vía
      `aria-current="location"` + `IntersectionObserver`.
- [x] **Header con sombra al scrollear** (clase `header-scrolled`, rAF-throttled).
- [x] **Botón flotante de WhatsApp** (solo móvil) + **botón "volver arriba"** que aparece tras 600 px.
- [x] Icono `arrow-up` añadido al sprite; íconos `unity`/`phone`/`robot`/`shield-halved` eliminados.

### Fase B — Contenido & Visual ✅ (parcial; capturas pendientes de tu lado)
- [x] **Stat único en el hero:** solo "Ingeniería UBO · 2021 — Presente" (decisión tuya: sin métricas de prototipos).
- [x] **Bugfix modal:** `.is-open` se aplicaba solo al overlay y el panel quedaba
      en `opacity: 0` ("Ver Detalles" no abría nada visible). Ahora recibe la
      clase el overlay **y** el panel, al abrir y al cerrar.
- [x] **Mockups SVG por proyecto** (viewport 3D, HUD de inventario, mapa NavMesh)
      reemplazando los iconos genéricos; se sustituirán por capturas reales cuando las tengas.
- [x] **Skills con badge de nivel** por tarjeta: Sólido / En curso / Expuesto (autoevaluado).
- [x] **Banda CTA final** antes del footer ("¿Buscas un Unity Developer...?").
- [x] **Tipografía:** descripciones y cuerpos de texto de 12 px → 14 px (`text-sm`).
- [x] **Targets táctiles ≥44 px** en botones de tarjeta, hamburguesa, cierre de modal y links del menú móvil.
- [x] **Copy-email con microfeedback** ("✓ Copiado") junto a la tarjeta de correo.
- [x] **Teléfono oculto:** solo enlaces `wa.me` (hero, contacto, JSON-LD, CV y errores del formulario).
- [x] **Ortografía y tildes** revisados en textos visibles (HTML + JS).
- [ ] **Capturas/GIF reales** de los prototipos → pendiente tuyo (se sustituyen los mockups).
- [ ] **Endpoint Formspree/Web3Forms** → pendiente tuyo (pegar en `js/main.js`).
- [ ] **URLs de repositorios** en `projectDetails.repo` → pendiente tuyo.

### Fase C — Roadmap (siguiente)
- [ ] **Case studies con URL propia por proyecto** (`/proyectos/<slug>/`) — priorizado.
- [ ] **Analytics Umami** (cargador ya preparado en `js/main.js`).
- [ ] Versión en inglés · CI/CD (GitHub Actions + Lighthouse CI) · ESLint/Prettier · 404.

### Fase 5 — Medición ✅ (lista para activar con una línea)
- [x] Cargador de analítica ligera y opt-in en `js/main.js` (`ANALYTICS_PROVIDER` + `ANALYTICS_ID`).
      Tal como está (vacío) **no inyecta ningún script ni hace ninguna petición**.
      ```js
      const ANALYTICS_PROVIDER = 'plausible';   // o 'umami'
      const ANALYTICS_ID = 'matixvc.github.io'; // umami: el website-id
      ```
- [ ] Decidir proveedor (Plausible de pago / Umami gratis autoalojado) y activarlo.

### Usabilidad — corregido en esta iteración
- [x] `scroll-margin-top: 5rem` en todas las secciones: al usar un enlace de ancla, el título
      ya no queda oculto detrás del header fijo de 80 px.
