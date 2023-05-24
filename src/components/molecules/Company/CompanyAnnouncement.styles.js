import styled from 'styled-components'

export const Section = styled.div`
display: flex;
justify-content: center;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1500px;
  width: 70%;
  background-color: #f2f4f5;
  border-radius: 6px;
  margin-top: 20px;
`

export const CityProfession=styled.div`
display: flex;
justify-content: space-around;

p{
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

img{
  width: 200px;
  height: 200px;
}
`
export const About = styled.div`


p{
    margin: 10px;
    font-size: 20px;
}
`
export const CarouselWrapper=styled.div`
 max-width: 100%;
  overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
margin: 16px;

`
export const CarouselImage= styled.img`
width: 100%;
  height: auto;
  margin: 16px;
`
export const ImageSection=styled.div`
display: flex;
justify-content: center;
align-items: center;

img{
  width: 700px;
  height: 400px;
}
`
export const SectionComment=styled.div`
width: 20%;
margin: 20px;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
align-items: center;
background-color: #d4ebf2;
border-radius: 6px;
`
export const CommentAdd=styled.div`
display: flex;
justify-content: center;
flex-direction: column;

margin: 20px;
width: 90%;


input,select{
  height: 30px;
  border: none;
  margin: 10px;
  font-size: 16px;
}
`

export const CommentInput=styled.textarea`
height: 200px;
margin: 10px;
font-size: 16px;
border-radius: 6px;
`
export const Comments=styled.div`
width: 90%;
display: flex;
margin:20px;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 6px;
p{
  padding: 10px;
}
`