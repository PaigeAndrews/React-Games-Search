import React, {useState, useEffect} from 'react';
import './ItemDetail.css';


function ItemDetail({match}) {

    useEffect(() => {
      fetchItem();
      console.log(match)
    }, []);
   
    // useEffect(() => {
    //   fetchItem();
    //   console.log("paw")
    // }, []);
   
   

    const [item, setItem] = useState({});
    const [description, setDescription] = useState("");
    const [video, setVideo] = useState("");
    const [platforms, setPlatforms] = useState([]);
    const [publisher, setPublisher] = useState("");
    const [genres, setGenres] = useState([]);
    const [error, setError] = useState(false);

    const fetchItem = async () => {
      setError(false);
      try {
    const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
    const item = await fetchItem.json();
    const description = item.description.replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<br \/>/g, ' ')
    setItem(item)
    console.log(item)
    setDescription(description)
    setVideo(item.clip.clip)
    setPlatforms(item.platforms.map(x => x.platform.name + " "))
    setPublisher(item.publishers[0].name)
    setGenres(item.genres.map(x => x.name + " "))
      }
      catch(error){
        setError(true);
      }
    }


  return (
    
    <div className="detail-container">
        <h1>{item.name}</h1>
        <h2>Released: {item.released}</h2>
        <img alt='' src={item.background_image} className="images" />
        <iframe className="videoClip"
          src={video}>
        </iframe>
        
         {publisher}
         
      <div className="genres">{genres.map(genre => { return(<div className="genreEach">{genre}</div>)}) }</div>
      <div className="platforms">{platforms.map(plat => { return(<div className="platformEach">{plat}</div>)}) }</div>
      
      <div className="itemPara">{description}</div>
      {
        error && <div style={{color: `red`}}>some error occurred, while fetching api</div>
      }
    </div>
  );
}

export default ItemDetail;
