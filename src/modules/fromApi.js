const url = 'https://api.tvmaze.com/shows?page=14';
// const fetchFromApi = async () => {
//   let moviesArray = [];
//   await fetch(url)
//     .then((response) => response.json())
//     .then((response) => {
//       moviesArray = response;
//     });
//   return moviesArray;
// };

const fetchFromApi = async () => {
  let moviesArray = [];
  const response = await fetch(url);
  moviesArray = response.json();
  return moviesArray;
}

export default fetchFromApi;