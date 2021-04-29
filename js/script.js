var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShows: true,
        slideOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
       el: '.swiper-pagination'
    }
})