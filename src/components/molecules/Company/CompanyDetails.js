import React from 'react'

import { Button } from '../../atom/ButtonMoreInfo.styles'

const CompanyDetails = ({ data, onClose }) => {
  return (
    <div>
      <p>
        <span>opis: </span> {data.about}
      </p>
      <p>
        <span>miasto: </span> {data.cities}
      </p>
      <p>
        <span>numer telefonu: </span>
        {data.number}
      </p>
      <Button onClick={onClose}>Zamknij</Button>
    </div>
  )
}
export default CompanyDetails
