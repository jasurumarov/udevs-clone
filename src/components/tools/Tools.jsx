'use client'
import React, { useState } from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'

// Icons
import Tool1 from '@/assets/icons/tool1.svg'
import Tool2 from '@/assets/icons/tool2.svg'
import Tool3 from '@/assets/icons/tool3.svg'
import Tool4 from '@/assets/icons/tool4.svg'
import Tool5 from '@/assets/icons/tool5.svg'
import Tool6 from '@/assets/icons/tool6.svg'
import Tool7 from '@/assets/icons/tool7.svg'
import Tool8 from '@/assets/icons/tool8.svg'
import Tool9 from '@/assets/icons/tool9.svg'
import Tool10 from '@/assets/icons/tool10.svg'
import Tool11 from '@/assets/icons/tool11.svg'
import Tool12 from '@/assets/icons/tool12.svg'
import Tool13 from '@/assets/icons/tool13.svg'
import Tool14 from '@/assets/icons/tool14.svg'
import Tool15 from '@/assets/icons/tool15.svg'
import Tool16 from '@/assets/icons/tool16.svg'
import Tool17 from '@/assets/icons/tool17.svg'
import Tool18 from '@/assets/icons/tool18.svg'
import Tool19 from '@/assets/icons/tool19.svg'
import Tool20 from '@/assets/icons/tool20.svg'
import Tool21 from '@/assets/icons/tool21.svg'
import Tool22 from '@/assets/icons/tool22.svg'
import Tool23 from '@/assets/icons/tool23.svg'
import Tool24 from '@/assets/icons/tool24.svg'
import Tool25 from '@/assets/icons/tool25.svg'
import Tool26 from '@/assets/icons/tool26.svg'
import Tool27 from '@/assets/icons/tool27.svg'
import Tool28 from '@/assets/icons/tool28.svg'
import Tool29 from '@/assets/icons/tool29.svg'
import Tool30 from '@/assets/icons/tool30.svg'
import Tool31 from '@/assets/icons/tool31.svg'
import Tool32 from '@/assets/icons/tool32.png'
import Tool33 from '@/assets/icons/tool33.svg'
import Tool34 from '@/assets/icons/tool34.svg'
import Tool35 from '@/assets/icons/tool35.svg'
import Tool36 from '@/assets/icons/tool36.svg'
import Tool37 from '@/assets/icons/tool37.svg'
import Tool38 from '@/assets/icons/tool38.svg'
import Tool39 from '@/assets/icons/tool39.svg'
import Tool40 from '@/assets/icons/tool40.svg'
import Tool41 from '@/assets/icons/tool41.svg'
import Tool42 from '@/assets/icons/tool42.svg'
import Tool43 from '@/assets/icons/tool43.svg'
import Tool44 from '@/assets/icons/tool44.svg'
import Tool45 from '@/assets/icons/tool45.svg'
import Tool46 from '@/assets/icons/tool46.svg'
import Tool47 from '@/assets/icons/tool47.svg'
import Tool48 from '@/assets/icons/tool48.svg'
import Image from 'next/image'

const inputData = [
    {
        id: 1,
        label: 'Frontend'
    },
    {
        id: 2,
        label: 'Backend'
    },
    {
        id: 3,
        label: 'Devops'
    },
    {
        id: 4,
        label: 'Testing'
    },
    {
        id: 5,
        label: 'UX/UI'
    },
    {
        id: 6,
        label: 'Infrastructure'
    },
    {
        id: 7,
        label: 'Mobile'
    },
]

const toolData = [
    {
        id: 1,
        icon: Tool1,
        title: 'Promotheus',
        classname: 'devops'
    },
    {
        id: 2,
        icon: Tool2,
        title: 'Loki',
        classname: 'devops'
    },
    {
        id: 3,
        icon: Tool3,
        title: 'Bitbucket',
        classname: 'devops'
    },
    {
        id: 4,
        icon: Tool4,
        title: 'Gitlab',
        classname: 'devops'
    },
    {
        id: 5,
        icon: Tool5,
        title: 'Kotlin',
        classname: 'mobile'
    },
    {
        id: 6,
        icon: Tool6,
        title: 'Android',
        classname: 'mobile'
    },
    {
        id: 7,
        icon: Tool7,
        title: 'Java',
        classname: 'mobile'
    },
    {
        id: 8,
        icon: Tool8,
        title: 'Azure',
        classname: 'infrastructure'
    },
    {
        id: 9,
        icon: Tool9,
        title: 'GCP',
        classname: 'infrastructure'
    },
    {
        id: 10,
        icon: Tool10,
        title: 'DigitalOcean',
        classname: 'infrastructure'
    },
    {
        id: 11,
        icon: Tool11,
        title: 'AWS',
        classname: 'infrastructure'
    },
    {
        id: 12,
        icon: Tool12,
        title: 'Kubernetes',
        classname: 'infrastructure'
    },
    {
        id: 13,
        icon: Tool13,
        title: 'ELK',
        classname: 'devops'
    },
    {
        id: 14,
        icon: Tool14,
        title: 'Grafana',
        classname: 'devops'
    },
    {
        id: 15,
        icon: Tool15,
        title: 'Terraform',
        classname: 'devops'
    },
    {
        id: 16,
        icon: Tool16,
        title: 'IOS',
        classname: 'mobile'
    },
    {
        id: 17,
        icon: Tool17,
        title: 'Swift',
        classname: 'mobile'
    },
    {
        id: 18,
        icon: Tool18,
        title: 'Flutter',
        classname: 'mobile'
    },
    {
        id: 19,
        icon: Tool19,
        title: 'Next.JS',
        classname: 'frontend'
    },
    {
        id: 20,
        icon: Tool20,
        title: 'React.JS',
        classname: 'frontend'
    },
    {
        id: 21,
        icon: Tool21,
        title: 'Javascript',
        classname: 'frontend'
    },
    {
        id: 22,
        icon: Tool22,
        title: 'Balsamic',
        classname: 'ux/ui'
    },
    {
        id: 23,
        icon: Tool23,
        title: 'Invision',
        classname: 'ux/ui'
    },
    {
        id: 24,
        icon: Tool24,
        title: 'Figma',
        classname: 'ux/ui'
    },
    {
        id: 25,
        icon: Tool25,
        title: 'Docker',
        classname: 'devops'
    },
    {
        id: 26,
        icon: Tool26,
        title: 'PostgreSQL',
        classname: 'backend'
    },
    {
        id: 27,
        icon: Tool27,
        title: 'Python',
        classname: 'backend'
    },
    {
        id: 28,
        icon: Tool28,
        title: 'Node.JS',
        classname: 'backend'
    },
    {
        id: 29,
        icon: Tool29,
        title: 'PHP',
        classname: 'backend'
    },
    {
        id: 30,
        icon: Tool30,
        title: 'GO',
        classname: 'backend'
    },
    {
        id: 31,
        icon: Tool31,
        title: 'Ant Design',
        classname: 'frontend'
    },
    {
        id: 32,
        icon: Tool32,
        title: 'Gatsby.JS',
        classname: 'frontend'
    },
    {
        id: 33,
        icon: Tool33,
        title: 'Vue.JS',
        classname: 'frontend'
    },
    {
        id: 34,
        icon: Tool34,
        title: 'Principle',
        classname: 'ux/ui'
    },
    {
        id: 35,
        icon: Tool35,
        title: 'Sketch',
        classname: 'ux/ui'
    },
    {
        id: 36,
        icon: Tool36,
        title: 'Adobe suite',
        classname: 'ux/ui'
    },
    {
        id: 37,
        icon: Tool37,
        title: 'YouTrack',
        classname: 'testing'
    },
    {
        id: 38,
        icon: Tool38,
        title: 'Appium',
        classname: 'testing'
    },
    {
        id: 39,
        icon: Tool39,
        title: 'Cypress',
        classname: 'testing'
    },
    {
        id: 40,
        icon: Tool40,
        title: 'Jmeter',
        classname: 'testing'
    },
    {
        id: 41,
        icon: Tool41,
        title: 'MongoDB',
        classname: 'backend'
    },
    {
        id: 42,
        icon: Tool42,
        title: 'Cassandra',
        classname: 'backend'
    },
    {
        id: 43,
        icon: Tool43,
        title: 'Sass',
        classname: 'frontend'
    },
    {
        id: 44,
        icon: Tool44,
        title: 'Material UI',
        classname: 'frontend'
    },
    {
        id: 45,
        icon: Tool45,
        title: 'Zeplin',
        classname: 'ux/ui'
    },
    {
        id: 46,
        icon: Tool46,
        title: 'Illustrator',
        classname: 'ux/ui'
    },
    {
        id: 47,
        icon: Tool47,
        title: 'Lottie',
        classname: 'ux/ui'
    },
    {
        id: 48,
        icon: Tool48,
        title: 'Photoshop',
        classname: 'ux/ui'
    },
]

const Tools = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    let inputItem = inputData?.map(item => (
        <div key={item.id}>
            <input onChange={() => handleCategoryChange(item.label.toLowerCase())} name='tools' id={item.label} type="radio" />
            <label htmlFor={item.label}>{item.label}</label>
        </div>
    ))

    let toolItem = toolData?.map(tool => (
        <div className={`tools__items-item ${tool.classname === 'ux/ui' ? 'ux' : tool.classname} ${selectedCategory && tool.classname !== selectedCategory ? 'active' : 'fadded'}`} key={tool.id}>
            <Image src={tool.icon} alt={tool.title} />
            <span>{tool.title}</span>
        </div>
    ))
    return (
        <section className='tools-section'>
            <div className="container">
                <SectionTitles title={'Tools'} />
                <div className="tools-section__content">
                    <div className="tools__radios">
                        {inputItem}
                    </div>
                    <div className="tools__items">
                        {toolItem}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tools
