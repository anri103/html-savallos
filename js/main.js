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
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3.5,
        },
        1200: {
            slidesPerView: 5.5,
        },
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
        1200: {
            slidesPerView: 10,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

