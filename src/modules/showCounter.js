export default () => {
  const spanCount = document.querySelectorAll('.show-card');
  const showCounter = document.querySelector('.show-count');

  showCounter.innerHTML = spanCount.length;
};
