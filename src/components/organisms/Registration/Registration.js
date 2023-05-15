import React, { useState } from 'react'
import { RegistrationForm, Wrapper, Container } from './Registration.styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atom/ButtonMoreInfo.styles'

export const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate('')
  const handleSubmit = event => {
    event.preventDefault()
    setTimeout(() => navigate('/'), 100)
  }

  return (
    <Wrapper>
      <Container>
        <RegistrationForm onSubmit={handleSubmit}>
          

          <label>Email:</label>
          <input
            type='email'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />

          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Button type='submit'>Załóż Konto</Button>
        </RegistrationForm>
      </Container>
    </Wrapper>
  )
}
