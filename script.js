// Configuração do Observador de Interseção (Scroll Animation)
const observerOptions = {
    threshold: 0.15 // O elemento aparece quando 15% dele está visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'active' para disparar a animação do CSS
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Seleciona todos os elementos que têm as classes de animação
const elementsToAnimate = document.querySelectorAll(
    '.reveal-top, .reveal-bottom, .reveal-left, .reveal-right, .service-card, .portfolio-card'
);

// Começa a observar cada elemento
elementsToAnimate.forEach((el) => {
    observer.observe(el);
});

// Suavizar o clique nos links do menu (Scroll Suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
