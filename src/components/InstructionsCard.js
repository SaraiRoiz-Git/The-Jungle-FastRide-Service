import React from 'react'
import styled from 'styled-components'

function InstructionsCard(props) {
    console.log('props', props)

    return (
        <div>
            <img src={props.img} alt="" />
            <p>{props.data}</p>
        </div>
    )
}

export default InstructionsCard

