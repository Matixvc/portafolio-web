# Estado del proyecto

## Resumen ejecutivo (actualización 2026-11-20 — Fase 9.4.0)

**Estado Git comprobado localmente antes de editar:**
- Rama activa: `feature/portfolio-consolidation`.
- Rama estable: `main`.
- Último commit comprobado localmente: `dd271b3a48ac2eaee6718e7b43cc0b32e676d9c5`.
- `HEAD`, `main`, `origin/main`, `origin/feature/portfolio-consolidation` y
  `feature/portfolio-consolidation` apuntaban localmente a `dd271b3`.
- El árbol de trabajo estaba limpio, sin cambios staged ni archivos pendientes.

Las referencias `origin/*` anteriores son referencias remotas locales. La consulta
en vivo con `git ls-remote` falló por `SEC_E_NO_CREDENTIALS`; el navegador nativo
tampoco estuvo disponible y el lector web solo devolvió contenido cacheado anterior.
Por ello, esta fase no certifica la coincidencia actual con GitHub ni volvió a probar
el contenido desplegado en GitHub Pages.

**Configuración de publicación registrada:**
- Rama y carpeta: `main` → `/ (root)` mediante Deploy from a branch, con HTTPS.
- URL: https://matixvc.github.io/portafolio-web/
- Esta configuración cuenta con comprobaciones históricas en las entradas previas,
  pero no fue revalidada de forma independiente durante la Fase 9.4.0.

**Arquitectura actual:**
- HTML estático, JavaScript vanilla y Tailwind CSS 3.
- `dist/styles.css` generado desde `src/input.css`.
- `assets/icons.svg` generado desde `scripts/build-icons.mjs`.
- `js/theme.js` es la única fuente de gestión de preferencias dark/light/system.
- Spatial Instrument Panel, Project Archive y cuatro modales Project Viewer.

**Estado implementado en el commit local `dd271b3`:**
- Fases 0–9.2: base técnica, contenido profesional, temas, accesibilidad, CV,
  formación y marca MV Spatial.
- Fase 9.3: sistema visual Spatial Instrument Panel, Project Archive interactivo,
  cuatro proyectos y Project Viewer.
- Fase 9.4A: sección Acerca de mí con composición editorial, fotografía real,
  formación académica en curso y colaboración XR Meta Quest 3 bajo NDA. El diseño
  fue aprobado visualmente por el usuario.
- Fase 9.4.0: consolidación documental previa al desarrollo. Solo autoriza cambios
  en README.md, README.es.md, AGENTS.md, docs/PROJECT_STATUS.md y
  docs/DESIGN_SYSTEM.md; no inicia la Fase 9.4B.

**Proyectos documentados:**
1. PhysicsVR Prototype — prototipo Unity/C# en desarrollo; todavía no es funcional
   con visor VR.
2. Basura Fighters — roguelike de navegador con JavaScript y Canvas 2D; repositorio
   y demo públicos.
3. App Mobile / NexusDay — proyecto móvil con React Native y Expo; repositorio público.
4. Jefferson Motel — recreación 3D en desarrollo con Blender; sin demo ni repositorio
   públicos. La integración con Unity es una posibilidad futura, no un logro completado.

**Roadmap aprobado, todavía no implementado:**
- 9.4B — Rediseño de Habilidades y Tecnologías.
- 9.4C — Integración de Trayectoria en Acerca de mí.
- 9.4D — Reorganización visual, navegación y validación.
- 9.5 — Multimedia real de proyectos.
- 9.6 — Calidad, accesibilidad y rendimiento.
- 9.7 — Experiencias interactivas.

**Límites vigentes:**
- No existe una suite `npm test` ni un lint configurado.
- Lectores de pantalla, navegadores distintos de Edge, hardware móvil real y entrega
  efectiva del formulario permanecen fuera de las comprobaciones realizadas.
- Los PDF ES/EN se conservan; cualquier corrección de su contenido requiere un alcance
  aprobado por separado.

### Ejecución de la Fase 9.4.0 — 2026-11-20

**Inconsistencias corregidas:**
- README.md mezclaba idiomas, duplicaba el estado de Pages, documentaba tres proyectos
  y mantenía la Fase 9.3 como futura.
- README.es.md repetía el estado anterior, omitía Jefferson Motel y no contenía el
  roadmap vigente.
- AGENTS.md situaba las fases 9.3 y 9.4A fuera de `main`.
- El resumen ejecutivo de este documento usaba `f8bf6ad`, describía trabajo ya
  comprometido como local y conservaba una referencia obsoleta al tamaño de la foto.
- docs/DESIGN_SYSTEM.md mantenía la aprobación visual como pendiente.

**Correcciones por archivo:**
- README.md y README.es.md: estado equivalente, cuatro proyectos reales, limitación
  de verificación remota, sistema visual implementado y roadmap 9.4B–9.7.
- AGENTS.md: estado local vigente de `main` y cautela explícita sobre Pages/remoto.
- docs/PROJECT_STATUS.md: resumen ejecutivo actual, historial delimitado y registro
  de esta fase sin alterar los hechos cronológicos anteriores.
- docs/DESIGN_SYSTEM.md: aprobación visual y alcance de verificación actualizados.

**Validaciones ejecutadas:**
- Diff completo de los cinco documentos revisado.
- Alcance Git: exactamente los cinco archivos autorizados; cero cambios staged y
  ningún archivo funcional modificado.
- `git diff --check`: correcto.
- Tablas de proyectos: 4/4 entradas en README.md y README.es.md.
- Roadmap: 6/6 fases planificadas en cada README y presencia comprobada en el resumen.
- README.md: cero marcadores de prosa española comprobados; los nombres propios y
  términos técnicos se preservan.
- Los cinco documentos se leyeron como UTF-8 sin caracteres de sustitución.

**Pruebas no ejecutadas y motivo:**
- No se ejecutaron build, sintaxis JavaScript ni QA visual: esta fase no modifica
  código, estilos, recursos generados ni contenido funcional.
- No se verificaron remoto o GitHub Pages en vivo por la limitación de acceso ya
  registrada; no se infiere su estado desde las referencias remotas locales.

No se instalaron dependencias ni se hicieron commit, push, merge, cambio de rama,
despliegue o inicio de la Fase 9.4B.

---

## Historial de fases previas

Las entradas siguientes se conservan como registro cronológico. Sus ramas, commits,
pendientes y estados describen el momento en que fueron escritos; no sustituyen el
resumen ejecutivo vigente de la Fase 9.4.0.

Fecha de inicio del registro histórico: 2026-11-13 (America/Santiago).
Base histórica inicial: `30750f5` — Cambio de CVs.

## Base confirmada
- Sitio estático con HTML, JavaScript vanilla y Tailwind CSS.
- Lockfile: Tailwind 3.4.19 y Font Awesome 6.4.0.
- Publicación vigente confirmada: main / raíz en GitHub Pages, mediante HTTPS. El autor confirmó el cambio de fuente; el deployment y la respuesta pública se verificaron antes de actualizar los README.
- Fases 0–1: base técnica, CSS compilado, SEO y formulario.
- Fase 2: accesibilidad de menú/modal, skip-link y movimiento reducido.
- Fase 3: sprite local, fuentes recortadas y reducción de blur móvil.
- Fases 4–5: CV, formación, detalles de proyectos y analítica opcional.
- Hero actualizado y dos PDF bilingües presentes antes de esta etapa.
- No existe evidencia documental suficiente para certificar toda la Fase 6.

## Fase activa
Fase 8, Etapa 1: identidad profesional implementada dentro del alcance aprobado.
Fase 7, Etapas 1.1 y 1.2: completadas y consolidadas en `42ba4f4`.
Los apartados de Fase 7 conservan su registro histórico de validaciones.

## Punto de partida y respaldo
- Seis archivos ya modificados: README.md, index.html, js/main.js, src/cv.html,
  src/input.css y tailwind.config.js; sin cambios staged ni archivos no rastreados.
- Respaldo verificado por SHA-256 antes de editar:
  `%TEMP%/portafolio-web-backup-20261112-230355`.
- Incluye los seis archivos, git-status.txt, working-tree.diff y staged.diff.

## Problemas detectados
- CSS compilado anterior al Hero y los tokens de temas.
- Tema claro incompleto y preferencia Sistema ausente.
- Selector de tema solo móvil y símbolo moon ausente.
- Mojibake en textos y selector del scroll-spy de escritorio.
- Acceso no protegido a localStorage y resolución tardía del tema.

## Cambios de esta etapa
- js/theme.js concentra la inicialización temprana y las preferencias dark/light/system.
- Fallback oscuro, validación de valores y lectura/escritura tolerante a fallos de storage.
- data-theme efectivo, clase dark y color-scheme sincronizados.
- Cambios del sistema aplicados solo con preferencia system.
- Selector nativo único, accesible por teclado y visible en todos los tamaños.
- Cabecera con navegación de escritorio desde xl para dar espacio al selector.
- Tokens semánticos para superficies, textos, bordes, formularios y estados.
- Tema claro completado en cabecera, Hero, tarjetas, modal, contacto y footer.
- Restauradas 57 secuencias UTF-8 mal codificadas en main.js, incluido scroll-spy.
- Generador y sprite incluyen moon, sun y desktop; CSS regenerado con npm run build.
- Configurada opacidad 8 para compilar los acentos existentes del Hero.
- Corregido un cierre de div ausente del Hero, con aprobación adicional del autor:
  Formación vuelve a quedar fuera de la fila de botones y no se recorta en tablet.
- AGENTS.md documenta las reglas permanentes sin cambiar README ni plantilla de CV.
- Con aprobación adicional del autor, actualizadas las dos rutas de CV en el Hero
  y sus comprobaciones HEAD en main.js para usar los nuevos nombres ES/EN.

## Validaciones
- Respaldo inicial de los seis archivos verificado por SHA-256.
- npm.cmd ci con caché temporal: 73 paquetes instalados, package.json/lockfile intactos.
- El primer intento falló por permisos de la caché global; no se cambiaron versiones.
- npm.cmd run build genera 34 símbolos y CSS minificado correctamente.
- node --check: main.js, theme.js, build-icons.mjs y tailwind.config.js correctos.
- git diff --check sin errores.
- IDs únicos, anclas válidas y 33 símbolos estáticos/dinámicos comprobados.
- Comparación con respaldo: README y src/cv.html idénticos; texto del Hero,
  contenido/estructura de proyectos y cambios previos de repositorio/JSON-LD conservados.
- Edge headless real: 25 comprobaciones aprobadas; sin excepciones JavaScript.
  Los HEAD de los CV antiguos devolvieron 404 tras su sustitución externa;
  incidencia corregida después con aprobación del autor.
- Responsive oscuro/claro: 390, 768, 1280 y 1440 px; cabecera y Hero dentro del viewport.
- Oscuro por defecto, valor inválido, persistencia y preferencia explícita comprobados.
- Sistema comprobado con emulación de prefers-color-scheme en ambas direcciones.
- localStorage bloqueado mediante SecurityError: temas, año y menú siguen operativos.
- Selector con teclado/focus visible, prefers-reduced-motion y scroll-spy de ambas
  navegaciones comprobados; modal abre y Escape restaura el foco en ambos temas.
- Fondo y texto de formulario/footer comprobados en ambos temas.
- Capturas inspeccionadas de Hero móvil/tablet/escritorio, tarjetas, contacto y modal.
- Tokens de texto del tema claro sobre tarjeta clara: contraste calculado >= 4.55:1.
  No equivale a una certificación completa de contraste de todos los estados.
- Evidencia y script temporal, fuera del proyecto:
  `%TEMP%/portafolio-theme-qa` (results.json y PNG).
- El navegador integrado no estaba disponible; Edge requirió ejecutar QA fuera
  del sandbox para que respondiera el canal de automatización.
- El build avisa de caniuse-lite desactualizado; no se actualizó por alcance.
- Cierre de CV: cuatro comprobaciones adicionales en Edge aprobadas: rutas ES/EN,
  botones habilitados con atributo download, ambos HEAD con HTTP 200 y sin excepciones JS.
- Recursos locales y anclas verificados de nuevo; ninguna ruta de CV antigua permanece
  en index.html/main.js. No fue necesario recompilar CSS: no cambiaron las clases.
- SHA-256 de los nuevos PDF idéntico antes y después de actualizar las rutas.
- Evidencia adicional: cv-results.json en el directorio temporal de QA.
- Sin commits, push, merge ni publicación.

## Incidencia externa durante QA
- Se retiraron los PDF CV_Matias_Villalobos_XR_VR_Espanol.pdf y
  CV_Matias_Villalobos_XR_VR_English.pdf, y aparecieron nuevos PDF
  Matias_Villalobos_CV_Unity_XR_ES.pdf y Matias_Villalobos_CV_Unity_XR_EN.pdf.
- Ningún comando de esta etapa escribió ni eliminó PDF.
- El autor autorizó actualizar solo las rutas en index.html/main.js; los enlaces
  nuevos funcionan y no se tocó el contenido de los documentos.

## Etapa 1.2 — validación visual y pulido aprobado
- Respaldo previo verificado por SHA-256:
  `%TEMP%/portafolio-etapa12-backup-20261112-234743`.
  Incluye HTML, CSS fuente/compilado, theme.js, este documento, sprite y diff previo.
- Implementadas únicamente las cuatro mejoras aprobadas: superficie clara de la ficha,
  degradado claro del titular de Sobre mí y badge de demo, bordes del formulario y
  disponibilidad del selector después de sincronizar etiqueta/icono.
- data-theme-ready es un atributo interno: visibility conserva el espacio del control
  mientras está oculto. Sin nuevas API públicas ni lógica duplicada de preferencias.
- Correcciones de color limitadas al tema claro; Hero, textos y composición intactos.
- Archivos de esta etapa: index.html, src/input.css, js/theme.js, dist/styles.css y
  docs/PROJECT_STATUS.md. El sprite regenerado conserva exactamente su contenido.
- npm.cmd run build correcto; sin instalaciones ni cambios de versiones/lockfile.
- node --check en theme.js/main.js y git diff --check correctos.
- Comparación con respaldo: HTML idéntico salvo tres clases de presentación;
  anclas y recursos locales válidos. No se tocaron PDF, README ni plantilla de CV.
- Edge headless: repetidas las 25 comprobaciones de regresión, todas aprobadas
  (temas, persistencia, teclado/foco, sistema emulado, storage bloqueado, modal,
  movimiento reducido, scroll-spy y responsive); sin excepciones JavaScript.
- Capturadas las seis secciones a 390/768/1440 px en ambos temas; revisadas vistas
  de Hero, perfil, tarjetas, formulario y menú móvil. También pasa layout a 1280 px.
- Seis filmstrips: oscuro/claro guardados, Sistema oscuro/claro, primera visita
  sin preferencia y recarga clara. Caché desactivada, latencia 200 ms, 150 KB/s.
- No se observó tema incorrecto desde el primer contenido pintado. El selector
  nunca aparece con etiqueta/icono incorrectos; geometría idéntica inmediatamente
  antes y después de hacerse visible. Comprobación con cuadros y muestras tempranas.
- Contraste efectivo claro después de corregir: nombre 16.30:1; rol 4.89:1;
  formación 6.92:1; mínimo del degradado 5.26:1; badge 8.03:1;
  bordes de campos 4.55:1 exterior / 4.34:1 interior; foco 5.12:1.
- Mediciones sobre fondos renderizados, incluidas transparencias; repetidos estados
  hover/focus/active. Bordes decorativos con texto legible y gráficos incidentales
  de mockups no se clasifican como fallos; controles inactivos tienen excepciones.
- Evidencia antes: carpeta temporal portafolio-theme-qa/stage12.
  Evidencia después: portafolio-theme-qa/stage12-after, dentro de TEMP; incluye PNG,
  filmstrips.json, control-details.json y verification-summary.json.
- Límites: Edge headless, sistema emulado y muestreo por fotogramas; no constituye
  certificación universal ni descarta cambios subfotograma. Formularios no enviados.
- La sustitución de mockups por capturas reales sigue diferida. Sin commits ni publicación.

## Pendientes fuera del alcance
- Pruebas manuales con lector de pantalla y en Firefox/Safari, dispositivo móvil real
  y cambios del sistema operativo real (se utilizó emulación de navegador).
- Auditoría exhaustiva de contraste, especialmente gradientes y estados heredados oscuros.
- Envío real de formulario no probado; no se enviaron mensajes de prueba.
- npm run cv conserva su salida histórica; README distingue ahora esa plantilla de los PDF ES/EN.
- Actualizar en una fase autorizada los PDF ES/EN para corregir el alcance real de PhysicsVR.
- Protección adicional de Web3Forms pendiente: CAPTCHA validado por el servicio,
  honeypot estándar y restricción de dominio según plan. Access key pública por diseño.
- Capturas/GIF reales de proyectos; actualmente hay mockups SVG.
- Verificación externa de repositorios y de configuración de GitHub Pages.
- Versión en inglés del sitio y casos de estudio con URL propia.

## Fase 8, Etapa 1 — identidad profesional
- Estado inicial limpio, rama etapa1-integridad, commit `42ba4f4`.
- Respaldo de los cinco archivos del alcance verificado por SHA-256:
  `%TEMP%/portafolio-fase8-20261113-002111`.
- Titular unificado: Unity Developer | XR / VR Developer, en Hero, perfil,
  cabecera, metadatos y plantilla. Sin Trainee ni «en formación» como posicionamiento.
- Sobre mí centrado en proyectos personales/académicos, gameplay e interacción 3D.
- Disponibilidad centralizada en Contacto: Junior o práctica profesional;
  inmediata, part-time/full-time, remoto/híbrido/presencial en Santiago.
- Formación confirmada por el autor: inicio 2021, retomada en 2026,
  egreso estimado 2028. Sin afirmar titulación ni mencionar congelación.
- Tarjetas existentes conservadas con categorías descriptivas, sin autoevaluaciones.
  Unity y C# principales; gameplay/interacción 3D y VR/XR como enfoque;
  Unreal Engine, Python, Git/GitHub, Blender y Photoshop como complementos.
  Retiradas atribuciones de técnicas de arquitectura no comprobadas por proyecto.
- PhysicsVR corregido en tarjeta, modal, README y plantilla: interacción física
  en desarrollo, futura integración VR, todavía no funcional con visor.
- Colaboración académica bajo NDA descrita únicamente como pruebas funcionales
  en Meta Quest 3 y reporte de incidencias. Independiente de PhysicsVR y sin
  atribuir empleo formal, desarrollo integral ni revelar información interna.
- README documenta ambos PDF, theme.js y comandos reales. La plantilla histórica
  se actualizó editorialmente; no se ejecutaron npm run cv ni npm run og.
- No cambiaron clases CSS ni estilos: no fue necesario regenerar el build.
- Edge headless local: seis vistas 390/768/1440 px en oscuro/claro, sin scroll
  horizontal del documento y con titular dentro del viewport; capturas revisadas.
  Sin excepciones JS, IDs duplicados ni anclas rotas. Recursos locales presentes.
- Modal PhysicsVR abierto y contenido comprobado; Escape enviado para cerrarlo.
  Sintaxis main.js/theme.js y git diff --check correctos. Formulario no enviado.
- Evidencia: qa.mjs, qa-results.json y seis PNG en el directorio temporal del respaldo.
- PDF intactos por SHA-256, antes/después:
  EN: 84D80D73007508833C9876DC52BBB2BBCF882927933BCFD34739B60729305C89.
  ES: 2EA02319FB95C2877E52BA8720F0A43B38CFFEAA3A03982E5DBDF2496BAD159E.
- Discrepancias conservadas en PDF: PhysicsVR se presenta como prototipo VR,
  aunque el autor confirma que todavía no es funcional con visor. Los PDF incluyen
  40 Days of Light y tecnologías/técnicas más detalladas que esta versión web.
- 40 Days of Light: proyecto personal roguelike en desarrollo con ayuda de IA;
  contribuciones del autor en programación, mecánicas, personajes y modelos.
  Pendiente de preparar alcance verificable y evidencia que desee publicar.
  No se añadió tarjeta, demo, captura, métrica ni enlace público al sitio.
- Límite: comprobaciones responsive en Edge headless, no dispositivos reales.
  La plantilla no se exportó ni se certificó su paginación A4.
- Sin dependencias nuevas, cambios del sistema de temas, formulario, despliegue,
  commits, push ni publicación. Imagen OG existente conservada; su titular gráfico
  abreviado sigue pendiente de sincronización si se autoriza regenerarla.

## Próxima fase propuesta
### Fase 9, Etapa 1 — tema predeterminado del sistema
- Base: rama etapa1-integridad, commit b15a84f, Git limpio.
- js/theme.js inicia la preferencia en system. Primera visita, valores inválidos
  y storage inaccesible siguen prefers-color-scheme; preferencias manuales intactas.
- Se conserva el script bloqueante antes del CSS y la sincronización del selector
  responsive único, etiqueta Sistema e icono desktop. Sin cambios de HTML o estilos.
- Edge local: primera visita con sistema claro, valor inválido, persistencia manual,
  cambios del sistema, selector y layouts móvil/escritorio comprobados con el QA existente.
- Prueba síncrona del script temprano: 10 combinaciones de sistema oscuro/claro
  y storage vacío/inválido/bloqueado/manual; tema, selector e icono correctos.
- node --check y git diff --check correctos. No se regeneraron CSS ni PDF.
- Limitación: se comprobó el estado síncrono previo al CSS, pero no se capturó
  un nuevo filmstrip de primera pintura; ausencia de flash no certificada visualmente.
- Evidencia temporal: portafolio-theme-qa/phase9.mjs y stage12-after-regression.json.
- Esta autorización sustituye la regla histórica de AGENTS.md de fallback oscuro;
  AGENTS.md permanece intacto por el alcance limitado de esta etapa.
- Sin dependencias, commits, push ni publicación.

## Recuperación autorizada y cierre de Fases 9.1 / 9.2
- Copia original conservada: D:/Proyectos/portafolio-web,
  portfolio/professional-refresh en 20b49ad. Sin aplicar ese commit a la recuperación.
- Snapshot protegido: recovery/mv-spatial-snapshot apunta a
  623cac448a1c22801e2e498ecbfe6b0354eee6df. refs/stash intacta.
- Bundle permanente completo verificado mediante git bundle verify y list-heads:
  D:/Proyectos/Backups/portafolio-web/portafolio-web-20261113-013227-7452daf8.bundle.
  Incluye snapshot, ambas ramas y 32 referencias; historial completo.
- Worktree aislado: D:/Proyectos/portafolio-web-recovery, rama recovery/mv-spatial,
  base b15a84f. Recuperados solo assets/brand, index.html, src/input.css,
  dist/styles.css, js/theme.js y este documento. Todos estaban en el árbol principal
  del snapshot (dos padres, sin tercer árbol de archivos no rastreados).
- Hashes de cinco SVG, dos referencias PNG y ambos CV comparados byte por byte
  contra el snapshot: todos coinciden. Los PDF conservan los SHA-256 anteriores.
- Referencia oscura SHA-256:
  ece06c0529051812bf27ec0e25df6e7964f99823adf51f42b3e9fb29a4e56512.
  Referencia auxiliar SHA-256:
  fc3505406ca8678c7290cf0c7fa4daab055fe8a53dccf585840157f6c4fd3dd7.
- MV Spatial: identidad personal inspirada en videojuegos, desarrollo Unity,
  tecnología XR y geometría espacial. Moderna, tecnológica, futurista, elegante,
  profesional y creativa; firma visual verde esmeralda.
- Recursos: mv-spatial.svg, variantes dark/light/monochrome y favicon.svg.
  SVG con un path de tres formas, sin raster, filtros, sombras ni fondo dibujado.
  Conserva M superior, V inferior y hexágono abierto. Variantes autónomas de
  315–383 bytes para poder reutilizarlas sin dependencias externas.
- Colores: #20D58F oscuro/principal, #07844F claro, currentColor monocromático;
  favicon adapta su relleno a prefers-color-scheme. Paleta general sin cambios.
- Encabezado con espacio reservado 40×44 px, móvil 32×38 px; símbolo decorativo
  aria-hidden, imágenes alt vacío y nombre profesional visible en el enlace al inicio.
- Contraste de rellenos opacos: 10.42:1 sobre #08090A y 4.75:1 sobre blanco;
  sobre fondos de marca #0B1015 / #F4F7F5: 9.99:1 / 4.40:1.
- Sin node_modules en el nuevo worktree: no se instalaron dependencias. Compilador
  existente usado por ruta absoluta desde el worktree, salida temporal; resultado
  idéntico byte por byte al CSS compilado recuperado. package/lock intactos.
- QA nuevo, con servidores exclusivos de raíz portafolio-web-recovery:
  nueve vistas 390/768/1440 × oscuro/claro/Sistema, sin desbordamiento del documento;
  recursos locales presentes, JSON-LD válido, sin anclas rotas ni IDs duplicados.
  Comparación visual referencia/SVG y lectura a 16/32/48 px revisadas en PNG nuevo.
- 25 pruebas de regresión Edge aprobadas: persistencia, storage inválido/bloqueado,
  Sistema en ambas direcciones, teclado/foco, menús, modal y movimiento reducido.
  Sin excepciones JS ni errores de red en esa ejecución. Formulario no enviado.
- Siete filmstrips nuevos: manual oscuro/claro, Sistema oscuro/claro, primera visita
  sin preferencia en ambos sistemas y recarga clara. Caché desactivada, 200 ms,
  150 KB/s. Entre 8 y 10 cuadros por caso. Muestras de contenido: cero temas
  incorrectos y cero variantes visibles incorrectas; caja del logo estable 40×44.
  Cuadros tempranos claro/oscuro revisados: no se observó flash de tema o logo.
- Evidencia nueva: %TEMP%/portfolio-recovered-qa/,
  qa-results.json, comparación, encabezados y stage12-after/filmstrips.json.
  Respaldo temporal portafolio-brand-phase92 preservado, sin reutilizarlo como QA final.
- Fases 9.1 y 9.2 recuperadas y validadas localmente. Sintaxis y diff --check correctos.
- Límites: Edge headless y sistema emulado; muestreo no descarta fenómenos
  subfotograma. A 16 px se reconoce la silueta, con menos separación de detalles
  que a 32/48 px. No se certifica compatibilidad visual con todos los navegadores.
- Retirada de WhatsApp de 20b49ad: decisión pendiente, no integrada.
- Etapas futuras no implementadas: sistema de diseño visual; fondo Hero original;
  Projects Showcase; portadas/imágenes/videos/modelos 3D; animaciones/interacciones;
  banners profesionales y Open Graph.
- Sin commits de implementación, push, publicación, borrado de ramas ni respaldos.

## Consolidación autorizada — 2026-11-13

### Decisiones vigentes
- Base definitiva: versión recuperada aprobada hasta fases 9.1 y 9.2, sobre b15a84f.
- Rama de desarrollo: feature/portfolio-consolidation. Carpeta definitiva acordada: D:/Proyectos/portafolio-web.
- Flujo futuro: main estable y ramas temporales feature/*; sin develop permanente.
- Publicación actual: portfolio/professional-refresh, commit 20b49ad0f3a704e92b79a86d4d65b240f6733b8f. Mantener Pages intacto; no merge ni push a esa rama o a main.
- Fase 9.3 (sistema de diseño visual MV Spatial) no iniciada.
- GitHub será el respaldo principal tras verificar coincidencia de commits. No crear nuevos respaldos permanentes innecesarios.

### Auditoría y preservación
- Original limpio en portfolio/professional-refresh / 20b49ad; recuperación en recovery/mv-spatial / b15a84f, con los cambios esperados de marca y tema sin commit.
- Staging inicial vacío. Ambas carpetas son worktrees del mismo repositorio; el almacén Git está en la carpeta principal.
- Fetch de origin completado; sin nuevos commits remotos ni divergencias respecto del estado esperado. main/origin-main siguen en 30750f5; origin/etapa1-integridad en 30750f5; origin/portfolio/professional-refresh en 20b49ad.
- Bundle existente verificado de nuevo: Backups/portafolio-web/portafolio-web-20261113-013227-7452daf8.bundle (relativo al directorio padre de los proyectos). Contiene historial completo y 32 referencias, incluido snapshot 623cac448a1c22801e2e498ecbfe6b0354eee6df. Sin nuevo backup permanente.
- Ramas, snapshot, referencias de checkpoints, stash e historial conservados. No force push, reset, clean, rebase ni borrado de referencias.

### Implementación y documentación
- e0a18eb: feat: establish MV Spatial brand identity and system theme. Staging explícito, inventario y diff --cached --check revisados antes del commit.
- feature/portfolio-consolidation creada desde e0a18eb, no desde la versión pública antigua.
- bf5c85b: fix: preserve WhatsApp removal on recovered portfolio. Revisión completa de 20b49ad: exclusivamente retirada de enlaces, mensajes alternativos, icono, estilos y referencias a WhatsApp; integración manual acotada, sin cherry-pick ni restaurar código antiguo.
- Retirados cinco enlaces de contacto de la versión recuperada, el texto asociado, la constante y los mensajes alternativos JS, la referencia de la plantilla histórica, el icono fuente y la regla CSS obsoleta. Sprite y CSS regenerados. Correo, formulario, GitHub y LinkedIn conservados.
- README.md reescrito en inglés y README.es.md equivalente: logo aprobado, badges de tecnologías reales, proyectos y limitaciones verificables, stack web separado del perfil, árbol actual, scripts reales, CV, Git/Pages, marca, estado, roadmap y contacto.
- AGENTS.md actualizado con carpeta/rama acordadas, política de respaldo, publicación actual y Sistema predeterminado. Eliminadas rutas de perfil de usuario innecesarias de este registro, manteniendo referencias temporales como %TEMP%.
- Recursos de marca completos en assets/brand/, incluidas las dos referencias PNG. PDF ES/EN sin modificaciones; OG, apple-touch-icon y manifest heredados sin regenerar ni rediseñar.

### Validaciones de consolidación
- npm ci completado con las versiones bloqueadas (73 paquetes). package.json y package-lock.json intactos. Sin dependencias nuevas.
- npm run build correcto: 33 símbolos tras retirar WhatsApp y CSS minificado generado. Aviso de caniuse-lite desactualizado; no se actualizó.
- npm audit detectó dos vulnerabilidades transitivas de herramientas de desarrollo: postcss-selector-parser (moderada) y source-map-js (alta). Actualización pendiente de autorización; no se ejecutó audit fix ni se cambió el lockfile.
- node --check en main.js, theme.js, build-icons.mjs y tailwind.config.js; git diff --check correctos.
- Edge headless: 25 pruebas de regresión aprobadas (temas, Sistema inicial, persistencia, cambio del sistema emulado, storage inválido/bloqueado, responsive, scroll-spy, teclado/foco, menú, modal/Escape y movimiento reducido). Sin excepciones JS ni errores de red registrados.
- Nueve vistas adicionales: 390/768/1440 × oscuro/claro/Sistema, sin desbordamiento del documento; sin IDs duplicados, anclas rotas ni recursos locales faltantes. JSON-LD válido y contenido confirmado de PhysicsVR conservado.
- Cuatro comprobaciones adicionales aprobadas: ambos CV HTTP 200 y habilitados, validación local de email y contador, retirada de WhatsApp con contactos restantes presentes y ausencia de excepciones JS. Ningún formulario enviado.
- Capturas nuevas de encabezados móvil claro y escritorio oscuro inspeccionadas; marca y controles visibles. No se repitió el filmstrip anterior ni se certifica ausencia de flash en esta consolidación.
- README/README.es: siete enlaces relativos válidos por documento, mismas URLs externas y UTF-8 sin caracteres de sustitución. Enlaces profesionales coinciden con el sitio; disponibilidad externa de todos los perfiles no certificada.
- Hashes PDF conservados: ES 2EA02319FB95C2877E52BA8720F0A43B38CFFEAA3A03982E5DBDF2496BAD159E; EN 84D80D73007508833C9876DC52BBB2BBCF882927933BCFD34739B60729305C89.
- Evidencia temporal: %TEMP%/portfolio-consolidation-qa/ (regresión, nueve vistas, supplemental-results.json y npm-audit.json). No incorporada al repositorio.
- Límites: Edge headless y sistema emulado; lector de pantalla, otros navegadores/dispositivos y entrega real de mensajes pendientes. Se mantienen los pendientes históricos de contenido PDF, protección adicional del formulario y recursos visuales futuros.

### Seguridad del push y traslado — registro previo
- API pública: único workflow activo pages-build-deployment, ruta dinámica de GitHub Pages; sin workflows YAML versionados en las ramas remotas main o portfolio/professional-refresh.
- Último deployment github-pages y ejecución dinámica exitosos en portfolio/professional-refresh / 20b49ad. HTML público coincide con ese commit.
- GET de configuración /pages devuelve 404 sin autenticación; gh no instalado y navegador conectado no disponible. No se leyeron credenciales.
- A falta de confirmación de Source/Branch/carpeta actuales, el push permanece condicionado. No atribuir coincidencia local/remota a una rama aún no subida.
- El traslado al checkout principal puede completarse localmente conservando el worktree limpio como recurso temporal. Retirarlo requiere que el trabajo esté respaldado en GitHub; no usar --force.

### Inventario pendiente de limpieza (sin autorización de borrado)
- Bundle permanente verificado en Backups/portafolio-web/.
- Referencias locales recovery/mv-spatial y recovery/mv-spatial-snapshot; referencias históricas etapa1-integridad y checkpoints. Stash conservado; no inspeccionado ni alterado.
- Ramas remotas origin/main, origin/etapa1-integridad y origin/portfolio/professional-refresh conservadas. No se propone eliminar la rama pública actual.
- Worktree de recuperación: retirar únicamente tras Git limpio y respaldo remoto verificado.
- Inventario por nombre en TEMP: portafolio-brand-phase92, portafolio-etapa12-backup-20261112-234743, portafolio-fase8-20261113-002111, portafolio-web-backup-20261112-230355, portafolio-theme-qa, portfolio-recovered-qa, portfolio-consolidation-qa, portafolio-theme-npm-cache, portfolio-consolidation-npm-cache y 21 perfiles portfolio-edge-qa-*. No se inspeccionaron sus contenidos para autorizar borrado; no se hizo limpieza.
- No todos los objetos del snapshot/stash/checkpoints están certificados como protegidos por referencias remotas. El bundle sigue siendo necesario hasta una decisión explícita; no aprobar su eliminación por inferencia.

### Cierre local anterior al push
- cf11d67: docs: document MV Spatial portfolio and consolidation workflow (README bilingüe e instrucciones internas).
- Checkout principal trasladado de forma segura a feature/portfolio-consolidation en D:/Proyectos/portafolio-web. No se movió ni borró el almacén .git.
- Worktree portafolio-web-recovery conservado limpio en HEAD separado cf11d67; ya no aloja la rama activa. Es un recurso temporal pendiente de retirada, no otra línea de desarrollo.
- Validación desde la carpeta definitiva: npm run build correcto y sin diff generado; cuatro comprobaciones Edge aprobadas de ambos CV, validación local del formulario, contactos profesionales y ausencia de excepciones JS. Recursos de marca y ambos PDF idénticos al snapshot aprobado.
- No se hizo push: feature/portfolio-consolidation aún no existe en origin, según ls-remote. No hay coincidencia local/remota que certificar para esta rama. Confirmación de Source/Branch/carpeta de Pages solicitada al autor y pendiente al cierre local.
- Comprobación remota final: main sigue en 30750f5 y portfolio/professional-refresh en 20b49ad. El deployment más reciente conserva sha 20b49ad y fecha 2026-11-11T13:36:31Z. Único workflow visible: dynamic/pages/pages-build-deployment.
- No se cambiaron ajustes de Pages, workflows, ramas públicas ni publicación. No se eliminaron worktrees, respaldos, ramas, stash o historial.
- Pendientes para terminar la consolidación física: verificar configuración de publicación, push autorizado exclusivamente a feature/portfolio-consolidation, comparar HEAD con origin y retirar el worktree limpio mediante git worktree remove sin --force. Solo después evaluar el inventario de limpieza con autorización explícita; snapshot/stash/checkpoints no están certificados como respaldados remotamente.

## Cierre definitivo de consolidación — 2026-11-13

Este apartado sustituye los bloqueos y pendientes de push/traslado registrados anteriormente.

### Configuración y respaldo remoto
- El autor verificó personalmente Settings → Pages: Deploy from a branch; portfolio/professional-refresh; / (root); Enforce HTTPS activado. No cambió la configuración y autorizó expresamente el push exclusivo de feature/portfolio-consolidation.
- Nueva revisión por API: único workflow activo pages-build-deployment, ruta dynamic/pages/pages-build-deployment. Sin YAML adicionales en la feature, main ni la rama publicada. Comprobación satisfactoria para subir la feature sin publicar.
- Push con refspec explícito únicamente a refs/heads/feature/portfolio-consolidation, sin force. Upstream origin/feature/portfolio-consolidation configurado.
- Primer respaldo remoto verificado: d282cb5fd2aebf18732f1328f543e2eb6c6b5c32 idéntico a HEAD local. Diff entre árboles local/remoto vacío; SVG, referencias PNG, ambos CV, HTML, JS, fuentes/generados y documentación incluidos en Git.
- Esta actualización de cierre se incorpora mediante un commit adicional de documentación y se verifica otra vez contra ls-remote al terminar; el hash final se informa en el cierre de sesión.
- Tras el push inicial: cero ejecuciones Actions en la feature. Deployment público más reciente sin cambios: id 7711545259, portfolio/professional-refresh, 20b49ad0f3a704e92b79a86d4d65b240f6733b8f, 2026-11-11T13:36:31Z. Sin push a main o rama publicada, merge, cambio de Pages ni despliegue nuevo.

### Una sola carpeta activa
- Único worktree registrado: D:/Proyectos/portafolio-web, feature/portfolio-consolidation. Repositorio principal y almacén .git conservados.
- Recuperación comprobada limpia, sin archivos no rastreados; único contenido ignorado: node_modules regenerable. Su HEAD cf11d67 era ancestro de la feature ya respaldada en origin.
- Se utilizó git worktree remove sin --force. Retiró archivos y registro del worktree, pero Windows impidió borrar el directorio raíz vacío por estar abierto en otro proceso.
- Verificación posterior: portafolio-web-recovery vacío, sin .git ni archivos, y ausente de git worktree list. Intento no recursivo de eliminar solo ese directorio confirmó bloqueo por otro proceso. Queda únicamente ese residuo vacío; puede retirarse al liberar el proceso, sin afectar datos ni historial.

### Validación final desde la carpeta definitiva
- npm run build correcto: 33 símbolos y CSS minificado; árbol sin cambios de recursos generados. No cambiaron dependencias ni lockfile. Aviso previo de caniuse-lite y dos vulnerabilidades transitivas conservados como pendientes.
- node --check correcto en main.js, theme.js, build-icons.mjs y tailwind.config.js; git diff --check sin errores.
- Reejecutadas las 25 pruebas de regresión Edge headless desde la carpeta principal: todas aprobadas, sin excepciones JS ni errores de red. Cubren Sistema predeterminado, preferencias Claro/Oscuro, persistencia, cambios del sistema emulado, storage inválido/bloqueado, responsive, navegación, teclado/foco, scroll-spy, modal y movimiento reducido.
- Nueve vistas finales 390/768/1440 × oscuro/claro/Sistema: sin desbordamiento del documento, recursos faltantes, anclas rotas ni IDs duplicados. Logo y favicon presentes. Encabezados móvil claro y escritorio oscuro inspeccionados en las nuevas capturas.
- Cuatro comprobaciones adicionales finales: descargas ES/EN habilitadas y HEAD HTTP 200; validación de email y contador de mensaje; ausencia de WhatsApp y presencia de correo/GitHub/LinkedIn; ausencia de excepciones JS. Formulario no enviado.
- Ambos README: siete enlaces relativos válidos por idioma. Marca y PDF idénticos a los recursos aprobados y a los respaldados remotamente. Hashes PDF ES/EN conservados según el registro anterior.
- Evidencias finales temporales en %TEMP%/portfolio-consolidation-qa/: final-regression.mjs, final-qa.mjs, stage12-after-regression.json, qa-results.json, primary-results.json y capturas. No se incorporaron perfiles ni QA al repositorio.
- Se mantienen los límites de Edge headless, sistema emulado y QA sin envíos reales; no se certifica lector de pantalla ni todos los navegadores/dispositivos.

### Inventario para una limpieza futura autorizada
- Directorio vacío portafolio-web-recovery: puede eliminarse sin pérdida al liberar el proceso que lo mantiene abierto. No es una segunda copia activa.
- Cachés %TEMP%/portfolio-consolidation-npm-cache y portafolio-theme-npm-cache, y perfiles temporales portfolio-edge-qa-*: candidatos regenerables para limpieza posterior; no eliminados en esta fase.
- Evidencias %TEMP%/portfolio-consolidation-qa, portfolio-recovered-qa y portafolio-theme-qa: conservar al menos la evidencia final antes de aprobar descarte de QA antiguo; no son respaldos permanentes del código.
- Copias temporales portafolio-brand-phase92, portafolio-etapa12-backup-20261112-234743, portafolio-fase8-20261113-002111 y portafolio-web-backup-20261112-230355: requieren comparación específica de sus contenidos antes de certificar eliminación sin pérdida; no borradas.
- recovery/mv-spatial (e0a18eb) y etapa1-integridad (b15a84f): commits incluidos en la rama remota consolidada; referencias locales redundantes candidatas a retirada futura autorizada. No se borraron ramas locales ni remotas.
- Mantener recovery/mv-spatial-snapshot, stash y checkpoints: antes de este cierre se contaron 42 commits locales no alcanzables desde referencias remotas, pertenecientes al historial de recuperación. El respaldo remoto del proyecto actual no equivale a respaldo remoto de todo ese historial.
- Bundle permanente Backups/portafolio-web/portafolio-web-20261113-013227-7452daf8.bundle: conservado y previamente verificado con historial completo. No recomendar su eliminación mientras se quiera conservar snapshot/stash/checkpoints sin verificar otro respaldo equivalente.
- No se crearon backups permanentes nuevos ni se borraron bundle, stash, referencias de recuperación, checkpoints, historial o ramas remotas.

### Preparación de la siguiente fase
- Consolidación funcional y respaldo de la versión aprobada completados; rama feature como única línea activa y Pages anterior preservado.
- Próxima fase: 9.3, sistema de diseño visual MV Spatial. No iniciada; requiere autorización propia.

## Integración estable en main — 2026-11-13

Este apartado sustituye las referencias anteriores a la feature como única rama activa. La publicación de Pages continúa separada.

- Autorización expresa del autor para actualizar documentación, integrar mediante fast-forward y subir main sin force; sin modificar Settings → Pages ni iniciar Fase 9.3.
- Auditoría inicial: Git limpio, feature/portfolio-consolidation en e43626bb70ef7a71c66840c8a4c59a790bdce94e y sincronizada con origin; main y origin/main en 30750f56e0daf8f1a160ebf758b6d84e6c447fe0. Fetch sin novedades inesperadas; main 0 commits por delante / 7 por detrás de la feature.
- Fast-forward confirmado mediante merge-base --is-ancestor. Sin conflictos, divergencia ni necesidad de reescribir historial. La versión aprobada ya está protegida remotamente; no se crean carpetas, worktrees o backups nuevos.
- Revisados antes de integrar: logo MV Spatial y referencias originales; tema Sistema predeterminado y opciones Claro/Oscuro; Hero e identidad Unity Developer | XR / VR Developer; descripción de PhysicsVR sin funcionamiento con visor; colaboración académica XR bajo NDA independiente; ambos CV; integración Web3Forms; ausencia de enlaces WhatsApp; README bilingüe, CSS compilado, código y documentación.
- Cambios de esta etapa limitados a README.md, README.es.md, AGENTS.md y este registro: main como rama estable y fuente futura; clonación desde main; feature conservada; publicación actual y paso manual futuro claramente separados.
- Procedimiento autorizado: commit documental sobre la feature, git switch main, git merge --ff-only feature/portfolio-consolidation y push con refspec explícito únicamente a refs/heads/main; comparar HEAD con ls-remote y comprobar el README servido por GitHub.
- feature/portfolio-consolidation y las demás ramas se conservan. No se elimina bundle, stash, referencias ni historial. El commit remoto previo de la feature sigue disponible; el commit documental adicional queda incluido en main.
- Preservación verificable: el árbol de archivos ajenos a esos cuatro documentos debe coincidir exactamente con e43626b. Se reutilizan las validaciones funcionales de la consolidación: no se repite QA de navegador al no cambiar HTML, CSS, JS ni recursos.
- Checks de esta etapa: diff --check, enlaces relativos de ambos README, paridad de URLs, UTF-8, sintaxis JS/configuración y comparación de recursos con la versión aprobada. La coincidencia local/remota y el README principal se comprueban tras el push y se informan al cerrar la sesión.
- Pages confirmado previamente por el autor: Deploy from a branch, portfolio/professional-refresh, / (root), HTTPS activado. Revisión remota previa: solo workflow dinámico pages-build-deployment; deployment 7711545259 / 20b49ad, sin workflows YAML adicionales.
- No se modifica Settings → Pages. Próximo paso del autor, después de verificar main: seleccionar Deploy from a branch → main → / (root), guardar y comprobar el nuevo despliegue. No afirmar publicación desde main antes de esa verificación.
- Carpeta activa única: D:/Proyectos/portafolio-web. Fase 9.3 preparada pero no iniciada. Se conservan las limitaciones y pendientes técnicos documentados en las fases anteriores.

### Resultado verificado de la integración
- Commit documental b55a5b44545c051c11744f1e2b250bd784203dd5 creado y main avanzado desde 30750f5 mediante --ff-only, sin commit de merge. Push exclusivo de main completado sin force; HEAD local y remoto idénticos en la comprobación posterior.
- GitHub confirma default_branch main. El README por defecto tiene blob dd2e3a6ad9cf591ad8d8d227db3ec29ed93ef8ce, idéntico al README local; la página principal del repositorio muestra MV Spatial.
- Todos los archivos ajenos a README.md, README.es.md, AGENTS.md y PROJECT_STATUS.md coinciden exactamente con e43626b. La base aprobada e43626b sigue siendo ancestro de main; no se perdió contenido ni se alteraron PDF, SVG, referencias, CSS o funcionalidades.
- Siete enlaces locales por README válidos, URLs externas equivalentes, UTF-8 correcto, sintaxis de main.js/theme.js/tailwind.config.js y diff --check sin errores. No se necesitó recompilar ni repetir QA funcional porque el cambio posterior a e43626b es exclusivamente documental.
- Único worktree registrado en D:/Proyectos/portafolio-web, rama activa main, árbol limpio al verificar. Ramas existentes y stash conservados; rama remota feature/portfolio-consolidation permanece en e43626b. No se crearon carpetas, worktrees o respaldos nuevos.
- Después del push: deployment más reciente todavía 20b49ad / portfolio/professional-refresh, y HTML público idéntico al de ese commit. No se modificó Settings → Pages ni se publicó la nueva versión. El autor puede realizar ahora el cambio manual a main / raíz y confirmar el nuevo despliegue.
- Este registro final se confirma en un commit documental adicional sobre main; su hash y sincronización remota se entregan en el informe final. Fase 9.3 sin iniciar.

## Publicación confirmada y README definitivo — 2026-11-13

Estado vigente: main es la rama estable y publicada. Las referencias anteriores a otra rama pública o a un cambio pendiente corresponden únicamente al historial, no a la configuración actual.

- Confirmación del autor: portafolio publicado correctamente en https://matixvc.github.io/portafolio-web/ desde main. Sin cambios de Settings → Pages por parte del agente.
- Auditoría inicial: main en a8b56f8e61dd4f702227bc123935228ee548fc2a, Git limpio y sincronizado con origin/main después de fetch. Sin cambios inesperados.
- Verificación pública inicial: deployment 7757818798 desde main / a8b56f8, ejecución pages-build-deployment completada con success. URL oficial HTTP 200 y HTML idéntico al index.html local aprobado.
- README.md y README.es.md: primer bloque con badge esmeralda for-the-badge (Visit My Portfolio / Ver mi portafolio), ambos enlazados exactamente a la URL oficial, y URL completa visible como enlace independiente. A continuación logo MV Spatial aprobado, identidad profesional, descripción breve, idiomas y badges tecnológicos discretos.
- Estado editorial actualizado: fases aprobadas 1–9.2 completadas; main estable y publicada; 9.3 pendiente. Conservados tecnologías, proyectos y su alcance, instalación, estructura, identidad visual, roadmap y contactos.
- AGENTS.md: sustituida únicamente la referencia obsoleta a la rama de publicación por main / raíz. No se altera el diseño, código, logo, CV, dependencias ni configuración de Pages.
- Validación de documentación: enlaces locales, URL visible antes de About/Sobre el portafolio, destinos de los badges, recursos SVG y renderizado HTML mediante GitHub; diff --check y exclusividad de los cuatro archivos documentales. Los resultados remotos del commit/push y despliegue se comprueban al cerrar y se informan en la sesión.
- Commit solicitado: docs: highlight live portfolio and finalize bilingual README. Push autorizado exclusivamente a main, sin force; comprobar igualdad de HEAD remoto y local y esperar la ejecución correspondiente de Pages.
- No se crean carpetas, worktrees ni ramas; no se eliminan historial o respaldos. Fase 9.3 preparada y sin iniciar. Se mantienen las limitaciones funcionales ya registradas, incluido QA sin envíos reales del formulario.
- Validaciones previas al commit completadas: ocho enlaces relativos válidos por README, primer enlace y URL visible correctos, paridad de URLs salvo etiqueta traducida del badge, ausencia de avisos obsoletos en README/AGENTS y UTF-8 sin sustituciones. API GitHub Markdown renderiza ambos documentos conservando badge, enlace visible y logo; badges y SVG remoto HTTP 200. Solo los cuatro documentos autorizados difieren de a8b56f8; diff --check correcto. Estado inicial del deployment main confirmado además mediante status success y URL oficial.

## Fase 9.3A — base visual MV Spatial 2.0 — 2026-11-16

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- `git fetch --prune` confirmó `main` y `origin/main` en
  `ba257254e0159dfb1a4c436ed475d62cba70efbb`.
- `feature/portfolio-consolidation` era ancestro directo de `main` y se adelantó
  mediante `git merge --ff-only main`, sin divergencia ni conflictos.
- No se crearon ramas, worktrees, carpetas de proyecto duplicadas, commits o
  pushes. `main` y GitHub Pages no se modificaron.

### Implementación

- Dirección aprobada: Spatial Instrument Panel.
- Paleta consolidada alrededor de grafito `#0B1015`, profundidad verde
  `#15231F`, esmeralda de marca `#20D58F` y blanco frío `#F4F7F5`.
- El esmeralda interactivo del tema claro usa `#057346` para alcanzar contraste
  AA; las variantes SVG aprobadas de la marca conservan sus colores originales.
- Hero renovado con composición editorial, CTA principal, accesos a CV y un
  instrumento MV decorativo estático. La pieza se oculta en móvil y no se
  presenta como demo o funcionalidad existente.
- Header reagrupado para que marca, tema y menú conserven límites explícitos.
  El CTA del header se limita a escritorio desde 1280 px.
- Botones Primary, Secondary y Ghost, tarjetas, superficies, bordes, sombras,
  retícula, formularios y estados interactivos usan tokens coherentes.
- Se redujeron gradientes genéricos y halos; se preservaron colores semánticos y
  colores propios de las ilustraciones de proyectos.
- `docs/DESIGN_SYSTEM.md` documenta únicamente el sistema implementado.

### Diagnóstico responsive

- La captura inicial que mostraba el Hero recortado a 390 px usó `--window-size`
  sin emulación móvil. Con `deviceMetrics` y viewport móvil real, el Hero base no
  producía scroll a 390 px.
- Sí existía un overflow real a 320 px: el grupo de cinco enlaces del footer no
  permitía wrapping y forzaba un layout de 341 px. El grupo ahora permite salto
  de línea y centra sus filas.
- Resultado final a 320 px: `innerWidth`, `clientWidth`, `scrollWidth` y
  `visualViewport.width` iguales a 320 px. Header, tema, menú, Hero, CTA y footer
  permanecen dentro del viewport.
- Se comprobaron 320, 360, 390, 414, 768, 1024 y 1440 px. En los anchos con
  scrollbar vertical, `scrollWidth` coincide con `clientWidth`; no existe scroll
  horizontal accidental.

### Validaciones locales

- `npm run build`: correcto; 33 símbolos y CSS minificado regenerado.
- Sintaxis correcta en `js/main.js`, `js/theme.js` y `tailwind.config.js`.
- `git diff --check`: correcto después de normalizar el final de
  `src/input.css`.
- Edge mediante HTTP local: temas Oscuro y Claro efectivos comprobados mediante
  `data-theme`, selector, `localStorage` y capturas reales.
- Sistema predeterminado comprobado en preferencia oscura y cambio emulado a
  clara; el tema efectivo cambió de `dark` a `light` conservando `system` como
  preferencia.
- Menú móvil: apertura, `aria-expanded`, `aria-hidden`, cierre con Escape y
  devolución de foco al botón correctos.
- Modal de PhysicsVR: `role="dialog"`, foco inicial en el panel y cierre con
  Escape correctos. No se cambió el contenido profesional.
- Formulario: validación local de email incorrecto y mensaje asociado correctos;
  no se realizó ningún envío.
- CV ES/EN: HTTP 200 mediante HEAD local. Logo, favicon, GitHub y LinkedIn
  conservados.
- `prefers-reduced-motion`: coincidencia activa, transiciones reducidas y scroll
  automático confirmados.
- Sin excepciones JavaScript ni fallos de red en la pasada HTTP de regresión.
- Contraste medido en pares principales: oscuro, texto base 16.36:1, secundario
  11.04:1, acento 11.97:1 y botón primario 10.08:1; claro, texto base 15.11:1,
  secundario 7.02:1, acento y botón primario 5.49:1. Los pares comprobados
  superan WCAG AA.

### Evidencia y límites

- Capturas antes/después, vistas de proyectos, páginas completas y reportes de
  layout/QA se guardaron fuera del repositorio en
  `%TEMP%/mv-spatial-93a-review-20261116`.
- No se ejecutó Lighthouse porque no está instalado. No se inventan métricas de
  Core Web Vitals.
- Quedan pendientes lector de pantalla, navegadores distintos de Edge y prueba
  en hardware móvil real.
- No se modificaron PDF, dependencias, lockfile, JavaScript, configuración de
  Pages ni publicación. No se inició 9.3B, Three.js o REALITY CORE.

### Refinamiento visual final de 9.3A — 2026-11-16

- Se retiró la etiqueta redundante «MV / 001 — SPATIAL DEVELOPER» sin añadir un
  reemplazo decorativo. El estado profesional «Unity · C# · Santiago, Chile» y
  el resto del Hero se conservan.
- El `h1` sigue siendo único y semántico. Su columna usa una proporción mayor,
  el instrumento MV una proporción menor y la tipografía
  `clamp(3rem, 5vw, 4.75rem)`: «Unity Developer» y «XR / VR Developer» forman
  dos líneas totales en los siete anchos comprobados, sin `nowrap` ni overflow.
- Se eliminó el CTA final «Conversemos sobre tu equipo y sus proyectos». Antes
  se comprobó que solo repetía el acceso a `#contacto` y no contenía lógica o
  enlaces únicos.
- El footer existente integra las variantes aprobadas del logo, identidad MV
  Spatial, frase de marca, cinco enlaces internos, acción funcional a `#inicio`,
  crédito de autor y copyright 2026. No se añadieron redes ni otro formulario.
- `npm run build` regeneró correctamente el sprite de 33 iconos y
  `dist/styles.css`; las verificaciones de sintaxis no reportaron errores.
- QA real en Edge headless por HTTP local a 320, 390, 768, 1024, 1280, 1440 y
  1920 px: una línea por especialidad, un único `h1`, `scrollWidth` igual a
  `clientWidth`, etiqueta y CTA ausentes, footer completo y formulario vacío
  bloqueado por validación nativa sin envío.
- Temas Oscuro, Claro y Sistema comprobados. Sistema resolvió tanto preferencia
  clara como oscura conservando `system` en el selector. El menú móvil abrió con
  `aria-expanded=true` y `aria-hidden=false`; «Volver al inicio» terminó en
  `#inicio` con `scrollY=0`.
- CV ES/EN y las dos variantes del logo del footer respondieron HTTP 200 en el
  servidor local. El foco visible global mantiene anillo de 2 px y offset de
  2 px para enlaces, botones y controles.
- Capturas finales reales de Hero y footer, en escritorio y móvil y en ambos
  temas, quedaron fuera del repositorio en
  `%TEMP%/mv-spatial-93a-refinamiento-20261116`.
- Se mantienen como límites de QA los navegadores distintos de Edge, lector de
  pantalla y hardware móvil real. No hubo commit, push, merge, publicación ni
  modificación de `main` o GitHub Pages.

## Fase 9.3B — MV Spatial Project Archive, Ajuste 4.2 — 2026-11-17

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.
- Estado Git previo verificado manualmente: HEAD `2722aa35c1f15fa3411be274d33fae8d0827ad74`,
  rama `feature/portfolio-consolidation`.

### Implementación

- `js/main.js` — reordenamiento completo del template del modal (Project Viewer):
  - **Identidad del proyecto** (visible inmediatamente al abrir): badge, título y
    descripción. Sin desplazamiento previo necesario.
  - **Acciones principales** (justo debajo de la descripción): `linksBlock` —
    muestra "Probar demo" y "Ver repositorio" cuando existen. Para Jefferson Motel
    no se muestran botones ficticios (repo y demo son strings vacíos).
  - **Priorización:** cuando existe demo, se muestra primero; seguido de repositorio.
    Enlaces principales reales arriba, recursos complementarios abajo.
  - **Información del proyecto** (después de las acciones): `roleBlock` — mi rol.
  - **Tecnologías / Herramientas** y **Aspectos Destacados** mantienen su posición
    legible, con separación clara.
  - **Área multimedia inferior** (al final del modal), condicional:
    - Solo se muestra si `data.media` existe y tiene longitud > 0.
    - El `project-viewer-header` genérico se oculta cuando no haya medios reales.
    - Estructura preparada para imágenes, videos, GLB/glTF, documentos y 3D en futuras fases.
    - No se renderizan placeholders vacíos ni se muestra el header si no hay recursos.
  - `prefers-reduced-motion`: transiciones anuladas para el área multimedia.

- `src/input.css` — estilos del Project Viewer 4.2:
  - `.project-viewer-header`: `max-height: 128px` en móvil, `max-height: 160px`
    en `@media (min-width: 768px)`. La clase ahora se muestra u oculta condicionalmente
    desde `js/main.js` basándose en `data.media.length > 0`.
  - `#modal-panel`: conserva `max-width: 1200px`, `width: 85vw`.

- `index.html`: sin cambios en esta ajustada.
- `dist/styles.css`: pendiente de regenerar con `npm run build`.

### Estructura definitiva del modal (Ajuste 4.2)

Al abrir cualquier ficha de proyecto, el visitante ve inmediatamente:

1. **Identidad:** categoría, estado, título, descripción introductoria
2. **Acciones principales:** "Probar demo" / "Ver repositorio" (si existen)
   - Botones visualmente diferenciados, visibles sin desplazarse en desktop
   - Prioridad a demo jugable cuando exista
   - Jefferson Motel: sin botones ficticios (aún sin URLs públicas)
3. **Información del proyecto:** mi rol, tecnologías, aspectos destacados
4. **Área multimedia inferior:** reservada para recursos reales futuros
   - Solo aparece si el proyecto tiene recursos reales registrados
   - Estructura preparada para: imágenes, videos, GLB/glTF, documentos, 3D
   - No placeholders vacíos, no header genérico si no hay medios

### Datos de proyecto actualizados

- **PhysicsVR:** repo y demo existentes, sin datos media (se muestran acciones)
- **Basura Fighters:** repo y demo existentes, sin datos media (se muestran acciones)
- **App Mobile:** repo existente, sin demo, sin datos media (se muestra acción repo)
- **Jefferson Motel:** repo vacío, demo vacío, sin datos media (no se muestran botones)

### Reglas respetadas

- No se añadieron filtros (solo 4 proyectos).
- No se añadió Three.js, WebGL ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA.
- No se creó commit, push, merge ni publicación.
- No se modificó Hero, Sobre mí, Habilidades, Trayectoria, Contacto, Footer ni temas.

### Validaciones locales (pendiente de ejecución por limitación de terminal)

- `npm run build`: pendiente.
- `node --check js/main.js`: pendiente.
- `node --check js/theme.js`: pendiente (no se modificó theme.js).
- `git diff --check`: pendiente.
- Pruebas pendientes:
  - Basura Fighters muestra primero "Probar demo" y después "Ver repositorio"
  - PhysicsVR y App Mobile muestran sus repositorios
  - Jefferson Motel no muestra botones ficticios
  - No aparece placeholder multimedia vacío
  - Aspectos técnicos y tecnologías presentes
  - Las cuatro tarjetas siguen abriendo sus fichas
  - Escape, X, teclado y retorno del foco
  - Sin overflow en móvil
  - Sin regresiones

### Validación manual recomendada

Ejecutar desde la terminal de VS Code:

```powershell
npm.cmd run build
node --check js/main.js
git diff --check
```

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.
- Estado Git previo verificado manualmente: HEAD `2722aa35c1f15fa3411be274d33fae8d0827ad74`,
  rama `feature/portfolio-consolidation`.

### Implementación

- `js/main.js` — reorden del template del modal (Project Viewer):
  - Identidad del proyecto (badge, título, descripción) se muestra PRIMERO, visible inmediatamente al abrir el modal.
  - Tecnologías / Herramidades y Aspectos Destacados siguen en orden jerárquico.
  - Cabecera multimedia (`.project-viewer-header`) movida al final del contenido, reducida drásticamente:
    - `max-h-32` en móvil (~128px), `md:max-h-40` en tablet+ (~160px).
    - Sin `aspect-video` (16:9) que generaba un rectángulo vacío enorme.
    - Icono reducido de `w-24 h-24` a `w-16 h-16`.
    - Padding reducido de `p-8` a `p-4`.
  - El header multimedia permanece como espacio reservado para captura real futura, sin ocupar la vista inicial.

- `src/input.css` — estilos del Project Viewer ajustados:
  - `.project-viewer-header`: `max-height: 128px` en móvil, `max-height: 160px` en tablet+ (media query 768px).
  - `#modal-panel`: conserva `max-width: 1200px`, `width: 85vw`.

- `index.html`: sin cambios en esta ajustada.
- `dist/styles.css`: pendiente de regenerar con `npm run build`.

### Reglas respetadas

- No se añadieron filtros (solo 4 proyectos).
- No se añadió Three.js, WebGL ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA.
- No se creó commit, push, merge ni publicación.
- No se modificó Hero, Sobre mí, Habilidades, Trayectoria, Contacto, Footer ni temas.

### Validaciones locales (pendiente de ejecución por limitación de terminal)

- `npm run build`: pendiente.
- `node --check js/main.js`: pendiente.
- `node --check js/theme.js`: pendiente (no se modificó theme.js).
- `git diff --check`: pendiente.
- Pruebas pendientes: apertura del modal con título visible inmediatamente, header multimedia compacto, 4 tarjetas reales, Jefferson Motel sin enlaces ficticios, Escape y retorno del foco, navegación por teclado, responsive 320/390/768/1024/1440 px, temas dark/light/system, tarjeta final no interactiva, sin errores de consola ni overflow, sin regresiones.

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.
- Estado Git previo verificado manualmente: HEAD `2722aa35c1f15fa3411be274d33fae8d0827ad74`,
  rama `feature/portfolio-consolidation`.

### Implementación

- `index.html` — sección `#proyectos`:
  - Agregada cuarta tarjeta real: Jefferson Motel — Recreación 3D
    (`data-project="proj4"`), con cubierta SVG conceptual, categoría
    "Modelado 3D · Unity", badge "En desarrollo", tech tags Blender/Unity/Modelado 3D.
  - Sin repositorio ni demo para Jefferson Motel (no se inventaron enlaces).
  - Tarjeta final "Próximamente" actualizada: título "Próximamente, más proyectos…",
    secundario "El archivo MV Spatial seguirá creciendo.", sin interacción.
  - Modal panel ampliado: `max-w-[1200px]` + `width: 85vw` (era `max-w-2xl`).
- `src/input.css` — estilos del Project Viewer:
  - `.project-viewer-header`: cabecera visual con borde desdoblado, fondo sutil,
    lista para imagen/galería real (pendiente).
  - `#modal-panel`: ancho 85vw / max-width 1200px.
- `js/main.js`:
  - Agregada entrada `proj4` (Jefferson Motel) a `projectDetails`: badge,
    descripción, role, features verificables (modelado Blender, organización,
    optimización como objetivo, integración Unity prevista), tech tags,
    sin repo ni demo.
  - Template del modal rediseñado: cabecera visual (`project-viewer-header`),
    identidad (badge, título, descripción), tecnologías, aspectos destacados,
    métricas (vacío, no se muestra), recursos (repo/demo solo si existen).
  - Sin cambios en lógica de acceso: focus trap, Escape, cierre con X,
    restitución de foco, `prefers-reduced-motion` se conservan.
- `dist/styles.css`: pendiente de regenerar con `npm run build`.

### Información de Jefferson Motel

- Nombre: Jefferson Motel — Recreación 3D
- Descripción: Recreación de una habitación del Jefferson Motel de GTA San Andreas,
  con trabajo de modelado, organización y optimización de un escenario 3D.
- Estado: En desarrollo (no afirmarse como completado).
- Tecnologías: Blender (modelado actual), Unity (integración prevista, no afirmada como hecha), Modelado 3D.
- Sin repositorio público aún. No se agregaron botones GitHub ni Demo.
- Cubierta SVG conceptual, diferenciada de captura real.

### Reglas respetadas

- No se añadieron filtros (solo 4 proyectos).
- No se añadió Three.js, WebGL ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA ni modelos extraídos del juego con licencia dudosa.
- No se creó commit, push, merge ni publicación.
- No se modificó Hero, Sobre mí, Habilidades, Trayectoria, Contacto, Footer ni temas.

### Validaciones locales (pendiente de ejecución por limitación de terminal)

- `npm run build`: pendiente.
- `node --check js/main.js`: pendiente.
- `node --check js/theme.js`: pendiente (no se modificó theme.js).
- `git diff --check`: pendiente.
- Pruebas pendientes: 4 tarjetas reales, 4 fichas correctas, Jefferson Motel sin
  enlaces ficticios, PhysicsVR sin afirmaciones de VR funcional, demo y
  repositorios conservados, Escape y retorno del foco, navegación por teclado,
  responsive 320/390/768/1024/1440 px, temas dark/light/system, tarjeta final
  no interactiva, sin errores de consola ni overflow, sin regresiones.

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.
- Estado Git previo verificado manualmente: HEAD `2722aa35c1f15fa3411be274d33fae8d0827ad74`,
  rama `feature/portfolio-consolidation`.

### Implementación

- `index.html` — tarjetas del archivo convertidas en botones nativos envolventes:
  - Las 3 tarjetas reales (PhysicsVR, Basura Fighters, App Mobile) usan
    `<button type="button" class="project-card-link" data-project="projN">`
    con `aria-label` identificando el proyecto.
  - Eliminados los botones internos "Ver detalles", "Ver repositorio" y "Jugar demo".
  - Las acciones (repo/demo) se conservan exclusivamente dentro del modal.
  - Texto "Seleccionar para ver detalles" como pista visual en cada tarjeta.
  - La tarjeta "Próximamente" permanece como `<article>` sin `data-project`,
    sin botón envolvente, sin interacción.
- `src/input.css` — estilos del botón envolvente:
  - `.project-card-link`: apariencia de tarjeta (border none, background none,
    padding 0, cursor pointer), focus-visible con anillo de 2 px.
  - `.project-card-link:hover .project-cover`: scale(1.02) en cubierta.
  - `.project-card-link:focus-visible .project-cover`: anillo de foco en cubierta.
  - `.project-card`: estructura interna compartida con la tarjeta final.
- `js/main.js`: sin cambios. El event listener existente para `[data-project]`
  (línea ~278) ya abre el modal correctamente al hacer click en el botón
  envolvente. Focus trap, Escape, cierre con X y restitución de foco se
  conservan íntegros.
- `dist/styles.css`: pendiente de regenerar con `npm run build`.

### Patrón de interacción

- Click, toque, Enter y Space en cualquier superficie de una tarjeta real
  abren el modal del proyecto correspondiente.
- Tab navega entre las tarjetas (botones nativos).
- Focus visible con anillo de 2 px.
- Escape cierra el modal y devuelve el foco a la tarjeta origen.

### Arquitectura multimedia futura (documentada, no implementada)

- Las cubiertas `.project-cover` usan `aspect-ratio: 16/9` y están listas para
  sustituir SVG por `img` (WebP/AVIF) o `<video>` con `poster`.
- Para galerías, videos y modelos GLB/glTF se propone cargar solo bajo demanda
  (cuando el usuario abre el modal o interactúa con la cubierta), sin Three.js
  en esta etapa.
- No se crearon rutas ficticias ni recursos generados.

### Reglas respetadas

- No se añadieron filtros (solo 3 proyectos).
- No se añadió Three.js, WebGL ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA.
- No se creó commit, push, merge ni publicación.
- No se modificó Hero, Sobre mí, Habilidades, Trayectoria, Contacto, Footer ni temas.

### Validaciones locales (pendiente de ejecución por limitación de terminal)

- `npm run build`: pendiente.
- `node --check js/main.js`: pendiente (no se modificó main.js).
- `node --check js/theme.js`: pendiente (no se modificó theme.js).
- `git diff --check`: pendiente.
- Pruebas pendientes: responsive 320/390/768/1024/1440 px, temas
  dark/light/system, teclado (Tab/Enter/Space/Escape), `prefers-reduced-motion`,
  modales, enlaces GitHub y demo dentro del modal, tarjeta Próximamente no
  interactiva, sin overflow horizontal.

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.
- Estado Git previo verificado manualmente: HEAD `2722aa35c1f15fa3411be274d33fae8d0827ad74`,
  rama `feature/portfolio-consolidation`.

### Implementación

- `index.html` — sección `#proyectos` transformada en archivo compacto:
  - Grid adaptable: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`
    (1 columna móvil, 2 tablet, 3 escritorio).
  - Tres tarjetas compactas (PhysicsVR, Basura Fighters, App Mobile) con
    cubierta h-36, contenido p-4, título text-base, descripción text-xs.
  - PhysicsVR: distinción esmeralda sutil (`.project-featured`), sin ocupar
    ancho completo. Badge «En desarrollo». Enlace a repositorio.
  - Basura Fighters: badge «Jugable», enlace a demo (Netlify) y «Ver detalles».
  - App Mobile: badge «Desarrollo», enlace a repositorio GitHub y «Ver detalles».
  - Acciones siempre visibles (no ocultas tras hover), botones min-h-[40px].
  - Semántica: `<article>` con `aria-label`, botones con `data-project` y
    `aria-haspopup="dialog"`, enlaces con `target="_blank" rel="noopener noreferrer"`.
  - Tarjeta final «Próximamente»: sin `data-project`, sin botón, sin enlace,
    sin modal, borde desdoblado, diferenciada visualmente. No cuenta como proyecto.
- `src/input.css` — estilos compactos:
  - `.project-card`: columna, foco visible, min-height 0.
  - `.project-cover`: altura fija 144px, aspect-ratio 16/9, hover scale(1.02).
  - `.project-featured`: borde esmeralda sutil, hover sin sombra grande.
  - `.project-final`: borde desdoblado, fondo sutil, sin hover lift, sin cursor
    de interacción en cubierta.
  - `.project-category`, `.tech-tag`: badges compactos con hover esmeralda.
  - `@media (prefers-reduced-motion: reduce)`: transiciones anuladas.
  - Grid template columns por breakpoint (768px / 1024px).
- `js/main.js`: sin cambios (modal existente reutilizado con `projectDetails`).
- `dist/styles.css`: pendiente de regenerar con `npm run build`.

### Estrategia para proyectos futuros

- Añadir un nuevo `<article>` dentro de `#projects-grid` con la misma estructura.
- Asignar `data-project="projN"` y crear la entrada correspondiente en
  `projectDetails` de `js/main.js` para el modal.
- El grid se adapta automáticamente (1/2/3 columnas).
- Cuando haya 4+ proyectos, se puede activar un botón «Ver más proyectos»
  que controle la visibilidad de tarjetas adicionales mediante JS.
- La tarjeta «Próximamente» se mueve al final siempre.

### Reglas respetadas

- No se añadieron filtros (solo 3 proyectos).
- No se añadió Three.js, WebGL ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA.
- No se creó commit, push, merge ni publicación.
- No se modificó Hero, Sobre mí, Habilidades, Trayectoria, Contacto, Footer ni temas.

### Validaciones locales (pendiente de ejecución por limitación de terminal)

- `npm run build`: pendiente.
- `node --check js/main.js`: pendiente (no se modificó main.js).
- `node --check js/theme.js`: pendiente (no se modificó theme.js).
- `git diff --check`: pendiente.
- Pruebas pendientes: responsive 320/390/768/1024/1440 px, temas
  dark/light/system, teclado (Tab/Escape), `prefers-reduced-motion`,
  modales, enlaces GitHub y demo, sin overflow horizontal.

Estado: implementada localmente en `feature/portfolio-consolidation` y pendiente
de aprobación visual. No publicada.

### Preparación y Git

- Rama: `feature/portfolio-consolidation`. Sin commits, pushes, merges ni
  publicaciones. `main` y GitHub Pages no se modificaron.

### Implementación

- `index.html` — sección `#proyectos`:
  - PhysicsVR como proyecto destacado (`project-featured`, `lg:col-span-2`),
    cubierta `lg:h-72`, badge «Destacado · XR / VR», enlace directo a repositorio.
  - Basura Fighters y App Mobile como tarjetas estándar (1 col móvil, 2 col desktop).
  - Cubiertas con contenedor `.project-cover` (`aspect-ratio: 16/9`, listo para
    sustituir SVG por `img`/`video` real; marcado con TODO pendiente de NDA).
  - Badges de categoría técnica (`.tech-tag`) con stack: Unity 3D / C# /
    Físicas 3D; JavaScript / Canvas 2D / HTML5; React Native / TypeScript /
    Notificaciones.
  - Meta de rol y tipo (desarrollo individual, prototipo personal, demo jugable,
    app móvil).
  - Enlaces directos a repo (PhysicsVR) y demo (Basura Fighters) dentro de la
    tarjeta, además del botón «Ver Detalles» que abre el modal existente.
  - Semántica: `<article>` con `aria-label`, botones con `data-project` y
    `aria-haspopup="dialog"`.
- `src/input.css` — nuevos estilos:
  - `.project-card`: columna, foco visible con anillo de 2 px.
  - `.project-cover`: contenedor de cubierta con hover `scale(1.02)`.
  - `.project-featured`: borde esmeralda acentuado, sombra en hover.
  - `.tech-tag`: píldora técnica con hover esmeralda.
  - Focus-visible para enlaces y botones de proyecto.
- `js/main.js`: sin cambios (modal existente reutilizado con los datos actuales).

### Validaciones locales (pendiente de ejecución por limitación de entorno)

- `npm run build`: pendiente (entorno no responde a comandos de terminal).
- `node --check js/main.js`: pendiente; no se modificó main.js.
- `git diff --check`: pendiente.
- Pruebas pendientes: responsive 390/768/1440 px, temas dark/light/system,
  teclado (Tab/Escape), `prefers-reduced-motion`, sin regresiones en menú,
  scroll-spy, modal, formulario y enlaces de CV.

### Reglas respetadas

- No se añadieron filtros (solo 3 proyectos).
- No se añadió Three.js ni dependencias nuevas.
- No se presentaron mockups como capturas reales.
- No se afirmó que PhysicsVR funcione con visor VR.
- No se incluyeron materiales NDA.
