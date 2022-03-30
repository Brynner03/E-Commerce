import React from 'react'

const Products = (props) => {
    <div className="products-card" onClick={props.onClick}>
    <div className="img-wrapper">
      <img src={props.image} alt={props.image} />
    </div>
    <div className="info-wrapper flex-col">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.img}</p>
      <p>{props.description}</p>
    </div>
  </div>
}

export default Products