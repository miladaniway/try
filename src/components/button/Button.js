import React from 'react';
import './Button.css';


function Button(props) {
    return(
        <button className="Button" style={{background: props.color}}>
            <p>{props.nama}</p>
            <img src={props.image} width="30"/>
        </button>
        )
}



export default Button;