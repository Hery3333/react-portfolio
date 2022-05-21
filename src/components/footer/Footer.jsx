import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; Hery Nomenjanahary</small>
      </div>
    </footer>
  ) 
}

export default Footer