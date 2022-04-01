import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import Header from './Header'
import '../styles/NewItem.css'


const NewItem = (props) => {
  let navigate = useNavigate()
  
    const url = 'http://localhost:3001/api/add-new'
    const [data, setData] = useState({
          img: '',
          name: '',
          price: '',
          description: '',
          department: '',
   })
    function submit (e) {
         e.preventDefault()
         Axios.post(url, {
          name: data.name,
          price: data.price,
          description: data.description,
          img: data.img,
          department: data.department,
        })
        .then(res => {
           console.log(res.data)
           navigate('/')
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
      <input type="text" id={'img'} name={'img'} placeholder={'Image URL'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} onChange={(e) => onChange(e)}/>
      <input type="text-area" id={'description'} name={'description'} placeholder={'Description'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'price'} name={'price'} placeholder={'Price'} onChange={(e) => onChange(e)}/>
      <input type="text" id={'department'} name={'department'} placeholder={'department'} onChange={(e) => onChange(e)}/>
      <button>Submit</button>
    </form>
    </div>
  );
}

export default NewItem