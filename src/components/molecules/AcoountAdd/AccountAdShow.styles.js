import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
flex-direction: column;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  overflow: hidden;
  margin: 10px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #f2f4f5;
  border-radius: 6px;

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
  margin: 20px;
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
  width: 100%;
  margin: 10px;

  img {
    width: 400px;
    height: 400px;
  }
`
export const SectionButtons = styled.div`
display: flex;
justify-content: center;


button{
    margin: 20px;
}
`



