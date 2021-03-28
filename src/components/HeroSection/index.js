import React, {useState} from 'react'
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../../ButtonElement'



const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src='https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='E-commerce image' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Welcome To The Jungle</HeroH1>
                <HeroP> Sign Up for Detailed Training & Nutrition </HeroP>
                <HeroBtnWrapper>
                    <Button to='SignUp' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection