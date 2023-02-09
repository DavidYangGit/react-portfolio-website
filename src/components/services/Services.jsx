import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Wireframing and Prototyping</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Visual Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Interaction Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>User Onboarding</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>E-Commerce Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Analystics</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Hosting</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Website Maintenance and Support</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEVELOPMENT */}
                <article className="service">
                    <div className="service__head">
                        <h3>MOBILE APP DEVELOPMENT</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Cross Platform App Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Integration With Third-Party Services</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Security</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Deployment and Distribution</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Hybrid App Development</p>
                        </li>
                    </ul>
                </article>
                {/* END OF MOBILE APP DEVELOPMENT */}
            </div>
        </section>
    )
}

export default Services