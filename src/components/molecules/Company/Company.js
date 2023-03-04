import React from 'react'
import { SectionStyles, SectionFirst, SectionSecond } from './Company.styles'

const Company = ({ data, onClose }) => {
  return (
    <>
      <div>
        <h2>{data.name}</h2>
        <p>{data.logo}</p>
        <p>{data.about}</p>
        <button onClick={onClose}>Zamknij</button>
      </div>
    </>
  )
}
export default Company
