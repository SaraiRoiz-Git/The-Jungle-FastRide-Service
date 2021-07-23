import React from 'react'
import styled from 'styled-components'

export default function Title() {
    return (
        <PageTitle><H1>The Jungle</H1><Span>TM</Span> <H1> FastRider Service</H1></PageTitle>

    )
}

const PageTitle = styled.div`
display:flex;
margin: 0 auto 2rem auto;
`
const H1 = styled.h1`
font-weight: 300;
font-size: 1.9em;
color: white;

@media (max-width: 480px) {
    font-size: 1.6rem;
  }

`
const Span = styled.div`
color: white;
font-size: 0.5rem;
margin-right: 0.8em;
padding-top: 2rem;
@media (max-width: 480px) {
    padding-top: 1.6rem;
  }
`
