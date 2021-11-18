import CONFIG from './config';

const { BASE_URL, BASE_IMAGE_URL } = CONFIG;

const API_ENDPOINT = {
  LIST: `${BASE_URL}list`,
  DETAIL: (id) => `${BASE_URL}detail/${id}`,
  SEARCH: (keyword) => `${BASE_URL}search?q=${keyword}`,
  ADD_REVIEW: `${BASE_URL}review`,
  IMAGE_SMALL: (pictureId) => `${BASE_IMAGE_URL}small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${BASE_IMAGE_URL}medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${BASE_IMAGE_URL}large/${pictureId}`,
};

export default API_ENDPOINT;
