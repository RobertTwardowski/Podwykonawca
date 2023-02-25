import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*, *::after, a::before{
box-sizing: inherit;
}

body{
    font-family: 'Montserrat', sans-serif;
}

a, button{
    font-family: 'Montserrat', sans-serif;
}

`