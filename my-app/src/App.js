import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

import NewItem from './components/NewItem';




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
  
  const[ newItem, setNewItem] = useState({
    
    id:'',
    name:'',
    price:'',
    department: '',
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
    setNewItem({ id: '', name: '', price: '', department: '',description: '', img: '' })
  }
  
  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value })
  }
  
  if(items) {
    
    return (
      <div className="App">

      <Routes >
       <Route path="/" element={<Home  items={items}/>} />
 
       <Route path="/new" element={<NewItem handleChange={handleChange} newItem={newItem} addItem={addItem} />} />
      </Routes>
    </div>
  );
} else {
  return "Loading..."
}

}
export default App;
