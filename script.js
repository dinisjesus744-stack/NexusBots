// Animação de entrada
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Adiciona classe reveal em elementos específicos se quiseres
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '1';
});
