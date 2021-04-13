import React from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar'
import CustomerAssurance from '../CustomerAssurrance'
import Footer from '../Footer'
import Body from '../Body'
import './Homepage.css'

var html = require('react-escape-html');
 
var tag = '</>';

const Homepage  = (props) => {
  return(  <div>
<Topbar />
<Navbar searchBar/>
<Body />
<CustomerAssurance />
<Footer />
<div className='fixedbar'><div>Menu</div><div><i class="fas fa-code"></i>Handoff</div><div><i class="fas fa-comment"></i>17 comments</div></div>
    </div>)
}


export default Homepage