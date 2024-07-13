'use client'
import React from 'react'
import SectionTitles from '../sectionTitles/SectionTitles'
import Image from 'next/image'

// Slider
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const animation = { duration: 80000, easing: (t) => t }

// Icons
import Slider1Img1 from '@/assets/icons/slider1-img1.svg'
import Slider1Img2 from '@/assets/icons/slider1-img2.svg'
import Slider1Img3 from '@/assets/icons/slider1-img3.svg'
import Slider1Img4 from '@/assets/icons/slider1-img4.svg'
import Slider1Img5 from '@/assets/icons/slider1-img5.svg'
import Slider1Img6 from '@/assets/icons/slider1-img6.svg'
import Slider1Img7 from '@/assets/icons/slider1-img7.svg'
import Slider2Img1 from '@/assets/icons/slider2-img1.svg'
import Slider2Img2 from '@/assets/icons/slider2-img2.svg'
import Slider2Img3 from '@/assets/icons/slider2-img3.svg'
import Slider2Img4 from '@/assets/icons/slider2-img4.svg'
import Slider2Img5 from '@/assets/icons/slider2-img5.svg'
import Slider2Img6 from '@/assets/icons/slider2-img6.svg'
import Slider2Img7 from '@/assets/icons/slider2-img7.svg'

const Clients = () => {
    const [sliderRef] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 3, spacing: 0 },
            },
            "(min-width: 800px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5, spacing: 0 },
            },
            "(min-width: 1400px)": {
                slides: { perView: 6, spacing: 15 },
            },
            "(min-width: 1600px)": {
                slides: { perView: 6, spacing: 50 },
            },
        },
        slides: {
            perView: 3,
            spacing: 0
        },
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    const [sliderRef2] = useKeenSlider({
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 3, spacing: 0 },
            },
            "(min-width: 800px)": {
                slides: { perView: 4, spacing: 0 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5, spacing: 0 },
            },
            "(min-width: 1400px)": {
                slides: { perView: 6, spacing: 15 },
            },
            "(min-width: 1600px)": {
                slides: { perView: 6, spacing: 50 },
            },
        },
        slides: {
            perView: 3,
            spacing: 0
        },
        loop: true,
        renderMode: "performance",
        drag: false,
        rtl: true,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <section className='clients-section'>
            <div className="container">
                <SectionTitles title={'Our clients'} />
            </div>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img1} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img2} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img3} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img4} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img5} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img6} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider1Img7} alt='client icon' />
                </div>
            </div>
            <div ref={sliderRef2} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img1} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img2} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img3} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img4} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img5} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img6} alt='client icon' />
                </div>
                <div className="keen-slider__slide number-slide1">
                    <Image src={Slider2Img7} alt='client icon' />
                </div>
            </div>
        </section>
    )
}

export default Clients
