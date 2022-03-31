import React, { useEffect, useState } from 'react';
import {Routes, useParams} from 'react-router-dom'

const Items = (props) => {

  return  (
    <div className="products-card" onClick={props.onClick}>
    <div className="img-wrapper">
      <img src={props.image} alt={props.image} />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <p>{props.img}</p>
      <p>{props.description}</p>
    </div>
  </div>
      )
    }
    
    
    
    
    
    export default Items
    
    
    
    
    
    
    // let {id} = useParams()
  
    // const [selectedItems, setItems] = useState('')
  
    // useEffect(() => {
    //   let selectedItems = props.items.find(
    //     (items) => items._id === parseInt(id)
    //   )
    //   setItems(selectedItems)
    // }, [props.items, id])
  
  
  // console.log(selectedItems)
  
  //  if ( selectedItems) {
  // }






// <div className="products-card" onClick={props.onClick}>
//      <h1> {selectedItems.name} </h1> 
//         <img src={selectedItems.img} alt='poster'/>
//         <p> Description: {selectedItems.description}</p>
//         <div className='ride-details'>
//             <h2>Ride Name and Details:</h2>
//             {selectedItems.map((items) => (
//                 <div key={items._id}>
//                     <ol>
//                         <h3>{items.name}</h3>
//                         <p>{items.description}</p>
//                         <ul>
//                             <li>Ride Height: {items.height}</li>
//                             <li>Ride Length: {items.length}</li>
//                             <li>Top Speed: {items.speed}</li>
//                             <li>Steel/Wood: {items.type}</li>
//                         </ul>
//                     </ol>
//                 </div>
//             ))}
//         </div>
//    </div>