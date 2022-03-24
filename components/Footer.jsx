import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
    position: fixed;
    bottom: 0;
`
const Element = styled.div`
    width: 90%;
    max-width: 1000px;
    text-align: center;
    padding: 10px 0px;
`
const Span = styled.span`
    font-size: .9rem;
    font-family: 'JetBrains Mono', monospace;
    color: white;
`


const Footer = () => {
    const { isDarkMode } = useGlobalContext()
    return (
        <Container isDarkMode={isDarkMode}>
            <Element>
                {<Span>&#169;</Span>} <Span> 2022 Uzoma kenkwo. All Rights Reversed  </Span>
            </Element>
        </Container>
    )
}

export default Footer