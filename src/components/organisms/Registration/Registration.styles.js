import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f2f4f5;
`
export const Container = styled.div`
  display: flex;
  border-radius: 6px;
  width: 400px;
  height: 600px;
  background-color: #fff;

  button {
    width: 80%;
    font-weight: bold;
    font-size: 20px;
  }
`

export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: bold;

  input {
    
    border-radius: 6px;
    background-color: #f2f4f5;
    width: 90%;
    height: 40px;
    font-size: 30px;
    margin: 20px;
  }
p{
  margin-bottom: 16px;
  font-size: 20px;
}
`

export const EmailInput = styled.input`

  border-color: ${props => (props.empty && props.clicked ? '#FF4136' : 'initial')};
`;

export const PasswordInput = styled.input`

  border-color: ${props => (props.empty && props.clicked ? '#FF4136' : 'initial')};
`

