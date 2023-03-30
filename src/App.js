import React, { useState, createContext } from 'react'
import './App.styles.js'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'

export const MyContext = createContext()

function App () {
  const [search, setSearch] = useState(false)
  const [searchCity, setSearchCity] = useState('')
  const [searchProfession, setSearchProfession] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')

  return (
    <MyContext.Provider
      value={{
        searchCity,
        setSearchCity,
        searchProfession,
        setSearchProfession,
        selectedProvince,
        setSelectedProvince,
        search,
        setSearch
      }}
    >
      <GlobalStyle />
      <Navigation />
      <SearchForm />
      <Companies />
      <Footer />
    </MyContext.Provider>
  )
}

export default App
