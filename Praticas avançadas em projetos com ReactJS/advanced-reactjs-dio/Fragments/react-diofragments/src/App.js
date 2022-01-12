import React, {useRef,useEffect} from "react";


function App(){
  const inputRef = useRef()
  const count = useRef(1)

  const handleClick = ()=>{
    inputRef.current.focus()
  }

  useEffect(()=>{
    setTimeout(()=>{
      count.current=300
    },3000)
  })
  return (
    <>
    <h1>Valor e count: {count.current}</h1>
    Foco: <input ref={inputRef}/>
    <button onClick={handleClick}>Focar</button>
    </>
    )
}
export default App;
