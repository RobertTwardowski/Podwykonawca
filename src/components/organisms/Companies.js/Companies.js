import React, { useState, useContext } from 'react'
import {
  CompaniesStyles,
  Wrapper,
  SectionFirst,
  SectionSecond,
  SectionStyles
} from './Companies.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from '../../molecules/Company/CompanyDetails'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { MyContext } from '../../../App'

export const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const { search } = useContext(MyContext)
  const { city,setCity } = useContext(MyContext)
  const { profession,setProfession } = useContext(MyContext)
  const {setProvince} =useContext(MyContext)

  const cityChosen = companyData.filter(data => data.cities === city)
  const professionChosen = cityChosen.filter(data =>
    data.professions === profession
  )

 

  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }
  const companyList = () => {
    if (!search) {
      return companyData.map(data => (
        <SectionStyles key={data.id}>
          <SectionFirst style={{ backgroundColor: data.logo }}>
            Logo
          </SectionFirst>
          <SectionSecond>
            <h2>
              <span>nazwa firmy: </span> {data.name}
            </h2>
            <p>
              <span>Specjalizacja: </span> {data.professions}
            </p>
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
      ))
    }
    if (search) {
      if(professionChosen.length === 0){
          return (<SectionStyles><h1>nie ma ofert</h1></SectionStyles>)
      }
      if (profession && city) {
        return professionChosen.map(data => (
          <SectionStyles key={data.id}>
            <SectionFirst style={{ backgroundColor: data.logo }}>
              Logo
            </SectionFirst>
            <SectionSecond>
              <h2>
                <span>nazwa firmy: </span> {data.name}
              </h2>
              <p>
                <span>Specjalizacja: </span> {data.professions}
              </p>
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
        )) }
      } 
      setCity('')
      setProfession('')
      setProvince('')
    }
    
  

  return (
    <CompaniesStyles>
      <Wrapper>{companyList()}</Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
