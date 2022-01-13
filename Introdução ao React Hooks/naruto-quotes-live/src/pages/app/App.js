import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import { Quotes } from '../../components/quotes/Quotes';
import narutoImg from '../../images/naruto.png'
import{getQuote} from '../../services'
import jutsoSound from '../../sounds/src_sounds_jutso.mp3'

const audio = new Audio(jutsoSound)

export function App(){
    const isMounted = useRef (true);

    const [quoteState, setQuoteState] = useState({
        quote: 'Loading quote...', 
        speaker:'Loading Speaker...'
    });

    const onUpdate =async()=>{
        const quote=await getQuote();
        if(isMounted.current){
            audio.play();
            setQuoteState(quote)
        }
    };
    useEffect(()=>{
        onUpdate();
        return ()=>{
           isMounted.current=false; 
        }
    },[])
    return (
        <Content>
            <Quotes quote={quoteState.quote} 
                    speaker={quoteState.speaker} 
                    //{...quoteState}
                    onUpdate={onUpdate}/>
            <NarutoImg src={narutoImg} alt="Naruto wwith a kunai"/>
        </Content>
    )
}

const Content = styled.div`
height: 100vh;
padding: 0 50px;
display: flex;
justify-content: center;
align-items:center;
`;

const NarutoImg = styled.img`
max-width: 50vw;
align-self: flex-end;
`;