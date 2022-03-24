import Header from '../components/Header'
import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Workslists from '../components/Workslists'
import HiremeSub from '../components/HiremeSub'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { MongoClient } from 'mongodb'
import { useGlobalContext } from '../context'
import SidePage from '../components/SidePage'
import Head from 'next/head'


const Container = styled.div`
  background: ${props => props.isDarkMode && "#30383C"};
  transition: all .2s ease-in-out;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`

function Home(props) {
  const { isDarkMode } = useGlobalContext()

  return (
      <Container isDarkMode={isDarkMode}>

    <Head>
          <title>Kenkwo Uzoma Portfoilio Page</title>
          <meta name="keywords" content="web development, programming, portfolio"  />
          <meta name='description' content="uzoma kenkwo portfoilio page"  />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet='utf-8' />
    </Head>

          <SidePage />
          <Header />
          <Hero />
          <About />
          <Services />
          <Workslists works={props.works} />
          <HiremeSub />
          <Contact />
          <Footer />
          </Container>
  )
}

export const  getStaticProps=async()=>{
  const client = await MongoClient.connect(process.env.URI)
  const db = client.db()
  const MyWorks = db.collection('works')
  const works = await MyWorks.find().toArray()
  client.close()
  return{
    props:{
      works: works.map(info=>({
        title: info.name,
        description: info.description,
        images: info.images,
        presentation: info.presentation,
        id: info._id.toString(),
        stack: info.stack,
        year: info.year,
        imglink: info.imglink
      }))
    }
  }
}

export default Home