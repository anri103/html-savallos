const toggleButtons = document.querySelectorAll('.menu-item-has-children');

(() => {
    toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener('click', () => {
            toggleButton.lastElementChild.classList.toggle('open');
        });
    });
})();

//////////////////////////////////////////////////////////////////
// [ Главный слайдер ]

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

