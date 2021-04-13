import React from 'react'
import './Footer.css'
import UserDetail from '../UserDetail'

const Footer  = (props) => {

return (
    <div className='footer'>
        <div>STORE DETAILS</div>
<div className='userContainer'><UserDetail className='user'/></div>
<div className='btndiv'><button className='whatsappbtn'><i class="fab fa-whatsapp"></i> Chat with us</button></div>
    </div>
)



}


export default Footer