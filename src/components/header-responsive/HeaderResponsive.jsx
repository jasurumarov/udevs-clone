import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Icons
import SiteLogo from '@/assets/icons/site-logo.svg'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const HeaderResponsive = ({ menu, setMenu }) => {
    return (
        <div className={`responsive-header ${menu ? 'active' : ''}`}>
            <div className="container">
                <div className='nav'>
                    <Image className='header__logo' src={SiteLogo} />
                    <button onClick={() => setMenu(p => p = false)} className='header__menu-btn'>
                        <IoClose />
                    </button>
                </div>
                <ul>
                    <Link onClick={() => setMenu(p => p = false)} href={'#mobile'}>Services</Link>
                    <Link onClick={() => setMenu(p => p = false)} href={'#clients'}>Clients</Link>
                    <Link onClick={() => setMenu(p => p = false)} href={'#command'}>Command</Link>
                </ul>
                <div className='responsive-header__contact-btn'>
                    <button>Contact</button>
                    <div>
                        <Link href={'https://www.instagram.com/udevs.io/'}><FaInstagram /></Link>
                        <Link href={'https://www.twitter.com'}><FaTwitter /></Link>
                        <Link href={'https://www.youtube.com'}><FaYoutube /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderResponsive
