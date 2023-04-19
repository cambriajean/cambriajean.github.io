const menu = document.querySelector('.site-nav');

const closeMenuButton = document.querySelector('#menu-close');
const openMenuButton = document.querySelector('#hamburger-menu');

const closeMenuItem1 = document.querySelector('#main-nav-1');
const closeMenuItem2 = document.querySelector('#main-nav-2');
const closeMenuItem3 = document.querySelector('#main-nav-3');
const closeMenuItem4 = document.querySelector('#main-nav-4');
const closeMenuItem5 = document.querySelector('#main-nav-5');
const closeMenuItem6 = document.querySelector('#main-nav-6');
const closeMenuItem7 = document.querySelector('#main-nav-7');

openMenuButton.addEventListener('click', showMenu);


function showMenu() {
  document.querySelector('.site-nav').classList.add('site-nav-open');
}
closeMenuButton.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem1.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem2.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem3.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem4.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem5.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem6.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}
closeMenuItem7.addEventListener('click', hideMenu);
function hideMenu() {
  document.querySelector('.site-nav').classList.remove('site-nav-open');
}


// SCROLL FUNCTIONALITY
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// EXPAND MOVIE INFO

function showMovieContent(Div_id) {
  if (false == $(Div_id).is(':visible')) {
    $(Div_id).show(250);
  }
  else {
    $(Div_id).hide(250);
  }
}
