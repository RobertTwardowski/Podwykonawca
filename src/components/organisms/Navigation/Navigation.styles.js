import styled from 'styled-components'
import bakcgroundImage from '../../../assets/styles/Heading.png'
import {  Link } from 'react-router-dom';

export const NavigationStyles= styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const Wrapper= styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:1600px;
align-items: center;
`
export const Logo = styled(Link)`
width: 400px;
height: 100px;
 background-image: url(${bakcgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

:hover{
  cursor: pointer;
}
`

export const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
list-style: none;
margin-right: 100px;

a{
  background-color: #f2f4f5;
  color:#333;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  padding: 1rem;
  margin-left: 10px;
}
a:hover{
  cursor:pointer;
  color: #999;
}
`