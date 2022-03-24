import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'


import { useGlobalContext } from '../context'

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: 'JetBrains Mono', monospace;
    background: ${props => props.isDarkMode && "#30383C"};
    transition: all .2s ease-in-out;
    position: relative ;
    height: 100%;
`
const Element = styled.section`
    padding-top: 8em;
    width: 90%;
    max-width: 900px;
    margin-bottom: 4em;
`
const ContentsHeader = styled.div`
        display: flex;
        align-items: center;
        margin-bottom: 10px;

    @media(max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const TheWorkTop = styled.div`
    display: flex;
    align-items: center;
`

const Works = styled.h3`
    color: #FB8B3B;
    margin-right: 5px;
`

const TheWorks = styled.h3`
    margin-right: 10px;
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};

    @media(max-width: 600px) {
        margin: 5px 0px;
    }

`
const Year = styled.div`
    background: #fb8b3b73;
    padding: 5px 10px;
    border-radius: 10px;
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};
`

const Description = styled.p`
    margin-bottom: 1em;
    font-size: clamp(.9rem, 2vw, 1rem);
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};
`
const ExpalinCont = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center !important;
`
const Explain = styled.h5`
    background: #fb8b3b73;
    padding: 5px 10px;
    border-radius: 10px;
    margin-right: 10px;
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};
    letter-spacing: 1px;
`
const Explainerlist = styled.ul`
    display: flex;
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};
`

const Explainer = styled.li`
    font-size: clamp(.9rem, 2vw, 1rem);
    margin-right: 10px;
`

const ExplaineLink = styled.p`
    font-size: clamp(.9rem, 2vw, 1rem);
    color: ${props => props.isDarkMode ? 'white' : "#30383C"};

    &:hover{
        text-decoration: underline;
        cursor: pointer;
        color: #FB8B3B;
    }
`
const ImageContainer = styled.div`
    margin-top: 1em;
`
const Image = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1em;
    border-radius: 10px;

    &:nth-child(2) {
        margin-bottom: 0em;
    }
`

const LinkOut = styled.span`
    margin-left: 10px;
    color: #FB8B3B;
`

const Work = (props) => {
    const { isDarkMode } = useGlobalContext()

    return (
    <Container isDarkMode={isDarkMode}>   
        <Header />
        <Element>

        <ContentsHeader>
                <TheWorkTop> <Works> Project </Works>  <AiOutlineDoubleRight style={{fontSize: '.8rem', marginRight: '10px', color:"#FB8B3B"}}/> </TheWorkTop>
                <TheWorks isDarkMode={isDarkMode}> {props.title}</TheWorks>
                <Year isDarkMode={isDarkMode}> {props.year} </Year>
            </ContentsHeader>

            <Description isDarkMode={isDarkMode}>{props.description} </Description>

            <ExpalinCont> 
                    <Explain isDarkMode={isDarkMode}>STACK</Explain> 
                    <Explainerlist isDarkMode={isDarkMode}>
                    {
                        props.stack.map((x)=> 
                            <Explainer key={x.name}> {x.name} </Explainer>
                            
                        )
                    } 
                    </Explainerlist> 
                    </ExpalinCont>

                    <ExpalinCont> <Explain isDarkMode={isDarkMode}>PRESENTATION</Explain> 
                    
                    <Link href={props.presentation} passHref>
                        <a target="_blank">
                            <ExplaineLink isDarkMode={isDarkMode}>{props.presentation} <LinkOut><FiExternalLink /></LinkOut> </ExplaineLink> 
                        </a>
                    </Link>
                    
                    </ExpalinCont>

                    <ImageContainer>
                        {
                            props.images.map((x)=> <Image src={x.link} key={x.id} alt={x.alt}/>
                            )
                        }
                    </ImageContainer>

        </Element>
        <Footer />
        </Container>
    )
}

export default Work



    