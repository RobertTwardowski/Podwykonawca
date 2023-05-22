import React, { useState } from 'react'
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
  Comments,CityProfession

} from './CompanyAnnouncement.styles'
import { Button } from '../../atom/ButtonMoreInfo.styles'

function CompanyAnnouncement () {
  const { id } = useParams()
  const Company = companyData.find(Company => Company.id == id)
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState('') // Updated to use a select option
  const [commentIndex, setCommentIndex] = useState(0)

  const visibleComments = comments.slice(commentIndex, commentIndex + 5)

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

  const loadMoreComments = () => {
    setCommentIndex(prevIndex => prevIndex + 5)
  }

  return (
    <Section>
      <Wrapper>
        <Title>
          <h1>{Company.name}</h1>
        </Title>
        <CityProfession>
          <p>Specjalizacja: {Company.professions}</p>
          <p>miasto: {Company.cities}</p>
          <p>numer: {Company.number}</p>
        </CityProfession>

        <About>
          <p>{Company.about}</p>
          <p>{Company.about}</p>
          <p>{Company.about}</p>
        </About>
      </Wrapper>
      <SectionComment>
        {visibleComments.map((comment, index) => (
          <Comments key={index}>
            <p>{comment.commentName}</p>
            <p>{comment.commnet}</p>
            <p>{comment.rating}</p>
          </Comments>
        ))}

        {comments.length > commentIndex + 5 && (
          <Button onClick={loadMoreComments}>Pokaż kolejne komentarze</Button>
        )}

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
      </SectionComment>
    </Section>
  )
}

export default CompanyAnnouncement
