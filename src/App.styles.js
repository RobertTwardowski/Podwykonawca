import styled from 'styled-components'

export const App =styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Spinner = styled.div`
  border: 16px solid #999;
  border-top: 16px #333 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
 

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorSection= styled.span`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 500px;
font-size: 40px;
color: #999;
`