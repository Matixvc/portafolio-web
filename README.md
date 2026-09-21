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
│   └── icon-card.html      # Plantilla para generar assets/apple-touch-icon.png (build time)
├── js/
│   └── main.js             # Menú móvil, filtros de proyectos, modal y formulario
├── dist/
│   └── styles.css          # CSS compilado y minificado (no editar a mano)
├── assets/
│   ├── favicon.svg
│   ├── apple-touch-icon.png
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
npm run set-url -- https://tudominio.com   # cambia el dominio en todos los metadatos
```

> Cada vez que edites `index.html`, `js/main.js` o `src/input.css` **hay que ejecutar `npm run build`**
> (o tener `npm run watch` corriendo) para que los cambios de clases/estilos se vean.

---

## ⚠️ PASO PENDIENTE 1: activar el envío real del formulario

El formulario ya no simula un envío: hoy funciona con **fallback por correo** (abre el cliente de
correo del visitante con el mensaje redactado). Para recibir los mensajes directo en tu bandeja:

1. Crea una cuenta gratuita en [Formspree](https://formspree.io) o [Web3Forms](https://web3forms.com).
2. Abre `js/main.js` y completa las constantes del inicio del bloque de contacto:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/tu-id-aqui';   // Formspree
// o
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';     // Web3Forms
const WEB3FORMS_ACCESS_KEY = 'tu-access-key';                 // solo Web3Forms
```

3. Ejecuta `npm run build` (no hace falta para el JS, pero mantiene todo consistente) y prueba
   enviando un mensaje desde el sitio publicado.

Prueba obligatoria: enviar un mensaje real y confirmar que llega a **Matias.villalobos.dev@gmail.com**.

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
- [x] Skip-link "Saltar al contenido" y `aria-pressed` en los botones de filtro.
- [x] `:focus-visible` visible en todos los controles (se eliminaron los `focus:outline-none`).
- [x] Textos `text-[10px]` (15 usos) y `text-[11px]` subidos a 12 px o más.
- [x] `prefers-reduced-motion` respetado (`animate-ping` detenido, `scroll-smooth` desactivado, transiciones neutralizadas).
- [x] Artefactos corregidos: clase inválida `fa-[#000]` eliminada y `` `IDamageable` `` renderizado como `<code>`.
- [x] `rel="noopener noreferrer"` en todos los enlaces externos (WhatsApp incluido).
- [x] Tarjetas de proyecto sin `onclick` inline (delegación por `data-project` en `js/main.js`).
      La renderización total desde `projectDetails` queda como mejora opcional futura.

### Fase 3 — Performance
- [ ] Reemplazar los 41 iconos de FontAwesome por SVG inline y eliminar esa hoja de estilos.
- [ ] Reducir las 8 variantes de Google Fonts y hacer `preload` de la principal.
- [ ] Aligerar `blur-[130px]` y `backdrop-filter` en móviles.

### Fase 4 — Contenido
- [ ] Capturas/GIF + video (30-60 s) por proyecto, link al repositorio y build jugable.
- [ ] Rol concreto y métricas ("60 FPS en Quest 2", "−30 % draw calls").
- [ ] Botón "Descargar CV" (PDF) en el hero y en contacto.
- [ ] Foto de perfil en la sección "Sobre mí" (hoy hay un icono de Unity).
- [ ] Sección de educación/experiencia con fechas y versión en inglés.

### Fase 5 — Medición
- [ ] Analítica ligera (Plausible / Umami) para ver visitas de reclutadores.
