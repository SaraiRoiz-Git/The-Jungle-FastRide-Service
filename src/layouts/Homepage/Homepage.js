import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import InputBar from '../../components/InputBar'
import Instractions from '../../components/Instractions'
import RidesGallery from '../../components/RidesGallery'
import Title from '../../components/Title'


export default function Homepage() {

  const state = useSelector(state => state)
  let gallery = useRef(null)
  useEffect(() => console.log("test state ", state), [state])
  const [displayBotton, setDisplayBotton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {

      var position = gallery.current.getBoundingClientRect();


      // checking for partial visibility
      if ((position.top +200) < (window.innerHeight) && position.bottom >= 0) {
      setDisplayBotton(true)
      }
    })
    }, []);

  return (
    <Container>
      <Title></Title>
      <Instractions />
      <InputBar display={displayBotton} />
      <RidesGallery galleryRef={gallery} />
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 600px;

@media (max-width: 768px) {
  width: 80%;
}
@media (max-width: 480px) {
  width: 90%;
}
`