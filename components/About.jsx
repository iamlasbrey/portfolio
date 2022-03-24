import React from 'react'
import styled from 'styled-components'
import { FaHtml5, FaCss3Alt,FaNode, FaWordpress } from 'react-icons/fa'
import { SiJavascript, SiReact } from 'react-icons/si'
import { useGlobalContext } from '../context'


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
`
const Elememt = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 600px) {
        flex-direction: column
    }
`

const Left = styled.div`
    width: 35%;
    text-align: center ;

    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center ;
    }
`

const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: contain;
    
    @media(max-width: 600px) {
        margin-bottom: 2em ;
        width: 200px;
        height: 200px;
    }
`


const Right = styled.div`
    font-family: 'JetBrains Mono', monospace;
    width: 60%;

    @media(max-width: 600px) {
        width: 100%;
        text-align: center;
    }
`

const AboutHeader = styled.h3`
    color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
    margin-bottom: 5px;
    font-weight: 700;
`

const Divider = styled.div`
    height: 3px;
    width: 50px;
    background: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
    border-radius: 10px;
    margin-bottom: 15px;
    
    @media(max-width: 600px) {
        margin: 0 auto;
        margin-bottom: 15px;

    }
`
const AboutWrite = styled.p`
    line-height: 24px;
    color: ${props => props.isDarkMode ? "white" : "#FB8B3B"};
    margin-bottom: 15px;
    font-size: clamp(1rem, 2vw, 1.2rem);
`
const Skills = styled.ul`
    display: flex;
    color: ${props => props.isDarkMode ? "white" : "#30383C"};
    font-size: 2rem;
    
    @media(max-width: 600px) {
        justify-content: center;
    }
`
const Skill = styled.li`
    border: 2px solid #FB8B3B;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 10px;

    &:nth-child(6) {
        margin-right: 0px;
    }
`

const About = () => {
    const { isDarkMode } = useGlobalContext()
    return (
        <Container>
            <Elememt>
                <Left>
                    <Image 
                        src='https://res.cloudinary.com/iamlasbrey/image/upload/v1646428507/uzoma.xyz/icturehead_m8rc2u.png'
                        alt='side-head'
                    />
                </Left>

                <Right>
                    <AboutHeader isDarkMode={isDarkMode}>
                        ABOUT
                    </AboutHeader>
                    <Divider isDarkMode={isDarkMode}/>
                    <AboutWrite isDarkMode={isDarkMode}>
                        I am a creative web designer and web developer with 2 years experience in freelancing
                    </AboutWrite>
                    
                    <AboutHeader isDarkMode={isDarkMode}>
                        TECHNOLOGIES
                    </AboutHeader>
                        <Divider isDarkMode={isDarkMode}/>
                    <Skills isDarkMode={isDarkMode}>
                        <Skill> <FaHtml5 /> </Skill>
                        <Skill> <FaCss3Alt /> </Skill>
                        <Skill> <SiJavascript /> </Skill>
                        <Skill> <FaNode /> </Skill>
                        <Skill> <SiReact /> </Skill>
                        <Skill> <FaWordpress /> </Skill>
                    </Skills>
                </Right> 

            </Elememt>
        </Container>
    )
}

export default About