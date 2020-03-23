import React, {useState, useEffect} from 'react';
import './App.css';
import './Shop.css';
import {Link} from 'react-router-dom';

function Shop() {

  let apiBase = "https://api.rawg.io/api/games"

  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

    useEffect(() => {
    fetchItems();
    }, []);

    
    useEffect ( () => {
      getGames(page);
      console.log("Ran effect 1")
    }, []);


    

     //pagination = pagination + 1
    const loadMoreCommit = () => {
      setPage(page + 1);
      let ok = page + 1;
      getGames(ok);
    };

   //pagination = pagination - 1
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


    // api fetching for search box 
    let getGameSearch = async (search) => {
      let response2 = await fetch(`${apiBase}?search=${search}`)
      let dataSearch = await response2.json()
      setItems(dataSearch.results)
    }
    
    
    // setting the search hook to what is typed in the search box
    const updateSearch = e => {
      setSearch(e.target.value);
    }
    
    // preventing default behavior then calling api
    const getSearch = e => {
      e.preventDefault();
      getGameSearch(search)
    }
    
    



  return (
    
    <div className="shop-container">

      {/* search box field */}
      <form onSubmit={getSearch} className= "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="submit-button" type="submit">
          Search
        </button>
      </form>

    {/* changing pages */}
      <div className="pageButtonContainer">
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
    
      {/* mapping items shown on page */}
      {items.map(item => (
       
        <div className="shop-item">
       <Link to={`/shop/${item.id}`}> 
       <div className="game-title" key={item.id}>
         {/* adding title length restriction */}
         {(() => {
            if (item.name.length >19) {
              return (
                <div>{item.name.substring(0, 18) + "..."}</div>
              )
            } else {
              return (
              <div>{item.name}</div>
              )
              }
            })()}
        </div>

        {/* game image */}
       <img alt='' className="game-images" src={item.background_image} />
        </Link>
        </div>
        ))}
        
        {/* changing pages */}
        <div className="pageButtonContainer">
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
    </div>
  );
}

export default Shop;
