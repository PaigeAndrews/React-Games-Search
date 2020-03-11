import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
    fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://api.rawg.io/api/games');
        
        const items = await data.json();
        console.log(items.results);
        setItems(items.results);
    };

  return (
    <div className="App">
      {items.map(item => (
       <Link to={`/shop/${item.id}`}> <h1 key={item.id}>{item.name}</h1> </Link>
        ))}
    </div>
  );
}

export default Shop;
