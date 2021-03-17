import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() =>{
        fetchItems();
    },[]);
    const [items,setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://reqres.in/api/users?page=2');
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    };

return (
    <div>
    {
        items.map(data =>(<h1 key={data.id}><Link to={`/shop/${data.id}`}>{data.first_name}</Link></h1>))
    }
    </div>
);
}

export default Shop;
