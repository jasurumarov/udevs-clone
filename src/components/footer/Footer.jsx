import Image from 'next/image'
import React from 'react'

// Icons
import SiteLogo from '@/assets/icons/site-logo.svg'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <div className='footer__icon'>
                        <Image src={SiteLogo} alt="site logo" />
                    </div>
                    <nav>
                        <ul>
                            <h3>About us</h3>
                            <Link href={'#direction'}>Direction</Link>
                            <Link href={'#command'}>Command</Link>
                            <Link href={'#tools'}>Tools</Link>
                            <Link href={'#clients'}>Clients</Link>
                        </ul>
                        <ul>
                            <h3>Services</h3>
                            <Link href={'#mobile'}>Development of mobile applications</Link>
                            <Link href={'#erp'}>Development and implementation ERP systems</Link>
                            <Link href={'#design'}>User interface, User experience design</Link>
                            <Link href={'#consulting'}>IT consulting</Link>
                            <Link href={'#optimization'}>Optimization IT consulting infrastructure</Link>
                        </ul>
                        <ul>
                            <h3>Portfolio</h3>
                            <Link href={'#delever'}>Delever</Link>
                            <Link href={'#sms.uz'}>Sms.uz</Link>
                            <Link href={'#goodzone'}>Goodzone</Link>
                            <Link href={'#iman'}>Iman</Link>
                        </ul>
                    </nav>
                    <div className='footer__bottom'>
                        <p>© 2024 Udevs. All rights reserved</p>
                        <div>
                            <Link href={'https://www.instagram.com/udevs.io/'}><FaInstagram /></Link>
                            <Link href={'https://www.twitter.com'}><FaTwitter /></Link>
                            <Link href={'https://www.youtube.com'}><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
