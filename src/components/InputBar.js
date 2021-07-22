import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import * as utils from "../utilities"
import * as action from "../redux/actions/actions";
import { postFastRiderTikets } from '../axios';
import { useHistory } from "react-router-dom";

export default function InputBar() {
   
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")
    const [errors, setErrors] = useState("")
    const id = useSelector(state => state.id)
    const history = useHistory();


    const callbackSucss = response => {
        if (response) {
            dispatch(action.onSubmit(response.data));
        }
    }

    const callbackFailur = (response) => {
        dispatch(action.onError(response.data))
        setErrors("Could not order fast ride");
    };

    const onPinSubmit = (e) => {
        if (utils.isPInValid(inputValue) ) {
            postFastRiderTikets(callbackSucss, callbackFailur, inputValue, id)
            history.push("/confirmation")

        } else {
            setErrors('Incorrect pin number ')
        }

    }
    return (
        <Container>
            <Input type="text" placeholder="#PIN" name="pin" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Button type="button" onClick={() => onPinSubmit()}>SUBMIT</Button>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    border-top:1px solid grey;
    margin: 2rem 0;
`
const Input = styled.input`
    text-align: left;
    color:black;
    padding 8px;
    width: 77%;
`
const Button = styled.button`
    background-color: #4c4c4b;
    width: 23%;
    color:white;
    border:none;

    &:hover{
        background-color: #606060; 
    }
`