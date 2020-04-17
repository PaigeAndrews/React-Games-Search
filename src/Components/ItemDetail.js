
import React, {useState, useEffect} from 'react';
import '../Styles/ItemDetail.css';
import Zoom from 'react-reveal/Zoom';
import ErrorImage from '../Images/ErrorImage.png';
import {Link} from 'react-router-dom';

function ItemDetail({match}) {

  

    useEffect(() => {
      fetchItem();
      console.log(match)
      document.body.scrollTop = 0;
    }, []);
  
    
      const [isDivVisible , setIsDivVisible ] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsDivVisible(true)
          console.log('5 seconds later')
        }, 5000);
        return () => clearTimeout(timer);
      }, []);
    
     
    
   
    
    const [item, setItem] = useState({});
    const [platforms, setPlatforms] = useState([]);
    const [publisher, setPublisher] = useState("");
    const [genres, setGenres] = useState([]);
    const [rating, setRating] = useState("");
    const [error, setError] = useState(false);
    const [youTube, setYouTube] = useState("");

    const fetchItem = async () => {
      setError(false);
      try {
        const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
        const item = await fetchItem.json();
        
        setItem(item)
        console.log(item)
        setYouTube(item.clip.video)
        setPlatforms(item.platforms.map(x => x.platform.name + " "))
        setPublisher(item.publishers[0].name)
        setGenres(item.genres.map(x => x.name + " "))
        setRating(item.esrb_rating.name)
      }
      catch(error){
        setError(true);
      }
    }

    // function myFunction(){
    //   return (
    //     <div className="error-container">
    //         <h1>Oops!</h1>
    //         {/* 241983 */}
    //         <h2>I ate the page you're looking for</h2>
    //         <img className="errorImage" src={ErrorImage} alt= 'website error' />
    //         <Link to='/'><button className="errorButton"> Back to Home </button></Link>
    //       </div>
    //   );
      
    // }

    // const add5SecondsDelay = () => {
    //   return new Promise(resolve => {
    //     setTimeout(() => {
    //       resolve(myFunction());
    //     }, 5000);
    //   });
    // }
    
    // async function asyncFunctionCall() { 
    //   const result = await add5SecondsDelay ();
    // }
    

  return (
    <div className="detail-container">
        {(() => {
           if(!item.name){
            return (
              <div>
                isDivVisible ? 
                <div className="error-container">
                  <h1>Oops!</h1>
                  <h2>I ate the page you're looking for</h2>
                  <img className="errorImage" src={ErrorImage} alt= 'website error' />
                  <Link to='/'><button className="errorButton"> Back to Home </button></Link>
                  </div> : null
              </div>
              
              
            )
          } else{
            return(
              <div>
                {(() => {
                  // if no Image from API remove image border
                  if(!item.background_image){
                    return (
                      <img alt='' src={item.background_image} className="images noImage"/>
                    )
                    }else{ 
                      return(
                      <img alt='' src={item.background_image} className="images"/>
                      )
                    } 
                  })()}
                 {/* game information only shown for mobile */}
                <div className="left-container displayNone">
                  <h1 className="title displayNone">{item.name}</h1>
                  <div className="publisher displayNone">{publisher}</div>
                  <h2 className="displayNone">Released: {item.released}</h2>
                  <div className="rating displayNone">{rating}</div>
                  <div><a className="gameLink displayNone" href={item.website}>Visit {item.name}'s website</a></div>
                </div>

                {/* video trailor and scroll section paragraph */}
                <div className="right-container">
                  <iframe className="videoClip" src={`https://www.youtube.com/embed/${youTube}`} frameborder="0" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" />
                  <section className="scrollSection">
                    <Zoom ssrFadeout>
                      <div className="itemPara" dangerouslySetInnerHTML={{__html: item.description}} />
                    </Zoom>
                  </section>
                </div>

                {/* game information only shown for desktop */}
                <div className="left-container display">
                  <h1 className="title display">{item.name}</h1>
                  <div className="publisher display">{publisher}</div>
                  <h2 className="display">Released: {item.released}</h2>
                  <div className="rating display">{rating}</div>
                  <div><a className="gameLink display" href={item.website}>Visit {item.name}'s website</a></div>
                </div>

                  {/* bottom containing genres and plaforms of game */}
                <div className="right-bottom-container">
                  <div className="platforms-genres-container" >{genres.map(genre => { return(<div className="genreEach">{genre}</div>)}) }</div>
                  <div className="platforms-genres-container">{platforms.map(plat => { return(<div className="platformEach">{plat}</div>)}) }</div>
                </div>
              </div>
                )
              } 
        })()}
      </div>
  );
}

export default ItemDetail;
