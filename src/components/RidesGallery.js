import React from 'react'
import { list } from '../tmp';
import RidesCard from './RidesCard';
import styled from 'styled-components';

export default function RidesGallery() {

    const listA = list;
    const cardsList = list.map(currCard => {
        return (
            <RidesCard
                obj={currCard}
            />
        )
    });
    return (
        <Container>
            {cardsList}
        </Container>
    )
}

const Container = styled.div`
display:flex;
justify-content:space-between;
flex-wrap: wrap;
`