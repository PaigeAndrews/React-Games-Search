import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail(key) {

    // useEffect(() => {}, []);
    useEffect(() => {
      fetchItems();
      }, []);

    // const [item, setItem] = useState({});

    const [items, setItems] = useState({});

    const fetchItems = async () => {
        const data = await fetch(`https://api.rawg.io/api/games/${key}`);
        
        const items = await data.json();
        console.log(items.id);
        setItems(items.results);
    

  return (
    <div>
        <h1>Item</h1>
    </div>
  );
}

export default ItemDetail;
