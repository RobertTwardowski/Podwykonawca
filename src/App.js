import React, { useState, createContext } from 'react'
import './App.styles.js'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'
import { Registration } from './components/organisms/Registration/Registration.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogIn } from './components/organisms/LogIn/LogIn.js'

export const MyContext = createContext()

function App () {
  const [search, setSearch] = useState(false)
  const [city, setCity] = useState('')
  const [profession, setProfession] = useState('')
  const [province, setProvince] = useState('')

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/rejestracja' Component={Registration}></Route>
          <Route exact path='/logowanie' Component={LogIn}>
          </Route>
          </Routes>
      </Router>
      <GlobalStyle />
      <Navigation exact path='/'/>
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
        <SearchForm exact path='/'/>
        <Companies itemsPerPage={10} exact path='/'/>
      </MyContext.Provider>
      <Footer exact path='/'/>
    </>
  )
}

export default App
