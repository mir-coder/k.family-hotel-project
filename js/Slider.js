class SwiperSlider {
    constructor(selector, options) {
        this.swiper = new Swiper(selector, options);
    }
}

export class MySwiper extends SwiperSlider {
    constructor() {
        const options = {
            slidesPerView: 3,
            spaceBetween: 15,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
            },
        };
        super(".mySwiper", options);
    }
}

export class MySwiperTwo extends SwiperSlider {
    constructor() {
        const options = {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        };
        super(".mySwiperTwo", options);
    }
}

export class MySwiperReviews extends SwiperSlider {
    constructor() {
        const options = {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                540: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
            },
        };
        super(".mySwiperReviews", options);
    }
}
