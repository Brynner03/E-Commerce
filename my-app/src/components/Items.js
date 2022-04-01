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
    {/* <div><button onClick={()=>updateItem(items._id)} variant="danger" className="delete">Update</button></div> */}

  </div>
      )
    }
    
    
    
    
    export default Items
    
    
    
