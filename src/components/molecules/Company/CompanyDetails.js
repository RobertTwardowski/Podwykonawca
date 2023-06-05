import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atom/ButtonMoreInfo.styles'

const CompanyDetails = ({ data, onClose }) => {

  const navigate = useNavigate('')
  const handleSubmit = event => {
    event.preventDefault()
    setTimeout(() => navigate(`/profile/${data.id}`), 100)
  }
  return (
    <div>
      <p>
        <span>opis: </span> {data.aboutShort}
      </p>
      <p>
        <span>miasto: </span> {data.cities}
      </p>
      <p>
        <span>numer telefonu: </span>
        {data.number}
      </p>
      <Button onClick={onClose}>Zamknij</Button>
      <Button onClick={handleSubmit}>Przejdź do ogłoszenia</Button>
    </div>
  )
}
export default CompanyDetails
