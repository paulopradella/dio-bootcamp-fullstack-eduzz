import React from "react";

function Button(props){
    const {children, onClick} = props

    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button