import React from 'react'
import { FooterStyle } from './Footer.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"


 const Footer = () => {
  return (
    <FooterStyle><div>Footer <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /></div>
 </FooterStyle>
  )
}
export default Footer