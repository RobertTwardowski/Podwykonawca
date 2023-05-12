import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    width: 90%;
    padding: 12px;
    margin: 0.5rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    color: #333;
  }

  option {
    font-size: 1rem;
    font-weight: bold;
    color: #333;
  }

  button{
    margin-top: 10px;
    width: 90%;
    
  }
`
export const FormStyles = styled.div`
  width: 600px;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #9999;
  border-radius: 6px;
`
