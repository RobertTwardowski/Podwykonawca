import styled from "styled-components";

export const CompaniesStyles = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;

`

export const Wrapper = styled.div`
display: flex;
width: 1200px;
height: 100%;
flex-wrap: wrap;
justify-content: space-between;
`
export const SectionStyles = styled.div`
display: flex;
border: solid 1px #D4D9DB;
width: 100%;
box-shadow: 1px 4px 4px 4px #D4D9DB;
border-radius: 6px;
margin: 1rem;

`

export const SectionFirst = styled.div`
width: 105px;
height: 105px;
display: flex;
justify-content: center;
align-items: center;
border: solid 1px #333;
`

export const SectionSecond = styled.div`
width: 100%;
height: 100%;
color: #333;
span{
    font-size: 1rem;
    font-weight: bold;
}
h2{
    margin: 0.5rem 0.5rem;
}
p{
  margin: 0.5rem;
}
`