import React,{useState, createContext} from 'react'
import './App.styles.js'
import Navigation from './components/organisms/Navigation/Navigation'
import { GlobalStyle } from './assets/styles/GlobalStyles'
import SearchForm from './components/organisms/SearchForm/SearchForm.js'
import Companies from './components/organisms/Companies.js/Companies.js'
import Footer from './components/organisms/Footer/Footer.js'

export const MyContext = createContext()


function App () {

const [searchCity, setSearchCity] = useState('')
const [searchProfession ,setSearchProfession] = useState('')
const [selectedOption, setSelectedOption] =useState('')

  return (
    <MyContext.Provider value={{searchCity, setSearchCity,searchProfession ,setSearchProfession,selectedOption, setSelectedOption}}>
      <GlobalStyle />
      <Navigation />
      <SearchForm />
      <Companies />
      <Footer/>
    </MyContext.Provider>
  )
}

export default App
