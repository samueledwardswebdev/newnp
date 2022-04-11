const hamburgerMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', function(){
  hamburgerMenu.classList.toggle('is-active')
  mobileMenu.classList.toggle('is-active')
})
