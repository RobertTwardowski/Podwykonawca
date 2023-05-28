import React,{useState,useEffect} from 'react'
import {Button} from '../../atom/ButtonMoreInfo.styles'
import { Loader } from '../../atom/Loader'

export const Account = () => {

    const [loader,setLodaer] =useState(false)

    useEffect(()=>{
      setTimeout(()=>{setLodaer(true)},1500)
    })

  return (<>{!loader ? (<Loader/>):(<Button>Dodaj Ogłoszenie</Button>)}</>
    
  )
}
