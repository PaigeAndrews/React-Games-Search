import React from 'react'
import '../Styles/Slide.css';
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom';

const images = [
    'https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg',
    'https://i.pinimg.com/originals/b4/6e/b6/b46eb66ec4074e886dbedff6ba917116.jpg',
    'https://m.media-amazon.com/images/M/MV5BYTQyYjdhYzctZTk0ZS00YTU5LTkyNTctZDVjYmJkNjA4ODkyXkEyXkFqcGdeQXVyNjkxMzAyMTU@._V1_.jpg',
    'https://wallpaperaccess.com/full/2013585.jpg',
    'https://wallpapercave.com/wp/hzfSlN6.jpg',
    'https://i.redd.it/i7e2ffyhv4r31.png'
    ];

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    // pauseOnHover: true
}

const Slideshow = () => {
    return (
        <div className="containerSlide">
             
            <Slide {...proprietes}>
                
                 <div className="each-slide">
                    <div>
                        <Link to={`/games/259801`}>
                            <img src={images[0]} alt="img1" />
                        </Link>
                    </div>
                </div>
                
                <div className="each-slide">
                    <div>
                        <Link to={`/games/5679`}>
                            <img src={images[1]} alt="img2" />
                        </Link>
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <Link to={`/games/10419`}>
                            <img src={images[2]} alt="img3" />
                        </Link>
                    </div>
                 </div>  

                <div className="each-slide">
                    <div>
                        <Link to={`/games/27036`}>
                            <img src={images[3]} alt="img4" />
                        </Link>
                    </div>
                </div> 

                <div className="each-slide">
                    <div>
                        <Link to={`/games/368967`}>
                            <img src={images[4]} alt="img5" />
                        </Link>
                    </div>
                </div>

                <div className="each-slide">
                    <div>
                        <Link to={`/games/49`}>
                            <img src={images[5]} alt="img6" />
                        </Link>
                    </div>
                </div>
            </Slide>
            
        </div>
    )
}

export default Slideshow;