import React, { useContext, useState } from 'react'
import { MyContext } from '../../../App'
import {
  Wrapper,
  Title,
  About,
  CityProfession,
  CarouselWrapper,
  CarouselImage,
  ImageSection,
  SectionButtons,
  Container,
  Header
} from './AccountAdShow.styles'
import { Logo } from '../../organisms/Navigation/Navigation.styles'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { useNavigate } from 'react-router-dom'
import { companyData } from '../../../Data/Data'


export const AccountaAdShow = () => {
  const { announcement, setAnnouncement } = useContext(MyContext)
  const [selectedPhoto, setSelectedPhoto] = useState(announcement.images[1])
  const navigate = useNavigate()

  const handlePhotoClick = photo => {
    setSelectedPhoto(photo)
  }

  const handelGoService = event => {
    event.preventDefault()
    navigate('/Podwykonawca')
  }

  const handelDelete = event => {
    event.preventDefault()
    setAnnouncement('')
  }


  return (
    <Container>
      <Header>
        <Logo to='/Podwykonawca' />
        <SectionButtons>
          <Button onClick={handelGoService}>Przejdź do Serwisu</Button>
          <Button onClick={handelDelete}>Usuń Ogłoszenie</Button>
        </SectionButtons>
      </Header>
      <Wrapper>
        <Title>
          <h1>{announcement.companyName}</h1>
        </Title>
        <CityProfession>
          <p>Specjalizacja: {announcement.selectedProfession}</p>
          <p>Miasto: {announcement.selectedCity}</p>
          <p>Numer: {announcement.phoneNumber}</p>
        </CityProfession>

        <About>
          <p>{announcement.longDescription}</p>
        </About>

        {!announcement.images.length == 0 ? (
          <>
            <CarouselWrapper>
              {announcement.images.map((image, index) => (
                <CarouselImage
                  key={index}
                  src={image}
                  alt={`Company Logo ${index}`}
                  onClick={() => handlePhotoClick(image)}
                />
              ))}
            </CarouselWrapper>
            <ImageSection>
              <img src={selectedPhoto} alt='Selected Photo' />
            </ImageSection>
          </>
        ) : null}
      </Wrapper>
    </Container>
  )
}
