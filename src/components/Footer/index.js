import React, { useState, useEffect } from 'react'
import './Footer.css'
import UserDetail from '../UserDetail'

const Footer = (props) => {

    // const [isDesktop, setDesktop] = useState(window.innerWidth < 800)

    // const updateMedia = () => {
    //     setDesktop(window.innerWidth < 800)
    // }

    // useEffect(() => {
    //     window.addEventListener('resize', updateMedia);
    //     return window.removeEventListener('resize', updateMedia)
    // })

    return (
        <div className='footer'>
            <div className='store'>STORE DETAILS</div>
            <div className='userContainer'><UserDetail className='user' /></div>
            <div className='btndiv'><button className='whatsappbtn'><i class="fab fa-whatsapp"></i> Chat with us</button></div>
        <div className='respNavbar'><div><i class="fas fa-home"></i> Home</div><div><i class="fas fa-th"></i> Categories</div><div><i class="fas fa-shopping-bag"></i> Bag</div><div><i class="fas fa-money-check "></i> Orders</div></div> : <div></div>
        </div>
    )
}

export default Footer