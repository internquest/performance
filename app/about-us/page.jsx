'use client'
import React, { useEffect } from 'react'
import Hero from '../components/aboutUs/Hero'
import Aboutdetails from '../components/Aboutdetails'
import OurPillars from '../components/aboutUs/OurPillars'

const page = () => {
    useEffect(() => {

        (
    
          async () => {
    
            const LocomotiveScroll = (await import('locomotive-scroll')).default
    
            const locomotiveScroll = new LocomotiveScroll();
    
          }
    
        )()
    
      })
const abouthero=['The art of assessing soft','skills']


  return (
    <main>
        <div>
            <div>
            <div className="c-section c-section--title-text-center c-section--hero c-section--hero-1 c-section--dark c-section--dark-2"
  data-animate-section=""
  data-nav-section="dark"
>
                <Hero para={abouthero} identifier={'About Us'}/>
                </div>
                <Aboutdetails/>
                <OurPillars/>
            </div>
        </div>
    </main>
  )
}

export default page