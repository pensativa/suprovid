//Slider
const carouselFunction = function() {
  const myCarousel = document.querySelector('#carousel');
  const carousel = new bootstrap.Carousel(myCarousel);
};

const slider = document.querySelector('.slider');
if (slider) {
  carouselFunction();
}
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

const scrollToTop = function() {
  const up = document.getElementById('to-top');
  if(window.pageYOffset > 100) {
    up.style.display = 'block';
  } else {
    up.style.display = 'none';
  }

  up.onclick = function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
};

window.onscroll = function() {
  scrollToTop();
};



//Price block
const priceBlockFunction = function() {
  const switchToggle = document.querySelector('.price__toggle');
  const periods = document.querySelectorAll('.period');
  const prices = document.querySelectorAll('.price__period');

  switchToggle.onchange = function() {
    for (let period of periods) {
      if(switchToggle.checked) {
        period.textContent = 'год';
      } else {
        period.textContent = 'месяц';
      }
    }

    for (let price of prices) {
      if(switchToggle.checked) {
        price.textContent = price.dataset.year;
      } else {
        price.textContent = price.dataset.month;
      }
    }
  };
};

const pricePage = document.querySelector('.price');
if (pricePage) {
  priceBlockFunction();
}

//Left navbar QA page

const leftNavbarFunction = function() {
  const links = document.querySelectorAll('.qa__nav .nav-link');

  window.onscroll = function() {
    scrollToTop();
    var scrollPos = window.pageYOffset;
    links.forEach(link => {
      var attr = link.getAttribute('href').replace(/[^a-zа-яё0-9\s]/gi, '');
      var refElement = document.getElementById(attr);
      if (refElement.getBoundingClientRect().top <= scrollPos) {
        if (!link.classList.contains('active')) {
          links.forEach(element => element.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  };

  for (let link of links) {
    link.onclick = function() {
      if (!link.classList.contains('active')) {
        links.forEach(element => element.classList.remove('active'));
        link.classList.add('active');
      }
    }
  }
};

const navbar = document.querySelector('.qa__nav');

if (navbar) {
  leftNavbarFunction();
}
