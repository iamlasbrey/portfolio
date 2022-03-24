import styled from 'styled-components'
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Container = styled.div`
    background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1646489855/uzoma.xyz/Group_3desktop_1_u34nvx.png');
    background-color: #30383C;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top: 4px solid #FB8B3B;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 20px 0px;
    font-family: 'JetBrains Mono', monospace;
    padding-bottom: 4em;

    @media(max-width: 600px) {
        background: url('https://res.cloudinary.com/iamlasbrey/image/upload/v1646514510/uzoma.xyz/iPhone_13_Pro_Max_-_2mobile_yo1qgk.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        }
`
const Elements = styled.div`
    width: 90%;
    max-width: 700px;
`

const Header = styled.div``

const Title = styled.h2`
    text-align: center;
    color: white;
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
const TitleContent = styled.p`
    text-align: center;
    color: white;
    margin-bottom: 20px;
`

const MyForms = styled.div`
    background: #30383c5c;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    padding: 20px 0px;
`
const MyFormDiv = styled.form`
    width: 90%;
` 


const MyInput = styled.input`
    width: 100%;
    background: transparent;
    outline: none;
    border: transparent;
    border-bottom: 2px solid #ffffff52;
    margin-bottom: 20px;
    font-size: 1rem;
    color: white;
    padding: 10px 5px;
`
const Label = styled.label`
    margin-right: 10px;
    font-size: clamp(.9rem, 2vw, 1rem);
    color: #FB8B3B;
`
const TextArea=styled.textarea`
    width: 70%;
    height: 150px;
    resize: none;
    background: transparent;
    font-size: 1rem;
    color: white;
    padding: 10px 5px;
    outline: none;
    border: 2px solid #ffffff52;
    margin-bottom: 20px;
`

const SubmitButton = styled.button`
    color: white;
    border-radius: 50px;
    font-size: 1rem;
    padding: 9px 27px;
    border: none;
    cursor: pointer;
    background:  #FB8B3B;
`

const Contact=()=>{

    const [name, setname]= React.useState('')
    const [email, setemail]= React.useState('')
    const [subject, setsubject]= React.useState('')
    const [message, setmessage]= React.useState('')
    const [phone, setphone]= React.useState('')

    React.useEffect(()=>{
        Aos.init({
            duration: 1000
        })
    },[])

    return(
        <Container data-aos="zoom-in" className='contact' id='contact'>
            <Elements>
                <Header>
                    <Title>Contact</Title>
                    <Divider />
                    <TitleContent>We would love to hear from you, drop us a message and we will get back to  you ASAP</TitleContent>
                </Header>

                <MyForms>
                    <MyFormDiv action="https://formsubmit.co/eb28fe02b51fdf73df82ec1e93d6d339 " method="POST">
                            <Label>Full Name</Label> <MyInput type="text" id='name' name='Full Name' required onChange={(e)=>setname(e.target.value)}/>
                            <Label>E-Mail</Label> <MyInput type="email" id='email' name='Email' required onChange={(e)=>setemail(e.target.value)}/>
                            <Label>Phone Number</Label> <MyInput type="tel" id='phone' name='Phone' required onChange={(e)=>setphone(e.target.value)} />
                            <Label>Subject</Label> <MyInput type="text" id='subject' name='Subject' required onChange={(e)=>setsubject(e.target.value)} />
                            <TextArea id='message' name="Message" type='text' required onChange={(e)=>setmessage(e.target.value)} /> <br />
                            <SubmitButton type='submit'> SUBMIT </SubmitButton>
                    </MyFormDiv>
                </MyForms>

            </Elements>
        </Container>
    )
}

export default Contact