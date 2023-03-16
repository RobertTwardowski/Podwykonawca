import React from 'react'
import { FooterStyle, IconStyle } from './Footer.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <FooterStyle>
      <IconStyle>
       <a href='http://www.facebook.com' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} size="4x"/></a>
       <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faTwitter} size="4x"/></a>
       <a href ="http://www.instagram.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} size="4x"/></a>
       <a href='http://www.google.com/' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGoogle} size="4x"/></a>
      </IconStyle>
    </FooterStyle>
  )
}
export default Footer
