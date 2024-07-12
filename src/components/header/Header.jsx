'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

// Icons
import { IoMenu } from "react-icons/io5";
import SiteLogo from '@/assets/icons/site-logo.svg'
import ArrowBottom from '@/assets/icons/arrow-bottom.svg'
import HeaderResponsive from '../header-responsive/HeaderResponsive';

const Header = () => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav>
                        <Image className='header__logo' src={SiteLogo} />
                        <ul>
                            <Link href={'#direction'}>Direction</Link>
                            <Link href={'#command'}>Command</Link>
                            <Link href={'#services'}>Services <Image src={ArrowBottom} /></Link>
                            <Link href={'#tools'}>Tools</Link>
                            <Link href={'#clients'}>Clients</Link>
                            <Link href={'#portfolio'}>Portfolio <Image src={ArrowBottom} /></Link>
                            <Link href={'#language'}>Language <Image src={ArrowBottom} /></Link>
                            <button>Contact</button>
                        </ul>
                        <button onClick={() => setMenu(p => p = true)} className='header__menu-btn'>
                            <IoMenu />
                        </button>
                    </nav>
                </div>
            </header>
            <HeaderResponsive menu={menu} setMenu={setMenu} />
        </>
    )
}

export default Header
