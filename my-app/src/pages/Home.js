import React from 'react'
import Header from '../components/Header'
import Items from '../components/Items'
import Search from '../components/Search'
import { useState, useNavigate } from 'react'

function Home(props) {
  const {items} = props;
  
  
  
  return (
    <div className="home">
      <Header />
        <div className="home_container">
        <div className = "show">
    {items.map((items) => (
      <Items key={items._id} items={items} />
    ))}
  </div>
            
        </div>
    </div>
  )
}

export default Home


// const [searchResults, setSearchResults] = useState([])
// const [searchQuery, setSearchQuery] = useState('')

// const searchOnChange = (e) => {
//   const value = e.target.value
//   console.log(value)
//   setSearchQuery(value)
// }

// const searchOnSubmit = function (e) {
//   const items = props.items
//   let results = items.filter((items) => {
//     return items.name.toLowerCase().includes(searchQuery.toLowerCase())
//   })
//   console.log(results)

//   setSearchResults(results)
// }
// let navigate = useNavigate()

// const showItems = (items) => {
//   navigate(`items/${items._id}`)
// }











{/* <Search onSubmit={searchOnSubmit} onChange={searchOnChange} value={searchQuery}/> */}

{/* <div className="search">
<h3>Showing Results for: {searchQuery}</h3>
<section className="search-results container-grid">
{searchResults.map((result) => {
  return <Items key={result._id} onClick={() => showItems(result)} image={result.img} name={result.name} />

})}
</section>
</div> */}



//   function Home(props) {
//   let navigate = useNavigate()

//   const showItems = (items) => {
//     navigate(`${items.id}`)
//   }




//   return (
//     <div className="home">
//       <Header />
//       {
//         props.items.map((items) => {
//           <div className="items-card" onClick={() => showItems(items)} key={items.id}>
//           <img style={{ display: 'block' }} src={items.img} alt={items.name} />
//           <h3>{items.name}</h3>
//           </div>
//         })
//       }
//         <div className="home_container">
            
//         </div>
//     </div>
//   )
// }

// export default Home