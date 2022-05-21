import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineDribbbleSquare} from 'react-icons/ai'
function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank">
            <BsLinkedin/>
        </a>
        <a href="https://github.com" target="_blank">
            <FaGithub/>
        </a>
        <a href="https://dribbble.com" target="_blank">
            <AiOutlineDribbbleSquare/>
        </a>
    </div>
  )
}

export default HeaderSocials