
// SLIDE NAV
const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});



// PARALLAX
const parallax = document.querySelector('.hero');

function updateParallax() {
  let scrollPosition = window.pageYOffset;
  parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
  requestAnimationFrame(updateParallax);
}
updateParallax();



// OBSERVER
const textTarget = document.querySelectorAll('.text-highlight');

textTarget.forEach((textElement) => {

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {textElement.classList.add('animated');} 
        else {textElement.classList.remove('animated');}
    });

    observer.observe(textElement);
});



// CAROUSEL
const carousel = document.querySelector('.carousel-track');
const items = carousel.querySelectorAll('.carousel-slide');
const description = document.querySelectorAll('.carousel-desc')
const navIndicators = document.querySelectorAll('.carousel-nav > *');
let currentItem = 0;

function showCurrentItem() {
items[currentItem].classList.add('active');
description[currentItem].classList.add('active');
navIndicators[currentItem].classList.add('active');
}

function hideCurrentItem() {
items[currentItem].classList.remove('active');
description[currentItem].classList.remove('active');
navIndicators[currentItem].classList.remove('active');
}

navIndicators.forEach((navIndicator, index) => {
    navIndicator.addEventListener('click', () => {
      hideCurrentItem();
      currentItem = index;
      showCurrentItem();
    });
  });

document.querySelector('.button--left').addEventListener('click', () => {
hideCurrentItem();
currentItem = (currentItem - 1 + items.length) % items.length;
showCurrentItem();
});

document.querySelector('.button--right').addEventListener('click', () => {
hideCurrentItem();
currentItem = (currentItem + 1) % items.length;
showCurrentItem();
});

setInterval(() => {
  hideCurrentItem();
  currentItem = (currentItem + 1) % items.length;
  showCurrentItem();
}, 8000);



// ACCORDION
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const accordionTitle = item.querySelector('.accordion-title');
  accordionTitle.addEventListener('click', e => {
    e.preventDefault();
    item.classList.toggle('is-open');
  });
});
  