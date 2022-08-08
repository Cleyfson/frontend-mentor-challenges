const rateState = document.querySelector('#rating') 
const afterState = document.querySelector('#after-rating') 
const ratings = document.querySelectorAll('li');
const ratingBtn = document.querySelector(".box__button");
let ratingScore = document.querySelector(".rating-score");
let rate = 0;

const resetState = () => {
  ratings.forEach((rating) => {
    rating.classList.remove('checked');
  })
} 

ratings.forEach((rating) => {
  rating.addEventListener('click', () => {
    resetState()
    rating.classList.toggle('checked');
    rate = rating.innerText;
  });
})

ratingBtn.addEventListener('click',() => {
  if (rate !== 0) {
    rateState.classList.add('load');
    ratingScore.innerText = rate;
    afterState.classList.remove('load');
  }
})