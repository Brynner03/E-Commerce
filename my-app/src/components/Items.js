import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const Items = (props) => {

  // let {id} = useParams()

  // const [Items, setItems] = useState('')

  // useEffect(() => {
  //   let Items = props.items.find(
  //     (items) => items.id === parseInt(id)
  //   )
  //   setItems(Items)
  // }, [props.items, id])





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