import React from 'react'
import { SectionStyles, SectionFirst, SectionSecond } from './Company.styles'
import { Button } from '../../atom/Button.styles'

const CompanyDetails = ({ data, onClose }) => {
  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <p>{data.logo}</p>
        <p>{data.about}</p>
        <Button onClick={onClose}>Zamknij</Button>
      </div>
    </>
  )
}
export default CompanyDetails