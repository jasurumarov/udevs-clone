'use client'
import React, { useEffect } from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'
import Image from 'next/image'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';

// Images
import LaptopImg from '@/assets/images/laptop.png'

const Systems = ({ sectionTitle, benefits, desc, id }) => {
    useEffect(() => {
        Aos.init()
    }, [])
    let benefitsItem = benefits?.map(item => (
        <div className='systems__benefits'>
            <Image src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
    ))
    return (
        <section id={id} className='systems-section'>
            <div className="container">
                <SectionTitles title={sectionTitle} />
                <div className="systems-section__content">
                    <div className='systems__img'>
                        <Image data-aos="zoom-in" src={LaptopImg} alt='laptop image' />
                    </div>
                    <div data-aos="fade-up" className='systems__title'>
                        <p>{desc}</p>
                        <div className='systems__title-benefits'>
                            {benefitsItem}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Systems
