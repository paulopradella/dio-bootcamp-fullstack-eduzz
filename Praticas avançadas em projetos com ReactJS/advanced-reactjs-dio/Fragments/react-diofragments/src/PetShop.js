import React from "react";
import ProptTypes from 'prop-types'

function PetShop(props){
    const{dogs, cats, customers, customerName} = props
    
    return(
        <div>
            <h1>Dogs: {dogs}</h1>
            <h1>Cats: {cats}</h1>
            <div>
                Quantidade e clientes: {customers}
            </div>
            <div>
                Nome do cliente: {customerName}
            </div>
        </div>
    )
}
PetShop.defaultProps={
    cats: 10,
    customers:[]
}
PetShop.prototype={
    dogs: ProptTypes.number.isRequired,
    cats: ProptTypes.number,
    customers: ProptTypes.array,
    customerName: ProptTypes.string.isRequired
}
export default PetShop