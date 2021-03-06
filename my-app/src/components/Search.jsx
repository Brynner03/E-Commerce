import React from 'react'

function Search(props) {
  return (
    <div className="header__search">
            <input
            className="header__searchInput" type="text" placeholder= "Checkout what we have in stock!" value={props.value} onChange={props.onChange}> 
            </input>
            <button onClick={props.onSubmit} className='submit'>Search</button>
    </div>
  )
}

export default Search