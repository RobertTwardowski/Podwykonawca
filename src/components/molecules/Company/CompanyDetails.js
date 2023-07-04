import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import {Container} from '../Company/CompanyDetails.styles'

const CompanyDetails = ({ data, onClose }) => {

  const navigate = useNavigate('')
  const handleSubmit = event => {
    event.preventDefault()
    setTimeout(() => navigate(`/Podwykonawca/profile/${data.id}`), 100)
  }
  return (
    <Container>
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
    </Container>
  )
}
export default CompanyDetails
