import React from 'react'
import styled from 'styled-components'
import InstructionsCard from './InstructionsCard'


export default function Instractions() {
    return (
        <Container>
            <Card>
                <InstructionsCard
                    img={require("../img/ico-01.svg").default}
                    data='Enter your park ticket #PIN number, then select the desired ride while noting the ststed return time'
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
                    data='When the time comes, use the specialFastRider line to cut out a considerable wait time'
                />
            </Card>
        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
width: 50vw;
`
const Card = styled.div`
width: 26%;
font-size: 1.1rem;
`