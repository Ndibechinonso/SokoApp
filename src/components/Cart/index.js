import React from 'react'


const Cart = (props) => {
    return (
        <div className={props.className}>
            <div className={props.header}><div>Bag</div><div>0</div></div><i className={props.icon}></i><div className={props.emptyCheck}>It's empty here </div><div className={props.shop}>Start shopping to add items to your bag</div>
        </div>
    )
}

export default Cart