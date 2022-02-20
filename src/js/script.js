document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu__list'),
    menuItem = document.querySelectorAll('.nav-menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('nav-menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('nav-menu__list_active');
        });
    });
});