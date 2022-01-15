import React from "react";
import {Text,View,Image,StyleSheet, SafeAreaView, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import foto from './assets/imagens/canguru.jpg.webp';
import Card from "./components/Card";

const App = ()=>{

    function handldeSocial(rede_social){
        switch(rede_social){
            case 'github':
                Alert.alert('Titulo','#')
            break
            case 'linkedin':
                Alert.alert('Titulo','#')
            break
            case 'instagram':
                Alert.alert('Titulo','#')
            break
        }
    }
    return (
       <>
            <SafeAreaView style={style.page}>
                <ScrollView>
                <View style={style.conteiner_cabecalho}>
                    <Image source={foto} style={style.foto}/>
                    <Text style={style.nome}>Nome Completo</Text>
                    <Text style={style.funcao}>Função</Text>
                    <View style={style.redes_sociais}>
                        <TouchableOpacity onPress={()=>handldeSocial('github')}>
                            <Icon name='github' size={30} color='#E51414'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handldeSocial('linkedin')}>
                             <Icon name='linkedin' size={30} color='#E51414'/>    
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handldeSocial('instagram')}>
                            <Icon name='instagram' size={30} color='#E51414'/>
                        </TouchableOpacity>    
                        </View>
                        <Card titulo="Sobre">
                            <Text style={style.card_content_text}>Nome da empresa</Text>
                            <Text style={style.card_content_text}>Função:</Text>
                            <Text style={style.card_content_text}>Descrição</Text>
                            <Text style={style.card_content_text}>Tempo</Text>
                        </Card>
                        <Card titulo="Formação Acadêmica">
                            <Text style={style.card_content_text}>Intituição</Text>
                            <Text style={style.card_content_text}>curso:</Text>
                            <Text style={style.card_content_text}>Status:</Text>
                            <Text style={style.card_content_text}>Intituição</Text>
                            <Text style={style.card_content_text}>curso:</Text>
                            <Text style={style.card_content_text}>Status:</Text>
                        </Card>
                        <Card titulo="Cursos">
                            <Text style={style.card_content_text}>Curso</Text>
                            <Text style={style.card_content_text}>Descrição</Text>
                        </Card>
                        <Card titulo="Experiências Profissioais">
                            <Text style={style.card_content_text}>Nome da empresa</Text>
                            <Text style={style.card_content_text}>Função:</Text>
                            <Text style={style.card_content_text}>Descrição</Text>
                            <Text style={style.card_content_text}>Tempo</Text>
                        </Card>
                    </View>  
                </ScrollView>  
            </SafeAreaView>
        </>
    );
};

const style = StyleSheet.create({
    page:{
        backgroundColor: '#060606',
        flex: 1,
  
    },
    
    foto:{
       width: 250,
       height: 250,
       borderRadius: 125,
       borderWidth: 2,
       borderColor: '#E51414'
    },

    conteiner_cabecalho:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    nome:{
        color: '#E51414',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    funcao:{
        color: '#E51414',
        fontSize: 24,
        marginBottom: 10
    },
    redes_sociais:{
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '50%',
        marginTop: 20
    },
    card_content_text:{
        color: '#E51414',
        fontSize: 10,
        marginBottom: 10
    },
        
    
})

export default App;