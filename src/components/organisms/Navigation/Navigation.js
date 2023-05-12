import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { Wrapper, Menu, Logo, NavigationStyles } from './Navigation.styles';

function Navigation() {
  return (
    <BrowserRouter>
      <NavigationStyles>
        <Wrapper>
            <Logo to='/'/>
          <Menu>
            <li>
              <Link to='/rejestracja'>Zajerestruj się</Link>
            </li>
            <li>
              <Link to='/logowanie'>Zaloguj się</Link>
            </li>
          </Menu>
        </Wrapper>
      </NavigationStyles>
    </BrowserRouter>
  )
}
export default Navigation;