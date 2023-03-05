import styled from 'styled-components'

export const NavigationStyles= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Wrapper= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:1400px;
align-items: center;
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
    
    53%, 100% {
  
        text-shadow:
        0 0 4px #111,
        0 0 20px #333;
  

    
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
  color: #5dbea3;
}
`