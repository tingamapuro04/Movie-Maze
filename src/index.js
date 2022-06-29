/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import render from './modules/display.js';
import likeIt from './modules/likesAPI.js'

window.addEventListener('DOMContentLoaded', render);

likeIt()