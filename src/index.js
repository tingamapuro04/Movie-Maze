import _ from 'lodash';
import './style.css';

class Shows{
    static url = 'https://api.tvmaze.com/shows?page=10';
    static viewShows = async () => {
        const response = await fetch(this.url);
        const shows = await response.json();
        // console.log(JSON.stringify(shows))
        const showContainer = document.getElementById('main-Container');
    
        shows.forEach((show) => {
          if (show.image.original !== null) {
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
          <button id="bt-${show.id}" class="button">Comments</button>`;
            showContainer.appendChild(showDiv);
          }
        //   this.likes();
        //   this.addLikes();
        });
    }
}

Shows.viewShows();