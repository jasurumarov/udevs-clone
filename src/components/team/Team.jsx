import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'
import Image from 'next/image'

// Images

import TeamImg from '@/assets/images/team.svg'

const Team = () => {
    return (
        <section className='team-section'>
            <div className="container">
                <SectionTitles title={'Team'} />
                <div className="team-section__content">
                    <div className="team__title">
                        <p>For each project, we form a team that includes a project manager, business analyst, UI / UX designer, DevOps, QA engineer, backend and front-end developers.</p>
                        <h2>100+</h2>
                        <h3>Dedicated team</h3>
                    </div>
                    <div className='team__image'>
                        <Image src={TeamImg} alt='team img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
