import React, { useState } from 'react'
import styled from 'styled-components'
import InputBar from '../../components/InputBar'
import Instractions from '../../components/Instractions'
import RidesGallery from '../../components/RidesGallery'
import Title from '../../components/Title'

function Homepage() { 

  return (
    <Container>
      <Title></Title>
      <Instractions />
      <InputBar />
      <RidesGallery />
    </Container>
  )
}
export default Homepage

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 50vw;
`