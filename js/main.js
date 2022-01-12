//Slider

var myCarousel = document.querySelector('#carousel');
var carousel = new bootstrap.Carousel(myCarousel);

//Mobile menu

const menuToggle = document.querySelector('.navbar-toggler');
const header = document.querySelector('.header');

menuToggle.onclick = function() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
};

//Button to top

const up = document.getElementById('to-top');

window.onscroll = function() {
  console.log(window.pageYOffset);
  if(window.pageYOffset > 200) {
    up.style.display = 'block';
  } else {
    up.style.display = 'none';
  }
}

up.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
