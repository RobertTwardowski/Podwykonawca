import styled from 'styled-components'

export const SectionStyles = styled.div`
display: flex;
flex-basis:calc(50% - 30px);
height: 10rem;
border: solid 1px #999;
border-radius: 6px;
margin: 10px;

:hover{
  opacity: 0.8;
  cursor: pointer;
}
`

export const SectionFirst = styled.div`
display: flex;
background: black;
width: 30%;
height: 100%;
`

export const SectionSecond = styled.div`
width: 80%;
height: 100%;
color: #333;
background: #F5FFFA;
`