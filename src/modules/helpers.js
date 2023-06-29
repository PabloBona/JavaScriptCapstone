export const commentItemMarkup = (commentDate, username, commentText) => {
  return `
  <div class="col-12">
    <p class="fs-6 comment-item">
      <b>${commentDate} ${username}: </b> 
      <span>${commentText}</span>
    </p>
  </div>
`;
};