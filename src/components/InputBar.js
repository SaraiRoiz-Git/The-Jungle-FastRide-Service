import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as utils from "../utilities"
import * as action from "../redux/actions/actions";
import { postFastRiderTikets } from '../axios';
import { useHistory } from "react-router-dom";
import Modal from './Modal';

export default function InputBar(props) {

    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const [modal, setModal] = useState(false)
    const [errors, setErrors] = useState("")

    const id = useSelector(state => state.id)
    const history = useHistory();

    const callbackSucss = response => {
        if (response) {
            dispatch(action.onSubmit(response.data));
            history.push("/confirmation")
        }
    }

    const callbackFailur = (response) => {
        dispatch(action.onSubmit(""));
        setErrors(response.response.data.message);
        setModal(true);
    };

    const onPinSubmit = (e) => {
        if (!utils.isTimeValid()) {
            setModal(true);
            setErrors("The Jungle FastRider is now close!  The opening hours is between 9:00 to 19:00 ")
        }
        else if (id === 0) {
            setModal(true);
            setErrors("You need to choose a ride")
        }
        else if (!utils.isPInValid(inputValue)) {
            setModal(true);
            setErrors('Incorrect pin number')
        }
        else {
            postFastRiderTikets(callbackSucss, callbackFailur, inputValue, id)
        }

    }

    return (

        <Container>
            <Input className="bo" type="text" placeholder="#PIN" name="pin" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button display={props.display} className="botton" type="button" onClick={() => onPinSubmit()}>SUBMIT</Button>
            <Modal closeModal={() => setModal(false)} message={errors} display={modal} />
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    border-top:1px solid grey;
    margin: 2rem 0;
    position: relative;
    @media (max-width: 480px) {
        display:block;
      }
`
const Input = styled.input`
    text-align: left;
    color:black;
    padding 8px;
    width: 77%;
    @media (max-width: 480px) {
        width: 100%;
      }
`
const Button = styled.button`
    background-color: #4c4c4b;
    width: 23%;
    color:white;
    border:none;
    &:hover{
        background-color: #606060; 
    }

    @media (max-width: 480px) {
        border-top:1px solid grey;
        width: 100%;
        padding:1rem;
        position:fixed;
        z-index:99;
        left:0;
        right:0;
        bottom:0;
        font-size:1.1rem;
        display:${({ display }) => display ? "bolck" : "none"};
      }
`