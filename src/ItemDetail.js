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

    const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
    const item = await fetchItem.json();
    const description = item.description.replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<br \/>/g, ' ')
    const video = item.clip.clip
    const platforms = item.platforms.map(x => x.platform.name + " ")
    const publisher = item.publishers[0].name
    const genres = item.genres.map(x => x.name + " ")
    setItem(item)
    console.log(item)
    setDescription(description)
    setVideo(video)
    setPlatforms(platforms)
    setPublisher(publisher)
    setGenres(genres)
    }


  return (
    
    <div className="detail-container">
        <h1>{item.name}</h1>
        <h2>Released: {item.released}</h2>
        <img alt='' src={item.background_image} className="images" />
        <iframe className="videoClip"
          src={video}>
        </iframe>
        {/* <h2> Platforms: {item.platforms.map(x => x.platform.name)}</h2> */}
         {/* {item.ratings[0].count}  */}
         {publisher}
         {/* // for (x of items.name) { */}
      {/* //   return items.na
      me.substring(0, 14) + "...";
      //   } */}
      <div className="genres">{genres.map(genre => { return(<div className="genreEach">{genre}</div>)}) }</div>
      <div className="platforms">{platforms.map(plat => { return(<div className="platformEach">{plat}</div>)}) }</div>
      
      <div className="itemPara">{description}</div>
    </div>
  );
}

export default ItemDetail;
