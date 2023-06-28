import { getShowDetails } from './api.js';
import { renderShowDetails, renderCommentsList } from './renderCommentsModal.js';
import { getShowComments } from './involvementApi.js';

const showHideModalEventHandlers = () => {
  const commentsModal = document.getElementById('showCommentsPopup');
  commentsModal.addEventListener('show.bs.modal', async (e) => {
    const showId = Number(e.relatedTarget.dataset.index);
    const showDetails = await getShowDetails(showId);
    const showCommentsList = await getShowComments(showId);
    renderShowDetails(showDetails);
    renderCommentsList(showCommentsList);
  });

  commentsModal.addEventListener('hide.bs.modal', async () => {
    document.getElementById('container-show-details').innerHTML = '';
    document.getElementById('container-list-comments').innerHTML = '';
  });
};

export default showHideModalEventHandlers;