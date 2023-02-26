import React from 'react';
import './App.styles.js';
import Navigation from './components/organisms/Navigation/Navigation';
import { GlobalStyle } from './assets/styles/GlobalStyles';
import  SearchForm  from './components/organisms/SearchForm/SearchForm.js';

function App() {
  return <>
    <GlobalStyle/>
  <Navigation/>
  <SearchForm/>
  
  </>;
}

export default App;
