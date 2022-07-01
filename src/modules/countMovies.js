import fetchFromApi from './fromApi.js';

export const countMovies = async () => {
  const shows = await fetchFromApi();
  let count = 0;
  shows.forEach((show) => {
    if (show.image !== null) {
      count += 1;
    }
    const numMovies = document.getElementById('nav-count');
    if (numMovies) numMovies.textContent = `Movies (${count})`;
  });
  return count;
};
export default countMovies;