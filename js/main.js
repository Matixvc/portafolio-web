(function () {
    'use strict';

    document.getElementById('year').textContent = new Date().getFullYear();

        // Preferencia de movimiento reducido (WCAG 2.3.3): con reduce, las
        // transiciones se saltan y los cierres son inmediatos.
        const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const ANIM_MS = REDUCE_MOTION ? 0 : 250;

        // Menu movil: aria-expanded, apertura animada y cierre con Esc o enlace
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuCloseTimer = null;

        // Icono del menu movil: cambiamos el <use> del SVG local (sin clases fa-*)
        function setMenuIcon(name) {
            const use = menuIcon.querySelector('use');
            if (use) use.setAttribute('href', 'assets/icons.svg#icon-' + name);
        }

        function setMobileMenu(isOpen) {
            if (menuCloseTimer) {
                clearTimeout(menuCloseTimer);
                menuCloseTimer = null;
            }

            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            setMenuIcon(isOpen ? 'xmark' : 'bars');

            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                // Dos requestAnimationFrame: el navegador pinta el estado cerrado
                // antes de añadir .is-open, asi la transicion realmente corre.
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
                });
            } else {
                mobileMenu.classList.remove('is-open');
                menuCloseTimer = setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    menuCloseTimer = null;
                }, ANIM_MS);
            }
        }

        mobileMenuBtn.addEventListener('click', () => {
            setMobileMenu(mobileMenuBtn.getAttribute('aria-expanded') !== 'true');
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => setMobileMenu(false));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
                setMobileMenu(false);
                mobileMenuBtn.focus();
            }
        });

        // NOTA: los filtros de proyecto (Todos/XR/Gameplay) se eliminaron:
        // con solo 3 prototipos aportaban ruido, no valor.

        // Project Modal Detail Items
        // ---------------------------------------------------------------------
        // Campos obligatorios: title, badge, description, features, tech.
        // Campos OPCIONALES de la Fase 4 (rellenalos y aparece solo en el modal;
        // si los dejas vacios NO se muestra nada, no hay texto de relleno):
        //   role    -> tu rol concreto en el proyecto (string)
        //   metrics -> resultados medibles, ej. "60 FPS estables en Quest 2" (array)
        //   repo    -> URL del repositorio en GitHub (string)
        //   demo    -> URL de una build jugable / video (string)
        // ---------------------------------------------------------------------
        const projectDetails = {
            proj1: {
                title: "Physics VR Prototype — Agarre y Lanzamiento",
                badge: "XR / Físicas 3D",
                description: "Prototipo en Unity para probar físicas de agarre, manipulación y lanzamiento de objetos en primera persona, con la interacción planteada para escalar a realidad virtual y realidad mixta.",
                role: "Desarrollo individual — prototipo de práctica personal (Unity + C#)",
                metrics: [],
                repo: "",
                demo: "",
                features: [
                    "Agarre de objetos con física (Rigidbody) en primera persona",
                    "Lanzamiento con impulso según movimiento del jugador",
                    "Interacción diseñada para escalar a VR y realidad mixta",
                    "Prototipo de exploración técnica, sin demo pública por ahora"
                ],
                tech: ["Unity 3D", "C#", "Físicas 3D", "Rigidbody"]
            },
            proj2: {
                title: "Basura Fighters — Roguelike de Reciclaje",
                badge: "Roguelike Web · Jugable",
                description: "Roguelike jugable en el navegador: loop de combate contra oleadas de enemigos, experiencia y progresión de habilidades y armas entre partidas. Todo en un único documento HTML con Canvas 2D.",
                role: "Desarrollo individual — juego web personal",
                metrics: [],
                repo: "https://github.com/Matixvc/Trash-Roguelike",
                demo: "https://trash-rogelike.netlify.app",
                features: [
                    "Loop roguelike: matar enemigos, ganar experiencia y subir habilidades o armas",
                    "Oleadas de enemigos con dificultad progresiva",
                    "Juego completo en un único documento HTML con Canvas 2D",
                    "Demo jugable desplegada en Netlify"
                ],
                tech: ["JavaScript", "Canvas 2D", "HTML5", "Netlify"]
            },
            proj3: {
                title: "App Mobile — Organizador Personal",
                badge: "App Móvil · TypeScript",
                description: "Aplicación móvil para organizar el día a día: horario universitario, fechas importantes con notificación de calendario, cumpleaños y evaluaciones de asignaturas.",
                role: "Desarrollo individual — app móvil personal",
                metrics: [],
                repo: "https://github.com/Matixvc/App-Mobile",
                demo: "",
                features: [
                    "Horario universitario personalizable",
                    "Fechas importantes con notificación vía calendario",
                    "Recordatorios de cumpleaños",
                    "Seguimiento de evaluaciones de asignaturas"
                ],
                tech: ["React Native", "TypeScript", "Notificaciones"]
            }
        };

        const modal = document.getElementById('project-modal');
        const modalPanel = document.getElementById('modal-panel');
        const modalContent = document.getElementById('modal-content');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
        let lastFocusedElement = null;
        let modalCloseTimer = null;

        // Mantiene el foco dentro del dialogo mientras esta abierto (focus trap)
        function trapFocus(event) {
            if (event.key !== 'Tab') return;

            const focusables = Array.from(modalPanel.querySelectorAll(FOCUSABLE))
                .filter((el) => !el.disabled && el.getClientRects().length > 0);

            if (focusables.length === 0) {
                event.preventDefault();
                modalPanel.focus({ preventScroll: true });
                return;
            }

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }

        function onModalKeydown(event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeModal();
            }
        }

        function openModal(id) {
            const data = projectDetails[id];
            if (!data) return;

            // Recordamos quien abrio el dialogo para devolverle el foco al cerrar
            lastFocusedElement = document.activeElement;

            // Bloques opcionales (Fase 4): si el campo esta vacio, no se pinta nada
            const roleBlock = data.role
                ? `<p class="text-sm text-gray-400 mb-6"><span class="font-semibold text-gray-200">Mi rol:</span> ${data.role}</p>`
                : '';

            const metricsBlock = (data.metrics && data.metrics.length)
                ? `<h4 class="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">Resultados / Métricas:</h4>
                <ul class="space-y-2 mb-6">
                    ${data.metrics.map(m => `<li class="flex items-start gap-2 text-sm text-gray-400"><svg class="text-accentViolet mt-0.5 icon" aria-hidden="true"><use href="assets/icons.svg#icon-gauge-high"/></svg> <span>${m}</span></li>`).join('')}
                </ul>`
                : '';

            const links = [];
            if (data.repo) {
                links.push(`<a href="${data.repo}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-gray-200 hover:border-accentCyan hover:text-accentCyan transition-all flex items-center gap-2"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-github"/></svg> Ver repositorio</a>`);
            }
            if (data.demo) {
                links.push(`<a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-semibold text-gray-200 hover:border-accentCyan hover:text-accentCyan transition-all flex items-center gap-2"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg#icon-arrow-up-right-from-square"/></svg> Probar demo</a>`);
            }
            const linksBlock = links.length
                ? `<div class="flex flex-wrap gap-3 mt-6 pt-6 border-t border-cardBorder">${links.join('')}</div>`
                : '';

            modalContent.innerHTML = `
                <span class="inline-block px-2.5 py-1 rounded bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-semibold mb-3">
                    ${data.badge}
                </span>
                <h3 class="text-2xl font-bold text-white mb-3">${data.title}</h3>
                <p class="text-gray-300 text-sm leading-relaxed mb-6">${data.description}</p>
                ${roleBlock}

                <h4 class="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">Aspectos Destacados:</h4>
                <ul class="space-y-2 mb-6">
                    ${data.features.map(f => `<li class="flex items-start gap-2 text-sm text-gray-400"><svg class="text-accentCyan mt-0.5 icon" aria-hidden="true"><use href="assets/icons.svg#icon-check"/></svg> <span>${f}</span></li>`).join('')}
                </ul>
                ${metricsBlock}

                <h4 class="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">Tecnologías / Herramientas:</h4>
                <div class="flex flex-wrap gap-2">
                    ${data.tech.map(t => `<span class="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-xs text-gray-300">${t}</span>`).join('')}
                </div>
                ${linksBlock}
            `;

            modal.setAttribute('aria-label', 'Detalles del proyecto: ' + data.title);
            if (modalCloseTimer) {
                clearTimeout(modalCloseTimer);
                modalCloseTimer = null;
            }
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Fade + scale: .is-open va al overlay Y al panel tras dos cuadros
            // (si solo la recibe el overlay, el panel queda en opacity:0 y
            //  el usuario ve el fondo oscuro pero "no se abre nada").
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.classList.add('is-open');
                    modalPanel.classList.add('is-open');
                });
            });

            modalPanel.focus({ preventScroll: true });
            modalPanel.scrollTop = 0;
            modal.addEventListener('keydown', trapFocus);
            document.addEventListener('keydown', onModalKeydown);
        }

        function closeModal() {
            if (modal.classList.contains('hidden')) return;

            modal.classList.remove('is-open');
            modalPanel.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            modal.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', onModalKeydown);

            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }

            // Espera al final de la transicion antes de ocultar del todo
            if (modalCloseTimer) clearTimeout(modalCloseTimer);
            modalCloseTimer = setTimeout(() => {
                modal.classList.add('hidden');
                modalCloseTimer = null;
            }, ANIM_MS);
        }

        // Cierra solo si el clic fue en el fondo, no dentro del panel
        modal.addEventListener('click', (event) => {
            if (event.target === modal) closeModal();
        });

        modalCloseBtn.addEventListener('click', closeModal);

        // Los botones "Ver Detalles" abren el dialogo (sin onclick inline)
        document.querySelectorAll('[data-project]').forEach((button) => {
            button.addEventListener('click', () => openModal(button.dataset.project));
        });

        // =====================================================================
        // FORMULARIO DE CONTACTO - ENVIO REAL
        // ---------------------------------------------------------------------
        // CONFIGURADO con Web3Forms (recibe en Matias.villalobos.dev@gmail.com).
        // Alternativa Formspree: FORM_ENDPOINT = 'https://formspree.io/f/xxxx'
        // (con Formspree WEB3FORMS_ACCESS_KEY queda vacio).
        // Si vacias FORM_ENDPOINT, el formulario NO miente: abre el cliente
        // de correo del visitante con el mensaje ya redactado y listo para enviar.
        // =====================================================================
                const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
        const WEB3FORMS_ACCESS_KEY = '65c144b4-4c81-4610-8057-4df6b8a2b605';
        const CONTACT_EMAIL = 'Matias.villalobos.dev@gmail.com';
        const WHATSAPP_LINK = 'https://wa.me/56987576708';

                const contactForm = document.getElementById('contact-form');
        const formAlert = document.getElementById('form-alert');
        const submitBtn = document.getElementById('submit-btn');
        const submitBtnDefault = submitBtn.innerHTML;
        const loadingSpinner = '<svg class="animate-spin icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-notch"/></svg> <span>Enviando...</span>';
        const successIcon = '<svg class="mt-0.5 text-base icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-check"/></svg>';
        const errorIcon = '<svg class="mt-0.5 text-sm icon" aria-hidden="true"><use href="assets/icons.svg#icon-triangle-exclamation"/></svg>';
                const infoIcon = '<svg class="mt-0.5 text-sm icon" aria-hidden="true"><use href="assets/icons.svg#icon-envelope-open-text"/></svg>';

        const ALERT_CLASSES = {
            success: 'form-alert-success',
            error: 'form-alert-error',
            info: 'form-alert-info'
        };

        function showAlert(kind, html) {
            formAlert.className = 'p-4 rounded-xl text-xs font-medium border leading-relaxed flex items-start gap-2 ' + ALERT_CLASSES[kind];
            formAlert.innerHTML = html;
            formAlert.classList.remove('hidden');
            // Mensaje de alerta accesible para lectores de pantalla
            formAlert.setAttribute('role', kind === 'success' ? 'status' : kind === 'error' ? 'alert' : 'status');
        }

        function hideAlert() {
            formAlert.classList.add('hidden');
            formAlert.removeAttribute('role');
        }

        function setLoading(isLoading, buttonLabel) {
            if (!submitBtn) return;
            submitBtn.disabled = isLoading;
            submitBtn.innerHTML = isLoading ? loadingSpinner : (buttonLabel || submitBtnDefault);
            submitBtn.setAttribute('aria-busy', String(isLoading));
        }

        // ---------------------------------------------------------------------
        // Validacion en tiempo real + estado del envio
        // ---------------------------------------------------------------------
        // Mensajes por campo (solo los errores mostrables; subject es opcional).
        const FIELD_MESSAGES = {
            name: { valueMissing: 'Escribe tu nombre para continuar.' },
            email: {
                valueMissing: 'Necesito tu correo para poder responderte.',
                typeMismatch: 'El formato del correo no parece válido (ej: nombre@dominio.com).'
            },
            message: { valueMissing: 'Escribe un mensaje con el detalle de tu consulta.' }
        };

        // Valida un campo y pinta/limpia su mensaje accesible (<p id="...-error">).
        // show=false solo limpia errores ya marcados (no molesta mientras se escribe).
        function validateField(field, show) {
            const messages = FIELD_MESSAGES[field.id];
            const errorEl = document.getElementById(field.id + '-error');
            if (!messages || !errorEl) return field.checkValidity();

            let message = '';
            if (!field.validity.valid) {
                if (field.validity.valueMissing && messages.valueMissing) {
                    message = messages.valueMissing;
                } else if (field.validity.typeMismatch && messages.typeMismatch) {
                    message = messages.typeMismatch;
                } else {
                    message = 'Revisa este campo.';
                }
            }

            if (message) {
                if (show) {
                    errorEl.textContent = message;
                    errorEl.classList.remove('hidden');
                    field.classList.add('field-error');
                    field.setAttribute('aria-invalid', 'true');
                }
            } else {
                errorEl.textContent = '';
                errorEl.classList.add('hidden');
                field.classList.remove('field-error');
                field.setAttribute('aria-invalid', 'false');
            }
            return !message;
        }

        Object.keys(FIELD_MESSAGES).forEach(function (id) {
            const field = document.getElementById(id);
            if (!field) return;

            // Al salir del campo se muestra el error si lo hay...
            field.addEventListener('blur', function () {
                validateField(field, true);
            });

            // ...y mientras se reescribe se limpia en cuanto el valor es valido.
            field.addEventListener('input', function () {
                if (field.classList.contains('field-error')) {
                    validateField(field, true);
                }
            });
        });

        // Contador de caracteres del mensaje: maxlength accesible de verdad
        const messageField = document.getElementById('message');
        const messageCount = document.getElementById('message-count');

                function updateMessageCount() {
            if (messageField && messageCount) {
                messageCount.textContent = messageField.value.length + ' / 2000';
                // Anuncia cambios al lector de pantalla
                messageCount.setAttribute('aria-live', 'polite');
            }
        }

        if (messageField) {
            messageField.addEventListener('input', updateMessageCount);
            updateMessageCount();
        }

        function markInvalidFields() {
            let firstInvalid = null;
            contactForm.querySelectorAll('input, textarea').forEach(function (field) {
                if (field.id === 'website') return; // honeypot: fuera de la validacion
                if (!validateField(field, true) && !firstInvalid) {
                    firstInvalid = field;
                }
            });
            return firstInvalid;
        }

        // Tras enviar (o abortar por el honeypot) se limpian errores y contador
        function resetFormState() {
            contactForm.reset();
            Object.keys(FIELD_MESSAGES).forEach(function (id) {
                const field = document.getElementById(id);
                const errorEl = document.getElementById(id + '-error');
                if (field) {
                    field.classList.remove('field-error');
                    field.removeAttribute('aria-invalid');
                }
                if (errorEl) {
                    errorEl.textContent = '';
                    errorEl.classList.add('hidden');
                }
            });
            updateMessageCount();
        }

        function buildPayload() {
            const data = new FormData(contactForm);
            const payload = {
                name: (data.get('name') || '').toString().trim(),
                email: (data.get('email') || '').toString().trim(),
                subject: (data.get('subject') || '').toString().trim(),
                message: (data.get('message') || '').toString().trim()
            };

            if (!payload.subject) {
                payload.subject = 'Contacto desde el portafolio - ' + payload.name;
            }
            if (WEB3FORMS_ACCESS_KEY) {
                payload.access_key = WEB3FORMS_ACCESS_KEY;
            }
            return payload;
        }

        function mailtoLink(subject, body) {
            return 'mailto:' + CONTACT_EMAIL
                + '?subject=' + encodeURIComponent(subject)
                + '&body=' + encodeURIComponent(body);
        }

                function openMailFallback(payload) {
            const body = 'Nombre: ' + payload.name + '\n'
                + 'Correo: ' + payload.email + '\n\n'
                + payload.message;

            window.location.href = mailtoLink(payload.subject, body);
            resetFormState();
                        showAlert('info', infoIcon + ' <span>Se abrió tu cliente de correo con el mensaje listo para enviar. ' +
                'Si no se abrió, escríbeme directo a <a class="underline" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a> ' +
                'o por <a class="underline" href="' + WHATSAPP_LINK + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</span>');
        }

        // Mensaje visible cuando el envío real falla o el endpoint no responde:
        // SIEMPRE incluye alternativas reales (WhatsApp + correo directo).
        function showFallbackAlert(extraMessage) {
            const base = extraMessage
                ? '<strong class="block font-semibold mb-1">No se pudo enviar el formulario.</strong><span>' + extraMessage + '</span>'
                : '<strong class="block font-semibold mb-1">No se pudo enviar el formulario.</strong><span>';
            showAlert('error', errorIcon + ' ' + base +
                ' Puedes escribirme directamente por <a class="underline" href="' + WHATSAPP_LINK + '" target="_blank" rel="noopener noreferrer">WhatsApp</a> ' +
                'o a <a class="underline" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>. Gracias por tu paciencia.</span>');
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            hideAlert();

            const firstInvalid = markInvalidFields();
            if (firstInvalid) {
                firstInvalid.focus();
                                showAlert('error', errorIcon + ' <span>Revisa los campos marcados antes de enviar.</span>');
                return;
            }

            // Honeypot: solo los bots rellenan este campo escondido
            if (document.getElementById('website').value !== '') {
                resetFormState();
                                showAlert('success', successIcon + ' <span>Gracias por escribir. Te responderé a la brevedad.</span>');
                return;
            }

            const payload = buildPayload();

            // Sin endpoint configurado: fallback por correo (siempre funciona, no miente)
            if (!FORM_ENDPOINT) {
                resetFormState();
                openMailFallback(payload);
                return;
            }

            setLoading(true);

            try {
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }

                resetFormState();
                                showAlert('success', successIcon + ' <span>Mensaje enviado. ¡Gracias! Te responderé a la brevedad.</span>');
                setTimeout(hideAlert, 8000);
            } catch (error) {
                                console.error('[contact-form] Error al enviar:', error);
                showFallbackAlert('No se pudo enviar el mensaje. Inténtalo de nuevo, o escríbeme directamente.');
            } finally {
                setLoading(false);
            }
        });

        // =====================================================================
        // BOTON DE CV - se activa solo cuando el PDF existe
        // ---------------------------------------------------------------------
        // Sube tu CV como assets/cv-matias-villalobos.pdf (nombre exacto) y el
        // boton del hero queda operativo solo. Mientras el archivo no exista, el
        // boton se atenua y lo avisa, en vez de ofrecer una descarga que
        // terminaria en un error 404.
        // =====================================================================
        const cvBtn = document.getElementById('cv-btn');
        const cvBtnLabel = document.getElementById('cv-btn-label');

        if (cvBtn && cvBtnLabel) {
            // Abierto como file:// el navegador no deja comprobar el archivo:
            // no tocamos el boton para no dar un falso "no disponible".
            if (window.location.protocol !== 'file:') {
                fetch(cvBtn.getAttribute('href'), { method: 'HEAD', cache: 'no-store' })
                    .then((response) => {
                        if (response.ok) return;
                        throw new Error('HTTP ' + response.status);
                    })
                    .catch(() => {
                        let cvNote = null;

                        cvBtn.classList.add('cv-pending');
                        cvBtn.setAttribute('aria-disabled', 'true');
                        cvBtn.setAttribute('title', 'CV en preparación: escríbeme y te lo envío');
                        cvBtn.removeAttribute('download');
                        cvBtnLabel.textContent = 'CV disponible próximamente';

                        cvBtn.addEventListener('click', (event) => {
                            event.preventDefault();

                            if (!cvNote) {
                                cvNote = document.createElement('p');
                                cvNote.id = 'cv-note';
                                cvNote.setAttribute('role', 'status');
                                cvNote.className = 'mt-4 text-xs text-gray-400';
                                cvNote.innerHTML = 'CV en preparación. Escríbeme a <a class="underline" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a> o por <a class="underline" href="' + WHATSAPP_LINK + '" target="_blank" rel="noopener noreferrer">WhatsApp</a> y te lo envío.';
                                // Se inserta DESPUES del contenedor flex: dentro encogería
                                // los botones del hero (el contenedor no hace wrap).
                                cvBtn.parentElement.insertAdjacentElement('afterend', cvNote);
                            }
                        });
                    });
            }
        }

        // Copiar correo con microfeedback (✓ temporal en el botón)
        const copyEmailBtn = document.getElementById('copy-email');
        if (copyEmailBtn) {
            copyEmailBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(CONTACT_EMAIL);
                    copyEmailBtn.textContent = '✓ Copiado';
                } catch (err) {
                    // navigator.clipboard requiere contexto seguro (https/localhost)
                    const aux = document.createElement('textarea');
                    aux.value = CONTACT_EMAIL;
                    aux.style.position = 'fixed';
                    aux.style.opacity = '0';
                    document.body.appendChild(aux);
                    aux.select();
                    document.execCommand('copy');
                    aux.remove();
                    copyEmailBtn.textContent = '✓ Copiado';
                }
                setTimeout(() => { copyEmailBtn.textContent = 'Copiar'; }, 2000);
            });
        }

        // =====================================================================
        // SCROLL-SPY + HEADER AL SCROLL + VOLVER ARRIBA
        // ---------------------------------------------------------------------
        // Resalta la seccion activa en la navegacion (desktop y movil) via
        // aria-current, da mas presencia al header al scrollear y muestra el
        // boton de volver arriba cuando hay recorrido suficiente.
        // =====================================================================
        const siteHeader = document.getElementById('site-header');
        const backToTopBtn = document.getElementById('back-to-top');
        let scrollTicking = false;

        function onScroll() {
            if (scrollTicking) return;
            scrollTicking = true;
            requestAnimationFrame(function () {
                const y = window.scrollY;

                if (siteHeader) {
                    siteHeader.classList.toggle('header-scrolled', y > 8);
                }

                if (backToTopBtn) {
                    const show = y > 600;
                    backToTopBtn.classList.toggle('opacity-0', !show);
                    backToTopBtn.classList.toggle('pointer-events-none', !show);
                    backToTopBtn.setAttribute('tabindex', show ? '0' : '-1');
                    backToTopBtn.setAttribute('aria-hidden', String(!show));
                }

                scrollTicking = false;
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: REDUCE_MOTION ? 'auto' : 'smooth' });
            });
        }

        // Scroll-spy: la seccion que cruza la banda central del viewport decide
        // el enlace activo (desktop y movil). El estilo lo aplica input.css via
        // header nav a[aria-current="location"], evitando la especificidad de clases.
        const spyLinks = document.querySelectorAll('nav[aria-label="Navegación principal"] a[href^="#"], #mobile-menu a[href^="#"]');
        const spySections = document.querySelectorAll('main section[id]');

        function setActiveSection(id) {
            spyLinks.forEach(function (link) {
                if (link.getAttribute('href') === '#' + id) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        if ('IntersectionObserver' in window) {
            const spyObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

            spySections.forEach(function (section) {
                spyObserver.observe(section);
            });
        }

        // =====================================================================
        // ANALITICA (Fase 5) - opcional, ligera y sin cookies
        // ---------------------------------------------------------------------
        // Con ANALYTICS_PROVIDER vacio no se carga NADA (cero peticiones, cero
        // ruido en consola). Para activarla:
        //   Plausible -> ANALYTICS_PROVIDER = 'plausible'; ANALYTICS_ID = 'matixvc.github.io';
        //   Umami     -> ANALYTICS_PROVIDER = 'umami';     ANALYTICS_ID = 'tu-website-id';
        // =====================================================================
        const ANALYTICS_PROVIDER = '';
        const ANALYTICS_ID = '';
        const ANALYTICS_SOURCES = {
            plausible: 'https://plausible.io/js/script.js',
            umami: 'https://cloud.umami.is/script.js'
        };

        function enableAnalytics() {
            const src = ANALYTICS_SOURCES[ANALYTICS_PROVIDER];
            if (!src || !ANALYTICS_ID) return;

            const tag = document.createElement('script');
            tag.defer = true;
            tag.src = src;
            tag.setAttribute('data-domain', ANALYTICS_ID);      // Plausible
            tag.setAttribute('data-website-id', ANALYTICS_ID);  // Umami
            document.head.appendChild(tag);
        }

        enableAnalytics();
})();
    
