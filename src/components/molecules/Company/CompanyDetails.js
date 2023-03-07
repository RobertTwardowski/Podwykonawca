import React from 'react'

import { Button } from '../../atom/Button.styles'

const CompanyDetails = ({ data, onClose }) => {
  return (
      <div>
        <p>{data.about}</p>
        <Button onClick={onClose}>Zamknij</Button>
      </div>
  )
}
export default CompanyDetails