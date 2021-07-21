import React from 'react'
import styled from 'styled-components'
import Title from '../../components/Title'
import InstractionsCard from '../components/InstructionsCard'

export default function OrderConfirm() {
    return (
        <Container>
            <Title></Title>
            <InstractionsCard
                img={require("../img/ico-04.svg").default}
                data='Thank you for using The Jungle MT FastRider ticket system = access code is now redy'
            />
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`