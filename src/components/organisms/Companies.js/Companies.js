import React, { useState, useContext, useEffect } from 'react'
import {
  CompaniesStyles,
  Wrapper,
  SectionFirst,
  SectionSecond,
  SectionStyles,
  StyledReactPaginate
} from './Companies.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from '../../molecules/Company/CompanyDetails'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { MyContext } from '../../../App'




export const Companies = ({ itemsPerPage }) => {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const { search } = useContext(MyContext)
  const { city } = useContext(MyContext)
  const { profession} = useContext(MyContext)
  const companyDataArray = Object.values(companyData);

  const cityChosen = companyData.filter(data => data.cities === city)
  const professionChosen = cityChosen.filter(
    data => data.professions === profession
  )

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
 
  const [itemOffset, setItemOffset] = useState(0)
  useEffect((search,professionChosen) => {
    if(!search){const companyDataArray = Object.values(companyData);
  
      const endOffset = itemOffset + itemsPerPage
      
      setCurrentItems(companyDataArray.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(companyDataArray.length / itemsPerPage))
    }
    else{
      const companyDataArray = Object.values(professionChosen);
  
      const endOffset = itemOffset + itemsPerPage
      console.log(professionChosen);
      setCurrentItems(companyDataArray.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(companyDataArray.length / itemsPerPage))
    }

      
      
  }, [itemOffset, itemsPerPage])

  
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % companyDataArray.length
    setItemOffset(newOffset)
  }
 
  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }
  const companyList = () => {
    if (!search) 
      {return <> {currentItems && currentItems.map(data => (
            
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
  breakLabel="..."
  nextLabel="next >"
  onPageChange={handlePageClick}
  pageRangeDisplayed={5}
  pageCount={pageCount}
  previousLabel="< previous"
  renderOnZeroPageCount={null}
/>
            </>
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
        return <>{currentItems&& currentItems.map(data => (
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
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /></>
      }
    }
  }

  return (
    <CompaniesStyles>
      <Wrapper>{companyList()}</Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
