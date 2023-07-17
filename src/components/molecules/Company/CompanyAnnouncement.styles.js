import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  background-color: #f2f4f5;
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
  @media (max-width: 960px) {
    width: 100%;
  }

  button {
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
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 960px) {
    width: 80%;
    font-size: 1rem;
    flex-direction: column;
  }
`
export const About = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    word-break: break-all;
    margin: 10px;
    font-size: 20px;
  }

  @media (max-width: 960px) {
    p {
      width: 80%;
      font-size: 16px;
    }
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
  width: 20%;
  height: 100px;
  margin: 10px;
  :hover {
    opacity: 0.6;
    border: #333 solid 5px;
  }
  @media (max-width: 960px) {
    margin: 3px;
    width: 15%;
    height: 15%;
  }
`
export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 800px;
  height: 600px;

  img {
    width: 80%;
    height: 80%;
  }
  @media (max-width: 960px) {
    margin: 3px;
    width: 90%;
    height: 90%;
  }
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
  @media (max-width: 960px) {
    width: 100%;
  }
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
export const Comments = styled.div`
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
