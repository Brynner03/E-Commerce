import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Items.css'


const Items = (props) => {
      const {items, onAdd} = props


      const deleteItem = async(id)=>{
        // alert(id)
        axios.delete(`http://localhost:3001/api/${id}`)
        .then(res => {
          console.log('Deleted!!', res)
        }).catch(err => console.log(err))
        }
        
        function updateItem(id) {
          const data = {

            "img": "img",
            "name": "name",
            "price": "price",
            "department": "department",
            "description": "description"
          }
          axios.put(`http://localhost:3001/api/update/${id}`,data)
          .then((data)=> {
            console.log(data)
          })
          .catch((err)=> {
            console.log(err)
          })
        }


return  (
  <div className= 'whole' >
    <img className="img" src={items.img} alt={items.name}></img>
    <h3 className="name">{items.name}</h3>
    <div className="price">${items.price}</div>
    <div className="dept">{items.department}</div>
    <div className="desc1">Description</div>
    <div className="description">
    <div className="desc2">{items.description}</div>
    </div>
    <div><button onClick={()=>deleteItem(items._id)} variant="danger" className="delete">Delete</button></div>
    <div>
      <form onSubmit={updateItem}>
      <input type="text" id={'img'} name={'img'} placeholder={'Image URL'}/>
      <input type="text" id={'name'} name={'name'} placeholder={'Name'} />
      <input type="text-area" id={'description'} name={'description'} placeholder={'Description'}/>
      <input type="text" id={'price'} name={'price'} placeholder={'Price'} />
      <input type="text" id={'department'} name={'department'} placeholder={'department'} />
       </form> 
       <button onClick={()=>updateItem(items._id)} variant="danger" className="delete">Update</button>
          </div>

  </div>
      )
    }
    
    
    
    
    export default Items
    
    
    
