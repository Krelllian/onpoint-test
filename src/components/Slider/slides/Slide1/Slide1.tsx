import React from 'react'
import './slide1.scss'
import './bacteria.scss'
import btnRightArrow from '../../../../images/btn/btnRightArrow.png'
import Nav from '../../Nav/Nav'

const bacteriaImg1 = new URL("../../../../images/bacteria/bacteria_1.png", import.meta.url).toString()
const bacteriaImg2 = new URL("../../../../images/bacteria/bacteria_2.png", import.meta.url).toString()
const bacteriaImg3 = new URL("../../../../images/bacteria/bacteria_3.png", import.meta.url).toString()
const bacteriaImg4 = new URL("../../../../images/bacteria/bacteria_4.png", import.meta.url).toString()
const bacteriaImg5 = new URL("../../../../images/bacteria/bacteria_5.png", import.meta.url).toString()
const bacteriaImg6 = new URL("../../../../images/bacteria/bacteria_6_blur.png", import.meta.url).toString()
const bacteriaImg7 = new URL("../../../../images/bacteria/bacteria_7_blur.png", import.meta.url).toString()
const spermImg1 = new URL("../../../../images/bacteria/pink_sperm_1.png", import.meta.url).toString()
const spermImg2 = new URL("../../../../images/bacteria/pink_sperm_2_blur.png", import.meta.url).toString()

interface ISlide1 {
    nextSlide: any
}

const Slide1 = ({ nextSlide }: ISlide1) => {

    return (
        <div className='slide slide-1'>
            <Nav />
            <p className='slide-one__text'>привет,</p>
            <h2 className='slide-one__title'>это <span>не</span> <br /> коммерческое <br /> задание
                <button className='btn btn--slide-one' onClick={nextSlide}><img src={btnRightArrow} alt="right arrow button"></img>Что дальше?</button></h2>
            <img className=" slider__bacteria-img slider__bacteria-img-1" src={bacteriaImg1} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-2" src={bacteriaImg2} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-3" src={bacteriaImg3} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-4" src={bacteriaImg4} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-5" src={bacteriaImg5} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-6" src={bacteriaImg6} alt="" ></img>
            <img className=" slider__bacteria-img slider__bacteria-img-7" src={bacteriaImg7} alt="" ></img>
            <img className=" slider__bacteria-img slider__pink-sperm-1" src={spermImg1} alt="" ></img>
            <img className=" slider__bacteria-img slider__pink-sperm-2" src={spermImg2} alt="" ></img>
        </div>
    )
}

export default Slide1