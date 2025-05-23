document.addEventListener("DOMContentLoaded", function () {
    // Animaciones con GSAP
    gsap.from(".logo", { scale: 0, opacity: 0, duration: 1.2, ease: "power2.out" });
    gsap.from(".nav-links li:nth-child(1)", { opacity: 0, x: -50, duration: 1 });
    gsap.from(".nav-links li:nth-child(2)", { opacity: 0, y: -50, duration: 1.2 });
    gsap.from(".nav-links li:nth-child(3)", { opacity: 0, x: 50, duration: 1.4 });
    gsap.from(".nav-links li:nth-child(4)", { opacity: 0, y: 50, duration: 1.6 });

    // Toggle del menú responsive
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en un enlace (opcional)
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Scroll suave personalizado
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado
            const targetId = this.getAttribute("href"); // Obtiene el ID del objetivo
            const targetSection = document.querySelector(targetId); // Selecciona la sección objetivo

            if (targetSection) {
                // Usa GSAP para un desplazamiento suave
                gsap.to(window, {
                    duration: 1, // Duración de la animación (en segundos)
                    scrollTo: targetSection,
                    ease: "power2.inOut", // Efecto de easing suave
                });
            }
        });
    });

    // Animación al acercarse a la sección "Nosotros"
    gsap.from(".about-us", {
        scrollTrigger: {
            trigger: ".about-us", // Elemento que activa la animación
            start: "top 80%", // Inicia la animación cuando el 80% del elemento es visible
            end: "bottom 20%", // Termina la animación cuando el 20% del elemento sale de la pantalla
            toggleActions: "play none none none", // Reproduce la animación una vez
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
    });

    // Animación individual de los about-section
    gsap.from(".about-section1, .about-section2, .about-section3, .about-section4, .about-section5, .about-section6", {
        scrollTrigger: {
            trigger: ".about-us",
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2, // Retraso entre cada elemento
        duration: 1,
        ease: "power2.out",
    });

    // Animación para los h2 al hacer scroll
    gsap.utils.toArray("h2").forEach((h2) => {
        gsap.from(h2, {
            scrollTrigger: {
                trigger: h2,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
        });
    });
});