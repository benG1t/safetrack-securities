import React from 'react'
import styled from 'styled-components'
import training from '../videos/training.MOV'

const Training = () => {
  return (
    <Wrapper className='section'>
      <div className='section-center'>
        <video
          width='450'
          height='240'
          controls
          src={training}
          type='video/MOV'
        >
          Your browser does not support the video tag.
        </video>
        <div className='training'>
          <h2>Training section</h2>
          <div className='underline'></div>
          <p>
            Safetrack Security is an international security company providing
            comprehensive and tailored protective services, logistics,
            procurement and training for the defense, energy, and protective
            sectors, as well as high net-worth clients, diplomatic missions and
            international organizations operating in high-risk, volatile,
            hostile, and complex environments.
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
    width: 80vw;
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

export default Training
