import React, {useState, useEffect} from 'react';
import './App.css';
import './Shop.css';
import {Link} from 'react-router-dom';

function Shop() {

  let apiBase = "https://api.rawg.io/api/games"

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

    useEffect(() => {
    fetchItems();
    }, []);

    
    useEffect ( () => {
      getGames(page);
      console.log("Ran effect 1")
    }, []);


    

     //let pagination = 1;
    const loadMoreCommit = () => {
    setPage(page + 1);
    let ok = page + 1;
    getGames(ok);
    };

   //pagination = pagination - 1;
    const loadBackCommit = () => {
    if(page > 1){
      setPage(page - 1);
    }
    let ok = page - 1;
    getGames(ok)
    
    };

    // api fetching for shop load screen
    const fetchItems = async () => {
        const data = await fetch(`${apiBase}`);
        
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
        
    };

    // api fetching for shop changing the page
    let getGames = async (p) => {
      let response = await fetch(`${apiBase}?page=${p}`)
      let dataPage = await response.json()
      setItems(dataPage.results);
    }

    // function itemTitle(){
    //   if (item.name.length > 15) {
    //     return item.name.substring(0, 14) + "...";
    //   }
    

  return (
    <div className="shop-container">
      
      <div>
         <p>You are on page: {page} </p>
         {page > 1 &&
          <button onClick={function(){loadBackCommit()}}>
            Back
          </button>
         }
         
         <button onClick={function(){loadMoreCommit()}}>
         Next page
        </button>
     </div>

      {items.map(item => (
      
        <div className="shop-item">
       <Link to={`/shop/${item.id}`}> <div className="game-title" key={item.id}>{item.name}</div>
       <img alt='' className="game-images" src={item.background_image} />
        </Link>
        </div>
        ))}
        
    </div>
  );
}

export default Shop;
