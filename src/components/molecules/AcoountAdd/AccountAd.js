import React, { useState,useContext } from 'react';
import { provinces } from '../../../Data/Data';
import { professions } from '../../../Data/Data';
import {
  Wrapper,
  Images,
  Image,
  ContainerImage,
  Checkbox,
  Add,
  Error,
  StyledFileInput,
  CustomFileInput
} from './AccountAd.styles';
import { Button } from '../../atom/ButtonMoreInfo.styles';
import { MyContext } from '../../../App'
import { useNavigate } from 'react-router-dom'
import { companyData } from '../../../Data/Data';

export const AccountAd = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [images, setImages] = useState([]);
  const [addImages, setAddImages] = useState(false);
  const [errors, setErrors] = useState({
    selectedProvince: false,
    selectedCity: false,
    selectedProfession: false,
    companyName: false,
    phoneNumber: false,
    shortDescription: false,
    longDescription: false,
  });
  const navigate = useNavigate()
  const {setAnnouncement} = useContext(MyContext)

  const handleSelectChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity('');
    setSelectedProfession('');
    setErrors({ ...errors, selectedProvince: false });
  };

  const handleSelectChangeSecond = (e) => {
    setSelectedCity(e.target.value);
    setErrors({ ...errors, selectedCity: false });
  };

  const handleSelectChangeThird = (e) => {
    setSelectedProfession(e.target.value);
    setErrors({ ...errors, selectedProfession: false });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'companyName') {
      setCompanyName(value);
      setErrors({ ...errors, companyName: false });
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
      setErrors({ ...errors, phoneNumber: false });
    } else if (name === 'shortDescription') {
      setShortDescription(value);
      setErrors({ ...errors, shortDescription: false });
    } else if (name === 'longDescription') {
      setLongDescription(value);
      setErrors({ ...errors, longDescription: false });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        const imageData = reader.result;
        setImages((prevImages) => [...prevImages, imageData]);
      }
    };

    reader.readAsDataURL(file);
    e.preventDefault();
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleCheckboxChange = () => {
    setAddImages(!addImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      selectedProvince: !selectedProvince,
      selectedCity: !selectedCity,
      selectedProfession: !selectedProfession,
      companyName: !companyName,
      phoneNumber: !phoneNumber,
      shortDescription: !shortDescription,
      longDescription: !longDescription,
    };

    setErrors(newErrors);

    // Sprawdzanie, czy wystąpiły błędy
    const hasErrors = Object.values(newErrors).some((error) => error);

    if (!hasErrors) {
      // Tworzenie obiektu z danymi ogłoszenia
      const adData = {
        selectedProvince,
        selectedCity,
        selectedProfession,
        companyName,
        phoneNumber,
        shortDescription,
        longDescription,
        images,
      };
      setAnnouncement(adData)
      companyData.push({
        id: companyData.length + 1,
        name: adData.companyName,
        cities: adData.selectedCity,
        province: adData.selectedProvince,
        professions: adData.selectedProfession,
        number: adData.phoneNumber,
        aboutShort: adData.shortDescription,
        aboutLong: adData.longDescription,
        logo: adData.images.logo,
        rating: 0
      });
      console.log(companyData);
      console.log(adData.images);
      setErrors({
        selectedProvince: false,
        selectedCity: false,
        selectedProfession: false,
        companyName: false,
        phoneNumber: false,
        shortDescription: false,
        longDescription: false,
      });
    }
  };
    
  const handelGoService = (event) => {
event.preventDefault()
    navigate('/Podwykonawca')
    
    }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
      {errors.selectedProvince ? (
            <Error>Proszę wybrać województwo.</Error>
          ):
          (<label>Województwo</label>)} 
        <select value={selectedProvince} onChange={handleSelectChange}>
          <option value=''>Wybierz Województwo...</option>
          {provinces.map(province => (
            <option key={province.name} value={province.name}>
              {province.name}
            </option>
          ))}
        </select>
        {selectedProvince[0] ? (
          <>
           {errors.selectedCity ? (
            <Error>Proszę wybrać miasto.</Error>
          ):(<label>Miasto</label>)}
            
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
          </>
        ) : (
          <select style={{ cursor: 'not-allowed', color: '#9999' }}>
            <option>Wybierz Miasto...</option>
          </select>
        )}
        {selectedCity && selectedProvince[0] ? (
          <>
          {errors.selectedProfession ? (
            <Error>Proszę wybrać specjalizację.</Error>
          ):(<label>Specjalizacja</label>)}
            
            <select
              value={selectedProfession}
              onChange={handleSelectChangeThird}
            >
              <option value=''>Wybierz Specjalizację...</option>
              {professions.map(profession => (
                <option key={profession.id} value={profession.name}>
                  {profession.name}
                </option>
              ))}
            </select>
          </>
        ) : (
          <select style={{ cursor: 'not-allowed', color: '#9999' }}>
            <option>Wybierz Specjalizację...</option>
          </select>
        )}
        {errors.companyName ? (
            <Error>Proszę podać nazwę firmy.</Error>
          ):(<label>Nazwa Firmy</label>)}
        
        <input
          type='text'
          name='companyName'
          value={companyName}
          onChange={handleInputChange}
          placeholder='(maks. 50 znaków)'
          maxLength={50}
        />
{errors.phoneNumber ? (
            <Error>Proszę podać numer telefonu.</Error>
          ):(<label>Numer Telefonu</label>)}
      
        <input
          type='text'
          name='phoneNumber'
          value={phoneNumber}
          onChange={handleInputChange}
          maxLength={9}
          placeholder='Numer Telefonu (9 cyfr)'
        />
        {errors.shortDescription ? (
            <Error>Proszę podać krótki opis.</Error>
          ):(<label>Krótki Opis</label>)}
        
        <textarea
          name='shortDescription'
          value={shortDescription}
          onChange={handleInputChange}
          maxLength={300}
          placeholder='Dodaj krótki opis swojej firmy (maks. 300 znaków)'
        />
         {errors.longDescription ? (
            <Error>Proszę podać długi opis.</Error>
          ):(<label>Dlugi Opis</label>)}
        
        <textarea
          name='longDescription'
          value={longDescription}
          onChange={handleInputChange}
          maxLength={2000}
          placeholder='Dodaj dokładne informacje firmy (maks. 2000 znaków)'
        />

        <Checkbox>
          <label htmlFor='addImagesCheckbox'>Chesz dodać zdjęcia? maks. 5</label>
          <input
            type='checkbox'
            id='addImagesCheckbox'
            checked={addImages}
            onChange={handleCheckboxChange}
          />
        </Checkbox>

        {addImages && (
          <Images>
            {images.length < 5 && (
             <>
             <CustomFileInput htmlFor="fileInput">
               Wybierz Zdjęcie
               <StyledFileInput id="fileInput" onChange={handleImageChange} />
             </CustomFileInput>
           </>
            )}
            <ContainerImage>
              {images.map((image, index) => (
                <Image key={index}>
                  <img src={image} alt={`Zdjęcie ${index + 1}`} />
                  <Button onClick={() => handleRemoveImage(index)}>Usuń</Button>
                </Image>
              ))}
            </ContainerImage>
          </Images>
        )}
        <div>
        {errors.selectedProvince && (
            <Error>Proszę wybrać województwo.</Error>
          )}
          {errors.selectedCity && (
            <Error>Proszę wybrać miasto.</Error>
          )}
          {errors.selectedProfession && (
            <Error>Proszę wybrać specjalizację.</Error>
          )}
          {errors.companyName && (
            <Error>Proszę podać nazwę firmy.</Error>
          )}
          {errors.phoneNumber && (
            <Error>Proszę podać numer telefonu.</Error>
          )}
          {errors.shortDescription && (
            <Error>Proszę podać krótki opis.</Error>
          )}
          {errors.longDescription && (
            <Error>Proszę podać długi opis.</Error>
          )}
          </div>
        <Add>
          <div>
            <Button>Dodaj ogłoszenie</Button>
            <p>Nie chcesz dodawać ogłoszenia?</p>
            <Button onClick={handelGoService}>Przejdź do serwisu</Button>
          </div>
        </Add>
      </form>
    </Wrapper>
  )
}
