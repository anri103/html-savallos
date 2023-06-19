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
        nextEl: '.swiper-chevron-next',
        prevEl: '.swiper-chevron-prev',
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

const centeredSwiper = new Swiper('.centeredSwiper', {
    effect: 'coverflow',
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.05,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
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
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
    },
});

const choosesectorSwiper = new Swiper('.choosesectorSwiper', {
    centeredSlides: true,
    loop: true,
    slidesPerView: 1.25,
    spaceBetween: 20,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});

const cataloguesSwiper = new Swiper('.cataloguesSwiper', {
    loop: true,
    slidesPerView: 1.25,
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
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

const feedbackSwiper = new Swiper('.feedbackSwiper', {
    loop: true,
    slidesPerView: 1,
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
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

const aboutSwiper = new Swiper('.aboutSwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});