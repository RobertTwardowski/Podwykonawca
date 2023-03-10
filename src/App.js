import React from 'react'
import './App.styles.js'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'

function App () {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <SearchForm />
      <Companies />
      <Footer/>
    </>
  )
}

export default App
