const renderShows = (shows) => {
  const showContainer = document.getElementById('shows');

  let showList = '';

  shows.forEach((show) => {
    showList += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 gx-3 gy-4">
      <div class="card show-card">
        <img src="${show.image.medium}" class="card-img-top" alt="${show.name}">
        <div class="card-body">
          <h5 class="card-title">${show.name}</h5>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <button type="button" class="btn btn-like d-flex align-items-center gap-2 p-0"><span class="like-count">${show.likes}</span></button>
          <button type="button" class="btn btn-info btn-comment">Comments</button>
        </div>
      </div>
    </div>
    `;
  });
  showContainer.innerHTML = showList;
};

export default renderShows;
