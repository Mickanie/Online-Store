$(document).ready(function(){
	$('.slider').slick();
});


$(document).ready(function(){
	$('.logos-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll:1,
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		responsive: [{
			breakpoint: 757,
			settings: {
				slidesToShow: 2
				}
		}]
	});
});



$(document).ready(function(){
	var newsSlider = $('.news-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 757,
			settings: {
				autoplay: false,
				slidesToShow: 2,
				arrows: true,

			}
		}]
	});


});


const nav = document.querySelector('.nav');
const ul = document.querySelector('div + ul');
let allText;
const expand = document.querySelectorAll('.mobile-dropdown');
const mobileDropdowns = document.querySelectorAll('.mobile-dropdown + ul');
const form = document.querySelector('form');

nav.addEventListener('click', () => {
	ul.classList.toggle('off');
});


const moreButton = document.querySelectorAll('.read-more');
const result = document.querySelector('.result');
const topLayer = document.querySelector('.top-layer');


const showInfo = (text) => {
	let oneText = text.split('</div>');
	result.innerHTML = `<button onClick="exitDiv()"><i class="fas fa-times"></i></button>`;
	result.innerHTML += `${oneText[0]}</div>`;
	topLayer.style.display = "flex";
}

function getInfo (event) {

	url = event.target.dataset.url;
	
	
	const file = `./${url}.html`;
	fetch(file)

	if (localStorage.getItem(`${url}`) === null) {

		fetch(file)
		.then(resp=>{ return resp.text() })
		.then(text=>{ localStorage.setItem(`${url}`, text); showInfo(text)})

	} else {
	
		allText = localStorage.getItem(`${url}`);
		showInfo(allText);
	}


}



function exitDiv() {

	topLayer.style.display="none";
}


const expandList = (event) => {
	const ul = event.target.nextElementSibling;
	let active = false;
	if (event.target.classList.contains('active')) {
			active = true;
	} else {
		active = false;
	}

	mobileDropdowns.forEach(mobileDropdown => {
		mobileDropdown.classList.remove('active');
		mobileDropdown.previousElementSibling.classList.remove('active');
	});
	if(!active) {
		ul.classList.toggle("active");
	
	event.target.classList.toggle("active");
	}
	

}


moreButton.forEach(button => button.addEventListener('click', getInfo));
expand.forEach(exp => exp.addEventListener('click', expandList));