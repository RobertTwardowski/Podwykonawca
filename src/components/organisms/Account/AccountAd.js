import React, { useState } from 'react'
import { provinces } from '../../../Data/Data'
import { professions } from '../../../Data/Data'

export const AccountAd = () => {
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedProfession, setSelectedProfession] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [longDescription, setLongDescription] = useState('')
  const [images, setImages] = useState([])
  const [addImages, setAddImages] = useState(false)

  const handleSelectChange = e => {
    setSelectedProvince(e.target.value)
    setSelectedCity('')
    setSelectedProfession('')
  }
  const handleSelectChangeSecond = e => {
    setSelectedCity(e.target.value)
  }

  const handleSelectChangeThird = e => {
    setSelectedProfession(e.target.value)
  }
  const handleInputChange = e => {
    const { name, value } = e.target
    if (name === 'companyName') {
      setCompanyName(value)
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value)
    } else if (name === 'shortDescription') {
      setShortDescription(value)
    } else if (name === 'longDescription') {
      setLongDescription(value)
    }
  }
  const handleImageChange = e => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageData = reader.result
        setImages(prevImages => [...prevImages, imageData])
      }
    }
    reader.readAsDataURL(file)
    e.preventDefault()
  }
  const handleRemoveImage = index => {
    const updatedImages = [...images]
    updatedImages.splice(index, 1)
    setImages(updatedImages)
  }

  const handleCheckboxChange = e => {
    setAddImages(e.target.checked)
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedProvince} onChange={handleSelectChange}>
        <option value=''>Wybierz Województwo...</option>
        {provinces.map(province => (
          <option key={province.name} value={province.name}>
            {province.name}
          </option>
        ))}
      </select>
      {selectedProvince[0] ? (
        <select value={selectedCity} onChange={handleSelectChangeSecond}>
          <option value=''>Wybierz Miasto...</option>
          {provinces
            .find(province => province.name === selectedProvince)
            .cities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      ) : (
        <select style={{ cursor: 'not-allowed', color: '#9999' }}>
          <option>Wybierz Miasto...</option>
        </select>
      )}
      {selectedCity && selectedProvince[0] ? (
        <select value={selectedProfession} onChange={handleSelectChangeThird}>
          <option value=''>Wybierz Specjalizację...</option>
          {professions.map(profession => (
            <option key={profession.id} value={profession.name}>
              {profession.name}
            </option>
          ))}
        </select>
      ) : (
        <select style={{ cursor: 'not-allowed', color: '#9999' }}>
          <option>Wybierz Specjalizację...</option>
        </select>
      )}

      <input
        type='text'
        name='companyName'
        value={companyName}
        onChange={handleInputChange}
        placeholder='Nazwa Firmy'
        maxLength={50}
      />

      <input
        type='text'
        name='phoneNumber'
        value={phoneNumber}
        onChange={handleInputChange}
        maxLength={9}
        placeholder='Numer Telefonu (9 cyfr)'
      />

      <textarea
        name='shortDescription'
        value={shortDescription}
        onChange={handleInputChange}
        maxLength={300}
        placeholder='Krótki Opis (maks. 300 znaków)'
      />

      <textarea
        name='longDescription'
        value={longDescription}
        onChange={handleInputChange}
        maxLength={2000}
        placeholder='Długi Opis (maks. 2000 znaków)'
      />
     
     <div>
        <input
          type='checkbox'
          id='addImagesCheckbox'
          checked={addImages}
          onChange={handleCheckboxChange}
        />
        <label htmlFor='addImagesCheckbox'>Dodaj zdjęcia</label>
      </div>

      {addImages && (
        <div>
         {images.length < 5 && ( <input type='file' accept='image/*' onChange={handleImageChange} />)}
          {images.map((image, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={image}
                alt={`Zdjęcie ${index + 1}`}
                style={{ width: '400px', height: '400px', marginRight: '10px' }}
              />
              <button onClick={() => handleRemoveImage(index)}>Usuń</button>
            </div>
          ))}
        </div>
      )}
    </form>
  )
}
