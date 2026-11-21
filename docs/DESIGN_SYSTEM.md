# MV Spatial Design System

Estado: Fase 9.3A y su refinamiento final implementados y aprobados visualmente.
El estado local de `main` en `dd271b3` contiene este sistema; la Fase 9.4.0 no
revalidó de forma independiente el despliegue público.

## Dirección

MV Spatial usa la dirección **Spatial Instrument Panel**: una interfaz técnica,
espacial y editorial que prioriza claridad profesional antes que ornamentación.
La geometría angular del símbolo MV inspira encuadres, cortes y líneas de
instrumentación. No se utilizan efectos de neón intensos, scroll hijacking ni
movimiento obligatorio.

## Paleta implementada

### Firma de marca

- Esmeralda principal de marca: `#20D58F`.
- Esmeralda profundo de marca: `#07844F`.
- Grafito: `#0B1015`.
- Profundidad verde: `#15231F`.
- Blanco frío: `#F4F7F5`.

La geometría y los colores de los SVG aprobados en `assets/brand/` no se
modifican. En tema claro, el esmeralda interactivo se oscurece a `#057346`
para asegurar contraste AA con texto blanco frío.

### Tema oscuro

- Fondo principal: `#0B1015`.
- Superficie: `#0F1816`.
- Superficie profunda: `#15231F`.
- Borde: `#283F37`.
- Texto principal: `#F4F7F5`.
- Texto secundario: `#B7C9C1`.
- Acento interactivo: `#20D58F`.
- Acento de texto: `#48E6A8`.

### Tema claro

- Fondo principal: `#F4F7F5`.
- Superficie: `#FFFFFF`.
- Superficie profunda: `#E7EFEB`.
- Borde: `#C1D3CA`.
- Texto principal: `#0B1512`.
- Texto secundario: `#3D5A4F`.
- Acento interactivo y de texto: `#057346`.

Los colores de error, advertencia, éxito y los colores propios de ilustraciones
de proyectos se conservan por su función semántica o identidad original.

## Tipografía

- `Space Grotesk`: títulos y encabezados.
- `Inter`: interfaz y texto de lectura.
- Monospace del sistema: índices, coordenadas, códigos de idioma y metadatos
  técnicos breves.

La escala del Hero usa `clamp()` y se adapta sin anchos fijos. Los textos largos
deben permitir salto de línea; `white-space: nowrap` se limita a la marca del
header donde el espacio está controlado.

## Geometría y superficies

- Radios principales: entre `0.6rem` y `0.9rem`.
- Los cortes diagonales se reservan para el instrumento visual del Hero.
- Los paneles usan bordes discretos y sombras de profundidad, no halos de neón.
- La retícula combina líneas de 72 px y puntos de 18 px con opacidad baja.
- El símbolo MV se presenta sin alterar su geometría.

## Componentes

### Botones

- `Primary`: fondo esmeralda, contraste alto y sombra corta.
- `Secondary`: superficie sólida y borde semántico.
- `Ghost`: fondo transparente y borde discreto.
- Altura táctil mínima: 44 px, salvo variantes compactas secundarias de 40 px.
- Hover: elevación máxima de 2 px; active vuelve a la posición base.
- Disabled: opacidad reducida, sin elevación ni sombra.

### Tarjetas

- Fondo de superficie y borde semánticos.
- Elevación hover máxima de 3 px.
- La primera tarjeta de proyectos recibe una línea esmeralda para reforzar su
  prioridad sin afirmar un estado nuevo del proyecto.
- Las portadas SVG mantienen sus colores originales y siguen siendo mockups,
  no capturas reales.

### Badges y metadatos

- Los badges se reservan para categoría, estado o nivel profesional.
- El esmeralda identifica foco principal; advertencia y gris mantienen su
  semántica.
- Monospace solo se usa en metadata técnica puntual.

### Formularios

- Campos sobre superficie profunda, con texto y placeholder legibles.
- Foco mediante el anillo global de 2 px.
- Errores y estados mantienen los tokens semánticos existentes.
- La integración y el comportamiento de envío no cambian en esta fase.

## Hero

El Hero de escritorio usa una composición editorial de dos columnas:

1. Posicionamiento, resumen profesional, CTA, CV y formación.
2. Instrumento MV estático y decorativo preparado para una futura experiencia.

El instrumento no representa una demo ni una funcionalidad disponible. En
móvil se oculta para priorizar mensaje y acciones, sin dejar espacio vacío.

El titular conserva una única estructura `h1` y separa sus dos especialidades
en bloques equivalentes: «Unity Developer» y «XR / VR Developer». La columna de
texto gana proporción frente al instrumento y la escala responsive usa
`clamp(3rem, 5vw, 4.75rem)`, de modo que ambas especialidades ocupan una línea
cada una cuando el ancho lo permite, sin aplicar `nowrap` ni impedir el wrapping
natural. La etiqueta decorativa «MV / 001 — SPATIAL DEVELOPER» se retiró para
evitar redundancia y el espaciado superior se equilibra desde la composición.

## Footer

- El cierre reutiliza el footer existente y no duplica el formulario ni una
  llamada extensa a contacto.
- La identidad usa la variante MV Spatial correspondiente al tema, el nombre de
  marca y la frase «Construyendo mundos. Explorando nuevas realidades.».
- Conserva cinco accesos internos: Inicio, Tecnologías, Proyectos, Formación y
  Contacto; sus filas permiten wrapping en anchos reducidos.
- «Volver al inicio» es una acción explícita y accesible hacia `#inicio`.
- Los metadatos incluyen el crédito de diseño y desarrollo y el copyright del
  año vigente.

## Header responsive

- Marca, selector de tema y menú viven en grupos flexibles explícitos.
- El CTA de escritorio aparece desde 1280 px.
- Bajo 640 px se oculta el subtítulo profesional de la marca.
- Bajo 360 px se conserva el símbolo y se oculta el texto de marca.
- Los enlaces del footer permiten wrapping para no imponer un ancho mínimo.

Los anchos objetivo son 320, 360, 390, 414, 768, 1024 y 1440 px. El documento
no debe superar el ancho de su viewport.

## Accesibilidad y movimiento

- Contraste objetivo: WCAG 2.2 AA, 4.5:1 para texto y 3:1 para UI gráfica.
- Foco visible en enlaces, botones, inputs, textarea, select y elementos con
  `tabindex`.
- Targets principales de al menos 44 px.
- Navegación, menú y modal conservan teclado y Escape.
- `prefers-reduced-motion: reduce` reduce animaciones y transiciones a 0.001 ms
  y desactiva desplazamiento suave.
- El Hero mantiene el contenido completo cuando su pieza visual decorativa no
  se muestra.

## Reglas de uso

- No introducir cian, azul o violeta como acentos dominantes.
- No crear un segundo sistema de temas; los valores efectivos viven en
  `src/input.css` y `theme.js` conserva la gestión de preferencias.
- Usar variables semánticas antes que colores hardcodeados.
- No presentar recursos conceptuales como capturas o demos reales.
- Editar `src/input.css` y regenerar `dist/styles.css`; no editar el CSS
  compilado manualmente.
- Mantener la carga inicial sin WebGL hasta que exista una fase aprobada.
