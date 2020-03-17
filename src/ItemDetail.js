import React, {useState, useEffect} from 'react';
import './ItemDetail.css';


function ItemDetail({match}) {

    useEffect(() => {
      fetchItem();
      console.log(match)
    }, []);
   

    const [item, setItem] = useState({});

    const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
    const item = await fetchItem.json();
    setItem(item)
    console.log(item)
      // if (Object.keys(item).map(x => x.includes("platforms"))){
      //   console.log(item.platforms)
      // }
    
    }


  return (
    
    <div className="detail-container">
        <h1>{item.name}</h1>
        <h2>Released: {item.released}</h2>
        <img alt='' src={item.background_image} className="images" />
        {/* <h2> Platforms: {item.platforms.map(x => x.platform.name)}</h2> */}
         {/* {item.ratings[0].count}  */}
         {/* {item.publishers[0].id} */}
        
        {item.description}
        
    </div>
  );
}

export default ItemDetail;
