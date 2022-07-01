import fetchFromApi from './fromApi.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const commentUrl = `${url}${appId}/comments`;

const commentFetch = async (itemId) => {
  try {
    const comments = await fetch(`${commentUrl}?item_id=${itemId}`);
    const data = await comments.json();
    const commentHead = document.querySelector('.commentHead');
    const commentList = document.querySelector('.commentList');
    if (data.length > 0) {
      commentHead.innerHTML = `Comments(${data.length})`;
      commentList.innerHTML = '';
      data.forEach((element) => {
        commentList.innerHTML += `
        <li>${element.creation_date} ${element.username}: ${element.comment}</li>
        `;
      });
    } else {
      commentHead.innerHTML = 'Comments(0)';
    }
  } catch (err) {
    throw new Error('Requesting: ', err);
  }
};

const commentPost = async (itemId) => {
  const userName = document.querySelector('.username');
  const userComment = document.querySelector('.usercomment');
  if (userName.value !== '' || userComment !== '') {
    try {
      const response = await fetch(commentUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          item_id: itemId,
          username: userName.value,
          comment: userComment.value,
        }),
      });
      // const data = response.text();
      if (response.ok) {
        userName.value = '';
        userComment.value = '';
        commentFetch(itemId);
      }
    } catch (err) {
      throw new Error('Request error: ', err);
    }
    return true;
  }
  return false;
};

const modalClose = () => {
  const close = document.querySelectorAll('.modal_close');
  const main = document.querySelector('.comment_modal');
  close.forEach((element) => {
    element.addEventListener('click', () => {
      main.style.display = 'none';
    });
  });
};

const commentModal = async () => {
  const commentButtons = document.querySelectorAll('.Btn-comment');
  const List = await fetchFromApi();
  commentButtons.forEach((butt) => {
    const ID = butt.getAttribute('id');
    const details = List[ID];
    butt.addEventListener('click', () => {
      commentFetch(ID);
      const modal = `
      <div class="comment_modal">
        <button class="modal_close"><i class="fa-solid fa-xmark"></i></button>
        <div>
          <img src=${details.image.medium} alt=${details.name}>
          <ul class="genre">
            <li><span>Type: </span> ${details.type}</li>
            <li><span>Language: </span> ${details.language}</li>
            <li><span>Genre: </span> ${details.genres[0]}</li>
            <li><span>Runtime: </span> ${details.runtime}</li>
          </ul>
          <p>${details.summary}</p>
        </div>
        <div class="old-comments">
          <h2 class="commentHead">Comments</h2>
          <ul class="commentList"></ul>
        </div>
        <div class="form">
          <form id="form">
            <input type="text" placeholder="Your name"  class="username">
            <textarea class="usercomment" rows="10" columns="12" placeholder="Your comment please"></textarea>
            <button  id="${ID}" class="new_comment" type="button">comment</button>
          </form>
        </div>
      </div>
      `;
      document.querySelector('#modal').innerHTML = modal;
      modalClose();
      const commentbtn = document.querySelector('.new_comment');
      commentbtn.addEventListener('click', () => {
        commentPost(ID);
      });
    });
  });
};

export default commentModal;
