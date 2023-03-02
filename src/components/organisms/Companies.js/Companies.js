import React from 'react'
import { CompaniesStyles, Wrapper } from './Companies.styles'

import Company from '../../molecules/Company/Company'

export const Companies = () => {
  return (
    <CompaniesStyles>
      <Wrapper>
        <Company />
      </Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
