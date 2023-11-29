let slideAtual = 0;

function exibirSlide(index) {
    const galeria = document.querySelector('.gallery');
    const totalSlides = galeria.children.length;

    // Garante que o índice esteja dentro da faixa válida
    if (index < 0) {
        slideAtual = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideAtual = 0;
    } else {
        slideAtual = index;
    }

    // Oculta todos os slides
    for (let i = 0; i < totalSlides; i++) {
        galeria.children[i].style.display = 'none';
    }

    // Exibe o slide atual
    galeria.children[slideAtual].style.display = 'block';
}

function prevSlide() {
    exibirSlide(slideAtual - 1);
}

function nextSlide() {
    exibirSlide(slideAtual + 1);
}

// Exibe o slide inicial
exibirSlide(slideAtual);

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
