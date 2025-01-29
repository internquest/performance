'use client'
import React, { useEffect, useRef, useState } from 'react'
import Hero from '../components/aboutUs/Hero'
import Aboutdetails from '../components/Aboutdetails'
import OurPillars from '../components/aboutUs/OurPillars'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import { windowwidth } from '../utiliity/windowsize'

const page = () => {
  const locomotiveScrollRef = useRef(null);
  
    // useEffect(() => {

    //     (
    
    //       async () => {
    
    //         const LocomotiveScroll = (await import('locomotive-scroll')).default
    
    //         const locomotiveScroll = new LocomotiveScroll();
    
    //       }
    
    //     )()
    
    //   })


    useEffect(() => {

      (
  
        async () => {
  
          const LocomotiveScroll = (await import('locomotive-scroll')).default
  
           locomotiveScrollRef.current = new LocomotiveScroll();
  // console.log(locomotiveScrollRef.current);
  
        }
  
      )()
      return () => {
        if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.destroy();
        }
  
    }
  
    }, []);
const abouthero=windowwidth()>799 ?['The art of assessing soft','skills']:['The art of assessing','soft skills']


  return (
    <>
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

    <Navbar lenisref={locomotiveScrollRef}/>
    
    </>
  )
}

export default page