import React from 'react'
import { Button } from './ButtonMoreInfo.styles'


const ButtonSearch = ({ onClick }) => {


  const handelClickSearch = () => {
    onClick(true)
  }

  return <Button onClick={handelClickSearch}>Szukaj</Button>
}

export default ButtonSearch
