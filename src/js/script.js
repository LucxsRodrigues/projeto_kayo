let slideIndex = 0; /*Gab */

showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.slide');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';

    setTimeout(showSlides, 3000); // Troca a imagem a cada 5 segundos
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.slide');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}