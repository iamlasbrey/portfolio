import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Link from 'next/link'
import Aos from 'aos'
import "aos/dist/aos.css"
import React from 'react'

//https://docs.google.com/forms/d/e/1FAIpQLSc8eqpDD6jTSWhziL32UBbwmMgjKsjrswJag2lUGzvy9pYqaw/viewform?usp=sf_link

const Container = styled.div`
    width: 100%;
    background-color:  ${props => props.isDarkMode ? "white" : "#30383C"};
    display: flex;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
`
const Elements = styled.div`
    width: 90%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;

    @media(max-width: 770px) {
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 75%;

    @media(max-width: 770px) {
        width: 100%;
        text-align: center;
    }
`
const Hire = styled.h2`
    text-transform: capitalize;
    color:  ${props => props.isDarkMode ?  "#30383C" : "#FB8B3B"};
    margin-bottom: 10px;
    font-size: clamp(22px, 2vw, 24px);
`
const HireWrite = styled.p`
    line-height: 24px;
    margin-bottom: 10px;
    color:  ${props => props.isDarkMode ?  "#FB8B3B" : "white"};
`

const Right = styled.div`
    width: 20%;

    @media(max-width: 770px) {
        width: 100%;
        text-align: center;
    }
`
const HireButton = styled.button`
    color: white;
    border-radius: 50px;
    font-size: clamp(1.2rem, 3vw, 1.3rem);
    padding: 9px 27px;
    border: none;
    cursor: pointer;
    background:  ${props => props.isDarkMode ?  "#30383C" : "#FB8B3B"};
`

const Linker = styled.a``

const HiremeSub = () => {
    const { isDarkMode } = useGlobalContext()

    React.useEffect(()=>{
        Aos.init({
            delay: 1000
        })
    },[]) 


    return (
        <Container isDarkMode={isDarkMode} className='portfolio' id='portfolio' data-aos="fade-right ">
            <Elements>
                <Left>
                    <Hire isDarkMode={isDarkMode}>hire me for your amazing project</Hire>
                    <HireWrite isDarkMode={isDarkMode}> Your next website? Want to take your business to the next level? Upgrade your old website to match modern standards? Please click on the button lets have a chat</HireWrite>
                </Left>
                <Right>
                    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSc8eqpDD6jTSWhziL32UBbwmMgjKsjrswJag2lUGzvy9pYqaw/viewform?usp=sf_link' passHref>
                        <Linker target='_blank'>
                            <HireButton HireWrite isDarkMode={isDarkMode}>
                                Hire Me
                            </HireButton>
                    </Linker>
                    </Link>
                </Right>
            </Elements>
        </Container>
    )
}

export default HiremeSub