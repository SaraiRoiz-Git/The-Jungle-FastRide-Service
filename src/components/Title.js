import React from 'react'
import styled from 'styled-components'

export default function Title() {
    return (
        <PageTitle><H1>The Jungle</H1><Span>TM</Span> <H1> FastRider Service</H1></PageTitle>

    )
}

const PageTitle = styled.div`
display:flex;
margin-bottom: 3.5rem;
`

const H1 = styled.h1`
font-weight: 300;
font-size: 2.4rem;
color: white;

`
const Span = styled.div`
color: white;
font-size: 0.8rem;
margin-right: 0.8rem;
padding-top: 2.6rem;
`
