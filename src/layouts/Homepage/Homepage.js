import React from 'react'
import styled from 'styled-components'
import InputBar from '../../components/InputBar'
import Instractions from '../../components/Instractions'
import RidesGallery from '../../components/RidesGallery'
import Title from '../../components/Title'
import { useEffect } from 'react';
import { isPInValid } from '../../utilities'
function Homepage() {

    // useEffect(() => {
    //     const test = isPInValid("JN-8080-8080-QQ")
    // },[])
    return (
        <Container>
            <Title></Title>
            <Instractions></Instractions>
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