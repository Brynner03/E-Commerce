import React from 'react'
import '../styles/Header.css'
// import SearchIcon from '@mui/icons-material/Search';
import Search from './Search'
import NewItem from './NewItem'
import Route from 'react'
import Cart from '../pages/Cart'


function Header(props) {
  return (
    <div className="header">
        <svg className="gymshark_logo" aria-labelledby="26797a4f-28ec-4c96-8f8a-8df1974d19f7" xmlns="http://www.w3.org/2000/svg" width="145" height="111" fill="none" viewBox="0 0 145 111"><title id="26797a4f-28ec-4c96-8f8a-8df1974d19f7">Gymshark Logo</title><path fill="#000"  d="M0 0l104.026 17.59-42.34 64.842h-3.602l-5.898 5.845-6.209-5.845h-1.648l-5.987 5.943-5.942-5.943h-2.011l-5.954 5.953-6.138-5.953H0l24.167 9.405 6.502-3.088 3.649 7.064 1.825.7 7.458-3.682 3.911 8.221 1.543.518-5.473 8.517L144.025.001H0z"></path><path fill="#000"  d="M17.102 24.983l42.354 10.042-18.214 1.997-24.14-12.04z" ></path></svg>

    <Search />
        
        <div className="header__nav">

        <div className="nav__option">

        <span className="nav__option1" >
                View
            </span>
            <span className="nav_option2" >
                Cart
            </span>
        </div>
        </div>
        <div className="dataResults">
        </div>
    </div>
  )
}

export default Header