import React from 'react'
import styled from 'styled-components'
import intsallationtwo from '../videos/intsallationtwo.MOV'

const Installation = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <video
          width='450'
          height='240'
          controls
          src={intsallationtwo}
          type='video/MOV'
        >
          Your browser does not support the video tag.
        </video>
        <div className='training'>
          <h2>Training section</h2>
          <div className='underline'></div>
          <p>
            Safetrack Security’s core values are to listen to our customers and
            employees, to seek and be positive to feedback, to meet needs in a
            timely and professional manner and to deliver service as predicted.
            We will be responsive to change and recognise the importance of
            working in true partnership to maximise performance and added value
            for our customers and the Company.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--clr-secondary-9);
  .section-center {
    display: grid;
    gap: 2rem;
    place-items: center;
  }
  video {
  }
  h2 {
    text-align: center;
    letter-spacing: 0.15rem;
  }
  .underling {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1rem;
    color: var(--clr-grey-3);
  }
  .training {
    padding: 0 2rem;
  }
  @media (min-width: 768px) {
    .section-center {
      grid-template-columns: 1fr 1fr;
    }
    video {
      width: 300px;
    }
  }
  @media (min-width: 996px) {
    video {
      width: 500px;
    }
  }
`

export default Installation
