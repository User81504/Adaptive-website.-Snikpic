"use strict"

document.addEventListener('click', documetClick);

function documetClick(e) {
    const targetItem = e.target;
    if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
    }   
}