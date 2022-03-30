import './App.css';
import Header from './components/Header';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';

function App() {

  const getProducts = async() => {
    const productList = await axios.get('https://localhost:3001/api')
    console.log(productList)
    setProducts(productList.data)
  }

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  },[])

  return (
    <div className="App">
      <Routes >

       <Route path="/" element={<Home products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
