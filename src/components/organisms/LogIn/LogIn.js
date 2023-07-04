import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogInForm,
  PasswordInput,
  EmailInput,
  Wrapper,
  Container,
  Attention,
} from './LogIn.styles'
import { Button } from '../../atom/ButtonMoreInfo.styles'

import { Loader } from '../../atom/Loader'

export const LogIn = ({ data, onDataChange }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [clicked, setClicked] = useState(false)
  const [logIn, setLogIn] = useState(false)
  const [wrong, setWrong] = useState(false)
  const [loader, setLodaer] = useState(false)
  const navigate = useNavigate('')

  useEffect(() => {
    setTimeout(() => {
      setLodaer(true)
    }, 1500)
  })
  
  const handleRegistration = event => {
    event.preventDefault()
    navigate('/Podwykonawca/Rejestracja')
  }
  const handleSubmit = event => {
    event.preventDefault()
    setClicked(true)

    if (email === '' || password === '') {
      return
    } else if (data.email === email && data.password === password) {
      setLogIn(true)
      onDataChange(true)
    } else {
      setWrong(true)
    }
  }

  const handelAccount = event => {
    event.preventDefault()
    navigate('/Podwykonawca')
  }

  return (
    <Wrapper>
      {!loader ? (
        <Loader />
      ) : (
        <Container>
          {logIn ? (
            <LogInForm>
              <p>Zalogowałeś się prawidłowo!</p>
              <p>
                Kliknij OK, aby przejść do serwisu lub Moje Konto, aby przejść
                do swojego konta.
              </p>
              <Button onClick={handelAccount}>OK</Button>
              <Button onClick={handelAccount}>Moje Konto</Button>
            </LogInForm>
          ) : (
            <LogInForm onSubmit={handleSubmit}>
              <label>Email:</label>
              <EmailInput
                type='email'
                value={email}
                onChange={event => setEmail(event.target.value)}
                empty={email === ''}
                clicked={clicked}
              />

              <label>Password:</label>
              <PasswordInput
                type='password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                empty={password === ''}
                clicked={clicked}
              />
              {wrong && <Attention>Błędne Hasło lub Email</Attention>}

              <Button type='submit' onClick={() => setClicked(true)}>
                Zaloguj się
              </Button>
              <p>Nie masz Konta?</p>
              <Button type='submit' onClick={handleRegistration}>
                Zarejestruj się
              </Button>
            </LogInForm>
          )}
        </Container>
      )}
    </Wrapper>
  )
}
