/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import render from './modules/display.js';
import likeIt from './modules/likesAPI.js'

window.addEventListener('DOMContentLoaded', render);

const body = document.querySelector("body");



const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const commentUrl = `${url}${appId}/comments`;


console.log(commentUrl)


