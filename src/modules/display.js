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
        
        
        <i class="fa-regular fa-heart insta"></i>
        <p class="likeCount">${assignLike}</p>
      </div>
      <button class="Btn-comment" id=${List.indexOf(movie)}>Comments</button>
      `;
      commentModal();
      likePaticular()
    })
  });
  
};













const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const uniUrl = `${url}${appId}/likes/`;

const postLike = async (itemId) => {
  const res = await fetch(uniUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
  const data = res.text()
  console.log(data)
};



const likePaticular = async () => {
  const allItems = await fetchFromApi()
  const likes = document.querySelectorAll('.insta')
  const likesCount = document.querySelectorAll('.likeCount')

  likes.forEach((element, index) => {
    let inner = JSON.parse(likesCount[index].innerHTML)
    element.addEventListener('click', () => {
      postLike(allItems[index].name)
      inner += 1
      if (inner === 1) {
        likesCount[index].innerHTML =`${inner} like`
      }
      if (inner > 1) {
        likesCount[index].innerHTML = `${inner} likes`
      }
      
    })
  })
}























export default render;
