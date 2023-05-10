import React, { useContext, useState } from 'react'
import ButtonSearch from '../atom/ButtonSearch'
import { Wrapper, FormStyles } from './Form.styles'
import { MyContext } from '../../App'
import { companyData } from '../../Data/Data'

const provinces = [
  { name: 'dolnośląskie', cities: ['Wrocław', 'Legnica', 'Jelenia Góra'] },
  { name: 'kujawsko-pomorskie', cities: ['Bydgoszcz', 'Toruń', 'Włocławek'] },
  { name: 'lubelskie', cities: ['Lublin', 'Zamość', 'Chełm'] },
  {
    name: 'lubuskie',
    cities: ['Zielona Góra', 'Gorzów Wielkopolski', 'Świebodzin']
  },
  { name: 'łódzkie', cities: ['Łódź', 'Piotrków Trybunalski', 'Skierniewice'] },
  { name: 'małopolskie', cities: ['Kraków', 'Tarnów', 'Nowy Sącz'] },
  { name: 'mazowieckie', cities: ['Warszawa', 'Radom', 'Płock'] },
  { name: 'opolskie', cities: ['Opole', 'Kędzierzyn-Koźle', 'Nysa'] },
  { name: 'podkarpackie', cities: ['Rzeszów', 'Przemyśl', 'Tarnobrzeg'] },
  { name: 'podlaskie', cities: ['Białystok', 'Suwałki', 'Łomża'] },
  { name: 'pomorskie', cities: ['Gdańsk', 'Gdynia', 'Słupsk'] },
  {
    name: 'śląskie',
    cities: ['Katowice', 'Bielsko-Biała', 'Częstochowa', 'Zabrze']
  },
  {
    name: 'świętokrzyskie',
    cities: ['Kielce', 'Ostrowiec Świętokrzyski', 'Busko-Zdrój']
  },
  { name: 'warmińsko-mazurskie', cities: ['Olsztyn', 'Elbląg', 'Giżycko'] },
  { name: 'wielkopolskie', cities: ['Poznań', 'Kalisz', 'Konin'] },
  {
    name: 'zachodniopomorskie',
    cities: ['Szczecin', 'Koszalin', 'Świnoujście']
  }
]
const professions = [
  { id: 1, name: 'Architekt' },
  { id: 2, name: 'Inżynier budownictwa' },
  { id: 3, name: 'Geodeta' },
  { id: 4, name: 'Technik budowlany' },
  { id: 5, name: 'Kierownik budowy' },
  { id: 6, name: 'Inspektor nadzoru budowlanego' },
  { id: 7, name: 'Elektryk budowlany' },
  { id: 8, name: 'Hydraulik budowlany' },
  { id: 9, name: 'Murarz' },
  { id: 10, name: 'Tynkarz' }
]

const Form = () => {
  const { setSearch } = useContext(MyContext)
  const [searchCity, setSearchCity] = useState('')
  const [searchProfession, setSearchProfession] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const { setCity } = useContext(MyContext)
  const { setProfession } = useContext(MyContext)
  const { setProvince } = useContext(MyContext)

  const province = companyData
    .map(item => item.province)
    .filter((value, index, self) => self.indexOf(value) === index)

    const city = selectedProvince ? companyData
    .filter(item => item.province === selectedProvince)
    .map(item => item.cities)
    .filter((value, index, self) => self.indexOf(value) === index)
    : [];
  
  

  const handleButtonClick = value => {
    setSearch(value)
    setCity(searchCity)
    setProfession(searchProfession)
    setProvince(selectedProvince)
  }

  const handleSelectChange = e => {
    setSelectedProvince(e.target.value.split(','))
    console.log(city)
    console.log(selectedProvince);
  }
  const handleSelectChangeSecond = e => {
    setSearchCity(e.target.value)
  }

  const handleSelectChangeThird = e => {
    setSearchProfession(e.target.value)
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
        {selectedProvince ? (
          <select value={searchCity} onChange={handleSelectChangeSecond}>
            <option value=''>Wybierz Miasto...</option>
            {selectedProvince.map(cities => (
              <option key={cities}>{cities}</option>
            ))}
          </select>
        ) : (
          <select style={{ cursor: 'not-allowed', color: '#9999' }}>
            <option>Wybierz Miasto...</option>
          </select>
        )}
        {searchCity && selectedProvince ? (
          <select value={searchProfession} onChange={handleSelectChangeThird}>
            <option value=''>Wybierz Specjalizację...</option>
            {professions.map(professionsName => (
              <option key={professionsName.id} value={professionsName.name}>
                {professionsName.name}
              </option>
            ))}
          </select>
        ) : (
          <select style={{ cursor: 'not-allowed', color: '#9999' }}>
            <option>Wybierz Specjalizacja...</option>
          </select>
        )}

        <ButtonSearch onClick={handleButtonClick} />
      </FormStyles>
    </Wrapper>
  )
}

export default Form
