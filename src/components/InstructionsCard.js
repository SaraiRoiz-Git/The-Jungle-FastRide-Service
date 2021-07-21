import React from 'react'
import styled from 'styled-components'

function InstructionsCard(props) {

    return (
        <div>
            <img className="image" src={props.img} alt="" />
            <p>{props.data}</p>
        </div>
    )
}

export default InstructionsCard

