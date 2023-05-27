import React, { useState } from 'react';
import { RegistrationForm, PasswordInput, EmailInput, Wrapper, Container } from './Registration.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atom/ButtonMoreInfo.styles';

export const Registration = ({ onDataChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = event => {
    event.preventDefault();
    setClicked(true);

    if (email === '' || password === '') {
      return;
    }

    const data = { email, password }; // Dane do przekazania
    onDataChange(data);

    if(email !== '' && password !== ''){
      setShowConfirmation(true);
    }
  };

  const handelLogIn = event =>{
    event.preventDefault()
    navigate('/Logowanie')
  }
  
  return (
    <Wrapper>
      <Container>
      {showConfirmation ? (
         <RegistrationForm>
         <p>Rejestracja powiodła się!</p>
         <p>Kliknij OK aby przejść do logowania.</p>
         <Button onClick={handelLogIn}>
            OK
          </Button>
       </RegistrationForm>
     ) :(
        <RegistrationForm onSubmit={handleRegistration}>
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

          <Button type='submit' onSubmit={handleRegistration}>
            Załóż Konto
          </Button>
        </RegistrationForm>)}
      </Container>
    </Wrapper>
  );
};