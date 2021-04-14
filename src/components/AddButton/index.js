import React from 'react'
import './AddButton.css'

const AddButton = (props) => {
    return (
        <button className={props.className}><i className={props.icon}></i>{props.text}</button>
    )
}

export default AddButton