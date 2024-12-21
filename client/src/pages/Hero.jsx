import React from 'react'
import hero from '../images/heroo.png'
import '../styles/hero.css'
import { Link } from 'react-router-dom'
import girls from '../images/girls.png'

const Hero = () => {
    return (
        <div>
            <section className='banner_wrapper'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6 header-img-section flip-card'>
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={girls} alt='Hello Carwale' height={450} width={120}/>
                                </div>
                                <div class="flip-card-back">
                                    <p>
                                    🌍 "The Numbers Speak for Themselves: Women's Safety Cannot Wait!"
                                    <ul>
                                        <li>1 in 3 women globally face physical or sexual violence in their lifetime.</li>
                                        <li>81% of women report experiencing some form of sexual harassment in public spaces.</li>
                                        <li>85% of working women encounter workplace harassment but hesitate to report it.</li>
                                        <li>Over 38% of female homicide victims are killed by a partner or family member.</li>
                                        <li>1 in 10 girls under 18 have faced forced sexual acts.</li>
                                        <li>Every 2 minutes, a woman is assaulted somewhere in the world.</li>
                                    </ul>
                                    </p>
                                    <p>It's time to break the silence and create a world where every woman feels safe and empowered." 💪✨</p>
                                    <p>
                                    🚨 Stand with Us. Fight for Change. Build a Safer Tomorrow. 🌟
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-5 my-md-0 text-center text-md-start">
                            <p className="banner-subtitle">Your Safety our Priority</p>
                            <h1 className="banner-title">Join us in making <span >Womens' Safety</span> a top most priority with us</h1>
                            <div className="learn-more-btn-section" >
                                <Link to='/emergency' style={{backgroundColor:"red"}} className="nav-link learn-more-btn btn-header" href="#car">Emergency</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="custom-shape-divider-bottom-1695048439">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Hero