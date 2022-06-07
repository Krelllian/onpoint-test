import React, { useState } from 'react'
import './slider.scss'
import Slide1 from './slides/Slide1/Slide1'
import Slide2 from './slides/Slide2/Slide2'
import Slide3 from './slides/Slide3/Slide3'
import { SliderContext } from '../../context/SliderContext'

const Slider = () => {
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    let numberOfSlides: number;
    numberOfSlides = document.querySelectorAll('.slide').length

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e: any) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {

        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            const sliderContainer = document.querySelector('.slider-container') as HTMLElement
            if (currentSlideIndex + 1 < numberOfSlides) {
                sliderContainer.style.transform = `translate(${-100 * (currentSlideIndex + 1)}%)`
                setCurrentSlideIndex(currentSlideIndex + 1)
            }
        }

        if (isRightSwipe) {
            const sliderContainer = document.querySelector('.slider-container') as HTMLElement
            if (currentSlideIndex - 1 >= 0) {
                sliderContainer.style.transform = `translate(${-100 * (currentSlideIndex - 1)}%)`
                setCurrentSlideIndex(currentSlideIndex - 1)
            }
        }
    }

    const moveToHomePage = () => {
        setCurrentSlideIndex(0)
        const sliderContainer = document.querySelector('.slider-container') as HTMLElement
        sliderContainer.style.transform = `translate(0%)`
    }

    const nextSlide: any = () => {
        const sliderContainer = document.querySelector('.slider-container') as HTMLElement
        if (currentSlideIndex + 1 < numberOfSlides) {
            sliderContainer.style.transform = `translate(${-100 * (currentSlideIndex + 1)}%)`
            setCurrentSlideIndex(currentSlideIndex + 1)
        }
    }

    return (
        <section className='slider' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className='slider-container container'>
                <SliderContext.Provider value={{ moveToHomePage }}>
                    <Slide1 nextSlide={nextSlide} />
                    <Slide2 />
                    <Slide3 />
                </SliderContext.Provider>
            </div>
        </section>
    )
}

export default Slider