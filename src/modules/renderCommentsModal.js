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
            <div id="container-list-comments" class="bg-light rounded"></div>
            <div id="container-add-comments"></div>
          </div>
        </div>
      </div>
    </div>`,
  );
};

export const renderShowDetails = ({
  name, genres, image, language, premiered, rating, _embedded,
}) => {
  const seasons = _embedded.seasons.length;
  const premieredFormatted = new Date(premiered).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });

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
          <p class="fs-5"><b>Premiered: </b> <span>${premieredFormatted}</span></p>
        </div>
        <div class="col-md-6">
          <p class="fs-5"><b>Rating: </b> <span>${rating.average}</span></p>
        </div>
        <div class="col-md-6">
          <p class="fs-5"><b>Seasons: </b> <span>${seasons} season${seasons !== 1 ? 's' : ''}</span></p>
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
  let date;
  let dateFormatted;

  const commentsList = comments.map(({ username, creation_date, comment }) => {
    date = new Date(creation_date);
    dateFormatted = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0));
    return `
    <div class="col-12">
      <p class="fs-6 comment-details"><b>${dateFormatted.toLocaleDateString('en-US')} ${username}: </b> <span>${comment}</span></p>
    </div>
  `}).join('');
  const commentsContainer = document.getElementById('container-list-comments');
  commentsContainer.innerHTML = `
  <h3 class="modal-comments-title fs-2 py-4 text-center fw-bolder">Comments (1)</h3>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="row">
        ${commentsList}
        <div class="col-12">
          <p class="fs-6 comment-details"><b>6/28/2023 Carmen: </b> <span>This is a Testing comment</span></p>
        </div>
      </div>
    </div>
  </div>
  `;
};