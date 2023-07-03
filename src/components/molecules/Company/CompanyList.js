import React, { useState, useContext } from 'react'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import {
  SectionFirst,
  SectionSecond,
  StyledReactPaginate,
  SectionStyles,
  Rating,
  SectionThird,ErrorSection 
} from './CompanyListy.styles'
import CompanyDetails from './CompanyDetails'
import { MyContext } from '../../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


export const CompanyList = ({
  currentItems,
  handlePageClick,
  professionChosen,
  pageCount
}) => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const { search } = useContext(MyContext)
  const { city } = useContext(MyContext)
  const { profession } = useContext(MyContext)

  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }

  

  if (!search) {
    return (
      <>
        {currentItems &&
          currentItems.map(data => {
            const colorStyle =
              data.rating >= 4
                ? { color: '#228B22' }
                : data.rating == 3
                ? { color: '#E3A329' }
                : { color: '#B22222' }
            return (
              <SectionStyles key={data.id}>
                <SectionFirst>
                  <img src={data.logo[0]} alt=''></img>
                </SectionFirst>
                <SectionSecond>
                  <h2>{data.name}</h2>
                  <p>
                    <span>Specjalizacja: </span> {data.professions}
                  </p>
                  <SectionThird>
                    {!selectedCompany || data.id !== selectedCompany.id ? (
                      <Button onClick={() => handleMoreInfoClick(data)}>
                        <FontAwesomeIcon icon={faArrowDown} />
                      </Button>
                    ) : null}
                    {selectedCompany && data.id === selectedCompany.id && (
                      <CompanyDetails
                        data={selectedCompany}
                        onClose={() => setSelectedCompany(null)}
                      />
                    )}
                    <Rating>
                      <span style={colorStyle}>{data.rating}/5</span>
                    </Rating>
                  </SectionThird>
                </SectionSecond>
              </SectionStyles>
            )
          })}
        <StyledReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={0}
        />
      </>
    )
  }
  if (search) {
    if (professionChosen.length === 0) {
      return (
        <SectionStyles>
          <ErrorSection >Przepraszamy, obecnie nie ma dostępnych ofert lub nastąpił błąd w wyborze formularza. Prosimy spróbować ponownie.</ErrorSection >
        </SectionStyles>
      )
    }
    if (profession && city) {
      return (
        <>
          {currentItems &&
            currentItems.map(data => {
              const colorStyle =
                data.rating >= 4
                  ? { color: '#228B22' }
                  : data.rating == 3
                  ? { color: '#E3A329' }
                  : { color: '#B22222' }
              return (
                <SectionStyles key={data.id}>
                 <SectionFirst>
                  <img src={data.logo} alt=''></img>
                </SectionFirst>
                  <SectionSecond>
                    <h2>{data.name}</h2>
                    <p>{data.professions}</p>
                    <SectionThird>
                      {!selectedCompany || data.id !== selectedCompany.id ? (
                        <Button onClick={() => handleMoreInfoClick(data)}>
                          <FontAwesomeIcon icon={faArrowDown} />
                        </Button>
                      ) : null}
                      {selectedCompany && data.id === selectedCompany.id && (
                        <CompanyDetails
                          data={selectedCompany}
                          onClose={() => setSelectedCompany(null)}
                        />
                      )}
                      <Rating>
                        <span>Ocena:</span>
                        <span style={colorStyle}>{data.rating}/5</span>
                      </Rating>
                    </SectionThird>
                  </SectionSecond>
                </SectionStyles>
              )
            })}
          <StyledReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={0}
          />
        </>
      )
    }
  }
}
