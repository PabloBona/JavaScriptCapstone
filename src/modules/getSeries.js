const addSeries = async (url, id) => {
  const result = document.querySelector('#shows'); // <p> for the result
  url = 'https://api.tvmaze.com/shows/';
  try {
    const apiUrl = `https://api.tvmaze.com/shows/${id}`;
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Failed to add the series');
    }

    result.innerHTML = 'Series added successfully';
    return response.json();
  } catch (error) {
    result.innerHTML = `<div class="alert alert-danger" role="alert">
      ${error}
    </div>`;
    return null; // Return null in case of error
  }
};

export default addSeries;
