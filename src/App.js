import React, { useEffect, useState, createContext } from 'react'
import { Spinner, ErrorSection } from './App.styles.js'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'
import { Registration } from './components/organisms/Registration/Registration.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LogIn } from './components/organisms/LogIn/LogIn.js'
import CompanyAnnouncement from './components/molecules/Company/CompanyAnnouncement.js'
import { companyData } from './Data/Data.js' // Import danych

export const MyContext = createContext()

function App () {
  const [search, setSearch] = useState(false)
  const [city, setCity] = useState('')
  const [profession, setProfession] = useState('')
  const [province, setProvince] = useState('')
  const [isLoadingCompanies, setIsLoadingCompanies] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data);

  const fetchData = () => {
    // Symulacja pobierania danych z bazy danych
    setTimeout(() => {
      setIsLoadingCompanies(false)
    }, 2000)
  }
  const handleDataChange = newData => {
    setData(newData)}
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
            setProvince
          }}
        >
          <Router>
            <Routes>
              <Route
                path='/Rejestracja'
                element={<Registration onDataChange={handleDataChange} />}
              />
              <Route
        path="/Logowanie"
        element={ <LogIn data={data} />}
      />
              <Route path='/profile/:id' Component={CompanyAnnouncement} />
              <Route
                exact
                path='/Podwykonawca'
                element={
                  <>
                    <Navigation />
                    <SearchForm />
                    {isLoadingCompanies ? (
                      <ErrorSection>
                        <Spinner></Spinner>Loading...
                      </ErrorSection>
                    ) : (
                      <>
                        <Companies
                          companiesData={companyData}
                          itemsPerPage={10}
                        />
                      </>
                    )}
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
