import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import InputBar from '../../components/InputBar'
import Instractions from '../../components/Instractions'
import RidesGallery from '../../components/RidesGallery'
import Title from '../../components/Title'

export default function Homepage() {
  let gallery = useRef("")
  
  const [displayButton, setDisplayButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      var position = gallery.current.getBoundingClientRect();
      if ((position.top + 200) < (window.innerHeight) && position.bottom >= 0) {
        setDisplayButton(true)
      } else {
        setDisplayButton(false)
      }

    })
  }, []);

  return (
    <Container>
      <Title></Title>
      <Instractions />
      <InputBar display={displayButton} />
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