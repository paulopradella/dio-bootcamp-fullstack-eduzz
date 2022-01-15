import {useState}from "react";
import {Text,SafeAreaView,TouchableOpacity,StyleSheet} from 'react-native';


const App = ()=>{

    const [numero, setNumero] = useState()

    function handleNumero(){
        const novoNumero = Math.floor(Math.random()*1000)

        setNumero(novoNumero)
    }


    return (
       <>
        <SafeAreaView style={style.container}>
                <Text style={style.numero}>
                    {numero}
                </Text>
                    <TouchableOpacity onPress={handleNumero} style={style.botao} >
                        <Text style={style.textoBotao}>
                            Gerar números
                        </Text>
                    </TouchableOpacity>
            </SafeAreaView>
        </>
    )
};

const style = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numero:{
        fontSize: 38,
        color: 'white',
        fontWeight: 'bold'
    },
    botao:{
        backgroundColor: 'gray',
        width: 100,
        paddingHorizontal: 10,
        paddingVertical: 30,
        borderRadius: 50,
        fontSize: 30,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    
        
    
})

export default App;