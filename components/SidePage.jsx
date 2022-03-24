import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalContext } from '../context'

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
padding-top: 40px;
  z-index: 8;
  position: absolute;
  right: 0;
  width: 70%;
  height: 100vh;

  @media only screen and (min-width: 500px) {
        display: none;
    }
    transform:  ${props => props.visible ? 'translateX(0%)': 'translateX(100%)' };
    transition: all .3s ease-in-out;
`
const Element = styled.div``

const ImageConc = styled.div`
    text-align: right;
    padding-right: 20px; 
    margin-bottom: 50px;
    cursor: pointer;
    color: #881a1a;
    font-size: 1.5rem;
`

const Links = styled.div`
    
`

const Link = styled.div`
    color: #30383C;
    font-size: 16px;
    letter-spacing: 1px;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 1.5em;
    padding: 20px 0px 20px 20px;
`

const Lister = styled.a`
    cursor: pointer;
`

const SidePage = () => {
    const { close, visible } = useGlobalContext()
  return (
    <Container visible={visible}>
      <Element>
          <ImageConc onClick={close}>
            <AiOutlineClose />
        </ImageConc>

        <Links>
            <Link onClick={close}> <Lister href="#services">Services</Lister></Link>
            <Link onClick={close}><Lister href="#portfolio">Portfolio</Lister></Link>
            <Link onClick={close}><Lister href="#contact">Contact</Lister></Link>
        </Links>

      </Element>
    </Container>
  );
};

export default SidePage;
