import React, { useState, useContext } from 'react'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import {
  SectionFirst,
  SectionSecond,
  StyledReactPaginate,
  SectionStyles
} from './CompanyListy.styles'
import CompanyDetails from './CompanyDetails'
import { MyContext } from '../../../App'

export const CompanyList = ({
  currentItems,
  handlePageClick,
  professionChosen,
  handlePageClickProfession,
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
          currentItems.map(data => (
            <SectionStyles key={data.id}>
              <SectionFirst style={{ backgroundColor: data.logo }}>
                Logo
              </SectionFirst>
              <SectionSecond>
                <h2>
                  <span>nazwa firmy: </span> {data.name}
                </h2>
                <p>
                  <span>Specjalizacja: </span> {data.professions}
                </p>
                {!selectedCompany || data.id !== selectedCompany.id ? (
                  <Button onClick={() => handleMoreInfoClick(data)}>
                    Więcej informacji...
                  </Button>
                ) : null}
                {selectedCompany && data.id === selectedCompany.id && (
                  <CompanyDetails
                    data={selectedCompany}
                    onClose={() => setSelectedCompany(null)}
                  />
                )}
              </SectionSecond>
            </SectionStyles>
          ))}
        <StyledReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
        />
      </>
    )
  }
  if (search) {
    if (professionChosen.length === 0) {
      return (
        <SectionStyles>
          <h1>nie ma ofert</h1>
        </SectionStyles>
      )
    }
    if (profession && city) {
      return (
        <>
          {currentItems &&
            currentItems.map(data => (
              <SectionStyles key={data.id}>
                <SectionFirst style={{ backgroundColor: data.logo }}>
                  Logo
                </SectionFirst>
                <SectionSecond>
                  <h2>
                    <span>nazwa firmy: </span> {data.name}
                  </h2>
                  <p>
                    <span>Specjalizacja: </span> {data.professions}
                  </p>
                  {!selectedCompany || data.id !== selectedCompany.id ? (
                    <Button onClick={() => handleMoreInfoClick(data)}>
                      Więcej informacji...
                    </Button>
                  ) : null}
                  {selectedCompany && data.id === selectedCompany.id && (
                    <CompanyDetails
                      data={selectedCompany}
                      onClose={() => setSelectedCompany(null)}
                    />
                  )}
                </SectionSecond>
              </SectionStyles>
            ))}
          <StyledReactPaginate
          key={city && profession}
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClickProfession}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
            forcePage={0}
          />
        </>
      )
    }
  }
}
