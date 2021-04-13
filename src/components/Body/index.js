import React from 'react'
import {categories} from '../../DATA'
import './Body.css'
import ProductList from '../ProductList'
import Cart from '../Cart'

const Body  = (props) => {
  return(  <div className='body'>
<div className='categories'>{categories.map((items, i)=> { return <div key={i} className='category'>{items.item} ({items.amount})</div> })}</div>
<ProductList />

<Cart className='cart' header='bagHeader' emptyCheck='amountCheck' shop='shop' />
    </div>)
}


export default Body