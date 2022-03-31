import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Items from './components/Items'

function App() {

  const getItems = async() => {
     axios.get('http://localhost:3001/api').then((response)=>{
       console.log(response)
       setItems(response.data)
     })
    }

  const [Items, setItems] = useState([])

  useEffect(() => {
    getItems()
  },[])

  

  return (
    <div className="App">
      <Routes >

       <Route path="/" element={<Home items={Items}/>} />
       
       {/* <Products /> */}
      </Routes>
    </div>
  );
}

export default App;
