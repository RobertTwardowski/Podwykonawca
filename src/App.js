import React, { useState, createContext } from 'react'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'
import { Registration } from './components/organisms/Registration/Registration.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogIn } from './components/organisms/LogIn/LogIn.js'
import CompanyAnnouncement from './components/molecules/Company/CompanyAnnouncement.js'
import { companyData } from './Data/Data.js'
import { Account } from './components/organisms/Account/Account.js'

export const MyContext = createContext()

function App () {
  const [search, setSearch] = useState(false)
  const [city, setCity] = useState('')
  const [profession, setProfession] = useState('')
  const [province, setProvince] = useState('')
  const [data, setData] = useState('')
  const [logIn, setLogIn] = useState(false)
  const [announcement, setAnnouncement] = useState('')

  const handleDataChange = newData => {
    setData(newData)
  }

  const handleLogIn = data => {
    setLogIn(data)
  }
  return (
    <>
      <GlobalStyle />
      <MyContext.Provider
        value={{
          search,
          setSearch,
          profession,
          setProfession,
          city,
          setCity,
          province,
          setProvince,
          logIn,
          setLogIn,
          announcement,
          setAnnouncement
        }}
      >
        <Router>
          <Routes>
            <Route
              path='/Rejestracja'
              element={<Registration onDataChange={handleDataChange} />}
            />
            <Route
              path='/Logowanie'
              element={<LogIn data={data} onDataChange={handleLogIn} />}
            />
            <Route path='/profile/:id' Component={CompanyAnnouncement} />
            <Route path='/Konto' Component={Account} />
            <Route
              exact
              path='/Podwykonawca'
              element={
                <>
                  <Navigation data={logIn} />
                  <SearchForm />
                  <>
                    <Companies companiesData={companyData} itemsPerPage={10} />
                  </>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </MyContext.Provider>
    </>
  )
}

export default App
