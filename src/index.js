import * as bootstrap from "bootstrap";
import $ from "jquery";
import { tns } from "tiny-slider";

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

	if (location.pathname === $(link)[0].pathname) {
		$(link).addClass("active");
	}
});

// let slider = tns({
// 	container: ".my-slider",
// 	items: 1,
// 	loop: true,
// 	autoplay: true,
// 	mouseDrag: true,
// 	responsive: {
// 		640: {
// 			edgePadding: 1,
// 			gutter: 20,
// 			items: 2,
// 		},
// 		700: {
// 			gutter: 30,
// 			items: 3,
// 		},
// 		900: {
// 			items: 5,
// 		},
// 	},
// });

// slider.play();
