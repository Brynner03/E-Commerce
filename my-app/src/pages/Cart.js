import React from 'react'
import Header from '../components/Header'
import '../styles/Cart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'



function Cart(props) {
  let navigate = useNavigate()

  const url = '/api/items/add-new'
  const [data, setData] = useState({
    name: '',
    price: '',
    description: '',
    img: ''
  })

  function submit (e) {
    e.preventDefault()
    axios.post(url, {
     name: data.name,
     price: data.price,
     description: data.description,
     img: data.img
   })
   .then(res => {
      console.log(res.data)
      navigate('/parks')
   })
 }
   function onChange(e) {
     const newdata = { ...data }
     newdata[e.target.id] = e.target.value
     setData(newdata)
     console.log(newdata)
   }

  
  return (
    <div>
      <Header />
    <h1>Add A New Item</h1>
    <form onSubmit={ submit }>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'price'} name={'price'} placeholder={'price'} onChange={(e) => onChange(e)}/>
      <input type="text-area" id={'description'} name={'description'} placeholder={'Description'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'img'} name={'img'} placeholder={'Image URL'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
    
    )
}

export default Cart