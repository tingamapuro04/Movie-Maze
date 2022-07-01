import fetchFromApi from './fromApi.js';
import commentModal from './Modal.js';
import fetchlikes from './fetchlikes.js';

let currentValue = 0;
let count = 0;
const counter = document.querySelector('.counterMovies');

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const uniUrl = `${url}${appId}/likes/`;

const postLike = async (itemId) => {
  const res = await fetch(uniUrl, {
    method: 'POST',
    cache: 'no-cache',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
  // const data = res.text();
  return res;
};

const likePaticular = async () => {
  const allItems = await fetchFromApi();
  const likes = document.querySelectorAll('.insta');
  const likesCount = document.querySelectorAll('.likeCount');

  likes.forEach((element, index) => {
    let inner = parseInt(likesCount[index].innerHTML, 10);
    element.addEventListener('click', () => {
      postLike(allItems[index].name);
      inner += 1;
      if (inner === 1) {
        likesCount[index].innerHTML = `${inner} like`;
      }
      if (inner > 1) {
        likesCount[index].innerHTML = `${inner} likes`;
      }
    });
  });
};

const render = async () => {
  const mainCon = document.querySelector('#main-Container');
  const List = await fetchFromApi();
  List.slice(0, 8).forEach((movie) => {
    fetchlikes().then((res) => {
      currentValue = res;
      let assignLike = 0;
      const likeBtn = currentValue.filter(
        (element) => element.item_id === movie.name,
      );
      if (likeBtn.length === 0) {
        assignLike = 0;
      } else {
        assignLike = likeBtn[0].likes;
      }
      mainCon.innerHTML += `
      <div class="main" id="${List.indexOf(movie)}">
        <img src=${movie.image.medium} alt= ${movie.name}>
        
        <div class="movieDetails">
          <h2>${movie.name.slice(0, 9)}</h2>
          <i class="fa-regular fa-heart insta"></i>
          <p class="likeCount">${assignLike} likes</p>
        </div>
        <button class="Btn-comment" id=${List.indexOf(movie)}>Comments</button>
      </div>  
      `;
      commentModal();
    });
    count += 1;
  });
  counter.innerHTML = `(${count * 2})`;
};

export { render, likePaticular };
