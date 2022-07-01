/*eslint-disable*/
import _ from 'lodash';
import './style.css';
// import render from './modules/display.js';
import { viewShows } from './modules/display.js';
import { countMovies } from './modules/countMovies.js';
viewShows();
countMovies();


//  window.addEventListener('DOMContentLoaded', render);

import { render, likePaticular } from './modules/display.js'
import likeIt from './modules/likesAPI.js'
import calculator from './jiji.js'


render()
const body = document.querySelector("body");

const like = document.querySelector('body')
like.addEventListener('click', () => {
  likePaticular()
})



