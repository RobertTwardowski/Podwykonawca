import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    width: 100%;
    padding: 0.5rem;
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
`
export const FormStyles = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #999;
  border-radius: 6px;
`
