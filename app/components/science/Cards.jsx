'use client'
import { useMotionValueEvent, motion,useScroll, useTransform } from 'motion/react'
import React, { useRef, useState } from 'react'

const Cards = () => {
    const [scrollval,setscrollval]=useState(0)
    const [secopval,setsecopval]=useState(1)
    const cardsref=useRef(null)
    const {scrollYProgress}=useScroll(
        {
            target:cardsref,
            offset:['start start','end start']
            
        }
    )
    const seccardmotionval=useTransform(scrollYProgress,[.3333,1],[1,-1.34])
    // useMotionValueEvent(seccardmotionval,'change',(x)=>console.log(x));
    useMotionValueEvent(seccardmotionval,'change',(x)=>setsecopval(x));

    useMotionValueEvent(scrollYProgress,'change',(x)=>setscrollval(x))
  return (
    <div ref={cardsref} className="c-cards-wrap">
  <section
    className="c-cards c-cards--2 c-cards-2--alt c-cards--blue-ice"
    data-animate-section=""
    data-nav-section="light"
  
  >
    <div className="wrap wrap--max"   style={{opacity:1-(scrollval*4.34)}}>
      <div className="flex items-center text-center">
        <div className="c-cards-2-wrap">
          <span
            className="c-card-item-content-details text-center"
            data-animate=""
            data-animate-y={50}
            style={{}}
          >
            <span className="ts-eyebrow">The Big Five Theory</span>
          </span>
          <h2
            className="ts-3"
            data-animate-title=""
            data-animate-delay={100}
            style={{}}
          >
            <div className="title-line">
              <div className="title-line-inner" style={{}}>
                Personality Assessment
              </div>
            </div>
          </h2>
          <div
            className="ts-p ts-p--xl"
            data-animate-paragraph=""
            data-animate-delay={300}
            data-split-articles=""
            style={{}}
          >
            <div style={{}} >
            <div className="line">
              <div className="line-inner" style={{}}>
                The scientifically validated theory for measuring personality.
                It also{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                provides a nuanced and accurate understanding of personality,
                based{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                on five key dimensions—Openness, Conscientiousness,
                Extraversion,{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                Agreeableness, and Neuroticism.
              </div>
            </div>
            </div >
          </div>
          <div
            className="ts-eyebrow c-cards-count"
            data-animate=""
            data-animate-delay={400}
            style={{}}
          >
            01 &nbsp;&nbsp;•&nbsp;&nbsp; 03
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    className="c-cards c-cards--2 c-cards-2--alt c-cards--cyan"
    data-animate-section=""
    data-nav-section="light"
  >
    <motion.div className="wrap wrap--max" style={{ opacity: secopval}}>
      <div className="flex items-center text-center">
        <div className="c-cards-2-wrap">
          <span
            className="c-card-item-content-details text-center"
            data-animate=""
            data-animate-y={50}
            style={{}}
          >
            <span className="ts-eyebrow">McClelland's Theory</span>
          </span>
          <h2
            className="ts-3"
            data-animate-title=""
            data-animate-delay={100}
            style={{}}
          >
            <div className="title-line">
              <div className="title-line-inner" style={{}}>
                Motivation Assessment
              </div>
            </div>
          </h2>
          <div
            className="ts-p ts-p--xl"
            data-animate-paragraph=""
            data-animate-delay={300}
            data-split-articles=""
            style={{}}
          >
            <div style={{}} >
            <div className="line">
              <div className="line-inner" style={{}}>
                Regardless of our gender or cultural background, we all have{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                motivations at the root of our engagement. Some stand out as our
                main{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                sources of satisfaction and shape our paths and most of our
                decisions{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                at work.
              </div>
            </div>
            </div >
          </div>
          <div
            className="ts-eyebrow c-cards-count"
            data-animate=""
            data-animate-delay={400}
            style={{}}
          >
            02 &nbsp;&nbsp;•&nbsp;&nbsp; 03
          </div>
        </div>
      </div>
    </motion.div>
  </section>
  <section
    className="c-cards c-cards--2 c-cards-2--alt c-cards--purple-lavender"
    data-animate-section=""
    data-nav-section="light"
  >
    <div className="wrap wrap--max">
      <div className="flex items-center text-center">
        <div className="c-cards-2-wrap">
          <span
            className="c-card-item-content-details text-center"
            data-animate=""
            data-animate-y={50}
            style={{}}
          >
            <span className="ts-eyebrow">General Cognitive Ability Theory</span>
          </span>
          <h2
            className="ts-3"
            data-animate-title=""
            data-animate-delay={100}
            style={{}}
          >
            <div className="title-line">
              <div className="title-line-inner" style={{}}>
                Cognitive Assessment
              </div>
            </div>
          </h2>
          <div
            className="ts-p ts-p--xl"
            data-animate-paragraph=""
            data-animate-delay={300}
            data-split-articles=""
            style={{}}
          >
            <div style={{}} >
            <div className="line">
              <div className="line-inner" style={{}}>
                While individuals may have specific skills in certain areas
                (such as{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                mathematics or music), the presence of a strong General
                Cognitive{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-inner" style={{}}>
                Ability is a key factor for success in the professional world.
              </div>
            </div>
            </div >
          </div>
          <div
            className="ts-eyebrow c-cards-count"
            data-animate=""
            data-animate-delay={400}
            style={{}}
          >
            03 &nbsp;&nbsp;•&nbsp;&nbsp; 03
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  )
}

export default Cards