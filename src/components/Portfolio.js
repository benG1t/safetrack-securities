import React from 'react'
import styled from 'styled-components'
import { portfoliopics } from '../utils/data'

const Portfolio = () => {
  return (
    <Wrapper className='section' id='portfolio'>
      <h2>our Portfolio</h2>
      <div className='underline'></div>
      <div className='section-center portfolio-center'>
        {portfoliopics.map((item) => {
          const { id, image, name } = item
          return (
            <article key={id}>
              <div className='img-container'>
                <img src={image} alt='name' />
              </div>
              <h4>{name}</h4>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    background-color: white;
  }
  .underline {
    margin-bottom: 2rem;
  }
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  img {
    height: 25rem;
    object-fit: contain;
  }
  h4 {
    /* text-transform: uppercase; */
    text-align: center;
    letter-spacing: 0.1rem;
  }
  .portfolio-center {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`

export default Portfolio
