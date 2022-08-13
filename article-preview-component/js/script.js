const btnShow = document.getElementById('btn-show');
const btnHide = document.getElementById('btn-hide');
const details = document.getElementById('details');

btnShow.addEventListener('click', () => {
  if (window.innerWidth <= 900) {
    details.classList.remove('hide-icons');
  } else {
    details.classList.toggle('hide-icons');
  }
});

btnHide.addEventListener('click', () => {
  if (window.innerWidth <= 900) {
    details.classList.add('hide-icons');
  }
});
