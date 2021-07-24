import React from 'react'
import styled from 'styled-components'
import InstructionsCard from './InstructionsCard'

export default function Instractions() {
    return (
        <Container>
            <Card>
                <InstructionsCard
                    img={require("../img/ico-01.svg").default}
                    data='Enter your park ticket #PIN number, then select the desired ride while noting the stated return time'
                />
            </Card>
            <Card>
                <InstructionsCard
                    img={require("../img/ico-02.svg").default}
                    data="Press 'submit' to confirm and retrive your access code"
                />
            </Card>
            <Card>
                <InstructionsCard
                    img={require("../img/ico-03.svg").default}
                    data='When the time comes, use the special FastRider line to cut out a considerable wait time'
                />
            </Card>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    flex-direction: column;
    align-items:center;
}
`
const Card = styled.div`
width: 30%;
font-size: 1.1rem;
@media (max-width: 768px) {
    width: 80%;
  }
`