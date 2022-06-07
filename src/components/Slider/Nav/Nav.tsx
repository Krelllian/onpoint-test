import React, { useContext } from 'react'
import './nav.scss'
import homeSVG from '../../../images/svgs/home.svg'
import onpoint from '../../../images/svgs/onpoint.svg'
import { SliderContext } from '../../../context/SliderContext'

const Nav = () => {
    const { moveToHomePage }: any = useContext(SliderContext)

    const returnHome = () => {
        moveToHomePage()
    }

    return (
        <>
            <nav className='slider-nav'>
                <div className='nav__div'>
                    <img className='slide-nav__homeSVG' onClick={returnHome} src={homeSVG} alt="Home page button"></img>
                </div>
                <div className='nav__div'>
                    <p className='slide-nav__text'>project</p>
                </div>
            </nav>

            <img className='slider__copyright' src={onpoint} alt="onpoint copyright"></img>
        </>
    )
}

export default Nav