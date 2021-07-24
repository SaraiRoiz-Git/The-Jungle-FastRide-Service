import React from 'react'
import RidesCard from './RidesCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as action from "../redux/actions/actions";
import { useEffect } from 'react';
import { getFastRiderRides } from '../axios';

export default function RidesGallery(props) {
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const callbackSucss = response => {
        if (response) {
            dispatch(action.onEnter(response));
        }
    }

    const callbackFailur = () => {
        setError("Email is alredy exit");
    };

    useEffect(() => {
        getFastRiderRides(callbackSucss, callbackFailur)
    }, [])

    let list = useSelector(state => state.availableTickets)

    const cardsList = list ? list.map(currCard => {
        return (
            <RidesCard
                obj={currCard}
            />
        )
    }) : null

    return (
        <Gallery ref={props.galleryRef}>
            {cardsList}
        </Gallery>
    )
}

const Gallery = styled.div`
display:flex;
justify-content:space-between;
flex-wrap: wrap;
`