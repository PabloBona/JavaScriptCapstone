const showApiBaseUrl = 'https://api.tvmaze.com';

export const getShows = async (limit = 12) => {
  const response = await fetch(`${showApiBaseUrl}/shows`);
  if (!response.ok) {
    throw new Error('Failed to fetch Series');
  }

  const shows = await response.json();

  return shows.slice(0, limit);
};

export const getShowDetails = async (id) => {
  try {
    const response = await fetch(`${showApiBaseUrl}/shows/${id}?embed=seasons`);
    if (!response.ok) {
      throw new Error('Failed to fetch Series Details');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}
