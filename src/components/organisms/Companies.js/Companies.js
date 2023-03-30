import React, { useState,useContext } from 'react'
import {
  CompaniesStyles,
  Wrapper,
  SectionFirst,
  SectionSecond,
  SectionStyles
} from './Companies.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from '../../molecules/Company/CompanyDetails'
import {Button} from '../../atom/ButtonMoreInfo.styles'
import { MyContext } from '../../../App'

export const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const {search} = useContext(MyContext);
  const { searchCity} = useContext(MyContext)
  const { searchProfession} = useContext(MyContext)

  const city = companyData.filter(data => data.cities.includes(searchCity));
  const professions = companyData.filter(data => data.professions.includes(searchProfession));

  

  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }
  const companyList = () =>{
    
    if(search !== true) { return companyData.map(data => (
      <SectionStyles key={data.id}>
        <SectionFirst style={{ backgroundColor: data.logo }}>Logo</SectionFirst>
        <SectionSecond>
          <h2><span>nazwa firmy: </span> {data.name}</h2>
          <p><span>Specjalizacja: </span> {data.professions}</p>
          {!selectedCompany || data.id !== selectedCompany.id ? (
            <Button onClick={() => handleMoreInfoClick(data)}>
              Więcej informacji...
            </Button>
          ) : null}
          {selectedCompany && data.id === selectedCompany.id && (
            <CompanyDetails
              data={selectedCompany}
              onClose={() => setSelectedCompany(null)}
            />
          )}
        </SectionSecond>
      </SectionStyles>
    ))} if(search ===true){return city.map(data => (
      <SectionStyles key={data.id}>
        <SectionFirst style={{ backgroundColor: data.logo }}>Logo</SectionFirst>
        <SectionSecond>
          <h2><span>nazwa firmy: </span> {data.name}</h2>
          <p><span>Specjalizacja: </span> {data.professions}</p>
          {!selectedCompany || data.id !== selectedCompany.id ? (
            <Button onClick={() => handleMoreInfoClick(data)}>
              Więcej informacji...
            </Button>
          ) : null}
          {selectedCompany && data.id === selectedCompany.id && (
            <CompanyDetails
              data={selectedCompany}
              onClose={() => setSelectedCompany(null)}
            />
          )}
        </SectionSecond>
      </SectionStyles>))
  }}
  
  return (
      <CompaniesStyles>
        <Wrapper>
          {companyList()}
        </Wrapper>
      </CompaniesStyles>
  );
}

export default Companies
