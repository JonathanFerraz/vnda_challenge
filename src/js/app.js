// Parallax Hero

window.onscroll = scroll;

function scroll () {
  var parallax = document.querySelector('.parallax');
  var parallax_image = document.querySelector('.parallax-image');
  var parallax_text = document.querySelector('.parallax-text'); 

  if (window.pageYOffset < parallax.clientHeight) {
    parallax_image.style.backgroundPosition = "50% " + (window.pageYOffset / 4) + "px";
    parallax_text.style.top = - (window.pageYOffset * - 0.029)+ 'rem';

    parallax_text.style.opacity = '1' - (window.pageYOffset * 0.0018);
  }
}

// Swipper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  init: true,
  autoplay: true,

  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }
});


// Header toggle

function toggleNav() {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('.menu');
  let overlay = document.querySelector('.overlay');
  let links = document.querySelectorAll('.menu ul li');

  burger.classList.toggle('toggle');
  menu.classList.toggle('menu-active');
  overlay.classList.toggle('overlay-active');

  overlay.addEventListener('click', () => {
    burger.classList.remove('toggle');
    menu.classList.remove('menu-active');
    overlay.classList.remove('overlay-active');
  });

  links.forEach(e => {
    e.addEventListener('click', () => {
      burger.classList.remove('toggle');
      menu.classList.remove('menu-active');
      overlay.classList.remove('overlay-active');
    })
  })
}

