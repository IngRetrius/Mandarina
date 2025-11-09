// Data structure for the process steps
const processStepsData = [
    {
        id: 'step-1',
        title: '1. Conectar y Comprender la Visión',
        text: '<strong style="color: var(--color-primary);">Fase clave de Empatía.</strong> Usamos herramientas como el <strong>Mapa de Empatía</strong> para entender profundamente las necesidades no atendidas y la visión del cliente. Formamos una visión compartida del proyecto desde el inicio.',
        cue_text: 'Herramienta: Mapa de Empatía. Objetivo: Visión compartida.',
        cue_icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
        color: '#3b82f6'
    },
    {
        id: 'step-2',
        title: '2. Co-Crear con Tecnología (IA/Catálogo Digital)',
        text: 'Generamos opciones preliminares usando <strong style="color: var(--color-primary);">Inteligencia Artificial</strong> y nuestro <strong>Catálogo Digital Interactivo</strong>. Esto permite al cliente combinar propuestas y tomar decisiones clave de diseño de manera ágil.',
        cue_text: 'Herramienta: IA generativa & Catálogo Digital. Objetivo: Velocidad y Variedad de Opciones.',
        cue_icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-6.25-3zM5 9a2 2 0 012-2h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"></path></svg>`,
        color: '#f59e0b'
    },
    {
        id: 'step-3',
        title: '3. Definir y Validar Inmersivo (VR/AR)',
        text: 'El cliente experimenta el diseño en un <strong style="color: var(--color-primary);">entorno inmersivo (Realidad Virtual/Aumentada)</strong>. Esto asegura la comprensión total de los espacios, materiales y dimensiones, eliminando la frustración y los reprocesos.',
        cue_text: 'Herramienta: Gafas VR/RA. Objetivo: Cero malentendidos, validación emocional.',
        cue_icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>`,
        color: '#10b981'
    },
    {
        id: 'step-4',
        title: '4. Planos con Cero Dudas (BIM)',
        text: 'Convertimos el diseño validado en un <strong style="color: var(--color-primary);">modelo técnico detallado y coordinado (BIM)</strong> entre todas las especialidades. Esto genera <strong>Planos con Cero Dudas</strong>, listos para la ejecución en obra sin sorpresas.',
        cue_text: 'Herramienta: Modelado BIM. Objetivo: Planificación precisa y anticipada.',
        cue_icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>`,
        color: '#ef4444'
    },
    {
        id: 'step-5',
        title: '5. Acompañamiento y Monitoreo',
        text: 'Aseguramos la calidad y la <strong style="color: var(--color-primary);">fidelidad total al diseño</strong> durante la construcción. El SGI captura las lecciones aprendidas y los resultados para retroalimentar continuamente el proceso. <strong>Gestión del Conocimiento.</strong>',
        cue_text: 'Herramienta: KPIs y Gestión del Conocimiento. Objetivo: Mejora continua y medición de impacto.',
        cue_icon: `<svg class="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
        color: '#8b5cf6'
    }
];

// --- INTERSECTION OBSERVER para animaciones de entrada (Lazy Loading) ---
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todos los elementos con clases de animación
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
}

// --- SCROLL PROGRESS BAR Y NAVBAR ---
function setupScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const navbarScroll = document.getElementById('navbarScroll');
    const logoNavLink = document.getElementById('logoNavLink');
    const heroHeight = window.innerHeight * 0.5; // 50% de la altura del viewport

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        // Actualizar barra de progreso
        scrollProgress.style.width = scrolled + '%';

        // Mostrar/ocultar navbar con logo
        if (navbarScroll) {
            if (winScroll > heroHeight) {
                navbarScroll.classList.add('visible');
            } else {
                navbarScroll.classList.remove('visible');
            }
        }
    });

    // Smooth scroll al hacer clic en el logo del navbar
    if (logoNavLink) {
        logoNavLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// --- FUNCIÓN DE INTERACCIÓN CRÍTICA ---
function setupInteraction() {
    const stepElements = document.querySelectorAll('.process-step');
    const form = document.getElementById('contact-form');
    const message = document.getElementById('submission-message');
    const descriptionBox = document.getElementById('description-box');

    function updateContent(stepData) {
        // Añadir clase de transición
        descriptionBox.classList.add('content-transition');

        // Función para actualizar el contenido del panel central
        document.getElementById('description-title').textContent = stepData.title;
        document.getElementById('description-text').innerHTML = stepData.text;
        document.getElementById('visual-cue-text').textContent = stepData.cue_text;

        const iconContainer = document.querySelector('#visual-cue-icon');
        iconContainer.innerHTML = stepData.cue_icon;
        iconContainer.style.color = stepData.color;

        descriptionBox.style.borderColor = stepData.color;

        // Remover clase después de la animación
        setTimeout(() => {
            descriptionBox.classList.remove('content-transition');
        }, 500);
    }

    stepElements.forEach(element => {
        // Añadir el evento de clic
        element.addEventListener('click', () => {
            stepElements.forEach(el => el.classList.remove('active'));
            element.classList.add('active');

            const stepId = element.id;
            const selectedStep = processStepsData.find(step => step.id === stepId);

            if (selectedStep) {
                updateContent(selectedStep);
            }
        });

        // Accesibilidad: soporte para teclado
        element.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                element.click();
            }
        });
    });

    // Carga el contenido del Paso 1 por defecto al iniciar
    const initialStep = processStepsData.find(step => step.id === 'step-1');
    if (initialStep) {
        updateContent(initialStep);
    }

    // Simulación de envío de formulario
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            message.classList.remove('hidden');
            setTimeout(() => {
                message.classList.add('hidden');
            }, 5000);
        });
    }
}

// --- INICIALIZACIÓN ---
function initializePage() {
    setupScrollAnimations();
    setupScrollProgress();
    setupInteraction();
}

// CORRECCIÓN FINAL: Asegura que el script se ejecute SOLO después de cargar la página (DOM)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}
