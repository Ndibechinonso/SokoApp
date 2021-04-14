import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Cart from '../Cart'
import './EmptyCart.css'
import { Link } from 'react-router-dom'
import AddButton from '../AddButton'

const EmptyCart = (props) => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <Cart className='emptyCart' header='emptyBagHeader' icon='far fa-frown emptyIcon' emptyCheck='amountCheck' shop='shopText' />
            <div className='buttonDiv'> <Link to='/'><AddButton text='Back to homepage' className='emptyButton' /></Link></div>
        </div>
    )
}

export default EmptyCart