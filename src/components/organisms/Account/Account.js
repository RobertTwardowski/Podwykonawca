import React, { useState, useEffect, useContext } from 'react'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { Loader } from '../../atom/Loader'
import { Wrapper } from './Account.styles'
import { AccountAd } from './AccountAd'
import { MyContext } from '../../../App'

export const Account = () => {
  const [loader, setLoader] = useState(false)
  const [add, setAdd] = useState(false)
  const { announcement } = useContext(MyContext)

  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 1500)
  }, [])

  const handleClickAdd = () => {
    setAdd(true)
  }

  return (
    <>
      {!loader ? (
        <Loader />
      ) : (
        <>
          {announcement ? (
            <p>dodano</p>
          ) : (
            <>
              {!add ? (
                <Wrapper>
                  <h2>Brak Aktywnych Ogłoszeń.</h2>
                  <h3>Kliknij w przycisk, aby dodać ogłoszenie.</h3>
                  <Button onClick={handleClickAdd}>Dodaj Ogłoszenie</Button>
                </Wrapper>
              ) : (
                <AccountAd />
              )}
            </>
          )}
        </>
      )}
    </>
  )
}
