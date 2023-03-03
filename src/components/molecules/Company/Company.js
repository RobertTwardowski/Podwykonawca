import React from 'react'
import { SectionStyles, SectionFirst, SectionSecond } from './Company.styles'
import { companyData } from '../../../Data/Data'

const Company = () => {
  return (
    <>
      {companyData.map(data => (
        <SectionStyles>
          <SectionFirst
            key={data.name}
            style={{ backgroundColor: data.logo }}
          />
          <SectionSecond key={data.name}>
            <h2>{data.name}</h2>
            <p>{data.professions}</p>
            <button>Więcej informacji...</button>
          </SectionSecond>
        </SectionStyles>
      ))}
    </>
  )
}
export default Company
