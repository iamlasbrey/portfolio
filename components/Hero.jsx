import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaWhatsapp, FaInstagram} from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { useGlobalContext } from '../context'
import { motion } from 'framer-motion'
import Link from 'next/link'


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
    padding-top: 8em ;

    @media(max-width: 900px) {
        margin-bottom: 3em;
    }
`
const Elements = styled.div`
    width: 80%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;

    @media(max-width: 600px) {
        flex-direction: column-reverse;
        text-align: center ;
    }
`
const Socials = styled.ul`
    margin-right: 70px;
    font-size: 1.2rem;
    color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};

    @media(max-width: 600px) {
        display: flex;
        flex-direction: row;
        margin-right: 0px;
        align-items: center;
        margin-top: 20px;
    }
`
const Social = styled.li`
    margin-bottom: 20px ;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        transform: scale(1.5)
    }

    @media(max-width: 600px) {
        margin-right: 30px;

        &:nth-child(4) {
            margin-right: 0px;
        }
    }
`
const HeroHero = styled.div` `

const Greet = styled.p`
    font-size: 1.3rem;
    color: ${props => props.isDarkMode ? "white" : "#30383C"};
    margin-bottom: 5px;
    @media(max-width: 600px) {
        margin-bottom: 10px;
    }
`
const GreetIntro = styled.h1`
    font-size: clamp(2.5rem, 3vw, 3rem);
    color: #FB8B3B;
    margin-bottom: 5px;
    letter-spacing: 2px;

    @media(max-width: 600px) {
        margin-bottom: 10px;
    }
`
const GreetIntroTwo = styled.p`
    color: ${props => props.isDarkMode ? "white" : "#30383C"};
    font-weight: bold;
    font-size: clamp(1.2rem, 3vw, 1.4rem);
    margin-bottom: 10px;

    @media(max-width: 600px) {
        margin-bottom: 15px;
    }
`
const About = styled.p`
    color: ${props => props.isDarkMode ? "white" : "#30383C"};
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 28px;
    margin-bottom: 20px;
`
const Button = styled.button`
    color: white;
    background: #FB8B3B;
    border-radius: 50px;
    font-size: clamp(1.2rem, 3vw, 1.3rem);
    padding: 10px 30px;
    border: none;
    cursor: pointer;
`

const Right = styled.div`

    @media(max-width: 600px) {
    display: none;
    }
`
const ImageContainer = styled.div`
`

const Image = styled.img`
    height: 400px;
    width: 400px;
    object-fit: contain;

    @media(max-width: 900px) {
        width: 250px;
        height: 250px;
    }
`

const Linkout=styled.a`
    color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
`

const Hero = () => {
    const { isDarkMode } = useGlobalContext()
    
    return (
        <Container>
            <Elements>
                <Left>
                    <Socials isDarkMode={isDarkMode}>
                        <Social> <Linkout href='https://web.facebook.com/orangedigitalng' target="_blank" isDarkMode={isDarkMode}> <ImFacebook /></Linkout> </Social>
                        <Social> <Linkout href='https://wa.link/v09y67' target='_blank' isDarkMode={isDarkMode}><FaWhatsapp /></Linkout> </Social>
                        <Social> <Linkout href='https://www.instagram.com/uzoma.eth' target='_blank' isDarkMode={isDarkMode}><FaInstagram /> </Linkout> </Social>
                        <Social> <Linkout href='https://github.com/iamlasbrey' target='_blank' isDarkMode={isDarkMode}> <FaGithub /> </Linkout> </Social>
                    </Socials>
                    <HeroHero>
                        <Greet isDarkMode={isDarkMode}>Hello,</Greet>

                        <motion.h1 initial="hidden" animate="visible" variants={{
                            hidden:{
                                scale: .8,
                                opacity: 0
                            },
                            visible:{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    delay: .4
                                }
                            }
                        }}>
                            <GreetIntro> I AM UZOMA</GreetIntro>
                        </motion.h1>

                        <GreetIntroTwo isDarkMode={isDarkMode}>Freelancer and Web Developer</GreetIntroTwo>
                        <About isDarkMode={isDarkMode}>Have any questions? A web design, development or digital marketing enquiry? Please Contact me with the button below </About>
                        <Link href="#contact" passHref>
                            <Button>CONTACT ME</Button>
                        </Link>
                    </HeroHero>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image 
                            src='https://res.cloudinary.com/iamlasbrey/image/upload/v1646394323/uzoma.xyz/Mask_groupheadimage_rgfdz8.png'
                            alt='animate face'
                        />
                    </ImageContainer>
                </Right>
            </Elements>
        </Container>
        
    )
}

export default Hero