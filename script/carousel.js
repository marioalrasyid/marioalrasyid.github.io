
const carousel = document.querySelector('.carousel-track');
const items = carousel.querySelectorAll('.carousel-slide');
const description = document.querySelectorAll('.carousel-desc')
const navIndicators = document.querySelectorAll('.carousel-nav > *');
let currentItem = 0;
console.log(description);

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
  }, 5000); 