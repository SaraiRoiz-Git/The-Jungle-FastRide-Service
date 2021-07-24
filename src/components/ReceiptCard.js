import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function ReceiptCard() {
    const userOrder = useSelector((state) => state.userOrder)
    const time = moment(userOrder["return_time"]).format("HH:mm")

    return (
        <Container
            color={userOrder.ride.zone.color}
        >
            <TicketInfo>
                <H1>{userOrder.ride.name}</H1>
                <H2>{userOrder.ride.zone.name}</H2>
            </TicketInfo>

            <div>
                <Title>Return At</Title>
                <Data>{time}</Data>
            </div>
            <div>
                <Title>Use Access Code</Title>
                <Data>{userOrder.access_code}</Data>
            </div>

        </Container>
    )
}

const Container = styled.div`
background-color: #373737;
margin:3rem auto;
padding: 5px 10px 20px 10px;
border-top: 5px solid ${({ color }) => color} ;
display:flex;
flex-direction: column;
`
const TicketInfo = styled.div`
display:flex;
justify-content:space-between;
padding-bottom: 20px;
`

const H2 = styled.div`
font-size: 1rem;
`
const H1 = styled(H2)`
color: white; 
`
const Title = styled.div`
`
const Data = styled(H1)`
font-size: 1.8rem;
`