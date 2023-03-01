import styled from 'styled-components'
import bakcgroundImage from '../../../assets/styles/architect.jpg'

export const SearchFormStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  border: solid 1px #222;
  width: 100%;
  box-shadow: 1px 5px 5px 5px #999;
  border-radius: 6px;
  height: 400px;
  background-image: url(${bakcgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
