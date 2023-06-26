import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f5;
  width: 100%;

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

`
export const StyledFileInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
})`
  display: none;

`;

export const CustomFileInput = styled.label`
  background-color: #d4ebf2;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;

  :hover{

background-color: #ccc;
}
`;
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
  align-items: center;
  text-align: center;
  margin: 30px;
  width: 50%;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
  align-items: center;
  text-align: center;

    button{
        margin: 20px;
        width: 100%;
    }
  }
`

export const Error = styled.p`
color:red;
`
