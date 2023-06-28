/* eslint-disable implicit-arrow-linebreak */
// eslint-disable-next-line operator-linebreak
const involveApiUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CmqeInWuv4K94K1HgK4U';

export const addLike = (showID) =>
  fetch(`${involveApiUrl}/likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: showID,
    }),
  });

export const getLikes = async () => {
  const response = await fetch(`${involveApiUrl}/likes`);
  if (!response.ok) {
    throw new Error('Failed to fetch Likes');
  }
  const likes = await response.json();
  return likes;
};
