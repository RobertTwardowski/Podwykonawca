import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavigationStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const Logo = styled(Link)`
text-decoration: none;
padding: 20px;

h1{
color: #333;
:hover {
    cursor: pointer;
    color:#999;
  }
}


`

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  text-decoration: none;
  @media (max-width: 960px) {
    margin: 0px;
  }

  a {
    background-color: #f2f4f5;
    color: #333;
    list-style: none;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
    padding: 1rem;
    margin-left: 10px;
  }
  a:hover {
    cursor: pointer;
    color: #999;
  }
`
