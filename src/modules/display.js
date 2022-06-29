import fetchFromApi from './fromApi.js';
import commentModal from './Modal.js';

const render = async () => {
  const mainCon = document.querySelector('#main-Container');
  const List = await fetchFromApi();
  List.slice(0, 20).forEach((movie) => {
    mainCon.innerHTML += `
    <div class="main" id="${List.indexOf(movie)}">
      <img src=${movie.image.medium} alt= ${movie.name}>
    </div>
    <div class="movieDetails">
      <h2>${movie.name}</h2>
      <i class="fa-regular fa-heart"></i>
      <p class="likeCount"></p>
    </div>
    <button class="Btn-comment" id=${List.indexOf(movie)}>Comments</button>
    `;
  });
  commentModal();
};

export default render;
