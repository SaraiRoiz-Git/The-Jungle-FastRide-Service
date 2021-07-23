import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import InputBar from '../../components/InputBar'
import Instractions from '../../components/Instractions'
import RidesGallery from '../../components/RidesGallery'
import Title from '../../components/Title'


function Homepage() {
  const state = useSelector(state => state)
useEffect(()=>console.log("test state ",state),[state])

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
width: 600px;

@media (max-width: 768px) {
  width: 80%;
}
@media (max-width: 480px) {
  width: 90%;
}
`