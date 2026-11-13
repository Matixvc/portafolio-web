# Estado del proyecto

Fecha: 2026-11-13 (America/Santiago).
Rama de trabajo: `etapa1-integridad`.
Último commit al iniciar: `30750f5` — Cambio de CVs.

## Base confirmada
- Sitio estático con HTML, JavaScript vanilla y Tailwind CSS.
- Lockfile: Tailwind 3.4.19 y Font Awesome 6.4.0.
- GitHub Pages desde main / raíz, según README; configuración remota no verificada.
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
  `C:\Users\matia\AppData\Local\Temp\portafolio-web-backup-20261112-230355`.
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
  `C:\Users\matia\AppData\Local\Temp\portafolio-theme-qa` (results.json y PNG).
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
  `C:\Users\matia\AppData\Local\Temp\portafolio-etapa12-backup-20261112-234743`.
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
  `C:\Users\matia\AppData\Local\Temp\portafolio-fase8-20261113-002111`.
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
Coherencia de CV bilingüe y preparación de evidencia real de proyectos,
con aprobación específica antes de editar PDF o publicar material.
