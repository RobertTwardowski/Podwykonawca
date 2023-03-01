import styled from "styled-components";
import bakcgroundImage from '../../../assets/styles/architect.jpg'

export const CompaniesStyles = styled.div`
display: flex;
margin: 1rem;
height: 100%;
justify-content: center;
align-items: center;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 1200px;
height: 100%;
`
export const SectionStyles = styled.div`
display: flex;
flex-direction: row;
border: solid 2px #999;
border-radius: 6px;
width: 100%;
margin: 1rem;
height: 10rem;
`

export const SectionFirst = styled.div`
display: flex;
background-image: url(${bakcgroundImage});
width: 20%;
height: 100%;
background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const SectionSecond = styled.div`
width: 80%;
height: 100%;
color: #333;
background: #F5FFFA;
`