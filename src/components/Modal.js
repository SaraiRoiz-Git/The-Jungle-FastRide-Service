import React from 'react'
import styled from 'styled-components'

export default function Modal(props) {
    return (
        <Container display={props.display ? 'flex' : 'none'}>
            <Close onClick={props.closeModal}>X</Close>
            <Message>{props.message}</Message>
        </Container>
    )
}

const Container = styled.div`
position: absolute;
background-color:  #373737;
margin: auto;
width: 400px;
left:50%;
margin-left:-200px;
top:-50px;
display:${({ display }) => display};
flex-direction: column;
align-items: center;
border:0.5px solid white  ;

@media (max-width: 480px) {
    width: 90vw;
    position: none;
    left:0;
    margin-left:0;
}
`
const Close = styled.div`
align-self: flex-end;
color: white;
font-weight: 500;
padding:20px 20px 0  0;
`

const Message = styled.div`
font-size: 1.1rem;
font-weight: 500;
padding:1rem;
padding-bottom: 3.5rem
`