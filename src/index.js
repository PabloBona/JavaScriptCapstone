import './index.css';
import logo from './img/logo.svg';
import { getShows } from './modules/api.js';
import renderShows from './modules/renderShows.js';
import { getLikes } from './modules/involvementApi.js';
import { renderBaseTemplateModal } from './modules/renderCommentsModal.js';
import showHideModalEventHandlers from './modules/handlerEvents.js';

// add logo to the header
document.getElementById('logoWebpage').setAttribute('src', logo);
document.getElementById('logoWebpage-footer').setAttribute('src', logo);
const errorMessage = document.getElementById('error-message');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const shows = await getShows();
    const likes = await getLikes();

    const mergeValues = shows.map((show) => {
      show.likes = 0;
      likes.forEach((item) => {
        if (item.item_id === show.id) {
          show.likes = item.likes;
        }
      });
      return show;
    });
    renderBaseTemplateModal();
    renderShows(mergeValues);
    showHideModalEventHandlers();
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});
