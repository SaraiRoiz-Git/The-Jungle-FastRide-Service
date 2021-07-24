import React from 'react'
import RidesCard from './RidesCard';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as action from "../redux/actions/actions";
import { useEffect } from 'react';
import { getFastRiderRides } from '../axios';
import Modal from './Modal';

export default function RidesGallery(props) {
    const dispatch = useDispatch()
    const [errors, setError] = useState('')
    const [modal, setModal] = useState(false)

    const callbackSucss = response => {
        if (response) {
            dispatch(action.onEnter(response));
        }
    }

    const callbackFailur = () => {
        setError("Problem with server");
        setModal(true);
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
            <Modal closeModal={() => setModal(false)} message={errors} display={modal} />
        </Gallery>
    )
}

const Gallery = styled.div`
display:flex;
justify-content:space-between;
flex-wrap: wrap;
margin-bottom:100px;
`