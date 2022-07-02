/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import {render, likePaticular} from './modules/display.js';

window.addEventListener('DOMContentLoaded', render)
const like = document.querySelector('body')
like.addEventListener('click', () => {
  likePaticular()
})





