import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import CustomerAssurance from '../CustomerAssurrance'
import Footer from '../Footer'
import './ProductDetails.css'
import ProductInfo from '../ProductInfo'

const ProductDetails = (props) => {
    return (
        <div>
            <Topbar />
            <Navbar className='categoryHeaderDiv' icon="fas fa-chevron-left" subClass='categoryHeader' text='Furniture' />
            <ProductInfo text='The smartphone comes in 6.53 inches size and the display is IPS LCD capacitive touchscreen that provides 1080 x 2400 pixels resolution. The screen of the device is protected by Corning Gorilla Glass ' />
            <CustomerAssurance />
            <Footer />
        </div>
    )
}
export default ProductDetails