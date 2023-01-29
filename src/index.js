import * as bootstrap from "bootstrap";
import $ from "jquery";

import Swiper from "swiper/bundle";

// styles

import "./assets/styles/main.scss";

// javascript

$(".toggler-icon").each(function (_, btn) {
	$(btn).on("click", function () {
		$(this).toggleClass("active");
	});
});

$(".questions__form").on("submit", function (e) {
	e.preventDefault();
});

$(".link").each((_, link) => {
	$(link).removeClass("active");

	if (location.pathname.split("/")[1] === $(link)[0].pathname.split("/")[1]) {
		$(link).addClass("active");
	}
});

const swiper = new Swiper(".mySwiper", {
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		550: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		991: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5,
		},
	},
});

const servicesSwiper = new Swiper(".servicesSwiper", {
	direction: "horizontal",
	spaceBetween: 20,
	navigation: {
		prevEl: ".slider__button-prev",
		nextEl: ".slider__button-next",
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			grid: {
				rows: 2,
			},
			spaceBetween: 7,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			grid: {
				rows: 1,
			},
			spaceBetween: 20,
		},
	},
});
