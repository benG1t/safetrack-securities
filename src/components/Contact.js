import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import styled from 'styled-components'
import { contactinfo } from '../utils/data'

const Contact = () => {
  const [state, handleSubmit] = useForm('mjvdqbny')
  if (state.succeeded) {
    return <p>Thanks for the Message!</p>
  }
  return (
    <Wrapper className='section' id='contact'>
      <h2 className='contact-head'>contact</h2>
      <div className='underline'></div>
      <div className='section-center contact-center'>
        <article className='contact-info'>
          {contactinfo.map((item) => {
            const { id, icon, title, contactone, contacttwo } = item
            return (
              <div className='contact-item' key={id}>
                <h4 className='contact-title'>
                  <span className='contact-icon'>{icon} </span>
                  {title}
                </h4>
                <h4 className='contact-text'>
                  {contactone} <br />
                  {contacttwo}
                </h4>
              </div>
            )
          })}
        </article>
        {/* <!-- contact form --> */}
        <article className='contact-form'>
          <h3>contact us</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              {/* <!-- inputs --> */}
              <input
                type='text'
                placeholder='name'
                className='form-control'
                name='name'
                id='name'
              />
              <ValidationError
                prefix='Name'
                field='name'
                errors={state.errors}
              />
              <input
                type='email'
                placeholder='email'
                className='form-control'
                name='email'
                id='email'
              />
              <ValidationError
                prefix='Email'
                field='email'
                errors={state.errors}
              />
              <textarea
                name='message'
                id='message'
                placeholder='message'
                className='form-control'
                rows='5'
              ></textarea>
              <ValidationError
                prefix='Message'
                field='message'
                errors={state.errors}
              />
            </div>
            {/* <!-- button --> */}
            <button
              type='submit'
              className='submit-btn btn'
              disabled={state.submitting}
            >
              submit here
            </button>
          </form>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-8);
  .contact-head {
    text-align: center;
    text-transform: uppercase;
  }
  .contact-form,
  .contact-info {
    margin: 1rem 0;
  }
  .contact-item {
    margin-bottom: 1.75rem;
  }
  .contact-title {
    color: var(--clr-primary-3);
    font-weight: 400;
  }
  .contact-text {
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    color: var(--clr-grey-2);
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    max-width: 35rem;
  }
  .contact-form:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  @media screen and (min-width: 992px) {
    .contact-center {
      display: grid;
      column-gap: 2rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default Contact
