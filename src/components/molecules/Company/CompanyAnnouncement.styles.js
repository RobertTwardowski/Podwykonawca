import styled from 'styled-components'

export const Section = styled.div`
display: flex;
justify-content: center;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 600px;
  width: 70%;
`

export const Title = styled.div`
width: 25%;
height: 25%;
margin: 20px;
`
export const About = styled.div`
width: 60%;
height: 25%;

p{
    margin: 10px;
    font-size: 20px;
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
`
export const CommentAdd=styled.div`
display: flex;
justify-content: center;
flex-direction: column;
background-color: #f2f4f5;
margin: 20px;
width: 90%;


input,select{
  height: 30px;
  
  margin: 10px;
  border-radius: 6px;
  font-size: 16px;
}
`

export const CommentInput=styled.textarea`
height: 200px;
background-color: #f2f4f5;
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
background-color: #f2f4f5;
border-radius: 6px;
p{
  padding: 10px;
}
`