import React, { useState } from 'react'
import styled from 'styled-components'

export default function InputBar() {
    const [inputValue, setInputValue] = useState("")

    const onPinSubmit = () => {
        return
    }
    return (
        <Container>
            <Input type="text" placeholder="#PIN" name="pin" onChange={()=>setInputValue()} />
            <Button type="button" onClick={()=>onPinSubmit()}>SUBMIT</Button>
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