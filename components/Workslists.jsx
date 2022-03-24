import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Works from './Works'


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-family: 'JetBrains Mono', monospace;
`

const Elements = styled.div`
    width: 90%;
    max-width: 1000px;
    padding-bottom: 1.5em; 
`
const Header = styled.h2`
    text-align: center;
    color: ${props => props.isDarkMode ? "#FB8B3B" : "#30383C"};
    margin-bottom: 10px ;
`
const Divider = styled.div`
    height: 3px;
    width: 50px;
    background:#FB8B3B;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 20px;
`
const Grids = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
`
const Grid = styled.div`
    cursor: pointer;
`

const Workslists = ({works}) => {
    const { isDarkMode } = useGlobalContext()

    return (
        <Container className='portfolio' id='portfolio'>
            <Elements isDarkMode={isDarkMode}>
            <Header isDarkMode={isDarkMode}> My Works</Header>
            <Divider />

            <Grids>
                {
                    works.map((detail)=>(
                        <Grid key={detail.id}> <Works detail={detail} /> </Grid>
                    ))
                }
            </Grids>
            </Elements>
        </Container>
    )
}

export default Workslists