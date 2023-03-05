import React,{useState} from 'react'
import { CompaniesStyles, Wrapper,SectionFirst, SectionSecond,SectionStyles } from './Company.styles'
import { companyData } from '../../../Data/Data'
import CompanyDetails from './CompanyDetails'
import { Button } from '../../atom/Button.styles'

const Company = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleMoreInfoClick =(data) =>{
    setSelectedCompany(data)}

  return (
 <CompaniesStyles>
      <Wrapper>
        {companyData.map(data => (
        <SectionStyles key={data.id}>
          <SectionFirst 
            style={{ backgroundColor: data.logo }}
          />
          <SectionSecond>
            <h2>{data.name}</h2>
            <p>{data.professions}</p>
            <Button onClick={() => handleMoreInfoClick(data)}>Więcej informacji...</Button>
          </SectionSecond>
        </SectionStyles>
      ))} 
      
      </Wrapper> 
      {selectedCompany && (
        <CompanyDetails
          data={selectedCompany}
          onClose={() => setSelectedCompany(null)}
        />
      )}
    </CompaniesStyles>
  )
}
export default Company
