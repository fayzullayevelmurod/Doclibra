
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

try {
    // show
    let category_show = document.querySelector('.category_show');
    let full_btn = document.querySelector('.full_btn');
    let btn_icon = document.querySelector('.full_btn img');

    full_btn.addEventListener('click', () => {
        category_show.classList.toggle('active');
        btn_icon.classList.toggle('active');
    })
    // show
} catch(err) {
    console.log(err);
}