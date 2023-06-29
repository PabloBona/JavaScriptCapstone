import { afterEach } from 'node:test';
import commentsCounter from '../modules/commentsCounter.js';

describe('Function commentsCounter', () => {
  const commentItem = `<p class="fs-6 comment-item">Comment!</p>`;
  beforeEach(() => {
    document.body.innerHTML = `
    <h3>Comments (<span id="commentsCount"></span>)</h3>
    <div class="row" id="comments-list"></div>
    `;
  });
  afterEach(() => {
    document.getElementById('comments-list').innerHTML = '';
    document.getElementById('commentsCount').innerHTML = '';
  });

  test('Calculate and display 0 when there is not comments', () => {
    // Arrange
    const commentsCount = document.getElementById('commentsCount');

    // Act
    commentsCounter();

    // Assert
    expect(commentsCount.textContent).toBe('0');
  });

  test('Calculate and display 3 when there is 3 comments displayed', () => {
    // Arrange
    const threeComments = Array(3).fill(commentItem);
    document.getElementById('comments-list').innerHTML = `${threeComments.join('')}`; 
    const commentsCount = document.getElementById('commentsCount');

    // Act
    commentsCounter();

    // Assert
    expect(commentsCount.textContent).toBe('3');
  });

  test('Calculate and display 10 when there is 10 comments displayed', () => {
    // Arrange
    const tenComments = Array(10).fill(commentItem); 
    document.getElementById('comments-list').innerHTML = `${tenComments.join('')}`; 
    const commentsCount = document.getElementById('commentsCount');

    // Act
    commentsCounter();

    // Assert
    expect(commentsCount.textContent).toEqual('10');
  });
});