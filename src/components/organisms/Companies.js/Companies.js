import React, { useState, useContext, useEffect } from 'react'
import {
  CompaniesStyles,
  Wrapper,
  SectionFirst,
  SectionSecond,
  SectionStyles
} from './Companies.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from '../../molecules/Company/CompanyDetails'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { MyContext } from '../../../App'
import ReactPaginate from 'https://cdn.skypack.dev/react-paginate@7.1.3'

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

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const companyDataArray = Object.values(companyData);
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(companyDataArray.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(companyDataArray.length / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % companyDataArray.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  const handleMoreInfoClick = data => {
    setSelectedCompany(data)
  }
  const companyList = () => {
    if (!search) 
      {
        currentItems &&
          currentItems.map(data => (
            <>
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
              <ReactPaginate
                nextLabel='next >'
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel='< previous'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakLabel='...'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
                renderOnZeroPageCount={null}
              />
            </>
          ))
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
        return professionChosen.map(data => (
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
        ))
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
