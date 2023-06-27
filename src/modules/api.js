const showApiBaseUrl = 'https://api.tvmaze.com';

const getShows = async (limit = 12) => {
  const response = await fetch(`${showApiBaseUrl}/shows`);
  if (!response.ok) {
    throw new Error('Failed to fetch Series');
  }

  const shows = await response.json();

  return shows.slice(0, limit);
};

export default getShows;
