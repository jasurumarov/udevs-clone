import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'
import Image from 'next/image'

// Images
import LaptopImg from '@/assets/images/laptop.png'

const Systems = ({ sectionTitle, benefits, desc, id }) => {
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
                        <Image src={LaptopImg} alt='laptop image' />
                    </div>
                    <div className='systems__title'>
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
