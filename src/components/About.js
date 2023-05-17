import React from 'react'
import { about } from '../utils/data'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper className='section' id='about'>
      <div className='title'>
        <h2>about us</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center services-info'>
        {about.map((item) => {
          const { id, icon, service, description } = item
          return (
            <article key={id}>
              <span>{icon}</span>
              <h4>{service}</h4>
              <p>{description}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  article {
    text-align: center;
    border-radius: var(--radius);
    margin: 1rem 0;
    border: 1px solid var(--clr-grey-8);
    padding: 2rem;
  }
  article:hover {
    background-color: var(--clr-primary-8);
    p {
      color: var(--clr-grey-2);
    }
  }
  span {
    border-radius: 50%;
    display: grid;
    place-items: center;
    width: 4.5rem;
    height: 4.5rem;
    background: var(--clr-primary-5);
    margin: 0 auto;
    svg {
      font-size: 2rem;
      color: white;
      background: transparent;
    }
  }
  h4 {
    padding-top: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
  }
  .underline {
    margin-bottom: 2rem;
  }

  .services-info {
    display: grid;
    column-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`

export default About
