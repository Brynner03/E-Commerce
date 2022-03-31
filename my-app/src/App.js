import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Items from './components/Items'
import NewItem from './components/NewItem';
import Cart from './pages/Cart';
import { ListItemSecondaryAction } from '@material-ui/core';


function App() {

  const [cartItems, setCartItems] = useState([])
  const onAdd = (items) => {
    const exist = cartItems.find(x => x.id === items.id)
    if (exist) {
      setCartItems(cartItems.map(x => x.id === items.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItems([...cartItems, {...items, qty:1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === items.id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== items.id))
    } else {
      setCartItems(cartItems.map(x => x.id === items.id ? {...exist, qty: exist.qty - 1} : x))
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

  const[ newItem, setNewItem] = useState({

    id:'',
    name:'',
    price:'',
    description:'',
    img:'',
  })

  const addItem = (e) => {
    e.preventDefault()
    const currentItem = items
    const createdItem = {
      ...newItem,
      id: parseInt(items.length + 1),
      price: parseInt(newItem.price)
    }
    currentItem.push(createdItem)
    setItems(currentItem)
    setNewItem({ id: '', name: '',description: '', img: '' })
  }

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }
  




  
  if(items) {

    return (
      <div className="App">

      <Routes >
       <Route path="/" element={<Home onAdd={onAdd} items={items}/>} />
       <Route path="/cart" element={<Cart handleChange={handleChange} newItem={newItem} addItem={addItem} />} />
      </Routes>
    </div>
  );
}

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