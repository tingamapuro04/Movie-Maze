import _ from 'lodash';
import './style.css';
import fetchFromApi from './modules/fromApi';
import render from './modules/display'

render()

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'

const Post = async () => {
  const res = await fetch(url, {
    method: ''
  })

}
