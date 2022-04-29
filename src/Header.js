import React from "react";
import pc3 from './Image/pc3.png'
import './Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'

function Header(){
    const [{basket , user}]=useStateValue();
  
   
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    };
    // console.log(user)
    return(
        <nav className="header">
            {/* logo */}
            <Link to="/">
            <img className="header_logo"
            src={pc3}
            alt="amazon_logo"/>
            </Link>
            {/* search bar */}
            <div className="header_search">
              <input type="text" className="header_searchInput"/>
              <SearchIcon className="header_searchIcon"/>
            </div>
           
            {/* 3link */}
            <div className="header_nav">
                {/* linkone */}
                <Link to={!user && '/login'}className="header_link">
                <div onClick={login} className="header_option">
                    <span className="header_optionOne">Hello {user?.email}</span>
                    <span className="header_optiontwo">{user?'signOut':'signIn'}</span>

                </div>
                </Link>

                {/* link_two */}

                <Link to='/'className="header_link">
                <div className="header_option">
                    <span className="header_optionOne">Returns</span>
                    <span className="header_optiontwo">&Order</span>

                </div>
                </Link>

                {/* link_three */}

                <Link to='/'className="header_link">
                <div className="header_option">
                    <span className="header_optionOne">Your</span>
                    <span className="header_optiontwo">Prime</span>

                </div>
                </Link>

                 {/* icon basket */}

                 <Link to='/checkout'className="header_link">
                     <div className="header_optionBasket">
                         <ShoppingBasketIcon/>
                         <span className="header_optiontwo header_BasketCount">{basket?.length}</span>

                     </div>
                 </Link>

            </div>
           

        </nav>
    )
}
export default Header;