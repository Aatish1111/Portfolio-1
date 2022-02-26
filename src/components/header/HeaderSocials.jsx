import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkiedin.com' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank"><BsGithub /></a>
        <a href='https://youtube.com' target="_blank"><FaYoutube/></a>
    </div>
  )
}

export default HeaderSocials