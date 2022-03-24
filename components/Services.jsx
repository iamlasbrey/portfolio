import React,{useEffect} from 'react'
import styled from 'styled-components'
import { MdDesignServices } from 'react-icons/md'
import { IoMdConstruct } from 'react-icons/io'
import { FaGlobe } from 'react-icons/fa'
import { AiFillApple } from 'react-icons/ai'

const Container = styled.div`
    background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1646489855/uzoma.xyz/Group_3desktop_1_u34nvx.png');
    background-color: #30383C;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-top: 4px solid #FB8B3B;
    display: flex;
    justify-content: center;
    padding: 30px 0px;
    margin-bottom: 2em;

    @media(max-width: 600px) {
        background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1646514510/uzoma.xyz/iPhone_13_Pro_Max_-_2mobile_yo1qgk.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`
const Elements = styled.div`
    width: 90%;
    max-width: 1000px;
`
const Header = styled.h2`
    text-align: center;
    color: white;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 10px ;
`
const Divider = styled.div`
    height: 3px;
    width: 50px;
    background:#FB8B3B;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 15px;
`

const Grids = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
    font-family: 'JetBrains Mono', monospace;
`

const Grid = styled.div`
    background: #30383c5c;
    backdrop-filter: blur(10px);
    border-bottom: 3px solid #FB8B3B;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 20px 10px 20px 10px;
    color: #FB8B3B;
    font-size: 1.5rem;
`

const Header2 = styled.h3` 
    margin: 10px 0px;
    font-size: 1.3rem;
`

const Header3 = styled.p`
    color: white;
    line-height: 24px;
    font-size: 1rem;
`

const Services = () => {

    return (
        <Container className='services' id='services'>
            <Elements>
                <Header> My Services </Header>
                <Divider />

                <Grids>
                    <Grid>
                        <MdDesignServices />
                        <Header2>Web Design</Header2>
                        <Header3>I can design the overall layout and aesthetic for your websites</Header3>
                    </Grid>
                    <Grid>
                        <IoMdConstruct />
                        <Header2> Web Development </Header2>
                        <Header3>I can code your designs to web applications using web development tools</Header3>
                    </Grid>
                    <Grid>
                        <FaGlobe />
                        <Header2> Digital Marketing </Header2>
                        <Header3>I can use digital channels to reach your customers,build brand awareness, and promote your products and services </Header3>
                    </Grid>
                    <Grid>
                        <AiFillApple />
                        <Header2> App Development </Header2>
                        <Header3>Create amazing phone applications for your business </Header3>
                    </Grid>
                </Grids>

            </Elements>
        </Container>
    )
}

export default Services