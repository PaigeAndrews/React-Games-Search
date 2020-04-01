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
          <h2>Search for your favorite games! Find out information on over 355 thousand games, right here!</h2>
          <br />
          <p>ijeih heirhie herhjieohr heirhehr hreiwhrhe rire</p>
          <div className="flex-container">
          <Link to={`/games/58813`}>
              
                <img className="game-block" src="https://images.pushsquare.com/43bdc5f283859/resident-evil-2-remake-ps4.original.jpg"></img>
                <img className="game-block" src="https://images.pushsquare.com/43bdc5f283859/resident-evil-2-remake-ps4.original.jpg"></img>
                <img className="game-block" src="https://images.pushsquare.com/43bdc5f283859/resident-evil-2-remake-ps4.original.jpg"></img>
                <h2>Search for the newest games</h2>
            </Link>
          </div>
          
        </div>
      </div>
    );
  }
  
  export default Home;
  