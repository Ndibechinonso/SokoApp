import React, {useState} from 'react'
import './ProductInfo.css'
import {products} from '../../DATA'
import AddButton from '../AddButton'


const ProductInfo = (props) => {

const [amount, setAmount] = useState(1)
function increment(){
 return   setAmount(amount+1)
}
function decrement() {
  if(amount > 1) { return setAmount(amount-1) }
}
    return (
        <div className='productContainer'>
        <div className='productInfo'>
            <div className='productImgDiv'><img src={products[0].image} className='productImg'></img></div>
            <div className='productDetails'>
            <div className='name'>{products[0].name}</div>
            <p className='text'>{props.text}</p>
            <div className='price'>{products[0].price}</div>  
            <div className='productNumber'><button className='decrement' onClick={decrement} ><i class="fas fa-minus"></i></button><input value={amount}/><button className='increment' onClick={increment} ><i class="fas fa-plus"></i></button></div>
            <div><AddButton text='Add to Bag' className='addtoBag' /> <AddButton text='Buy Now' className='buyNow' /></div>
            </div>

            </div>

                <div className='relatedProdHeader' > RELATED PRODUCTS</div> 
            <div className='relatedProducts'>
           
{products.map((list, i) => { return <div key={i} ><div className='relatedDiv'><img src={list.image}></img></div> <div className='relatedInfo'>{list.name}</div>
</div>})}
        </div>
             

              </div>

           
    )
}

export default ProductInfo