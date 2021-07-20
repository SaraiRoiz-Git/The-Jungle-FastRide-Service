import React from 'react'
import styled from 'styled-components'
import InstructionsCard from './InstructionsCard'


export default function Instractions() {
    return (
        <Container>

            <InstructionsCard
                img={require("../img/ico-01.svg").default}
                data='Enter your park ticket #PIN number, then select the desired ride while noting ststed return time'
            />
            <InstructionsCard
                img={require("../img/ico-02.svg").default}
                data="Press 'submit' to confirm and retrive your access code" />
            <InstructionsCard
                img={require("../img/ico-03.svg").default}
                data='When the time comes, use the specialFastRider line to cut a considerable wait time'
            />

        </Container>
    )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
width: 50vw;
`
