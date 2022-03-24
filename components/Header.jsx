import styled from "styled-components"
import { FaSun, FaMoon, FaHamburger} from 'react-icons/fa'
import { useGlobalContext } from '../context'
import Link  from 'next/link'


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
    border-bottom: 1px solid #30383c36;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    margin-bottom: 3em;
    position: fixed;
    z-index: 5;
`
const Elements = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
`
const Right = styled.div``

const RightContent = styled.div`
    display: flex;
    align-items: center ;
    font-family: 'JetBrains Mono', monospace;
    cursor: pointer;
`
const Image = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
    margin-right: 5px;
`
const Name = styled.p`
    font-weight: 700;
    color: #FB8B3B;
`
const Left = styled.div`
    display: flex;
    align-items: center;
`
const Lists = styled.ul`
    display: flex;
    align-items: center;
    font-family: 'JetBrains Mono', monospace;
    color:  ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
`

const List = styled.li`
    margin-left: 20px;
    cursor: pointer;
    padding: 10px;
    transition: all .3s ease-in-out;

    @media(max-width: 600px) {
    display: none;
    }

    &:hover {
        border-bottom: 2px solid #FB8B3B;
    }
`

const ChangeMode = styled.div`
    height: 35px;
    width: 35px;
    border:  2px solid #FB8B3B;
    color: #337191;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50px;
    margin-left: 50px;
    cursor: pointer;
`

const Hamburger = styled.div`
    display: none;
    font-size: 1.5rem;
    color:  ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
    cursor: pointer;

    @media(max-width: 600px) {
    display: inline-block
    }
`
const Lister = styled.a`
    color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
`

const Header = () => {
    const { isDarkMode, toggleDark, close } = useGlobalContext()

    console.log(close)

    

    return (
        <Container>
            <Elements>
                <Right>
                    <Link href="/" passHref>
                    <RightContent>
                        <Image 
                            src="https://res.cloudinary.com/iamlasbrey/image/upload/v1646394323/uzoma.xyz/Mask_groupheadimage_rgfdz8.png"
                            alt="logo-head"
                        />
                        <Name>
                            UZOMA
                        </Name>
                    </RightContent>
                    </Link>
                </Right>

                <Left>
                    <Lists isDarkMode={isDarkMode}>
                        <List> <Lister isDarkMode={isDarkMode} href="#services">Services</Lister></List>
                        <List><Lister isDarkMode={isDarkMode} href="#portfolio">Portfolio</Lister></List>
                        <List><Lister isDarkMode={isDarkMode} href="#contact">Contact</Lister></List>
                    </Lists>

                    <Hamburger isDarkMode={isDarkMode} onClick={close}>
                        <FaHamburger />
                    </Hamburger>

                            <ChangeMode onClick={toggleDark}>
                                {isDarkMode ? <FaSun style={{ color: "#FB8B3B"}} /> : <FaMoon /> }
                            </ChangeMode>
                </Left>
            </Elements>
        </Container>
    )
}

export default Header