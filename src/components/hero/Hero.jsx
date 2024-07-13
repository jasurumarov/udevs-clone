'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';

// Images
import SiteLogo from '@/assets/icons/site-logo.svg'
import HeroImg from '@/assets/images/hero.svg'

const Hero = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <section className='hero-section'>
            <div className="container">
                <div className="hero-section__content">
                    <div data-aos="fade-up" className="hero__title">
                        <Image src={SiteLogo} alt='site logo' />
                        <h1>IT-Outsourcing Company</h1>
                        <Typewriter
                            options={{
                                strings: ['Development of mobile applications|', 'Development and implementation ERP systems|', 'User interface, User experience design|', 'Optimization IT consulting infrastructure|', 'IT consulting|'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <button>Contact</button>
                    </div>
                    <div>
                    <Image className='hero__img' src={HeroImg} alt='hero img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
