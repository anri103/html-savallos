const toggleButtons = document.querySelectorAll('.menu-item-has-children');

(() => {
    toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener('click', () => {
            toggleButton.lastElementChild.classList.toggle('open');
        });
    });
})();

//////////////////////////////////////////////////////////////////
// [ Слайдер продуктов ]

const prodSwiper = new Swiper('.prodSwiper', {
    loop: true,
    slidesPerView: 5.5,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
});

const partnersSwiper = new Swiper('.partnersSwiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-custom-next',
        prevEl: '.swiper-custom-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 10,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

