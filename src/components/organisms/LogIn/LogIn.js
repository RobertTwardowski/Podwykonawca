
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LogInForm, Wrapper, Container } from './LogIn.styles'
import {Button} from '../../atom/ButtonMoreInfo.styles'


export const LogIn = () => {
  


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate('')
  const handleSubmit = event => {
    event.preventDefault()
    
    console.log('name:', email)
    console.log('Password:', password)
    setTimeout(() => navigate('/'), 100)
  }
  return (
     <Wrapper>
    <Container>
      <LogInForm onSubmit={handleSubmit}>

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

        <Button type='submit'>Zaloguj</Button>
      </LogInForm>
    </Container>
  </Wrapper>
  )
}
