import styled from "styled-components";

export const CompaniesStyles = styled.div`
display: flex;
margin: 1rem;
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
flex-basis:calc(50% - 30px);
height: 10rem;
border: solid 1px #999;
border-radius: 6px;
margin: 10px;

:hover{
  opacity: 0.8;
  cursor: pointer;
}
`