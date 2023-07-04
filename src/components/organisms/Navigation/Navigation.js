import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Menu, Logo, NavigationStyles } from './Navigation.styles'

function Navigation ({data}) {
  return (
    <NavigationStyles>
      <Wrapper>
        <Logo to='/Podwykonawca/Podwykonawca' ><h1>Podwykonawca</h1></Logo>
        {data ? (
          <Menu>
            <Link to='/Podwykonawca/Konto'>Moje Konto</Link>
          </Menu>
        ) : (
          <Menu>
            <Link to='/Podwykonawca/Rejestracja'>Zajerestruj się</Link>
            <Link to='/Podwykonawca/Logowanie'>Zaloguj się</Link>
          </Menu>
        )}
      </Wrapper>
    </NavigationStyles>
  )
}
export default Navigation
