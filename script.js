// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /*loop through a collection of all HTML elements:*/
//   z = document.getElementsByTagName('*');
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     console.log(elmnt);
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute('edgar-pics');
//     console.log(file);
//     if (file) {
//       /*make an HTTP request using the attribute value as the file name:*/
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = 'Page not found.';
//           }
//           /*remove the attribute, and call this function once more:*/
//           elmnt.removeAttribute('edgar-pics');
//           includeHTML();
//         }
//       };
//       xhttp.open('GET', file, true);
//       xhttp.send();
//       /*exit the function:*/
//       return;
//     }
//   }
// }

// $('.main').scroll(function () {
//   $(this).find('.sticky').css('left', $(this).scrollLeft());
// });

function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

$(document).ready(function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }
  hamburger.addEventListener('click', mobileMenu);

  const navLink = document.querySelectorAll('.nav-link');

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
  navLink.forEach((n) => n.addEventListener('click', closeMenu));
});
