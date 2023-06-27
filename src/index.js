import './index.css';
import logo from './img/logo.svg';
import getShows from './modules/api.js';
import renderShows from './modules/renderShows.js';

// add logo to the header
document.getElementById('logoWebpage').setAttribute('src', logo);
document.getElementById('logoWebpage-footer').setAttribute('src', logo);
const errorMessage = document.getElementById('error-message');

window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await getShows();

    if (!response.ok) {
      throw new Error('Failed to fetch Series');
    }

    const shows = await response.json();
    renderShows(shows);
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});
