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

export const getCommentDateFormatted = (originalDate) => {
  const date = new Date(originalDate);
  const dateFormatted = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
  return dateFormatted.toLocaleDateString("en-US");
}

export const getPremieredDateFormatted = (originalDate) => {
  const premieredFormatted = new Date(originalDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return premieredFormatted;
}

export const getSeasonsTextFormatted = (seasons) => {
  const numberSeasons = seasons.length;
  return `${numberSeasons} season${numberSeasons !== 1 ? 's' : ''}`;
}