import React, { useState } from 'react'
import { Button } from './ButtonSearch.styles'

const ButtonSearch = ({ onClick }) => {
  const [search, setSearch] = useState(false)

  const handelClickSearch = () => {
    setSearch(true)
    onClick(true)
  }

  return <Button onClick={handelClickSearch}>Szukaj</Button>
}

export default ButtonSearch
