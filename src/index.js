import _ from 'lodash';
import './style.css';
import fetchFromApi from './modules/fromApi';


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
      <i class="fa-light fa-heart"></i>
    </div>
    <div class="likes"><p><span></span>likes</p></div>
    <button class="Btn-comment">Comments</button>
    `;
  })
};


const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

const appId = "XbvsaAE4Kq5sfF9VGiHS"


