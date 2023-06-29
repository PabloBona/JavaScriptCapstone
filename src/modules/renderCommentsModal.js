import {
  commentItemMarkup, getCommentDateFormatted,
  getPremieredDateFormatted, getSeasonsTextFormatted,
}
from './helpers.js';

export const renderBaseTemplateModal = () => {
  const footerElement = document.querySelector('footer');
  footerElement.insertAdjacentHTML(
    'afterend',
    `<div class="modal fade" id="showCommentsPopup" 
          data-bs-backdrop="static" data-bs-keyboard="false" 
          tabindex="-1" aria-labelledby="showCommentsPopupLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div id="container-show-details" class="mb-4"></div>
            <div class="bg-light-blue rounded px-4">
              <div id="container-list-comments"></div>
              <div id="container-add-comments"></div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  );
};

export const renderShowDetails = ({
  name, genres, image, language, premiered, rating, _embedded,
}) => {
  const seasons = getSeasonsTextFormatted(_embedded.seasons);
  const premieredDate = getPremieredDateFormatted(premiered);
  const showDetailsContainer = document.getElementById('container-show-details');

  showDetailsContainer.innerHTML = `
  <div class="row justify-content-center align-items-center">
    <div class="col-12 d-flex justify-content-center align-items-center">
      <img src="${image.original}" alt="" id="showImage" class="img-fluid" /> 
    </div>
  </div>
  <h2 class="modal-title fs-1-extra py-4 text-center fw-bolder">${name}</h2>
  <div class="row justify-content-center">
    <div class="col-10">
      <div class="row">
        <div class="col-md-6">
          <p class="fs-5"><b>Language: </b> <span>${language}</span></p>
        </div>
        <div class="col-md-6">
          <p class="fs-5"><b>Premiered: </b> <span>${premieredDate}</span></p>
        </div>
        <div class="col-md-6">
          <p class="fs-5"><b>Rating: </b> <span>${rating.average}</span></p>
        </div>
        <div class="col-md-6">
          <p class="fs-5"><b>Seasons: </b> <span>${seasons}</span></p>
        </div>
        <div class="col-md-12">
          <p class="fs-5"><b>Genres: </b> <span>${genres.join(' | ')}</span></p>
        </div>
      </div>
    </div>
  </div>
  `;
};

export const renderCommentsList = (comments) => {
  const commentsList = comments.map((comment) => commentItemMarkup(
    getCommentDateFormatted(comment.creation_date), comment.username, comment.comment,
  )).join('');

  const commentsContainer = document.getElementById('container-list-comments');

  commentsContainer.innerHTML = `
  <h3 class="modal-comments-title fs-2 py-4 text-center fw-bolder">
    Comments (<span id="commentsCount" data-counter="1">1</span>)
  </h3>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="row" id="comments-list">
        ${commentsList}
      </div>
    </div>
  </div>
  `;
};

export const renderCommentsForm = (id) => {
  const commentsFormContainer = document.getElementById(
    'container-add-comments',
  );
  commentsFormContainer.innerHTML = `
  <h3 class="modal-comments-form-title fs-2 py-4 text-center fw-bolder">Add a comment</h3>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form action="#" id="add-comment-form" data-show="${id}">
        <div class="mb-3">
          <input type="text" class="form-control" id="inputUsername" placeholder="Your Name" required>
        </div>
        <div class="mb-3">
          <textarea class="form-control" id="inputComment" rows="3" placeholder="Your insights" required></textarea>
        </div>
        <div class="mb-3 d-flex justify-content-between align-items-center">
          <button type="submit" class="btn btn-info mb-3 fs-5">Comment</button>
        </div>
        <p id="add-comment-error" class="mb-3 fw-bold text-danger fs-6"></p>
      </form>
    </div>
  </div>
  `;
};