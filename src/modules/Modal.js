import fetchFromApi from './fromApi.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'XbvsaAE4Kq5sfF9VGiHS';
const commentUrl = `${url}${appId}/comments`;

const commentPost = async (itemId, Username, Comment) => {
  
  const res = await fetch(commentUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: itemId,
      username: Username,
      comment: Comment,
    }),
  });
  const data = res.text();

  console.log(data);
};

const modalClose = () => {
  const close = document.querySelectorAll('.modal_close')
  const main = document.querySelector('.comment_modal')
  close.forEach((element) => {
    element.addEventListener('click', () => {
      main.style.display = 'none'
    })
  })
}













const commentModal = async () => {
  const commentButtons = document.querySelectorAll('.Btn-comment');
  const List = await fetchFromApi();
  commentButtons.forEach((butt) => {
    const ID = butt.getAttribute('id');
    const details = List[ID];
    butt.addEventListener('click', () => {
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
          <h2>Comments</h2>
          <ul></ul>
        </div>
        <div class="form">
          <form id="form">
            <input type="text" placeholder="Your name" required class="username">
            <textarea class="usercomment" rows="10" columns="12" placeholder="Your comment please"></textarea>
            
            <button  id="${ID}" class="new_comment" type="button">comment</button>
          </form>
        </div>
      </div>
      `;
      document.querySelector('#modal').innerHTML = modal;
      modalClose()

      const commentbtn = document.querySelector('.new_comment')
      commentbtn.addEventListener('click', () => {
        let userName = document.querySelector('.username').value;
        let usercomment = document.querySelector('.usercomment').value;
        commentPost(ID, userName, usercomment)
        userName = ''
        usercomment = ''
      })
    });
  });
};



export default commentModal 
