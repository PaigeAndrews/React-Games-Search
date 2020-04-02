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
          <h2>Search for the newest games</h2>
         
          <div className="flex-container">
            <Link to={`/games/58813`}>
              <img className="game-block l" src="https://images.pushsquare.com/43bdc5f283859/resident-evil-2-remake-ps4.original.jpg"></img>
            </Link>
            <Link to={`/games/28`}>
              <img className="game-block e" src="https://i.ytimg.com/vi/h6k532Y7jK8/maxresdefault.jpg"></img>
            </Link>
            <Link to={`/games/421698`}>
              <img className="game-block l" src="https://assets.gamepur.com/wp-content/uploads/2020/03/27113225/Animal-Crossing-New-Horizons.jpg"></img>
            </Link>
          </div>
          <h2>Even the older games</h2>
            
          
          <div className="flex-container">
            <Link to={`/games/52939`}>
              <img className="game-block l" src="https://cdn.mos.cms.futurecdn.net/XxracgYTs8VSKq3SeMyHJ.jpg"></img>
            </Link>
            <Link to={`/games/292838`}>
              <img className="game-block e" src="https://www.lifewire.com/thmb/lOcp49hO-GvkFM7JgrwZjRpZC_8=/1920x1080/filters:fill(auto,1)/how-to-play-tetris-99-on-nintendo-switch-featured-7af5d3957deb44f4a8d4c812d88946ce.jpg"></img>
            </Link>
            <Link to={`/games/57607`}>
              <img className="game-block l" src="https://gameverse.com/wp-content/uploads/2018/10/Metal-Gear-Solid.jpg"></img>
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Home;
  