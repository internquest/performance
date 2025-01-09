'use client'
import React, { useEffect, useRef, useState } from 'react'
import HrCards from './HrCards'
import { useWindowSize } from '@uidotdev/usehooks'
import { useMotionValueEvent, useScroll, useTransform } from "motion/react"
const Hrchalleneges = () => {
    const [cardswidth,setCardsWidth]=useState(0)
    const [cardstransval,setCardsTransVal]=useState(0)
    const cardsRef=useRef(null)
    const containeref=useRef(null)
    const windowwidth=useWindowSize().width
    const windowheiht=useWindowSize().height

    useEffect(()=>{
        // console.log(windowwidth);
        const length=cardsRef.current

console.log(length.getBoundingClientRect().width);
setCardsWidth(length.getBoundingClientRect().width)
    },[windowwidth,windowheiht])
const {scrollYProgress}=useScroll({
    target:containeref,
    offset:['start start','end end']
})

// useMotionValueEvent(scrollYProgress,'change',(x)=>{
//     console.log(x);
    
// })

const cardsmoitonval=useTransform(scrollYProgress,[0,1],[0,cardswidth-windowwidth/2])
useMotionValueEvent(cardsmoitonval,'change',(x)=>{
setCardsTransVal(x)
// console.log(x);
}

)
  return (
    <section ref={containeref} className="c-section--dark-1 c-cards c-cards--5" data-animate-section style={{height: `${cardswidth-(windowheiht*.012)}px`}}>
        <div style={{transform: `translateY(${cardstransval}px)`}} className="c-cards-inner" >
        <div className="c-cards-title wrap wrap--max" style={{transform: `translateX(${-cardstransval/2}px)`}}>
			<div className="c-grid">
				<div className="col-span-8 md:col-span-6">
											<h2 className="ts-eyebrow ts-indicator" data-animate="" data-animate-y="50">OUR PRODUCTS &amp; SERVICES</h2>
																<div className="ts-2" data-animate-title="" data-animate-delay="100"><div className="title-line"><div className="title-line-inner"><div className="title-line"><div className="title-line-inner">  Answers to </div></div></div></div><div className="title-line"><div className="title-line-inner"><div className="title-line"><div className="title-line-inner">your HR </div></div></div></div><div className="title-line"><div className="title-line-inner"><div className="title-line"><div className="title-line-inner">challenges </div></div></div></div></div>
														</div>
			</div>
		</div>

          <div ref={cardsRef} className="c-cards-content" style={{transform: `translateX(${-cardstransval}px)`}}>
<div  className="c-cards-content-inner no-scrollbar">
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    <HrCards/>
    {/* <HrCards/> */}
</div>
        </div>
        
        </div>
    </section>
  )
}

export default Hrchalleneges