import React, { useState, useEffect } from 'react'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { Loader } from '../../atom/Loader'
import { Wrapper } from './Account.styles'
import { AccountAd } from './AccountAd'

export const Account = () => {
  const [loader, setLodaer] = useState(false)
  const [add, setAdd] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLodaer(true)
    }, 1500)
  })

  const handelClickAdd = () => {
    setAdd(true)
  }

  return (
    <>
      {!loader ? (
        <Loader />
      ) : (
        <>
          {!add ? (
            <Wrapper>
              <h2>Brak Aktywnych Ogłoszeń.</h2>
              <h3>Kliknij w przycisk aby dodać ogłoszenie.</h3>
              <Button onClick={handelClickAdd}>Dodaj Ogłoszenie</Button>
            </Wrapper>
          ) : (
            <AccountAd></AccountAd>
          )}
        </>
      )}
    </>
  )
}
