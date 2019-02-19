const nav = document.querySelector('.nav');
const ul = document.querySelector('div + ul');

nav.addEventListener('click', () => {
	ul.classList.toggle('off');
});