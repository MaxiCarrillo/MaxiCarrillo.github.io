// Obtén el elemento
let scrollToHome = document.getElementById('scrollToHome');

// Oculta el elemento inicialmente
scrollToHome.style.display = 'none';

// Agrega el evento de escucha de desplazamiento
window.addEventListener('scroll', function () {
    // Verifica la posición de desplazamiento
    if (window.scrollY > 100) {
        // Muestra el elemento
        scrollToHome.style.display = 'block';
    } else {
        // Oculta el elemento
        scrollToHome.style.display = 'none';
    }
});