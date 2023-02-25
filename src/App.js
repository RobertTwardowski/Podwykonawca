import React from 'react';
import './App.styles.js';
import Navigation from './components/organisms/Navigation/Navigation';
import { GlobalStyle } from './assets/styles/GlobalStyles';

function App() {
  return (
      <div>
        <GlobalStyle/>
      <Navigation />
      
      </div>
  );
}

export default App;
