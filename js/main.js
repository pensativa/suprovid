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

const up = document.getElementById('to-top');

window.onscroll = function() {
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

/*const links = document.querySelectorAll('.qa__nav .nav-link');
const blocks = document.querySelectorAll('.qa__accordion');
window.onscroll = function() {
  for (let block of blocks) {
    if(block.getBoundingClientRect().top > 30 && block.getBoundingClientRect().bottom < 0) {
      console.log(block);
    }
  }
};*/
