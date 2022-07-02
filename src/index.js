/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import {render} from './modules/display.js';
import { likePaticular } from './modules/display.js'

window.addEventListener('DOMContentLoaded', render)
const like = document.querySelector('body')
like.addEventListener('click', () => {
  likePaticular()
})





