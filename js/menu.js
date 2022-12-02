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
     console.log(InsideMenu)
    if (!InsideMenu) {
        menuList.classList.add('visuallyhidden');
    }
}

document.addEventListener('click', closeMenu)

window.onscroll = () => {
    const header = document.querySelector('.header');
    const Y = window.scrollY 
    const activeMenu = document.querySelector('.site-menu__item');

    if (Y > 80) {
        header.classList.add('header__fixed');
        activeMenu.classList.remove('site-menu__item_active');
       
    } else if (Y < 80) {
        header.classList.remove('header__fixed');
        activeMenu.classList.add('site-menu__item_active')
    }
};