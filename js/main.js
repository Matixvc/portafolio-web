        document.getElementById('year').textContent = new Date().getFullYear();

        // Menu movil: aria-expanded, cierre con Esc y al elegir un enlace
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Icono del menu movil: cambiamos el <use> del SVG local (sin clases fa-*)
        function setMenuIcon(name) {
            const use = menuIcon.querySelector('use');
            if (use) use.setAttribute('href', 'assets/icons.svg#icon-' + name);
        }

        function setMobileMenu(isOpen) {
            mobileMenu.classList.toggle('hidden', !isOpen);
            mobileMenu.setAttribute('aria-hidden', String(!isOpen));
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
            mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
            setMenuIcon(isOpen ? 'xmark' : 'bars');
        }

        mobileMenuBtn.addEventListener('click', () => {
            setMobileMenu(mobileMenu.classList.contains('hidden'));
        });

        mobileLinks.forEach((link) => {
            link.addEventListener('click', () => setMobileMenu(false));
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                setMobileMenu(false);
                mobileMenuBtn.focus();
            }
        });

        // Project Filter Buttons Logic
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'bg-accentCyan', 'text-black', 'border-accentCyan');
                    b.classList.add('bg-cardBg', 'text-gray-300', 'border-cardBorder');
                    b.setAttribute('aria-pressed', 'false');
                });

                btn.classList.add('active', 'bg-accentCyan', 'text-black', 'border-accentCyan');
                btn.classList.remove('bg-cardBg', 'text-gray-300', 'border-cardBorder');
                btn.setAttribute('aria-pressed', 'true');

                const filterValue = btn.getAttribute('data-filter');

                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Project Modal Detail Items
        const projectDetails = {
            proj1: {
                title: "Simulador Interactivo 3D",
                badge: "XR / Simulación 3D",
                description: "Prototipo interactivo desarrollado en Unity enfocado en la manipulación precisa de objetos tridimensionales y retroalimentación táctil y visual.",
                features: [
                    "Manipulación física de objetos mediante Raycasting y Rigidbody",
                    "UI contextual flotante 3D adaptada a vistas en espacio mundial",
                    "Sistema de eventos estructurado en C# para registrar acciones del usuario",
                    "Optimización de jerarquía de escena y consumo de memoria RAM"
                ],
                tech: ["Unity 3D", "C#", "Físicas 3D", "Blender Asset Pipeline"]
            },
            proj2: {
                title: "Sistema Modular de Combate e Inventario",
                badge: "Gameplay Core & Architecture",
                description: "Módulo desacoplado de inventario y salud implementando principios SOLID, ScriptableObjects y comunicación mediante eventos C#.",
                features: [
                    "Sistema de inventario drag & drop extensible con ScriptableObjects",
                    "Sistema de vida y daño universal implementando la interfaz IDamageable",
                    "Actualización de interfaz HUD desvinculada mediante eventos C#",
                    "Lógica de persistencia de partidas serializando a JSON"
                ],
                tech: ["C# OOP", "ScriptableObjects", "Unity Canvas UI", "JSON Serialization"]
            },
            proj3: {
                title: "Entorno de Navegación & IA de Enemigos",
                badge: "Inteligencia Artificial & Animación",
                description: "Implementación de IA para agentes enemigos con patrullaje autónomo, persecución del jugador y transiciones de animación fluidas.",
                features: [
                    "Cálculo de rutas dinámicas mediante NavMesh Dynamic Obstacles",
                    "Máquina de Estados Finitos (FSM) modular para comportamientos (Patrol, Chasing, Attack)",
                    "Manejo de Animator Controllers con Blend Trees según velocidad de movimiento",
                    "Audio espacial 3D asignado a eventos de animación"
                ],
                tech: ["Unity NavMesh", "C# FSM", "Animator Controllers", "AudioMixer"]
            }
        };

        const modal = document.getElementById('project-modal');
        const modalPanel = document.getElementById('modal-panel');
        const modalContent = document.getElementById('modal-content');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
        let lastFocusedElement = null;

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

            modalContent.innerHTML = `
                <span class="inline-block px-2.5 py-1 rounded bg-accentCyan/10 border border-accentCyan/30 text-accentCyan text-xs font-semibold mb-3">
                    ${data.badge}
                </span>
                <h3 class="text-2xl font-bold text-white mb-3">${data.title}</h3>
                <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">${data.description}</p>

                <h4 class="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">Aspectos Destacados:</h4>
                <ul class="space-y-2 mb-6">
                    ${data.features.map(f => `<li class="flex items-start gap-2 text-xs text-gray-400"><svg class="text-accentCyan mt-0.5 icon" aria-hidden="true"><use href="assets/icons.svg#icon-check"/></svg> <span>${f}</span></li>`).join('')}
                </ul>

                <h4 class="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">Tecnologías / Herramientas:</h4>
                <div class="flex flex-wrap gap-2">
                    ${data.tech.map(t => `<span class="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-xs text-gray-300">${t}</span>`).join('')}
                </div>
            `;

            modal.setAttribute('aria-label', 'Detalles del proyecto: ' + data.title);
            modal.classList.remove('hidden');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            modalPanel.focus({ preventScroll: true });
            modalPanel.scrollTop = 0;
            modal.addEventListener('keydown', trapFocus);
            document.addEventListener('keydown', onModalKeydown);
        }

        function closeModal() {
            if (modal.classList.contains('hidden')) return;

            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';

            modal.removeEventListener('keydown', trapFocus);
            document.removeEventListener('keydown', onModalKeydown);

            if (lastFocusedElement) {
                lastFocusedElement.focus();
                lastFocusedElement = null;
            }
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
        // PASO 1 (una sola vez): crea una cuenta gratuita y pega aqui tu endpoint.
        //   - Formspree  ->  https://formspree.io/f/xxxxxxxx    (solo FORM_ENDPOINT)
        //   - Web3Forms  ->  https://api.web3forms.com/submit   (+ access key)
        // Si dejas FORM_ENDPOINT vacio, el formulario NO miente: abre el cliente
        // de correo del visitante con el mensaje ya redactado y listo para enviar.
        // =====================================================================
        const FORM_ENDPOINT = '';
        const WEB3FORMS_ACCESS_KEY = '';
        const CONTACT_EMAIL = 'Matias.villalobos.dev@gmail.com';

        const contactForm = document.getElementById('contact-form');
        const formAlert = document.getElementById('form-alert');
        const submitBtn = document.getElementById('submit-btn');
        const submitBtnDefault = submitBtn.innerHTML;
        const REQUIRED_FIELDS = ['name', 'email', 'message'];

        const ALERT_CLASSES = {
            success: 'form-alert-success',
            error: 'form-alert-error',
            info: 'form-alert-info'
        };

        function showAlert(kind, html) {
            formAlert.className = 'p-4 rounded-xl text-xs font-medium border leading-relaxed flex items-start gap-2 ' + ALERT_CLASSES[kind];
            formAlert.innerHTML = html;
            formAlert.classList.remove('hidden');
        }

        function hideAlert() {
            formAlert.classList.add('hidden');
        }

        function setLoading(isLoading) {
            submitBtn.disabled = isLoading;
            submitBtn.innerHTML = isLoading
                ? '<svg class="animate-spin icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-notch"/></svg> <span>Enviando...</span>'
                : submitBtnDefault;
        }

        function markInvalidFields() {
            REQUIRED_FIELDS.forEach(function (id) {
                document.getElementById(id).classList.remove('field-error');
            });

            let firstInvalid = null;
            contactForm.querySelectorAll('input, textarea').forEach(function (field) {
                if (!field.checkValidity()) {
                    field.classList.add('field-error');
                    if (!firstInvalid) {
                        firstInvalid = field;
                    }
                }
            });
            return firstInvalid;
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
            showAlert('info', '<svg class="mt-0.5 text-sm icon" aria-hidden="true"><use href="assets/icons.svg#icon-envelope-open-text"/></svg> <span>Se abrio tu cliente de correo con el mensaje listo para enviar. Si no se abrio, escribeme directo a <a class="underline" href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>.</span>');
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            hideAlert();

            const firstInvalid = markInvalidFields();
            if (firstInvalid) {
                firstInvalid.focus();
                showAlert('error', '<svg class="mt-0.5 text-sm icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-exclamation"/></svg> <span>Revisa los campos marcados antes de enviar.</span>');
                return;
            }

            // Honeypot: solo los bots rellenan este campo escondido
            if (document.getElementById('website').value !== '') {
                contactForm.reset();
                showAlert('success', '<svg class="mt-0.5 text-base icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-check"/></svg> <span>Gracias por escribir. Te responderé a la brevedad.</span>');
                return;
            }

            const payload = buildPayload();

            // Sin endpoint configurado: fallback por correo (siempre funciona, no miente)
            if (!FORM_ENDPOINT) {
                contactForm.reset();
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

                contactForm.reset();
                showAlert('success', '<svg class="mt-0.5 text-base icon" aria-hidden="true"><use href="assets/icons.svg#icon-circle-check"/></svg> <span>Mensaje enviado. ¡Gracias! Te responderé a la brevedad.</span>');
                setTimeout(hideAlert, 8000);
            } catch (error) {
                console.error('[contact-form] Error al enviar:', error);
                showAlert('error', '<svg class="mt-0.5 text-sm icon" aria-hidden="true"><use href="assets/icons.svg#icon-triangle-exclamation"/></svg> <span>No se pudo enviar el mensaje. Escríbeme directo a <a class="underline" href="' + mailtoLink('Contacto desde el portafolio', 'Hola Matías, ') + '">' + CONTACT_EMAIL + '</a> o por WhatsApp al +56 9 8757 6708.</span>');
            } finally {
                setLoading(false);
            }
        });
    
