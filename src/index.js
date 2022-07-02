/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import {render} from './modules/display.js';
import { likePaticular } from './modules/display.js'

window.addEventListener('DOMContentLoaded', render)
const body = document.querySelector("body");
const like = document.querySelector('body')
like.addEventListener('click', () => {
  likePaticular()
})



