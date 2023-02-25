import styled from 'styled-components'

export const Wrapper= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 5px;
background: rgb(212,212,237);
background: linear-gradient(90deg, rgba(212,212,237,1) 0%, rgba(157,195,204,1) 100%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%);
`
export const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 2rem;
animation: flicker 5s infinite alternate;
  color: #444;
  font-weight: bold;

@keyframes flicker {
    
    0%, 18%, 22%, 25%, 53%, 100% {
  
        text-shadow:
        0 0 19px #111,
        0 0 40px #333;
  

    
    }
      20%, 24%, 55% {        
      text-shadow: none;
  }   
    }
    span{
      color:#555;
    }
`

export const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
list-style: none;
padding:1rem;
margin-right: 2rem;

li{
  
  padding: 1rem;
  color: #333;
}
a{
  color:#333;
  text-decoration: none;
  font-weight: bold;
}
a:hover{
  cursor:pointer;
  color: #999;
}
`