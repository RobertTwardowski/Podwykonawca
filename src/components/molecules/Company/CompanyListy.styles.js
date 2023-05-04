import styled from "styled-components";
import ReactPaginate from "react-paginate";


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
export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
  margin: 1rem;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 3px;
    
    
    :hover,&.selected {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
    a {
      padding: 5px 10px;
    }
  }
`;