import React from 'react'
import "./experience.css"
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiMaterialui} from 'react-icons/si'
import {RiReactjsLine} from 'react-icons/ri'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql,SiPython,SiJava} from 'react-icons/si'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>                
              </div>
            </article>
            <article className='experience__details'>
              <BsBootstrapFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMaterialui className='experience__details-icon'/>
              <div>
              <h4>Material UI</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <RiReactjsLine className='experience__details-icon'/>
              <div>
               <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>              
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJava className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience