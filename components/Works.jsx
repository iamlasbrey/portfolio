import styled from 'styled-components'
import { useGlobalContext } from '../context'
import Link from 'next/link'

const Imageframe = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 10px;
`

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 5px;
  cursor: pointer;
  -webkit-transition: all 2s ease;
  -moz-transition: all 2s ease;
  -ms-transition: all 2s ease;
  transition: all 2s ease;

  &:hover {
    width: 150%;
    height: 200px;
    border-radius: 10px;
    }
`
const Headerthree = styled.h3`
  color:#FB8B3B;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 800;
`
const Headertwo = styled.p`
  text-align: center;
  color: ${props => props.isDarkMode ? "white" : "#30383C"};
  line-height: 24px;
  font-size: clamp(.9rem, 2vw, 1rem);
`

const Works = ({detail}) => {
  const { isDarkMode } = useGlobalContext()


  return (
          <Link href="/works/[id]" as={`/works/${detail.id}` }>
            <a>
                <Imageframe>
                <Image 
                  src={detail.imglink}
                  alt='my-works'
                />
                </Imageframe>
                <Headerthree>{detail.title}</Headerthree>
                  <Headertwo isDarkMode={isDarkMode}>
                      {detail.description}
                  </Headertwo>
                </a>
          </Link>
  )
}


export default Works