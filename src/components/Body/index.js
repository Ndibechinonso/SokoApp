import React, { useState, useEffect } from 'react'
import { categories, products } from '../../DATA'
import './Body.css'
import ProductList from '../ProductList'
import Cart from '../Cart'
import { Link } from 'react-router-dom'

const Body = (props) => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 750)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 750)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return window.removeEventListener('resize', updateMedia)
  })

  return (
    <div>
      <div className='body'>

        {isDesktop ? <div className='categories'>{categories.map((items, i) => { return <div key={i} className='category'>{items.item} ({items.amount})</div> })}</div> : null}

        <ProductList />

        {isDesktop ? <Cart className='cart' header='bagHeader' icon='far fa-frown bodyIcon' emptyCheck='amountCheck' shop='shop' /> : null}
      </div>

      {!isDesktop ? <div className='productGrid'>{products.map((list, i) => {
        return <Link to='/productDetails'><div key={i} className='productGridCard'><img src={list.image} className='productGridImage'></img> <div className='productGridInfo'>{list.name}</div>
        </div> </Link>
      })} </div> : null}</div>
  )
}

export default Body