const commentsCounter = () => {
  const commentsList = document.getElementsByClassName('comment-item');
  const commentsCounter = document.getElementById('commentsCount');
  commentsCounter.textContent = commentsList.length;
}

export default commentsCounter;