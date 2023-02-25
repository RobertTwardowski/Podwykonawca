import React from 'react'
import { Wrapper, Menu, Logo } from './Navigation.styles'

function Navigation () {
  return (
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
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </Menu>
    </Wrapper>
  )
}

export default Navigation
