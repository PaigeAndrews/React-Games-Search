import React, {useState, useEffect} from 'react';
import './ItemDetail.css';


function ItemDetail({match}) {

    useEffect(() => {
      fetchItem();
      console.log(match)
    }, []);
   
    useEffect(() => {
      fetchItem();
      console.log("paw")
    }, []);
   
   

    const [item, setItem] = useState({});
    const [description, setDescription] = useState("");


    const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
    const item = await fetchItem.json();
    const description = item.description.replace(/<\/p>/g, ' ').replace(/<p>/g, ' ').replace(/<br \/>/g, ' ')
    // const d = item.description.replace(/<p>/g, "WOW")
    setItem(item)
    console.log(item)
    setDescription(description)
    }


  return (
    
    <div className="detail-container">
        <h1>{item.name}</h1>
        <h2>Released: {item.released}</h2>
        <img alt='' src={item.background_image} className="images" />
        {/* <h2> Platforms: {item.platforms.map(x => x.platform.name)}</h2> */}
         {/* {item.ratings[0].count}  */}
         {/* {item.publishers[0].id} */}
         {/* // for (x of items.name) { */}
      {/* //   return items.name.substring(0, 14) + "...";
      //   } */}
      <div className="itemPara">{description}</div>
    </div>
  );
}

export default ItemDetail;
