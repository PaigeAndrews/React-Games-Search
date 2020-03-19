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
    const [d, setD] = useState("");


    const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.rawg.io/api/games/${match.params.id}`)       
    const item = await fetchItem.json();
    const d = item.description.replace(/<p>/g, 'WOW').replace
    // const d = item.description.replace(/<p>/g, "WOW")
    setItem(item)
    console.log(item)
      // if (Object.keys(item).map(x => x.includes("platforms"))){
      //   console.log(item.platforms)
      // }
    setD(d)
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
        {d}
        
        {/* {(() => { */}
          
            {/* // item.description.replace(/in/g, '/n')
          
              // i.replace(/grand/g, '\n')
              return ( */}
                {/* <div>{item.description.replace(/in/g, '/n')}</div> */}
                {/* )
          } */}
          {/* )()} */}
        
    </div>
  );
}

export default ItemDetail;
