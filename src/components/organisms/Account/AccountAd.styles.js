import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f5;

  button {
    background-color: #d4ebf2;
  }

  button:hover {
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 10px;
  }
  select,
  input {
    margin: 10px;
    width: 50%;
    height: 30px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  select:focus,
  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 0 5px #333;
    border: none;
  }
  textarea {
    width: 50%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 10px;
    font-size: 16px;
  }
`

export const Checkbox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 20px;

  input {
    width: 20px;
    height: 20px;
  }
`

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f2f4f5;

  input{
    width: 25%;
    height: 25px;
  }
`
export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;
`

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
  }

  img {
    width: 200px;
    height: 200px;
    margin: 10px;
  }
`

export const Add = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 200px;
  margin: 30px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
      margin-top: 10px;
    }
    button{
        margin: 20px;
    }
  }
`

export const Error = styled.p`
color:red;
`