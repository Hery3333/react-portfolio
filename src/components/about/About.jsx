import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {SiCodeproject} from 'react-icons/si'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>+3 years Working </small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>133+ Worldwide </small>
            </article>
            <article className="about__card">
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small>66+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non architecto quia quis cupiditate sequi ducimus aperiam voluptates vitae asperiores quos illo dicta blanditiis dolorum amet aliquid, beatae, voluptatibus inventore saepe ipsa aut officia.
          </p>

            <a href='' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About