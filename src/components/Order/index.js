import React from 'react'
import './Order.css'

export default function Order(props) {

    return (
        <div className='order'>
            <div className='seller'><i className={props.icon}></i> {props.seller} </div>
            <div className='orderSecondRow bold'> <div>Order {props.orderNo}</div><div>{props.price}</div>  </div> <div className='orderSecondRow light'><div>{props.itemQuantity} items</div><div>{(new Date().toLocaleString())}</div></div>
            <div className={props.statusIndicator}><div><i className={props.statusIcon}></i> </div><div>{props.status}</div></div>
        </div>
    )
}