import React from "react";
import PropType from 'prop-types'

function Calc(props){
    const {min, max, onChange} = props

    return(
        <div>
            <p>
                Valor mínimo: {min}
            </p>
            <p>
                Valor máximo: {max}
            </p>
            <input type="text" onChange={onChange}/>
        </div>
    )
}

Calc.propType = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.number.isRequired,
}

export default Calc