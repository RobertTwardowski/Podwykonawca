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
  const [city, setCity] = useState('')
  const [profession, setProfession] = useState('')
  const [province, setProvince] = useState('')

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <MyContext.Provider
        value={{
          search,
          setSearch,
          profession,
          setProfession,
          city,
          setCity,
          province,
          setProvince
        }}
      >
        <SearchForm />
        <Companies itemsPerPage={5}/>
      </MyContext.Provider>
      <Footer />
    </>
  )
}

export default App
