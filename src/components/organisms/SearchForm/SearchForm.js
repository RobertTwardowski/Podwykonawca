import React, { useState } from 'react'
import { SearchFormStyles, Wrapper } from './SearchForm.styles'

const province = [
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
  { name: 'śląskie', cities: ['Katowice', 'Bielsko-Biała', 'Częstochowa'] },
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

const SearchForm = () => {
  const [selectedOption, setSelectedOption] = useState([])
  const [selectedOptionSecond, setSelectedOptionSecond] = useState([])

  const handleSelectChange = e => {
    const value = e.target.value.split(',')
    setSelectedOption(value)
    setSelectedOptionSecond(value)
    console.log(value)
  }
  const handleSelectChangeSecond = e => {
    console.log(selectedOptionSecond)
  }

  return (
    <SearchFormStyles>
      <Wrapper>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value=''>Wybierz Województwo</option>
          {province.map(provinceData => (
            <option key={provinceData.name} value={provinceData.cities}>
              {provinceData.name}
            </option>
          ))}
        </select>
      </Wrapper>
    </SearchFormStyles>
  )
}

export default SearchForm
