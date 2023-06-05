import React, { useState, useEffect, useContext } from 'react'
import { Button } from '../../atom/ButtonMoreInfo.styles'
import { Loader } from '../../atom/Loader'
import { Wrapper } from './Account.styles'
import { AccountAd } from '../../molecules/AcoountAdd/AccountAd'
import { MyContext } from '../../../App'
import { AccountaAdShow } from '../../molecules/AcoountAdd/AccountaAdShow'
import { useNavigate } from 'react-router-dom'

export const Account = () => {
  const [loader, setLoader] = useState(false)
  const [add, setAdd] = useState(false)
  const { announcement } = useContext(MyContext)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 1500)
  }, [])

  const handleClickAdd = () => {
    setAdd(true)
  }

  const handelGoService = (event) => {
    event.preventDefault()
        navigate('/Podwykonawca')
        }

  return (
    <>
      {!loader ? (
        <Loader />
      ) : (
        <>
          {announcement ? (
            <AccountaAdShow/>
          ) : (
            <>
              {!add ? (
                <Wrapper>
                  <h2>Brak Aktywnych Ogłoszeń.</h2>
                  <h3>Kliknij w przycisk, aby dodać ogłoszenie.</h3>
                  <Button onClick={handleClickAdd}>Dodaj Ogłoszenie</Button>
                  <Button onClick={handelGoService}>Przejdź do Serwisu</Button>
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
