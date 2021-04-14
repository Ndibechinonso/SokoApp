import React from 'react'
import './Navbar.css'
import UserDetail from '../UserDetail'
import AddButton from '../AddButton'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div>
            <div className='nav-container'>

                <div className='navbar'>
                    <div className='first-link'>
                        <Link to='/'> <div><i class="fas fa-store-alt"></i></div></Link>
                        <div className='user'>
                            <UserDetail />
                        </div>
                    </div>

                    <div className='navbar-links'>
                        <div className='navbar-link'><div className='nav-icon'><i class="fas fa-shopping-bag"></i></div> <Link to='/cart'><div>Bag </div></Link>
                        </div>
                        <div className='navbar-link'><div className='nav-icon'><i class="far fa-user"></i></div> <Link to='/account'><div>Account</div></Link>
                        </div>
                    </div>

                    <div className={props.className}><div><Link to='/'><i className={props.icon}></i></Link></div> <div className={props.subClass}>{props.text}</div> </div> {props.isButton ? <div><AddButton text='Log Out' className='logOutButton' /></div> : null}
                </div>

                {props.searchBar ? <div className='search-div'><input placeholder='Search for products...' class='search-div-input'></input><div className='searchicon-div'><i class="fas fa-search"></i></div></div> : null}

            </div>

            <div className='search-div-mini'><input placeholder='Search for products...' class='search-div-mini-input'></input><div className='searchicon-div-mini'><i class="fas fa-search"></i></div></div>

        </div>
    )
}

export default Navbar