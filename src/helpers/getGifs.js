export const getGifs = async (category) => {
  const apiKey = '7iu6Hk85j531kl3MO5GxvBQISrIILTqA',
        query = encodeURI(category),
        limit = 10;
  const url = `https://api.giphy.com/v1/gifs/search?q=${ query }&limit=${ limit }&api_key=${ apiKey }`,
        resp = await fetch(url),
        { data } = await resp.json();
  const gifUrls = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  });

  return gifUrls;
}