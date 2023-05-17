import React from 'react'
import styled from 'styled-components'

const Event = () => {
  return (
    <Wrapper>
      <h2>event security</h2>
      <div className='underline'></div>
      <p>
        Safetrack Security Services is the next generation of contract security
        providers. We know what it takes to keep you and your business safe, but
        more importantly, we know how to add value to your company by providing
        superior customer service and attention to detail.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  padding: 4rem;
  min-height: 70vh;
  background-color: var(--clr-primary-2);
  h2 {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: var(--clr-grey-10);
  }
  p {
    color: var(--clr-grey-9);
    font-size: 1.2rem;
    max-width: 1080px;
  }
  .underline {
    margin-bottom: 2rem;
  }
`

export default Event
