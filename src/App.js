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
        <GlobalStyle />
        <Router>
       
        
          <Routes>
            <Route path='/Rejestracja' Component={Registration} />
            <Route  path='/Logowanie' Component={LogIn} />
            <Route exact path='/'element={<><Navigation/><SearchForm /><Companies itemsPerPage={10} /> <Footer /></>}>
            </Route>
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  )
}

export default App
