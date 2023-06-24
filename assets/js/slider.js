const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  slider.scrollBy(-slider.offsetWidth, 0);
});

nextBtn.addEventListener('click', () => {
  slider.scrollBy(slider.offsetWidth, 0);
});
