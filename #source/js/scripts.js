document.querySelector('.faq-accordion').addEventListener('click', () => {
    if(event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item')
        .classList.toggle('faq-accordion__item--active')
    }
})
document.querySelector('.btn-burger').addEventListener('click', () => {
    document.querySelector('.section-header')
    .classList.toggle('section-header--active-nav')
})

const swiper = new Swiper('.section-hero-image', {
    loop: true,
    effect: 'flip',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.section-hero-image .dots',
        clickable: true,
    },
});
const swiper2 = new Swiper('.slider-blog-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slider .dots',
        clickable: true,
    },
});
const swiper3 = new Swiper('.slider-quotes-container', {
    loop: true,
    effect: 'coverflow',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: '1',
    spaceBetween: 30,

    pagination: {
        el: '.section-quotes .dots',
        clickable: true,
    },
});
