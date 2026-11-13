# Estado del proyecto

Fecha: 2026-11-13 (America/Santiago).
Rama de trabajo actual: `feature/portfolio-consolidation`.
Base histórica inicial: `30750f5` — Cambio de CVs. Los apartados de fases anteriores conservan su contexto histórico; el cierre de consolidación al final es el estado vigente.

## Base confirmada
- Sitio estático con HTML, JavaScript vanilla y Tailwind CSS.
- Lockfile: Tailwind 3.4.19 y Font Awesome 6.4.0.
- Publicación actual confirmada: portfolio/professional-refresh en 20b49ad. La referencia histórica a main / raíz era documental y no describía el último despliegue real.
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

### Seguridad del push y traslado
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
- Recursos temporales de QA/recuperación registrados históricamente y caché npm temporal: no se ha hecho borrado masivo ni se certificó un inventario exhaustivo de TEMP.
- No todos los objetos del snapshot/stash/checkpoints están certificados como protegidos por referencias remotas. El bundle sigue siendo necesario hasta una decisión explícita; no aprobar su eliminación por inferencia.
