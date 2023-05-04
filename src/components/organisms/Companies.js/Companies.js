import React from 'react'
import { CompaniesStyles, Wrapper } from './Companies.styles'
import { CompanyList } from '../../molecules/Company/CompanyList'

export const Companies = ({ itemsPerPage }) => {
  return (
    <CompaniesStyles>
      <Wrapper>
        <CompanyList props={itemsPerPage} />
      </Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
