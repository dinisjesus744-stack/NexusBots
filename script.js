// Animação de Reveal no Scroll (JavaScript)
window.addEventListener('scroll', revealElements);

function revealElements() {
    // Seleciona todos os elementos com as classes de animação
    const reveals = document.querySelectorAll('.reveal-top, .reveal-bottom, .reveal-left, .reveal-right');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight; // Altura da janela
        const elementTop = element.getBoundingClientRect().top; // Topo do elemento em relação à janela
        const revealPoint = 100; // Ponto de trigger (pixels do fundo da janela)

        // Se o elemento estiver visível na janela, adiciona a classe 'active'
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } else {
            // (Opcional) Remove a classe para re-animar no scroll reverso
            // element.classList.remove('active');
        }
    });
}

// Ativa a animação para os elementos já visíveis no load inicial
window.addEventListener('load', revealElements);
