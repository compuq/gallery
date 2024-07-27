document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav .menu a');
    const content = document.querySelector('.content');
    const menuToggle = document.querySelector('nav .menu-toggle');
    const menu = document.querySelector('nav .menu');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const index = Array.from(targetSection.parentNode.children).indexOf(targetSection);
                content.style.transform = `translateX(-${index * 100}%)`;
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show'); // Hide menu on link click
                }
            }
        });
    });

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show'); // Toggle menu visibility
    });
});
