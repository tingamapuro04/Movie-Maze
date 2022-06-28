import _ from 'lodash';
import './style.css';

class Movies{
    static url = 'https://api.tvmaze.com/shows?page=10';
    static showMovies = async () => {
        const response = await fetch(this.url);
        const data = await response.json();
        const movieContainer = document.getElementById('main-Container');
    
        data.forEach((movie) => {
          if (movie.display.image !== null) {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('each-movie');
            movieDiv.innerHTML = `
          <img src="${movie.display.image}" alt="movie-image">   //check in case meduim is required
          <div class="each-name">
            <li>${movie.display.name}</li>
            <div class="likes">
             <i class="fa-regular fa-heart" id="${movie.display.id}"></i>
              <p>0 Likes</p>
            </div>
          </div>      
          <button id="${movie.display.id}" class="button">Comments</button>`;
            movieContainer.appendChild(movieDiv);
          }
        //   this.likes();
        //   this.addLikes();
        });
    }
}
