import fetchFromApi from './fromApi.js';
import commentModal from './Modal.js';
import fetchlikes from './fetchlikes.js';


let currentValue = 0
let count = 0


const render = async () => {
  const mainCon = document.querySelector('#main-Container');
  const List = await fetchFromApi();
  List.slice(20, 21).forEach((movie) => {
    fetchlikes().then((res) => {
      currentValue = res
      let assignLike = 0
      const likeBtn = currentValue.filter(
        (element) => element.item_id === movie.name,
      );
      if (likeBtn.length === 0) {
        assignLike = 0;
      } else {
        assignLike = likeBtn[0].likes
      }
      mainCon.innerHTML += `
      <div class="main" id="${List.indexOf(movie)}">
        <img src=${movie.image.medium} alt= ${movie.name}>
      </div>
      <div class="movieDetails">
        <h2>${movie.name}</h2>
        <p class="likeCount"></p>
        <button type="button" class="like"><i class="fa-regular fa-heart likes"></i><span id="count-like">${assignLike}</span></button>
      </div>
      <button class="Btn-comment" id=${List.indexOf(movie)}>Comments</button>
      `;
      commentModal();
    })
  });
  
};

export default render;
