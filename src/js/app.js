// Parallax Hero

window.onscroll = scroll;

function scroll () {
  let parallax = document.getElementsByClassName('parallax')[0];
  let parallax_image = document.getElementsByClassName('parallax-image')[0];
  
  if (window.pageYOffset < parallax.clientHeight) {
    parallax_image.style.backgroundPosition = "50% " + (window.pageYOffset / 4) + "px";
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



