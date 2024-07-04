
// search
let search_btn = document.querySelector('.search_btn');
let search_media = document.querySelector('.search_media');
let search_close = document.querySelector('.search_close');

search_btn.addEventListener('click', () => {
    search_media.classList.toggle('active');
})

search_close.addEventListener('click', () => {
    search_media.classList.remove('active');
})
// search

// burger
let burger = document.querySelector('.burger');
let media_menu = document.querySelector('.media_menu');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
    media_menu.classList.toggle('active');
    body.classList.toggle('active');
    burger.classList.toggle('active');
})
// burger