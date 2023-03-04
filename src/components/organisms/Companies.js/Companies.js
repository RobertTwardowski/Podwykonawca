import React,{useState} from 'react'
import { CompaniesStyles, Wrapper,SectionFirst, SectionSecond,SectionStyles } from './Companies.styles'
import { companyData } from '../../../Data/Data'
import Company from '../../molecules/Company/Company'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export const Companies = () => {

    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleMoreInfoClick =(data) =>{
      setSelectedCompany(data)
    }
  return (
    <CompaniesStyles>
      <Wrapper>
        {companyData.map(data => (
        <SectionStyles key={data.id}>
          <SectionFirst 
            style={{ backgroundColor: data.logo }}
          />
          <SectionSecond>
            <h2>{data.name}</h2>
            <p>{data.professions}</p>
            <button onClick={() => handleMoreInfoClick(data)}>Więcej informacji...</button>
          </SectionSecond>
        </SectionStyles>
      ))} 
       {selectedCompany && (
        <Company
          data={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
      </Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
