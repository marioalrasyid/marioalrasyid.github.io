const menu = document.querySelector('.menu input');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', function() {
    nav.classList.toggle('slide');
});


// var docWidth = document.documentElement.offsetWidth;
// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );