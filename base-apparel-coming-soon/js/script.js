import '../sass/main.scss';

const hero = document.getElementById('hero-img');
// console.log();

window.addEventListener('resize', () => {
  if (window.innerWidth <= 900) {
    hero.src = '../images/hero-mobile.jpg';
  } else {
    hero.src = '../images/hero-desktop.jpg';
  }
});
