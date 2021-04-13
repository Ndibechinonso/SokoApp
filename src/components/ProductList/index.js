import React from 'react'
import {products} from '../../DATA' 
import './ProductList.css'
import AddButton from '../AddButton'


const ProductList = (props) =>{
    return(
        <div className='productContainer'>
{products.map((list, i) => { return <div key={i} className='productDiv'><div className='imgDiv'><img src={list.image}></img></div> <div className='productInfo'><div>{list.name}</div><div>{list.price}</div></div> <div className='buttonDiv'> <AddButton text='Add' className='button' icon='fas fa-plus'/></div>
</div>})}
        </div>
    )
}

export default ProductList