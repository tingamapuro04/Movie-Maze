import fetchFromApi from './fromApi.js';
import commentModal from './Modal.js';

export const viewShows = async () => {
  const shows = await fetchFromApi();
  const showContainer = document.getElementById('main-Container');

  shows.forEach((show, index) => {
    if (show.image !== null) {
      const showDiv = document.createElement('div');
      showDiv.classList.add('each-show');
      showDiv.innerHTML = `
        <img src="${show.image.original}" alt="show-image">
        <div class="each-name">
          <li>${show.name}</li>
          <div class="likes">
           <i class="fa-regular fa-heart" id="li-${show.id}"></i>
            <p>0 Likes</p>
          </div>
        </div>      
        <button class="Btn-comment" id="bt-${index}">Comments</button>`;
      showContainer.appendChild(showDiv);
    }
  });
  commentModal();
};

export default viewShows;
