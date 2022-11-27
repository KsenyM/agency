'use strict';
const menuWrapper = document.querySelector('.popup-menu');
const menuButton = document.querySelector('.popup-menu_btn');
const menuList = document.querySelector('.popup-menu_list');
const menuCloseButton = document.querySelector('.popup-menu_btn__menu-icon')

function showMenu() {
    menuList.classList.toggle('visuallyhidden');
    menuButton.classList.toggle('popup-menu_btn__close-icon')
}

menuButton.addEventListener('click', showMenu);

function closeMenu(evt) {
    let InsideMenu = menuWrapper.contains(evt.target);

    if (!InsideMenu) {
        menuList.classList.add('visuallyhidden');
    }

}

window.onscroll = () => {
    const header = document.querySelector('.header');
    const Y = window.scrollY

    if (Y > 80) {
        header.classList.add('header__fixed')
    } else if (Y < 80) {
        header.classList.remove('header__fixed')
    }
};