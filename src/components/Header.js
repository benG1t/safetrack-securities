import React from 'react'
import styled from 'styled-components'
import solar from '../bannerimage/solar.jpg'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${solar}")`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='banner'>
        <h1>safeTrack Security</h1>
        <h4>
          We help to keep what matters most to you safe at an affordable rate
        </h4>
        <Link
          activeClass='active'
          to={'contact'}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className='btn'
        >
          make an appointment
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  height: 100vh;
  background-color: var(--clr-primary-2);
  display: grid;
  place-items: center;
  .banner {
    text-align: center;
    padding: 0 2rem;
    color: var(--clr-grey-9);
  }
  h1 {
    text-transform: uppercase;
    animation: slideFromLeft 5s ease-in-out 1;
  }
  h4 {
    letter-spacing: 0;
    padding-bottom: 1.5rem;
    animation: slideFromRight 5s ease-in-out 1;
  }
  /* animation */
  @keyframes slideFromRight {
    0% {
      transform: translateX(1000px);
    }
    50% {
      transform: translateX(-200px);
    }
    75% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-1000px);
    }
    50% {
      transform: translateX(200px);
    }
    75% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(0);
    }
  }
`

export default Header
