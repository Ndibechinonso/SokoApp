import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import Cart from '../Cart'
import './EmptyCart.css'
import AddButton from '../AddButton'

const EmptyCart = (prps) => {
    return (
        <div>
            <Topbar />
            <Navbar />
           <Cart className='emptyCart' header='emptyBagHeader' emptyCheck='amountCheck' shop='shopText' />
           <AddButton text='Back to homepage' className='emptyButton' />
        </div>
    )
}

export default EmptyCart