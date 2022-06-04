import React from 'react'
import './slider.scss'
import './bacteria.scss'
import homeSVG from '../../images/svgs/home.svg'
import btnRightArrow from '../../images/btn/btnRightArrow.png'
import onpoint from '../../images/svgs/onpoint.svg'

const bacteriaImg1 = new URL("../../images/bacteria/bacteria_1.png", import.meta.url).toString()
const bacteriaImg2 = new URL("../../images/bacteria/bacteria_2.png", import.meta.url).toString()
const bacteriaImg3 = new URL("../../images/bacteria/bacteria_3.png", import.meta.url).toString()
const bacteriaImg4 = new URL("../../images/bacteria/bacteria_4.png", import.meta.url).toString()
const bacteriaImg5 = new URL("../../images/bacteria/bacteria_5.png", import.meta.url).toString()
const bacteriaImg6 = new URL("../../images/bacteria/bacteria_6_blur.png", import.meta.url).toString()
const bacteriaImg7 = new URL("../../images/bacteria/bacteria_7_blur.png", import.meta.url).toString()
const spermImg1 = new URL("../../images/bacteria/pink_sperm_1.png", import.meta.url).toString()
const spermImg2 = new URL("../../images/bacteria/pink_sperm_2_blur.png", import.meta.url).toString()

const Slider = () => {
    return (
        <section className='slider'>
            <div className='slider-container container'>
                <nav className='slider-nav'>
                    <div className='nav__div'>
                        <img className='slide-nav__homeSVG' src={homeSVG}></img>
                    </div>
                    <div className='nav__div'>
                        <p className='slide-nav__text'>project</p>
                    </div>
                </nav>
                <p className='slide-one__text'>привет,</p>
                <h2 className='slide-one__title'>это <span>не</span> <br /> коммерческое <br /> задание
                    <button className='btn btn--slide-one'><img src={btnRightArrow}></img>Что дальше?</button></h2>
                <img className=" slider__bacteria-img slider__bacteria-img-1" src={bacteriaImg1}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-2" src={bacteriaImg2}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-3" src={bacteriaImg3}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-4" src={bacteriaImg4}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-5" src={bacteriaImg5}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-6" src={bacteriaImg6}></img>
                <img className=" slider__bacteria-img slider__bacteria-img-7" src={bacteriaImg7}></img>
                <img className=" slider__bacteria-img slider__pink-sperm-1" src={spermImg1}></img>
                <img className=" slider__bacteria-img slider__pink-sperm-2" src={spermImg2}></img>
                <img className='slider__copyright' src={onpoint}></img>
            </div>
        </section>
    )
}

export default Slider