import axios from 'axios';

const KEY = '29692694-bb33da63923d9aeaf742e04ef';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const GetImage = async (searchQuery, Page) => {
  const response = await axios.get(
    `?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${Page}&per_page=12`
  );
  return response.data.hits;
};
