import fetchFromApi from "./fromApi";
import commentModal from "./Modal";


const render = async() => {
  const mainCon = document.querySelector('#main-Con');
  const List = await fetchFromApi()
  List.slice(0, 9).forEach((movie) => {
    mainCon.innerHTML += `
    <div class="main" id="${List.indexOf(movie)}">
      <img src=${movie.image.medium} alt= ${movie.name}>
    </div>
    <div class="movieDetails">
      <h2>${movie.name}</h2>
      <i class="fa-light fa-heart likes"></i>
      <p class="likeCount"></p>
    </div>
    <button class="Btn-comment" id=${List.indexOf(movie)}>Comments</button>
    `;
  })
  commentModal()
};

export default render
