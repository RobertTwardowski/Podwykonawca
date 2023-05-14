import React, { useState } from 'react'
import { RegistrationForm, Wrapper, Container } from './Registration.styles'
import { useNavigate } from 'react-router-dom'
import Button from '../../atom/ButtonSearch.styles'
export const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate('')
  const handleSubmit = event => {
    event.preventDefault()
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    setTimeout(() => navigate('/'), 100)
  }

  return (
    <Wrapper>
      <Container>
        <RegistrationForm onSubmit={handleSubmit}>
          <label>Login:</label>
          <input
            type='text'
            value={name}
            onChange={event => setName(event.target.value)}
          />

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

          <Button type='submit'>Submit</Button>
        </RegistrationForm>
      </Container>
    </Wrapper>
  )
}

export default RegistrationForm
