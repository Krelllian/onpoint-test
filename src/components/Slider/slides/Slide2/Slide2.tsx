import React, { useEffect, useRef, useState } from 'react'
import Nav from '../../Nav/Nav'
import './slide2.scss'
import './slide2Sperm.scss'

import spermImg1 from "../../../../images/slide2_imgs/sperm_1.png"
import spermImg2 from "../../../../images/slide2_imgs/sperm_2.png"
import spermImg3 from "../../../../images/slide2_imgs/sperm_3.png"
import spermImg4 from "../../../../images/slide2_imgs/sperm_4.png"
import spermImg5 from "../../../../images/slide2_imgs/sperm_5.png"

const Slide2 = () => {
    const [isSpermVisible, setIsSpermVisible] = useState(false)
    const [sliderPosition, setSliderPosition] = useState(0)

    const slidePointMin = -10;
    const slidePointMax = 355;

    const sperm1Ref: any = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsSpermVisible(entry.isIntersecting)
        }, { threshold: 0.8 })
        observer.observe(sperm1Ref.current)
    }, [])


    const startSlide = (event: any) => {
        const slideCoordY = event.changedTouches[0].clientY - 266
        if (slideCoordY >= slidePointMin && slideCoordY <= slidePointMax) {
            setSliderPosition(slideCoordY)
        }
    }

    if (isSpermVisible) {
        const spermImgs: NodeListOf<HTMLImageElement> | null = document.querySelectorAll('.slide-2__sperm')
        if (spermImgs) {
            spermImgs.forEach(el => el.classList.add('active'))
        }
    }

    if (!isSpermVisible) {
        const spermImgs: NodeListOf<HTMLImageElement> | null = document.querySelectorAll('.slide-2__sperm')
        if (spermImgs) {
            spermImgs.forEach(el => el.classList.remove('active'))
        }
    }

    return (
        <div className='slide slide-2'>
            <Nav />
            <h2 className='slide-2__title'>Текст <br /> сообщения</h2>
            <div className="slider__track"></div>

            <div className="slide-2__scrollbar">
                <div className="slide-2__scrollbar__track"></div>
                <div className="slide-2__scrollbar__thumb" style={{ top: sliderPosition + 'px' }} onTouchMove={startSlide}></div>
            </div>

            <div className='slide-2__text-wrapper'>
                <p className='slide-2__text' style={{ marginTop: - 2 * sliderPosition / (slidePointMax / 100) + 'px' }}><b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do

                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                    tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                    dignissim diam quis enim lobortis. Est sit amet facilisis magna.
                    Neque laoreet suspendisse interdum consectetur libero id.
                    Nec ullamcorper sit amet risus nullam eget felis eget.
                    Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                    Euismod quis viverra nibh cras pulvinar mattis nunc.
                    Massa massa ultricies mi quis. Sit amet massa vitae tortor
                    condimentum lacinia. Et malesuada fames ac turpis egestas
                    integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                    faucibus interdum posuere.

                    Amet justo donec enim diam vulputate ut pharetra sit.
                    Risus ultricies tristique nulla aliquet enim tortor at auctor.
                    Velit sed ullamcorper morbi tincidunt ornare massa.
                    Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                    diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                    volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                    condimentum lacinia quis vel.
                </p>
                <div className="shadow shadow--bottom"></div>
            </div>
            <img ref={sperm1Ref} className="slide-2__sperm slide-2__sperm-img1" src={spermImg1} alt=""></img>
            <img className="slide-2__sperm slide-2__sperm-img2" src={spermImg2} alt=""></img>
            <img className="slide-2__sperm slide-2__sperm-img3" src={spermImg3} alt=""></img>
            <img className="slide-2__sperm slide-2__sperm-img4" src={spermImg4} alt=""></img>
            <img className="slide-2__sperm slide-2__sperm-img5" src={spermImg5} alt=""></img>

        </div>
    )
}

export default Slide2