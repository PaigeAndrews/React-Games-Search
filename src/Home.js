import React from 'react';
// import './App.css';
import './Home.css';
import Slideshow from './Slide';
import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="home-container">
        
       
        <Slideshow />
        <div className="text">
          <h1>Search for your favorite games! </h1>
          <br />
          <h2>Find out information on over 355 thousand games, right here!</h2>
          
         
          <div className="flex-container">
            <Link to={`/games/58813`}>
              <img className="game-block" src="https://images.pushsquare.com/43bdc5f283859/resident-evil-2-remake-ps4.original.jpg"></img>
            </Link>
            <Link to={`/games/28`}>
              <img className="game-block" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149644-games-news-red-dead-redemption-2-pc-release-date-revealed-and-will-come-with-extra-features-image1-o3ihvut9k0.jpg"></img>
            </Link>
            <Link to={`/games/421698`}>
              <img className="game-block" src="https://assets.gamepur.com/wp-content/uploads/2020/03/27113225/Animal-Crossing-New-Horizons.jpg"></img>
            </Link>
          </div>
            <h2>Search for the newest games</h2>
          
          <div className="flex-container">
            <Link to={`/games/52939`}>
              <img className="game-block" src="https://cdn.mos.cms.futurecdn.net/XxracgYTs8VSKq3SeMyHJ.jpg"></img>
            </Link>
            <Link to={`/games/292838`}>
              <img className="game-block" src="https://www.lifewire.com/thmb/lOcp49hO-GvkFM7JgrwZjRpZC_8=/1920x1080/filters:fill(auto,1)/how-to-play-tetris-99-on-nintendo-switch-featured-7af5d3957deb44f4a8d4c812d88946ce.jpg"></img>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  