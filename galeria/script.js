document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const container = document.querySelector('.container');

    // Mostrar y animar el contenedor
    container.classList.remove('hidden');
    container.classList.add('animate');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
