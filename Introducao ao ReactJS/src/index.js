import React from "react"
import { ReactDOM } from "react"
import "./style.css"
import "../public/index.html"

function sum(a,b){
    return a+b
}

function primeiroJSX(){
    return(<div className="teste">
        Introdução ao ReactJS
        <h1>Soma: {sum(10,20)}</h1>
    </div>)
}
const App = () => {
    return (<div className="App"> 
    {primeiroJSX}
    </div>)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)