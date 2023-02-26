import React from 'react'
import { Wrapper, Menu, Logo,NavigationStyles} from './Navigation.styles'

function Navigation () {
  return (
    <NavigationStyles>
    <Wrapper>
      <Logo>
        <h1>
          Pod<span>Wykonawca</span>
        </h1>
      </Logo>
      <Menu className='menu-list'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>Szukaj</a>
        </li>
        <li>
          <a href='/contact'>LogIn</a>
        </li>
      </Menu>
    </Wrapper>
    </NavigationStyles>
  )
}

export default Navigation
