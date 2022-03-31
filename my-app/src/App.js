import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Items from './components/Items'
import NewItem from './components/NewItem';
import Cart from './pages/Cart';

function App() {

  const [cartItems, setCartItems] = useState([])
  const onAdd = (items) => {
    const exist = cartItems.find(x => x.id === items.id)
    if (exist) {
      setCartItems(cartItems.map(x => x.id === items.id ? {...exist, qty: exist.qty +1} : x))
    } else {
      setCartItems([...cartItems, {...items, qty:1}])
    }
  }
  const [items, setItems] = useState([])

  const getItems = async() => {
     axios.get('http://localhost:3001/api').then((response)=>{
       console.log(response.data)
       setItems(response.data)
     })
    }

 

  useEffect(() => {
    getItems()
  },[])
  
  
  return (
    <div className="App">
      <Routes >

       <Route path="/" element={<Home onAdd={onAdd} items={items}/>} />
       <Route path="/cart" element={<Cart onAdd={onAdd} cartItems={cartItems}/>} />
        
      </Routes>
    </div>
  );
}

export default App;

{/* <Route path='new' element={ <NewItem newItem={newItem} handleChange={handleChange} addItem={addItem}/>} /> */}

// Adding a new item
  // const addItem = (e) => {
  //   e.preventDefault()
  //   const currentItems = items
  //   const createdItem = {
  //     ...newItem,
  //     id: parseInt(items.length + 1),
  //     price: parseInt(newItem.price)
  //   }
  //   currentItems.push(createdItem)
  //   setItems(currentItems)
  //   setNewItem({ id: '', description: '', location: '', address: '', url: '', img: '' })
  // }

  // const handleChange = (e) => {
  //   setNewItem({ ...newItem, [e.target.name]: e.target.value })
  // }