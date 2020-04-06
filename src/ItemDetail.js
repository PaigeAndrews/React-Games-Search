import React, {useState, useEffect} from 'react';
import './ItemDetail.css';
import Zoom from 'react-reveal/Zoom';
import {Link }from 'react-router-dom';


function ItemDetail({match}) {

  

    useEffect(() => {
      fetchItem();
      console.log(match)
      document.body.scrollTop = 0;
    }, []);
   
    // useEffect(() => {
    //   fetchItem();
    //   console.log("paw")
    // }, []);
   
   
    
    const [item, setItem] = useState({});
    const [video, setVideo] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [publisher, setPublisher] = useState("");
    const [genres, setGenres] = useState([]);
    const [rating, setRating] = useState("");
    const [error, setError] = useState(false);
    const [youTube, setYouTube] = useState("");
    // const [des, setDes] = useState("");

    const fetchItem = async () => {
      setError(false);
      try {
        const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
        const item = await fetchItem.json();
        // const description = item.description_raw.replace(/(.{80})/g, "$1<br>");


        setItem(item)
        console.log(item)
        setVideo(item.clip.clip)
        setYouTube(item.clip.video)
        setPlatforms(item.platforms.map(x => x.platform.name + " "))
        setPublisher(item.publishers[0].name)
        setGenres(item.genres.map(x => x.name + " "))
        setRating(item.esrb_rating.name)
        // setDescription(description)
        // setDes(item.description_raw)
       
      }
      catch(error){
        setError(true);
      }
    }

  

  return (
    
    <div className="detail-container">
        <h1 className="title">{item.name}</h1>

        <h2>Released: {item.released}</h2>
        <img alt='' src={item.background_image} className="images"/>
        <div className="publisher">{publisher}</div>
        {rating}
         
        {/* <iframe className="videoClip"
          src={video}>
        </iframe> */}
        {
          error && <div className="errorMessage">No Content to display</div>
          // error && <img alt='' src={item.background_image_additional} className="images" />
        }
        <iframe className="videoClip" src={`https://www.youtube.com/embed/${youTube}`}></iframe>
        
        <div classNme="gameLink"><a href={item.website}>Visit {item.name}'s website</a></div>
    
      <div className="genres" >{genres.map(genre => { return(<div className="genreEach">{genre}</div>)}) }</div>
      <div className="platforms">{platforms.map(plat => { return(<div className="platformEach">{plat}</div>)}) }</div>
     <Zoom ssrFadeout>
      <div className="itemPara" dangerouslySetInnerHTML={{__html: item.description}} />
      
      </Zoom>
      {/* {
        error && <div className="errorMessage">No additional data on this title</div>
      } */}
    </div>
  );
}

export default ItemDetail;
