import showCounter from '../modules/showCounter.js';

describe('showCounter', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col">
            <span class="show-card"></span>
            <span class="show-card"></span>
            <span class="show-card"></span>
          </div>
        </div>
      </div>
      <a class="nav-link active" aria-current="page" href="#" data-page="home">
        All Shows (<span class="show-count">0</span>)
      </a>
    `;
  });

  test('should update the showCounter element with the count of show-card elements', () => {
    // Arrange
    const elemCounter = document.querySelector('.show-count');
    expect(elemCounter.innerHTML).toBe('0');

    // Act
    showCounter();

    // Assert
    expect(elemCounter.innerHTML).toBe('3');
  });
});
