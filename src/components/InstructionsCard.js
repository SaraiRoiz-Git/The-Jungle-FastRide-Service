import React from 'react'
import styled from 'styled-components'

export default function InstructionsCard(props) {

    return (
        <div>
            <IMG src={props.img} alt="" />
            <p>{props.data}</p>
        </div>
    )
}

const IMG = styled.img`
background-color:   #373737 ;
border-radius: 50%;
padding: 5px;
height: 3rem;
position: relative;
`


