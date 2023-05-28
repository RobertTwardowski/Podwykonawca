import React from 'react'
import { LoaderContainer,Spinner } from './Loader.styles'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <p>Loading...</p>
    </LoaderContainer>
  )
}
