import React, {useState, useEffect} from "react";
import { ThemeContext, themes } from "./Theme";
import Card from './Card';
function App(){
  const[token, setToken] = useState()

  useEffect(()=>{
    setTimeout(()=>{
      setToken('h341jk265h4526hkj45hk')
    }, 4000)
  },[setToken])
return(
  <ThemeContext.Provider value={{...themes.primary, token}}>
    <Card/>
  </ThemeContext.Provider>
)
}
export default App


//Usado nas duas primeiras aulas
// class App extends Component{
//   state = {
//     loading: false,
//     actived: true
//   }

//   componentDidMount(){
//     setTimeout(()=>{
//       this.setState({
//         loading: true
//       })
//     },3000)
//   }
// onRemove = ()=>{
//   this.setState({
//     actived: false
//   })
// }
//   render(){

//     const posts = [{
//       title: 'xpto',
//       description: 'foo'
//     },{
//       title: 'xpto',
//       description: 'foo'
//     }]
//     return(
//       <div>
//         <button onClick={this.onRemoe}>Remover component</button>
//         {this.state.actived&&(
//           <Twitter posts={posts} loading={this.state.loading}/>
//         )}
//       </div>
//     )
//   }
// }

// export default App