const involveApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CmqeInWuv4K94K1HgK4U';

export const addLike = (showID) => fetch(`${involveApiUrl}/likes`, {
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

export const getShowComments = async (id) => {
  try {
    const response = await fetch(`${involveApiUrl}/comments?item_id=${id}`);
    if (!response.ok) {
      throw new Error('Failed: This TV Show does not have comments');
    }
    const result = await response.json();
    return Array.isArray(result) ? result : [];
  } catch (error) {
    return [];
  }
};

export const saveNewComment = async (commentData) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(commentData),
    };

    const response = await fetch(`${involveApiUrl}/comments`, requestOptions);

    if (!response.ok) {
      throw new Error('Failed: There is a fatal error in the request');
    }

    const result = await response.text();

    return result;
  } catch (error) {
    return null;
  }
};