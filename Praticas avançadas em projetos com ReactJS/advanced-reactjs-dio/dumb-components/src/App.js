import React,{useState} from "react";
import Gallery from "./smart components/Gallery";
function App() {
  const photos=[
    "http:/plaeimg.com/140/60/people",
    "http:/plaeimg.com/140/60/animals",
    "http:/plaeimg.com/140/60/tech",
    "http:/plaeimg.com/140/60/any",
    "http:/plaeimg.com/140/60/nature"
  ]
  
  return(
    <>
       <h1>Galeria de fotos</h1>
       <Gallery photos={photos}/>
    </>
  )
}

export default App;
