import React, { useState } from 'react';
import { RegistrationForm,PasswordInput,EmailInput, Wrapper, Container } from './Registration.styles';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../atom/ButtonMoreInfo.styles';



export const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate('');

  const handleSubmit = event => {
    event.preventDefault();
    setClicked(true);

    if (email === '' || password === '') {
      return;
    }

    setTimeout(() => navigate('/Podwykonawca'), 100);
  };

  return (
    <Wrapper>
      <Container>
        <RegistrationForm onSubmit={handleSubmit}>
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

          <Button type='submit' onClick={() => setClicked(true)}>
            Załóż Konto
          </Button>
        </RegistrationForm>
      </Container>
    </Wrapper>
  );
};