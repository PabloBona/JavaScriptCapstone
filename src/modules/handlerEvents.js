import { getShowDetails } from './api.js';
import {
  renderShowDetails, renderCommentsList, renderCommentsForm,
} from './renderCommentsModal.js';
import { getShowComments, saveNewComment } from './involvementApi.js';

const AddCommentEventHandler = () => {
  const formAddComment = document.getElementById('add-comment-form');
  formAddComment.addEventListener('submit', async (e) => {
    e.preventDefault();

    const { inputUsername, inputComment } = formAddComment;
    const showId = Number(formAddComment.dataset.show);

    const dataComment = {
      item_id: showId,
      username: inputUsername.value,
      comment: inputComment.value,
    };

    formAddComment.reset();

    const saveCommentResult = await saveNewComment(dataComment);
    if (saveCommentResult) {
      const showCommentsList = await getShowComments(showId);
      renderCommentsList(showCommentsList);
    } else {
      const errorContainer = document.getElementById('add-comment-error');
      errorContainer.textContent = 'Error! Comment not saved. Refresh the page and Try again.';
      setTimeout(() => {
        errorContainer.textContent = '';
      }, 4500);
    }
  });
};

const showHideModalEventHandlers = () => {
  const commentsModal = document.getElementById('showCommentsPopup');
  commentsModal.addEventListener('show.bs.modal', async (e) => {
    const showId = Number(e.relatedTarget.dataset.index);
    const showDetails = await getShowDetails(showId);
    const showCommentsList = await getShowComments(showId);
    renderShowDetails(showDetails);
    renderCommentsList(showCommentsList);
    renderCommentsForm(showId);
    AddCommentEventHandler();
  });

  commentsModal.addEventListener('hide.bs.modal', async () => {
    document.getElementById('container-show-details').innerHTML = '';
    document.getElementById('container-list-comments').innerHTML = '';
    document.getElementById('container-add-comments').innerHTML = '';
  });
};

export default showHideModalEventHandlers;