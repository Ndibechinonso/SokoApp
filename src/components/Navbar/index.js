import React from 'react'
import './Navbar.css'
import UserDetail from '../UserDetail'

const Navbar = (props) => {
    return (
        <div className='nav-container'>
            <div className='navbar'>

                <div className='first-link'>
                    <div><i class="fas fa-store-alt"></i></div>

                    <div className='user'>
                        <UserDetail />
                    </div>

                </div>

                <div className='navbar-links'>
                    <div className='navbar-link'><div className='nav-icon'><i class="fas fa-shopping-bag"></i></div><div>Bag</div>
                    </div>
                    <div className='navbar-link'><div className='nav-icon'><i class="far fa-user"></i></div><div>Account
            </div>
            
                    </div>
                    
                </div>
                <div className={props.className}><div><i className={props.icon}></i></div> <div className={props.subClass}>{props.text}</div> </div>
            </div>

          {props.searchBar ? <div className='search-div'><input placeholder='Search for products...'></input><div className='searchicon-div'><i class="fas fa-search"></i></div></div> : null }


        </div>
    )
}


export default Navbar