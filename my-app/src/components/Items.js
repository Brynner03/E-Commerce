import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react';
import {Routes, useParams} from 'react-router-dom'
import Edit from './Edit';

const Items = (props) => {
      const {items, onAdd} = props
    
      function deleteItem(id){
        // alert(id)
        axios.delete(`http://localhost:3001/api/${id}`)
        .then(res => {
          console.log('Deleted!!', res)
        }).catch(err => console.log(err))
        }
        
      



return  (
  <div>
    <img className="img" src={items.img} alt={items.name}></img>
    <h3 className="name">{items.name}</h3>
    <div className="price">${items.price}</div>
    <div className="dept">{items.department}</div>
    <div className="desc">{items.description}</div>
  
    <div><button onClick={()=>deleteItem(items._id)} variant="danger" className="delete">Delete</button></div>

  </div>
      )
    }
    
    
    
    
    export default Items
    
    
    
