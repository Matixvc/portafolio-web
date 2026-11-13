# Instrucciones del proyecto

## Objetivo e identidad
- Portafolio profesional de Matías Villalobos.
- Posicionamiento: Unity Developer | XR / VR Developer.
- Audiencia: reclutadores, estudios de videojuegos y equipos XR.
- Mantener una identidad tecnológica, elegante, creativa y profesional.
- Evolucionar el diseño existente; no reconstruir el sitio sin aprobación.
- Evitar exceso de neón, efectos decorativos y dependencias innecesarias.
- Dar igual importancia a móvil y escritorio.

## Honestidad profesional
- No inventar experiencia, clientes, empresas, proyectos, premios ni métricas.
- No afirmar que el autor está titulado sin confirmación.
- No exagerar dominio de tecnologías ni responsabilidades.
- No usar «estudiante» o «en formación» como titular profesional principal.
- La formación académica debe ser verdadera y aparecer con discreción.
- Marcar los datos incompletos como pendientes de confirmación.
- Respetar NDA y contenido confidencial.
- No leer ni imprimir credenciales, secretos o archivos sensibles.

## Flujo y preservación
- Revisar estado Git, rama, último commit y diff antes de editar.
- Leer las instrucciones y solo los archivos relevantes.
- Antes de cambios importantes: auditar, presentar un plan y esperar aprobación.
- La aprobación de una fase autoriza continuar dentro de ese alcance.
- No pedir nuevamente autorización para acciones ya aprobadas.
- Identificar y conservar cambios pendientes del usuario u otros agentes.
- No atribuir autoría sin evidencia.
- Antes de cambios importantes, proponer un respaldo fuera de la raíz publicada.
- Verificar el respaldo y comunicar su ubicación.
- No usar stash ni alterar cambios pendientes sin autorización.
- Evitar refactorizaciones ajenas a la tarea.
- Registrar estado y validaciones en docs/PROJECT_STATUS.md.

## Git y publicación
- Trabajar en la rama de desarrollo aprobada.
- No crear commits, push, merge ni despliegues sin autorización explícita.
- Nunca ejecutar reset --hard, clean -fd o push --force sin autorización.
- No reescribir el historial ni eliminar archivos importantes sin autorización.
- No modificar el framework ni instalar dependencias globales sin aprobación.
- GitHub Pages está documentado desde main / raíz.
- El CSS compilado y el sprite se versionan; no editarlos a mano.
- No publicar automáticamente al terminar una fase.

## Arquitectura y código
- HTML estático, JavaScript vanilla y Tailwind CSS 3.
- Mantener UTF-8 y nombres técnicos en su idioma original.
- Conservar convenciones locales, indentación y funciones existentes.
- Usar rutas relativas compatibles con /portafolio-web/ en GitHub Pages.
- Estilos fuente: src/input.css y tailwind.config.js.
- Iconos fuente: scripts/build-icons.mjs; salida: assets/icons.svg.
- CSS generado: dist/styles.css.
- Temas: js/theme.js es la única fuente de gestión de preferencias.
- Cargar theme.js antes del CSS; no duplicar la lógica en main.js.
- data-theme contiene dark o light; system es una preferencia, no un tema efectivo.
- Usar oscuro si falta una preferencia válida y tolerar fallos de localStorage.
- Preferir variables semánticas; preservar colores propios de ilustraciones.
- No cambiar dependencias ni lockfile sin autorización.

## Calidad
- Conservar semántica HTML, etiquetas accesibles y navegación por teclado.
- Proporcionar focus visible y contraste legible en ambos temas.
- Respetar prefers-reduced-motion.
- Revisar móvil 390 px, tablet 768 px y escritorio 1440 px cuando sea posible.
- Probar temas, recarga, persistencia y cambios del sistema.
- Evitar regresiones en menú, scroll-spy, modal, formulario y enlaces de CV.
- No enviar formularios reales durante QA sin autorización.
- No añadir WebGL ni librerías pesadas sin justificar valor y mantenimiento.
- Conservar SEO y metadatos; no inventar contenido profesional.

## Comandos reales
- npm ci instala únicamente las dependencias bloqueadas.
- En PowerShell usar npm.cmd si npm.ps1 está bloqueado.
- npm run build genera iconos y CSS minificado.
- npm run icons regenera únicamente el sprite SVG.
- npm run watch observa cambios del CSS.
- npm run serve usa npx serve; puede descargar el servidor.
- npm run og y npm run cv usan Edge y sobrescriben recursos generados.
- No ejecutar og/cv fuera del alcance autorizado.
- node --check js/main.js y node --check js/theme.js verifican sintaxis.
- node --check tailwind.config.js verifica la configuración.
- git diff --check detecta problemas de whitespace.
- No existe una suite npm test ni un lint configurado.

## Contexto e informes
- Empezar por rg --files y búsquedas específicas.
- No leer node_modules, .git, binarios o minificados completos innecesariamente.
- No repetir auditorías, lecturas completas o pruebas sin motivo.
- Agrupar verificaciones independientes y mantener las salidas breves.
- Informar cambios, archivos, pruebas reales, pendientes y riesgos.
- No inventar resultados de pruebas ni afirmar validación visual sin evidencia.
- Si una prueba no puede ejecutarse, registrarla como pendiente.
- Responder en español y evitar imprimir archivos completos.
