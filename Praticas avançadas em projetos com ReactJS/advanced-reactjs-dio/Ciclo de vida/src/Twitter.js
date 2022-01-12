import React, {useEffect,useState, memo} from 'react'

// shouldComponentUpdate=(nextProps, nextState)=>{
    //     return state.tweet !== nextState.tweet ||nextProps.loading !== props.loading
    // }Este fica dentro da class
const areaEqual = (prevProps,nextProps)=>{
    return prevProps.loading === nextProps.loading
}

//class Twitter extends Component{
function Twitter (props){
      // state={
    //     tweet: 'title'
    // }
    const{loading} = props
    const[tweet,setTweet] = useState('title')
//     componentDidMount(){
//         const{posts} = this.props
//         console.log('componentDidMount', posts);
// }

    useEffect(()=>{
        const{posts, loading} = props
        console.log('componentDidMount', posts);
        console.log('componentDidMount', loading);
    },[])
    // componentDidUpdate=(prevProps)=>{
    //     const{loading}=props
    //     if(props.loading!== prevProps.loading){
    //         console.log('componentDidUpdate: loading', loading);
 
    //     }
    // }
    useEffect(()=>{
        console.log('componentDidUpdate: loading', loading);
    },[loading])
    

    // componentWillUnmount=()=>{
    //     console.log('componentWillUnmount: fui removido :(');
    // }
    useEffect(()=>{
        return()=>{
            console.log('componentWillUnmount: fui removido :(');
        }
    })
    
    const handleTweet=()=>{
        setTweet('Tweet atualizado')
    }
    console.log('Tweet atualizado'. teet);
    
    return(
        <div>
            <button onClick={handleTweet}>re-render</button>
            tests
        </div>
    )

}


export default (Twitter, areaEqual)