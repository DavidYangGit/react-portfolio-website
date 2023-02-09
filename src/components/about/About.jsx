import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
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
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Coding</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Employers</h5>
              <small>2</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am an aspiring software engineer and developer looking to inspire the creation of new software technologies to be enjoyed around the world.
            I am proficient in various different coding languages and technologies with a strong knowledge of data structures and algorithms.
            Throughout my years in university, I learned how to write clean and efficient code through the various coding projects I was a part of.
            Need me to build a web or mobile app for you? I can do that.
            Need help creating and implementing a database or API into your program? I can do that too.
            If you're interested, please don't hesitate to contact me below.
            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About