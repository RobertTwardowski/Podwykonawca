import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const SectionStyles = styled.div`
display: flex;
width: 100%;
box-shadow: 1px 2px 2px 2px white;
border-radius: 6px;
margin: 10px;
background-color: white;

`

export const SectionFirst = styled.div`
width: 20%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;

`

export const SectionSecond = styled.div`
position: relative;
width: 100%;
height: 100%;
text-align: center;
span{
    font-size: 1rem;
    font-weight: bold;
}
h2{
    padding: 10px;
}

p{
  font-weight: bold;
  padding: 10px;
}
`
export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
  padding:20px;

  li {
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 3px;
    
    
    :hover,&.selected {
      background-color: #9999;
    }
    a {
      padding: 5px 10px;
    }
  }
`
export const SectionThird =styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100%;
align-self: flex-end;
button{
  width: 25%;
}
`
export const Rating = styled.p`
position: absolute;
right:0;
bottom:0;
`