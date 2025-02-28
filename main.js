const card = document.querySelector('.card');
const form = document.querySelector('.rating__form');
const choice = document.querySelector('.response__choice');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedRating = form.querySelector('input[name="rating"]:checked');

  if (selectedRating) choice.textContent = selectedRating.value;
  else choice.textContent = 0;

  card.classList.add('card--complete');
});
