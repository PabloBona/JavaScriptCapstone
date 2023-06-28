import { addLike } from './involvementApi.js';

export default () => {
  const likeBtns = document.querySelectorAll('.btn-like');
  likeBtns.forEach((likeBtn) => {
    likeBtn.addEventListener('click', async (e) => {
      const { showId } = e.target.dataset;
      const countElem = e.target.querySelector('.like-count');
      const likeCount = parseInt(countElem.dataset.likes, 10);
      const errorElem = document.querySelector('.error-message');
      if (!e.target.classList.contains('liked')) {
        try {
          await addLike(parseInt(showId, 10));
          likeBtn.classList.add('liked');
          countElem.textContent = likeCount + 1;
        } catch (error) {
          errorElem.textContent = 'Failed to add like';
        }
      }
    });
  });
};
