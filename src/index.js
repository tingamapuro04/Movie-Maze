/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import { render, likePaticular } from './modules/display.js'
import likeIt from './modules/likesAPI.js'


render()
const body = document.querySelector("body");

const like = document.querySelector('body')
like.addEventListener('click', () => {
  likePaticular()
})



// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// const appId = 'XbvsaAE4Kq5sfF9VGiHS';
// const commentUrl = `${url}${appId}/comments`;

// const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
// const appId = 'XbvsaAE4Kq5sfF9VGiHS';
// const uniUrl = `${url}${appId}/likes/`;


// const fetchlikes = async () => {
//   let liking = []
//   await fetch(uniUrl)
//   .then((response) => response.json())
//   .then((res) => {
//     liking = res
//   })
//   console.log(liking)
// }

// fetchlikes()
