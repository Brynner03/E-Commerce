import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Items from './components/Items'
import NewItem from './components/NewItem';
import ViewCart from './pages/ViewCart';

function App() {

  

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


  return (
    <div className="App">
      <Routes >

       <Route path="/" element={<Home items={items}/>} />
       {/* <Route path='new' element={ <NewItem newItem={newItem} handleChange={handleChange} addItem={addItem}/>} /> */}
       <Route path="/cart" element={<ViewCart />} />
        
      </Routes>
    </div>
  );
}

export default App;
