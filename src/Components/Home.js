import React from 'react';
import '../Styles/Home.css';
import Random from '../Images/random.png';
import Slideshow from './Slide';
import {Link} from 'react-router-dom';

function Home() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

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
            <Link to={`/games/54531`}>
              <img className="game-block e" src="https://img1.svg.com/img/gallery/the-untold-truth-of-super-smash-bros/intro-1535657924.jpg"></img>
            </Link>
            <Link to={`/games/57607`}>
              <img className="game-block l" src="https://gameverse.com/wp-content/uploads/2018/10/Metal-Gear-Solid.jpg"></img>
            </Link>
          </div>

          <h2>Or maybe a random game?</h2>
          
        </div>
        <Link to={`/games/${getRandomInt(255000)}`}><img className="random-block" src={Random} /></Link>
        
      </div>
    );
  }
  
  export default Home;
  