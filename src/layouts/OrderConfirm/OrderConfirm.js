import React from 'react'
import styled from 'styled-components'
import InstructionsCard from '../../components/InstructionsCard'
import ReceiptCard from '../../components/ReceiptCard'
import Title from '../../components/Title'

export default function OrderConfirm() {
    return (
        <Container>
            <Title />
            <AnswerContainer>
                <InstructionsCard
                    img={require("../../img/ico-04.svg").default}
                    data='Thank you for using The Jungle MT FastRider ticket system = access code is now redy'
                />
                <ReceiptCard />
            </AnswerContainer>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const AnswerContainer = styled.div`
width: 30vw;
@media (max-width: 768px) {
    width: 80%;
}
  @media (max-width: 480px) {
    width: 90%;
}
  
`


