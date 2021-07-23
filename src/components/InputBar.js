import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as utils from "../utilities"
import * as action from "../redux/actions/actions";
import { postFastRiderTikets } from '../axios';
import { useHistory } from "react-router-dom";
import Modal from './Modal';

export default function InputBar() {

    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const [modal, setModal] = useState(false)
    const [errors, setErrors] = useState("")
    const id = useSelector(state => state.id)
    const history = useHistory();


    const callbackSucss = response => {
        if (response) {
            console.log("callbackSucss", response.data)
            dispatch(action.onSubmit(response.data));
            history.push("/confirmation")
        }
    }

    const callbackFailur = (response) => {
        console.log("setErrors", response.response.data.message)

        dispatch(action.onSubmit(""));
        setErrors(response.response.data.message);
        console.log("setErrors2", errors)
        setModal(true);
    };

    const onPinSubmit = (e) => {
        if (utils.isPInValid(inputValue)) {
            postFastRiderTikets(callbackSucss, callbackFailur, inputValue, id)


        } else {
            console.log("worng code")
            setModal(true);
            setErrors('Incorrect pin number ')
        }

    }
    return (
        <div>
            <Container>
                <Input type="text" placeholder="#PIN" name="pin" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button type="button" onClick={() => onPinSubmit()}>SUBMIT</Button>

            </Container>
            <Modal closeModal={() => setModal(false)} message={errors} display={modal} />
        </div>

    )
}

const Container = styled.div`
    display:flex;
    border-top:1px solid grey;
    margin: 2rem 0;

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

      }
`