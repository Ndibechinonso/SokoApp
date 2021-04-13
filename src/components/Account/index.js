import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import './Account.css'

const Account = (props) => {
    return(
        <div>
            <Topbar />
            <Navbar className='accountHeaderDiv' subClass='accountHeader' text='+234 7030219551'/>
        </div>
    )
}

export default Account