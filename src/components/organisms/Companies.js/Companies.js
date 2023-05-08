import React, { useState, useContext, useEffect } from 'react'
import { CompaniesStyles, Wrapper } from './Companies.styles'
import { CompanyList } from '../../molecules/Company/CompanyList'
import { MyContext } from '../../../App'
import { companyData } from '../../../Data/Data'

const Companies = ({ itemsPerPage }) => {
  const { search,setSearch } = useContext(MyContext)
  const { city } = useContext(MyContext)
  const { profession } = useContext(MyContext)
  const companyDataArray = Object.values(companyData)
  const cityChosen = companyData.filter(data => data.cities === city)
  const professionChosen = cityChosen.filter(
    data => data.professions === profession
  )
  const companyDataArrayProfession = Object.values(professionChosen)

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)

  const [itemOffset, setItemOffset] = useState(0)

 

  useEffect(() => {
    
    if (!search) {
      
      const endOffset = itemOffset + itemsPerPage

      setCurrentItems(companyDataArray.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(companyDataArray.length / itemsPerPage))
     
    }
    if (search) {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(companyDataArrayProfession.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(companyDataArrayProfession.length / itemsPerPage))
      
    }
  }, [itemOffset,itemsPerPage,search,city,profession])
  


  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % companyDataArray.length
    setItemOffset(newOffset)
  }
  const handlePageClickProfession = event => {
    const newOffset = (event.selected * itemsPerPage) % companyDataArrayProfession.length
    setItemOffset(newOffset)
  }
  return (
    <CompaniesStyles>
      <Wrapper>
        <CompanyList
          currentItems={currentItems}
          handlePageClick={handlePageClick}
          professionChosen={professionChosen}
          handlePageClickProfession={handlePageClickProfession}
          pageCount={pageCount}
        />
      </Wrapper>
    </CompaniesStyles>
  )
}

export default Companies
