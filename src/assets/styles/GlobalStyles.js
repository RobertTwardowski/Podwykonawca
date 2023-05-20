import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`



*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*, *::after, a::before{
box-sizing: inherit;
}

body{
    font-family: 'Montserrat';
}

a, button{
    font-family: 'Montserrat';
}

`