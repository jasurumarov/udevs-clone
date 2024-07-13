import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'
import Image from 'next/image';

const DevService = ({ sectionTitle, desc, tools, technologies, phoneImg, classname, id }) => {
    let toolsItem = tools?.map(item => (
        <div key={item.id}>
            <Image src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
    ))

    let technologiesItem = technologies?.map(item => (
        <div key={item.id}>
            <Image src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
        </div>
    ))
    return (
        <section id={id} className={`devService-section ${classname}`}>
            <div className="container">
                <SectionTitles title={sectionTitle} />
                <div className="devService-section__content">
                    <div className="devService__title">
                        <p>{desc}</p>
                        <div className='devServcie__title-tools'>
                            {toolsItem}
                        </div>
                        <h3>Technologies</h3>
                        <div className='devServcie__title-technologies'>
                            {technologiesItem}
                        </div>
                    </div>
                    <div className='devService__img'>
                        <Image src={phoneImg} alt='phone img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DevService
