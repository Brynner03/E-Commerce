import React from 'react'

function Cart(props) {

  const {cartItems} = props

  return (
    <div className="block">
      
    <h2>Cart Items</h2>
    <div>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
    </div>
    
    </div>
    )
}

export default Cart