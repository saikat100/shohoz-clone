var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	autoplay:true,
	spaceBetween: 20,
	freeMode: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});

var checkList = document.getElementById("list1");
checkList.getElementsByClassName("anchor")[0].onclick = function (evt) {
	if (checkList.classList.contains("visible"))
		checkList.classList.remove("visible");
	else checkList.classList.add("visible");
};