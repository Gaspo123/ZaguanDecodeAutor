 /* Animación Carousel */

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
});

// Responsive
window.addEventListener('resize', () => {
    const containerWidth = carouselInner.offsetWidth;
    carouselItems.forEach((item, index) => {
        item.style.width = `${containerWidth}px`;
        if (index === currentIndex) {
            carouselInner.style.transform = `translateX(-${index * containerWidth}px)`;
        }
    });
});

// Initial setup for responsiveness
window.dispatchEvent(new Event('resize'));

/* Fin Animación Carousel */

/* Formulario */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registro-form');
    const mensaje = document.querySelector('.mensaje');
    const btnEnviar = document.querySelector('.btn-enviar');
    const btnVolver = document.querySelector('.btn-volver');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario
        // Aquí puedes agregar tu lógica de validación del formulario

        // Muestra el mensaje
        mensaje.classList.remove('hidden');
    });

    btnVolver.addEventListener('click', function() {
        // Oculta el mensaje al hacer clic en "Volver al home"
        mensaje.classList.add('hidden');
    });
});



