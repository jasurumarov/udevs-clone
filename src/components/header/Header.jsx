'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';

// Icons
import { IoMenu } from "react-icons/io5";
import SiteLogo from '@/assets/icons/site-logo.svg'
import ArrowBottom from '@/assets/icons/arrow-bottom.svg'
import HeaderResponsive from '../header-responsive/HeaderResponsive';
import ServiceImg1 from '@/assets/icons/header-service1.svg'
import ServiceImg2 from '@/assets/icons/header-service2.svg'
import ServiceImg3 from '@/assets/icons/header-service3.svg'
import ServiceImg4 from '@/assets/icons/header-service4.svg'
import ServiceImg5 from '@/assets/icons/header-service5.svg'
import RusIcon from '@/assets/icons/rus.svg'
import EngIcon from '@/assets/icons/eng.svg'

const Header = () => {
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <header data-aos="fade-down" className='header'>
                <div className="container">
                    <nav>
                        <Image className='header__logo' src={SiteLogo} />
                        <ul>
                            <Link href={'#direction'}>Direction</Link>
                            <Link href={'#command'}>Command</Link>
                            <div className='dropdown-wrapper'>
                                <Link href={'#mobile'}>Services <Image src={ArrowBottom} /></Link>
                                <ul className='header__dropdown'>
                                    <p>Services</p>
                                    <Link href={'#mobile'}>
                                        <Image src={ServiceImg1} alt='service icon' />
                                        <span>Development of mobile applications</span>
                                    </Link>
                                    <Link href={'#erp'}>
                                        <Image src={ServiceImg2} alt='service icon' />
                                        <span>Development and implementation ERP systems</span>
                                    </Link>
                                    <Link href={'#design'}>
                                        <Image src={ServiceImg3} alt='service icon' />
                                        <span>User interface, User experience design</span>
                                    </Link>
                                    <Link href={'#consulting'}>
                                        <Image src={ServiceImg4} alt='service icon' />
                                        <span>IT consulting</span>
                                    </Link>
                                    <Link href={'#optimization'}>
                                        <Image src={ServiceImg5} alt='service icon' />
                                        <span>Optimization IT consulting infrastructure</span>
                                    </Link>
                                </ul>
                            </div>
                            <Link href={'#tools'}>Tools</Link>
                            <Link href={'#clients'}>Clients</Link>
                            <div className='dropdown-wrapper'>
                                <Link href={'#portfolio'}>Portfolio <Image src={ArrowBottom} /></Link>

                                <ul className='header__dropdown'>
                                    <p>Portfolio</p>
                                    <Link href={'#'}>
                                        <Image src={ServiceImg1} alt='service icon' />
                                        <span>Developer</span>
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={ServiceImg2} alt='service icon' />
                                        <span>Sms.uz</span>
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={ServiceImg3} alt='service icon' />
                                        <span>Goodzone</span>
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={ServiceImg4} alt='service icon' />
                                        <span>Iman</span>
                                    </Link>

                                </ul>
                            </div>
                            <div className='dropdown-wrapper'>
                                <Link href={'#language'}>Language <Image src={ArrowBottom} /></Link>
                                <ul className='header__dropdown header__dropdown-lang'>
                                    <Link href={'#'}>
                                        <Image src={RusIcon} alt='service icon' />
                                        <span>Рус</span>
                                    </Link>
                                    <Link href={'#'}>
                                        <Image src={EngIcon} alt='service icon' />
                                        <span>Eng</span>
                                    </Link>
                                </ul>
                            </div>
                            <button>Contact</button>
                        </ul>
                        <button onClick={() => setMenu(p => p = true)} className='header__menu-btn'>
                            <IoMenu />
                        </button>
                    </nav>
                </div>
                <HeaderResponsive menu={menu} setMenu={setMenu} />
            </header>
        </>
    )
}

export default Header
