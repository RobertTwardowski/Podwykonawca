import React from 'react'
import { Link } from 'react-router-dom';
import { Wrapper, Menu, Logo, NavigationStyles } from './Navigation.styles';

function Navigation() {
  return (

      <NavigationStyles>
        <Wrapper>
            <Logo to='/'/>
          <Menu>
              <Link to='/Rejestracja'>Zajerestruj się</Link>
              <Link to='/Logowanie'>Zaloguj się</Link>
          </Menu>
        </Wrapper>
      </NavigationStyles>

  )
}
export default Navigation;