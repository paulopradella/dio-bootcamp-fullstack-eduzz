const divStyle = {
    coloro: 'blue',
    backgroundImage: 'url('+imgurl+')'
};
function HellWolrdComponent(){
    return <div style={divStyle}>Hello World!</div>
}

function App () {
    return(
        <Helloworld style ={{marginTop: '10px'}}/>
    )
}