$(document).ready(function(){
	$('.slider').slick();
});


$(document).ready(function(){
	$('.logos-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll:1,
		autoplay: true,
		arrows: false
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

nav.addEventListener('click', () => {
	ul.classList.toggle('off');
});


const moreButton = document.querySelectorAll('.read-more');
const result = document.querySelector('.result');
const topLayer = document.querySelector('.top-layer');

const showInfo = (allText) => {
	let oneText = allText.split('</div>');
	result.innerHTML = `<button onClick="exitDiv()"><i class="fas fa-times"></i></button>`;
	result.innerHTML += `${oneText[0]}</div>`;
	topLayer.style.display = "flex";
}

const getInfo = (event) => {

	url = event.target.dataset.url;
	
	
	const file = `http://127.0.0.1:8080/${url}.html`;


	if (localStorage.getItem(`${url}`) != null) {

		allText = localStorage.getItem(`${url}`);
		showInfo(allText);


	} else {
	
		let xhttp = new XMLHttpRequest();
		xhttp.open("GET", file, false);

		xhttp.onreadystatechange = function ()	{

			if (xhttp.readyState === 4) {

		
				if (xhttp.status === 200 || xhttp.status == 0) {

					allText = xhttp.responseText;
					localStorage.setItem(`${url}`, allText);
					showInfo(allText);


				}

			}
			xhttp.send(null);

		}


	}



}



function exitDiv() {

	topLayer.style.display="none";
}



moreButton.forEach(button => button.addEventListener('click', getInfo));
