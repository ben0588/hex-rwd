AOS.init();

const body = document.querySelector('body');
const toggleBtn = document.querySelector('.toggle-menu');
toggleBtn.addEventListener('click', function () { 
    body.classList.toggle('show-menu');
})