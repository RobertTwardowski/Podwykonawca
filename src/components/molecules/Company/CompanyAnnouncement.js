import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { companyData, comments } from '../../../Data/Data'
import {
  Wrapper,
  CommentAdd,
  Title,
  About,
  SectionComment,
  Section,
  CommentInput,
  Comments,
  CityProfession,
  CarouselWrapper,
  CarouselImage,
  ImageSection,
  Comment,Container
} from './CompanyAnnouncement.styles'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { Loader } from '../../atom/Loader'
import { MyContext } from '../../../App'
import { useNavigate } from 'react-router-dom'
import { Header, SectionButtons } from '../AcoountAdd/AccountAdShow.styles'
import { Logo } from '../../organisms/Navigation/Navigation.styles'


function CompanyAnnouncement () {
  const { id } = useParams()
  const Company = companyData.find(Company => Company.id == id)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('')
  const [commentIndex, setCommentIndex] = useState(0)
  const visibleComments = comments.slice(commentIndex, commentIndex + 5)
  const [loader, setLodaer] = useState(false)
  const { logIn } = useContext(MyContext)
  const navigate = useNavigate('')
  const [selectedPhoto, setSelectedPhoto] = useState(companyData[5].logo)

  useEffect(() => {
    setTimeout(() => {
      setLodaer(true)
    }, 1000)
  })
  const handleLogIn = event => {
    event.preventDefault()
    navigate('/Podwykonawca/Logowanie')
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleCommentChange = e => {
    setComment(e.target.value)
  }

  const handleRatingChange = e => {
    setRating(e.target.value)
  }

  const handleCommentSubmit = () => {
    if (name.trim() !== '' && comment.trim() !== '' && rating !== '') {
      const newComment = {
        commentName: name,
        commnet: comment,
        rating: rating
      }

      comments.unshift(newComment)
      setName('')
      setComment('')
      setRating('')
    }
  }
  const handlePhotoClick = photo => {
    setSelectedPhoto(photo)
  }

  const loadMoreComments = () => {
    setCommentIndex(prevIndex => prevIndex + 5)
  }
  const handelGoService = event => {
    event.preventDefault()
    navigate('/Podwykonawca')
  }

  return (
    <Section>
      <Header>
        <Logo to='/Podwykonawca'>
          <h1>Podwykonawca</h1>
        </Logo>
        <SectionButtons>
          <Button onClick={handelGoService}>Przejdź do Serwisu</Button>
        </SectionButtons>
      </Header>
      <Container>
      {!loader ? (
        <Loader />
      ) : (
        <>
          <Wrapper>
            <Title>
              <img src={Company.logo[0]} alt='' />
              <h1>{Company.name}</h1>
            </Title>
            <CityProfession>
              <p>Specjalizacja: {Company.professions}</p>
              <p>miasto: {Company.cities}</p>
              <p>numer: {Company.number}</p>
            </CityProfession>

            <About>
              <p>{Company.aboutLong}</p>
            </About>
            <CarouselWrapper>
              {Company.logo.slice(0, 5).map((logo, index) => (
                <CarouselImage
                  key={index}
                  src={logo}
                  alt={`Company Logo ${index}`}
                  onClick={() => handlePhotoClick(logo)}
                />
              ))}
            </CarouselWrapper>

            <ImageSection>
              <img src={selectedPhoto} alt='Selected Photo' />
            </ImageSection>
            <Button onClick={handelGoService}>Przejdź do Serwisu</Button>
          </Wrapper>
          <SectionComment>
            <Comments>
              {visibleComments.map((comment, index) => (
                <Comment key={index}>
                  <p>{comment.commentName}</p>
                  <p>{comment.commnet}</p>
                  <p>{comment.rating}</p>
                </Comment>
              ))}
              {comments.length > commentIndex + 5 && (
                <Button onClick={loadMoreComments}>
                  Pokaż kolejne komentarze
                </Button>
              )}
            </Comments>
            {!logIn ? (
              <CommentAdd>
                <p>Zaloguj się aby dodać ocene i komentarz</p>
                <Button onClick={handleLogIn}>Zaloguj się</Button>
              </CommentAdd>
            ) : (
              <CommentAdd>
                <input
                  type='text'
                  placeholder='Imię'
                  value={name}
                  onChange={handleNameChange}
                />
                <select value={rating} onChange={handleRatingChange}>
                  <option value=''>Wybierz ocenę</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                <CommentInput
                  type='text'
                  placeholder='Komentarz'
                  value={comment}
                  onChange={handleCommentChange}
                  maxLength={400}
                />

                <Button onClick={handleCommentSubmit}>Dodaj komentarz</Button>
              </CommentAdd>
            )}
          </SectionComment>
        </>
      )}
      </Container>
    </Section>
  )
}

export default CompanyAnnouncement
