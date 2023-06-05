import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  justify-content: center;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1800px;
  width: 70%;
  background-color: #f2f4f5;
  border-radius: 6px;
  margin: 10px;

  button{
    margin-top: 20px;
    background-color: #d4ebf2;
  }
`

export const CityProfession = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }
`
export const About = styled.div`
  p {
    margin: 10px;
    font-size: 20px;
  }
`
export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`
export const CarouselImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 20px;
  :hover{
    opacity: 0.6;
    border: #333 solid 5px;
  }
`
export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 600px;
  margin: 10px;
`
export const SectionComment = styled.div`
  width: 20%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #d4ebf2;
  border-radius: 6px;
  height: 80%;
`
export const CommentAdd = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  width: 90%;
  height: 30%;

  p,
  button {
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  input,
  select {
    height: 30px;
    border: none;
    margin: 10px;
    font-size: 16px;
  }
`

export const CommentInput = styled.textarea`
  height: 200px;
  margin: 10px;
  font-size: 16px;
  border-radius: 6px;
`
export const Comments =styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction: column;
height: 50%;


`
export const Comment = styled.div`
background-color: #f2f4f5;
  width: 80%;
  display: flex;
 
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 6px;
  p {
    font-size: 12px;
  }

`
