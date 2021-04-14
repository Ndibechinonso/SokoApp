import React from 'react'
import { products } from '../../DATA'
import './ProductList.css'
import AddButton from '../AddButton'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div className='productListContainer'>
            <div className='productHeader'><div>Android Phone</div> <div className='productAmount'>12</div> </div>
            {products.map((list, i) => {
                return <Link to='/productDetails'><div key={i} className='productDiv'><div className='imgDiv'><img src={list.image}></img></div> <div className='productInfo'><div>{list.name}</div><div>{list.price}</div></div> <div className='buttonDiv'> <AddButton text='Add' className='productButton' icon='fas fa-plus' /></div>
                </div> </Link>
            })}
        </div>
    )
}

export default ProductList