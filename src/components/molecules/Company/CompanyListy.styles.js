import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const SectionStyles = styled.div`
display: flex;
width: 100%;
border-radius: 6px;
padding: 10px;
margin: 20px;
background-color: white;
border: none;
box-shadow: 2px 2px 4px #888888;

`

export const SectionFirst = styled.div`
width: 30%;
height: 160px;

img{
  width: 100%;
  height: 100%;
}
@media (max-width: 960px) {
    width: 50%;
  }
`

export const SectionSecond = styled.div`
position: relative;
width: 100%;
height: 100%;
span{
    font-size: 1rem;
    font-weight: bold;
}
h2{
    padding: 10px;
}

p{
  font-size: 20px;
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
      background: #ccc; 
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
  margin: 10px;
}
@media (max-width: 960px) {
  button{
 width: 50%;
  margin: 10px;
}
  }
`
export const Rating = styled.p`
position: absolute;
right: 0;
bottom: 0;
`
export const ErrorSection= styled.span`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 300px;
font-size: 28px;
color: #999;
`