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
            Born and raised in California, I attended the University of California, Merced where I interned in the Inclusive Interaction Lab.
            Over the years, I have picked up leadership experience while leading software project teams as well as various clubs.
            I find that once I am faced with a problem I explore all possible avenues of solving it
            because, despite how much I may know, there always is something to learn and to discover.
          </p>
          <p>
            Video editing is currently my favorite hobby since I create and upload music videos to YouTube.
              Other than video editing, I also code various software programs in my free time.
              Professionally, I would like to work with all kinds of start-up and FAANG companies.
              One day, I hope to create and grow a brand/company of my own that produces amazing products that are enjoyed by consumers from every kind of background.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About