const showApiBaseUrl = 'https://api.tvmaze.com';

const getShows = () => fetch(`${showApiBaseUrl}/shows`);

export default getShows;
