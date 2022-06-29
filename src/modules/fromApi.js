const url = 'https://api.tvmaze.com/shows?page=10';
const fetchFromApi = async () => {
  let moviesArray = [];
  await fetch(url)
    .then((response) => response.json())
    .then((response) => {
      moviesArray = response;
    });
  return moviesArray;
};

export default fetchFromApi;