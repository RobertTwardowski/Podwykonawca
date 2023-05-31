import React, { useContext, useState } from 'react'
import ButtonSearch from '../atom/ButtonSearch'
import { Wrapper, FormStyles } from './Form.styles'
import { MyContext } from '../../App'
import { companyData } from '../../Data/Data'



const Form = () => {
  const { setSearch } = useContext(MyContext)
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedProfession, setSelectedProfession] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const { setCity } = useContext(MyContext)
  const { setProfession } = useContext(MyContext)
  const { setProvince } = useContext(MyContext)

  const province = companyData
    .map(item => item.province)
    .filter((value, index, self) => self.indexOf(value) === index)

    const cities = selectedProvince ? companyData
    .filter(item => item.province == selectedProvince)
    .map(item => item.cities)
    .filter((value, index, self) => self.indexOf(value) === index)
    : [];
  
    const professions = cities ? companyData
    .filter(item => item.cities == selectedCity)
    .map(item => item.professions)
    .filter((value, index, self) => self.indexOf(value) === index)
    : [];
  

  const handleButtonClick = value => {
    setSearch(value)
    setCity(selectedCity)
    setProfession(selectedProfession)
    setProvince(selectedProvince)
  }

  const handleSelectChange = e => {
    setSelectedProvince(e.target.value.split(','))
  }
  const handleSelectChangeSecond = e => {
    setSelectedCity(e.target.value)
  }

  const handleSelectChangeThird = e => {
    setSelectedProfession(e.target.value)
    
  }
  return (
    <Wrapper>
      <FormStyles>
        <select value={selectedProvince} onChange={handleSelectChange}>
          <option value=''>Wybierz Województwo...</option>
          {province.map(provinceData => (
            <option key={provinceData} value={provinceData}>
              {provinceData}
            </option>
          ))}
        </select>
        {selectedProvince[0] ? (
          <select value={selectedCity} onChange={handleSelectChangeSecond}>
            <option value=''>Wybierz Miasto...</option>
            {cities.map(cities => (
              <option key={cities}>{cities}</option>
            ))}
          </select>
        ) : (
          <select style={{ cursor: 'not-allowed', color: '#9999' }}>
            <option>Wybierz Miasto...</option>
          </select>
        )}
     {selectedCity && selectedProvince[0]  ? (
  <select value={selectedProfession} onChange={handleSelectChangeThird}>
    <option value=''>Wybierz Specjalizację...</option>
    {professions.map(profession => (
      <option key={profession} value={profession}>
        {profession}
      </option>
    ))}
  </select>
) : (
  <select style={{ cursor: 'not-allowed', color: '#9999' }}>
    <option>Wybierz Specjalizację...</option>
  </select>
)}

        <ButtonSearch onClick={handleButtonClick} />
      </FormStyles>
    </Wrapper>
  )
}

export default Form
