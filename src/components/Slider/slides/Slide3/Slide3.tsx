import React, { useEffect, useState } from 'react'
import Nav from '../../Nav/Nav'
import './slide3.scss'
import './slide3Bubbles.scss'

import btnPlus from '../../../../images/btn/btnPlus.png'
import btnPrev from "../../../../images/pagination/btn_prev.png"
import bottle from "../../../../images/bottle_and_bubbles/bottle.png"
import icon1 from "../../../../images/slide3_imgs/icon1.png"
import icon2 from "../../../../images/slide3_imgs/icon2.png"
import btnClose from "../../../../images/btn/btn_close.png"
import btnNext from "../../../../images/pagination/btn_next.png"
import bubble1 from "../../../../images/bottle_and_bubbles/bubble_1.png"
import bubble2 from "../../../../images/bottle_and_bubbles/bubble_2.png"
import bubble3 from "../../../../images/bottle_and_bubbles/bubble_3.png"
import bubble4 from "../../../../images/bottle_and_bubbles/bubble_4.png"
import bubble5 from "../../../../images/bottle_and_bubbles/bubble_5.png"
import bubble6 from "../../../../images/bottle_and_bubbles/bubble_6.png"
import bubble7 from "../../../../images/bottle_and_bubbles/bubble_7.png"
import bubble8 from "../../../../images/bottle_and_bubbles/bubble_8.png"

const Slide3 = () => {
    const [currentPageIndex, setCurrentPageIndex] = useState(0)
    const [maxPagesIndex, setMaxPagesIndex] = useState(0)
    const [pagesNodeList, setPagesNodeList] = useState<NodeListOf<HTMLDivElement> | null>(null)

    const popup: HTMLButtonElement | null = document.querySelector('.slide3__popup')
    const popupSubstrate: HTMLButtonElement | null = document.querySelector('.slide3__popup-substrate')

    useEffect(() => {
        const pages: NodeListOf<HTMLDivElement> | null = document.querySelectorAll('.slide3__popup__page')
        setPagesNodeList(pages)
        setMaxPagesIndex(pages.length - 1)
    }, [])


    //popup logic
    const showPopup = () => {
        if (popup && popupSubstrate) {
            popup.classList.add('active')
            popupSubstrate.classList.add('active')
        }
    }
    const hidePopup = () => {
        if (popup && popupSubstrate) {
            popup.classList.remove('active')
            popupSubstrate.classList.remove('active')
        }
    }
    // end popup logic

    //pagination logic
    useEffect(() => {
        if (pagesNodeList) {

            const pageBtns = document.querySelectorAll('.pagination__page-btn')

            pagesNodeList.forEach((page, index) => {
                if (index === currentPageIndex) {
                    page.classList.add('active')
                } else {
                    page.classList.remove('active')
                }
            })
            pageBtns.forEach((btn, index) => {
                if (index <= currentPageIndex) {
                    btn.classList.add('active')
                } else {
                    btn.classList.remove('active')
                }
            })
        }
    }, [currentPageIndex, pagesNodeList])

    const prevSlide = () => {
        if (currentPageIndex - 1 >= 0) {
            setCurrentPageIndex(currentPageIndex - 1)
        }
    }

    const nextSlide = () => {
        if (currentPageIndex + 1 <= maxPagesIndex) {
            setCurrentPageIndex(currentPageIndex + 1)
        }
    }
    //end pagination logic

    return (
        <div className='slide slide-3'>
            <Nav />
            <h3 className='slide3__sup-title'>Ключевое сообщение</h3>
            <h1 className='slide3__title'>Brend<span>XY</span></h1>
            <div className='slide3__about'>
                <div className='slide3__about__col-1'>
                    <p className='slide3__about-text'>
                        <img src={icon2} alt=""></img>
                        Ehicula ipsum a arcu
                        cursus vitae. Eu non
                        diam phasellus
                        vestibulum lorem sed
                        risus ultricies
                    </p>
                </div>
                <div className='slide3__about__col-2'>
                    <p className='slide3__about-text-2'>
                        <img src={icon1} alt=""></img>
                        A arcu cursus vitae
                    </p>
                    <button className='btn btn--slide3' onClick={showPopup}><img src={btnPlus} alt=""></img>Подробнее</button>
                </div>

            </div>
            <img className='slide3__bottle' src={bottle} alt="" ></img>
            <img className='slide3__bubble1' src={bubble1} alt="" ></img>
            <img className='slide3__bubble2' src={bubble2} alt="" ></img>
            <img className='slide3__bubble3' src={bubble3} alt="" ></img>
            <img className='slide3__bubble4' src={bubble4} alt="" ></img>
            <img className='slide3__bubble5' src={bubble5} alt="" ></img>
            <img className='slide3__bubble6' src={bubble6} alt="" ></img>
            <img className='slide3__bubble7' src={bubble7} alt="" ></img>
            <img className='slide3__bubble8' src={bubble8} alt="" ></img>

            <div className='slide3__popup-substrate'></div>
            <div className='slide3__popup'>
                <img className='slide3__popup__close-btn' onClick={hidePopup} src={btnClose} alt="close button"></img>
                <h3 className='slide3__popup__sup-title'>Преимущества</h3>
                <h2 className='slide3__popup__title'>Brend<span>XY</span></h2>
                <div className='slide3__popup__page page1 active'>
                    <div className='popup__page-text page1__text--1'><span>01</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='popup__page-text page1__text--2'><span>02</span>
                        <p>Faucibus pulvinar elementum integer enim</p>
                    </div>
                    <div className='popup__page-text page1__text--3'><span>03</span>
                        <p>Faucibus pulvinar elementum integer enim</p>
                    </div>
                </div>
                <div className='slide3__popup__page page2'>
                    <div className='popup__page-text page2__text--4'><span>04</span>
                        <p>Mi bibendum neque egestas conque quisque egestas diam</p>
                    </div>
                    <div className='popup__page-text page2__text--5'><span>05</span>
                        <p>Venenatis lectus magma fringilla urna</p>
                    </div>
                    <div className='popup__page-text page2__text--6'><span>06</span>
                        <p>Venenatis lectus magma fringilla urna</p>
                    </div>
                </div>
                <div className='slide__popup__pagination'>
                    <img className={`pagination__prev-btn ${currentPageIndex <= 0 ? 'disabled' : ''}`} onClick={prevSlide} src={btnPrev} alt="previous page"></img>
                    <img className='pagination__page-btn active' alt="" ></img>
                    <img className='pagination__page-btn' alt="" ></img>
                    <img className={`pagination__next-btn ${currentPageIndex === maxPagesIndex ? 'disabled' : ''}`} onClick={nextSlide} src={btnNext} alt="next page"></img>
                </div>
            </div>
        </div>
    )
}

export default Slide3

