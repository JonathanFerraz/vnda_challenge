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

var swiper = new Swiper('.carousel-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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

// Efeito Typewrtper 
// Obs.: Decidi utilizar FOR loop no lugar de forEach pois proporciona um desempenho melhor

function typeWriter(e) {
  const textoArray = e.innerHTML.split('');
  e.innerHTML = '';
  for(let i = 0; i < textoArray.length; i++) {
    setTimeout(() => e.innerHTML += textoArray[i], 75 * i);
  }
}

const titulo = document.querySelector('h1');
typeWriter(titulo);

// Footer form

const inputFields = document.querySelectorAll('.input-wrapper input');
for (let inputField of inputFields) {
  inputField.oninput = e => {
    if (e.target.value !== '') {
      inputField.classList.add('filled');
    } else {
      inputField.classList.remove('filled');
    }
  }
  inputField.addEventListener('focusout', (e) => {
    inputField.classList.add('highlight-if-invalid');
  });
}

