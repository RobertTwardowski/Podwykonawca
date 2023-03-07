import React, { useState } from 'react'
import {
  CompaniesStyles,
  Wrapper,
  SectionFirst,
  SectionSecond,
  SectionStyles
} from './Companies.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from '../../molecules/Company/CompanyDetails'
import { Button } from '../../atom/Button.styles'

export const Companies = () => {
  const [selectedCompany, setSelectedCompany] = useState(null)

  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }

  return (
    <CompaniesStyles>
      <Wrapper>
        {companyData.map(data => (
          <SectionStyles key={data.id}>
            <SectionFirst style={{ backgroundColor: data.logo }} />
            <SectionSecond>
              <h2>{data.name}</h2>
              <p>{data.professions}</p>
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
        ))}
      </Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
