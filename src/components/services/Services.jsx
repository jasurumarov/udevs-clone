'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';

// Icons
import ServiceIcon1 from '@/assets/icons/service-icon1.svg'
import ServiceIcon2 from '@/assets/icons/service-icon2.svg'
import ServiceIcon3 from '@/assets/icons/service-icon3.svg'
import ServiceIcon4 from '@/assets/icons/service-icon4.svg'
import ServiceIcon5 from '@/assets/icons/service-icon5.svg'
import ServiceIcon6 from '@/assets/icons/service-icon6.svg'
import SectionTitles from '../sectionTitles/SectionTitles'

const servicesData = [
    {
        id: 1,
        img: ServiceIcon1,
        title: 'Team'
    },
    {
        id: 2,
        img: ServiceIcon2,
        title: 'Development of mobile applications'
    },
    {
        id: 3,
        img: ServiceIcon3,
        title: 'Development and implementation ERP systems'
    },
    {
        id: 4,
        img: ServiceIcon4,
        title: 'User interface, User experience design'
    },
    {
        id: 5,
        img: ServiceIcon5,
        title: 'Optimization IT consulting infrastructure'
    },
    {
        id: 6,
        img: ServiceIcon6,
        title: 'IT consulting'
    },
]

const Services = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    let servicesItem = servicesData?.map(item => (
        <div key={item.id}>
            <Image src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
        </div>
    ))
    return (
        <section data-aos="fade-up" id='direction' className='services-section'>
            <div className="container">
                <div className="services-section__content">
                    <SectionTitles title={'Our services'} />
                    <div className='services__cards'>
                        {servicesItem}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
