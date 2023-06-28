import { getShowDetails } from './api.js';
import { renderShowDetails } from './renderCommentsModal.js';

export const showHideModalEventHandlers = () => {
  const commentsModal = document.getElementById("showCommentsPopup");
  commentsModal.addEventListener("show.bs.modal", async (e) => {
    const showId = Number(e.relatedTarget.dataset.index);
    const showDetails = await getShowDetails(showId);
    renderShowDetails(showDetails);
  });

  commentsModal.addEventListener("hide.bs.modal", async (e) => {
    document.getElementById('container-show-details').innerHTML = '';
  });
};