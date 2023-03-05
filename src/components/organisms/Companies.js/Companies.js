import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CompanyDetails from '../../molecules/Company/CompanyDetails';
import Company from '../../molecules/Company/Company';

export const Companies = () => {
  return (
    <Router>
     <Routes>
      <Route path="/">
        <Company/>
      </Route>
      <Route>
        <CompanyDetails path="/company/:id"/>
      </Route>
     </Routes>
    </Router>
  )
}

export default Companies
