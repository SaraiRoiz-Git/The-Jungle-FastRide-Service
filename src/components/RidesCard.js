import moment from 'moment';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as action from "../redux/actions/actions";

export default function RidesCard(props) {
    const data = props.obj;
    const id = data.id;

    const dispatch = useDispatch()
    const [chosen, setChoose] = useState(false);
    const [rideId, setRideId] = useState(id)

    const time = moment(data.retuidme).format("HH:mm")
    const chosenId = useSelector(state => state.id)

    // useEffect(() => {
    //     console.log("chosenId", chosenId)
    //     if (id !== chosenId) {
    //         setChoose(false)
    //         setRideId(0)
    //     }
    // }, [chosenId,id])

    const updateCosenRide = () => {
        setChoose(!chosen)
        chosen ? setRideId(id) : setRideId(0);
        dispatch(action.onRideChoose(rideId))

    }

    const backgroundColor = () => chosen ? data.zone.color : '#373737';

    return (
        <Container
            value={data.id}
            color={data.zone.color}
            onClick={updateCosenRide}
            backgroundColor={backgroundColor()}
        >

            <H2>{data.zone.name}</H2>
            <H1>{data.name}</H1>
            <TicketInfo>
                <Info>
                    <img src={require('../img/ico-g-03.svg').default} alt="" />
                    <div>{time}</div>
                </Info>
                <Info >
                    <img src={require('../img/ico-g-01.svg').default} alt="" />
                    <div>{data.remaining_tickets}</div>
                </Info>

            </TicketInfo>


        </Container>
    )
}

const Container = styled.div`
background-color:${({ backgroundColor }) => backgroundColor};
margin:5px 0;
padding: 5px 10px;
border-top: 4px solid ${({ color }) => color} ;
width: 12vw;
height: 12vw;
display:flex;
flex-direction: column;
justify-content:space-between;
`
const TicketInfo = styled.div`
display:flex;
justify-content:space-between;
`
const Info = styled.div`
display:flex;
align-items:center;
hight:0.8rem;
font-size: 0.7rem;
padding-bottom: 5px;
`
const H2 = styled.div`
align-self:flex-end;
font-size: 0.9rem;
`
const H1 = styled.div`
color: white; 
font-size: 1.3rem;
`