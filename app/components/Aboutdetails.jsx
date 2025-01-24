'use client'
import React, { useEffect, useRef, useState } from 'react'
import {motion, useMotionValueEvent,useScroll, useTransform } from "motion/react"
import { useWindowSize } from '@uidotdev/usehooks'

const Aboutdetails = () => {
const ref=useRef(null)
const scrollheihgt=useRef(null)
const bar=useRef(null)
const [scrollheight,setscrollHeight]=useState(0)
const [barheight,setbarheight]=useState(0)
const [scrollprogress,setscrollprogress]=useState(0)
// const windowheihgt=useWindowSize().height
    useEffect(()=>{
const height=scrollheihgt.current.getBoundingClientRect().height
const barheight=bar.current.getBoundingClientRect().height
setscrollHeight(height)
setbarheight(barheight)
    },[])
    
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:['start start','end end']
    })
    
    useMotionValueEvent(scrollYProgress,'change',(x)=>setscrollprogress(x))
const scrollmotionvalue=useTransform(scrollYProgress,[0,1],[0,scrollheight-barheight])
  return (
    <section  className="c-section c-section--dark c-section--dark-2 c-lock-scroll-1" data-nav-section="dark">
        <div className="wrap wrap--max">
			<div className="c-lock-scroll-cards-wrap">
        <div className="c-lock-scroll-cards-scrollbar-wrap">
          <div ref={scrollheihgt} className="c-lock-scroll-cards-scrollbar">
            <motion.div ref={bar} className="c-lock-scroll-cards-scrollbar-inner" style={{y:scrollmotionvalue}}></motion.div>
          </div>
        </div>

				<div ref={ref} className="c-lock-scroll-cards">

                <div className="c-lock-scroll-card mobile:!relative" data-animate-section="" style={{backgroundColor:scrollprogress>=.333 && 'rgb(11, 24, 65)'}}>
									<div className="c-grid items-center c-lock-scroll-card-inner" style={{opacity: 1}}>
										<div className="c-lock-scroll-card-img col-span-10 md:col-span-6 md:col-start-2" data-animate="" data-animate-scale="0.8" >
                                        <svg className="c-illustration-ai" width="399" height="252" viewBox="0 0 399 252" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M181.097 27.9961H69.9594V83.9903H181.097V27.9961Z" fill="#2D62E8"></path>
  <path d="M230.092 83.9922H181.096V125.989H230.092V83.9922Z" fill="#010219"></path>
  <path className="c-illustration-part box-1" d="M251.09 0H198.731C193.861 0 189.913 3.94766 189.913 8.81735V19.1804C189.913 24.0501 193.861 27.9978 198.731 27.9978H251.09C255.96 27.9978 259.908 24.0501 259.908 19.1804V8.81736C259.908 3.94766 255.96 0 251.09 0Z" fill="url(#Svg_GZZN4Y93C_JDNWPRWQC)" style={{transform: 'translate(-36.1931px, 0px) scaleX(1) scaleY(1) rotate(0deg)', opacity: 1}}></path>
  <path d="M279.088 125.988H181.096V181.984H279.088V125.988Z" fill="#2F4A8F"></path>
  <mask id="Svg_GZZN4Y93C_YLJWT829N" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="181" y="125" width="99" height="57">
    <path d="M279.088 125.989H181.096V181.984H279.088V125.989Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_GZZN4Y93C_YLJWT829N)">
    <path d="M328.085 168.036H181.096" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M328.085 153.985H181.096" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M328.085 139.988H181.096" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M195.096 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M209.092 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M223.092 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M237.093 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M251.088 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path d="M265.089 195.983V125.989" stroke="#073080" strokeWidth="1.04992" strokeMiterlimit="1.5" strokeLinecap="square"></path>
  </g>
  <path d="M181.082 180.102H86.3381V252H181.082V180.102Z" fill="#010219"></path>
  <path d="M181.096 126.004H83.1037V181.922H181.096V126.004Z" fill="#0B1841"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M155.453 0.0932617H126.677C91.9178 0.0930937 60.1423 19.7327 44.5995 50.8232C28.0782 83.8706 8.28756 123.458 1.00686 138.022C0.392367 139.251 0.45805 140.71 1.18056 141.879C1.9029 143.048 3.17909 143.759 4.55322 143.759C11.5416 143.759 21.7382 143.759 21.7382 143.759C21.7382 143.759 19.5435 169.517 17.7376 190.71C17.1374 197.755 19.5178 204.729 24.3 209.937C29.0824 215.145 35.8288 218.109 42.8993 218.11C56.4461 218.112 69.9136 218.114 69.9136 218.114L51.0734 251.982L96.896 251.978L155.453 0.0935975V0.0932617Z" fill="url(#Svg_GZZN4Y93C_1JQOCX2S2)"></path>
  <mask id="Svg_GZZN4Y93C_WC95FZRKN" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="156" height="252">
    <path d="M155.453 0.0942383H126.677C91.9178 0.0940703 60.1423 19.7337 44.5995 50.8241C28.0782 83.8716 8.28756 123.459 1.00686 138.023C0.392367 139.252 0.45805 140.711 1.18056 141.88C1.9029 143.049 3.17909 143.76 4.55322 143.76C11.5416 143.76 21.7382 143.76 21.7382 143.76C21.7382 143.76 19.5435 169.518 17.7376 190.711C17.1374 197.756 19.5178 204.73 24.3 209.938C29.0824 215.146 35.8288 218.11 42.8993 218.111C56.4461 218.113 69.9136 218.115 69.9136 218.115L51.0734 251.983L96.896 251.979L155.453 0.0945741V0.0942383Z" fill="white"></path>
  </mask>
  <path className="c-illustration-part box-3" d="M335.084 181.972H296.723C291.854 181.972 287.906 185.92 287.906 190.79V201.164C287.906 206.034 291.854 209.982 296.723 209.982H335.084C339.953 209.982 343.901 206.034 343.901 201.164V190.79C343.901 185.92 339.953 181.972 335.084 181.972Z" fill="#2D62E8" style={{transform: 'translate(-137.554px, 0px) scaleX(1) scaleY(1) rotate(0deg)', opacity: 1}}></path>
  <path className="c-illustration-part box-2" d="M389.261 126.007H329.902C325.032 126.007 321.084 129.955 321.084 134.825V145.172C321.084 150.042 325.032 153.989 329.902 153.989H389.261C394.13 153.989 398.078 150.042 398.078 145.172V134.825C398.078 129.955 394.13 126.007 389.261 126.007Z" fill="#050B28" style={{transform: 'translate(-78.3741px, 0px) scaleX(1) scaleY(1) rotate(0deg)', opacity: 1}}></path>
<path d="M321.014 41.9609H279.018V83.9573H321.014V41.9609Z" fill="#69DFCA"></path>
  <g mask="url(#Svg_GZZN4Y93C_WC95FZRKN)">
    <path d="M188.527 83.9917H-24.8931V126.004H188.527V83.9917Z" fill="#25A4FF"></path>
    <path d="M162.497 125.988H-39.8341V182.476H162.497V125.988Z" fill="#2D62E8"></path>
    <path d="M162.497 -5.34424H-39.8341V83.9909H162.497V-5.34424Z" fill="url(#Svg_GZZN4Y93C_3I14XZXON)"></path>
    <path d="M162.497 182.476H-39.8341V255.477H162.497V182.476Z" fill="#12389C"></path>
  </g>
  <path fillRule="evenodd" clipRule="evenodd" className="c-illustration-part star" d="M61.4659 83.9922L64.1071 96.8707L73.8135 88.0042L68.3805 99.9756L81.4448 98.5077L70.0128 104.999L81.4448 111.491L68.3805 110.023L73.8135 121.994L64.1071 113.128L61.4659 126.006L58.8248 113.128L49.1183 121.994L54.5514 110.023L41.4871 111.491L52.919 104.999L41.4871 98.5077L54.5514 99.9756L49.1183 88.0042L58.8248 96.8707L61.4659 83.9922Z" fill="#C3E6FF" style={{transform: 'translate(0px, 0px) scaleX(1) scaleY(1) rotate(43.0284deg)', opacity: 1}}></path>
  <path d="M279.088 83.9922H230.092V126.004H279.088V83.9922Z" fill="#07296F"></path>
 
  <path d="M285.362 64.6652L295.017 74.5518L316.465 51.3628" stroke="#E9F3FF" strokeWidth="1.57486" strokeMiterlimit="1.5" strokeLinecap="square"></path>

  <defs>
    <linearGradient id="Svg_GZZN4Y93C_JDNWPRWQC" x1="250.738" y1="-27.9294" x2="250.738" y2="94.6543" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#09215A"></stop>
    </linearGradient>
    <linearGradient id="Svg_GZZN4Y93C_1JQOCX2S2" x1="1.33164" y1="286.718" x2="1.33164" y2="-460.808" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2D62E8"></stop>
      <stop offset="1" stopColor="#003AA7"></stop>
    </linearGradient>
    <linearGradient id="Svg_GZZN4Y93C_3I14XZXON" x1="-5.19974" y1="93.6514" x2="-5.19974" y2="-176.912" gradientUnits="userSpaceOnUse">
      <stop stopColor="#9CB8FF"></stop>
      <stop offset="0.2" stopColor="#ACCAFF"></stop>
      <stop offset="0.42" stopColor="#BCDDFF"></stop>
      <stop offset="1" stopColor="#C3E6FF"></stop>
    </linearGradient>
  </defs>
</svg>
  																					</div>
										<div className="c-lock-scroll-card-text col-span-10 md:col-span-6 md:col-start-8">
											<h3 className="ts-3" data-animate-title="" ><div className="title-line"><div className="title-line-inner" > A soft skills model transposable to all </div></div><div className="title-line"><div className="title-line-inner" >professional contexts </div></div></h3>
											<div className="ts-p" data-split-articles="" data-animate-paragraph="" data-animate-delay="200" >
												<div ><div className="line"><div className="line-inner" >Our IDEAC model (Influence, Decision, Efficiency, </div></div><div className="line"><div className="line-inner" >Agility, Collaboration) was created on a 35 key soft </div></div><div className="line"><div className="line-inner" >skills referential that impacts the current and future </div></div><div className="line"><div className="line-inner" >performance of organisations. With this learning </div></div><div className="line"><div className="line-inner" >model, assess the soft skills that really make the </div></div><div className="line"><div className="line-inner" >difference in your context.</div></div>
                                                </div>
											</div>
										</div>
									</div>
								</div>

                 <div className="c-lock-scroll-card mobile:!relative c-lock-scroll-card--title" data-animate-section="" style={{backgroundColor: scrollprogress>=.666&&'rgb(11, 24, 65)'}}>
									<div className="flex items-center w-full c-lock-scroll-card-inner" style={{opacity: 1}}>
										<div className="c-lock-scroll-card-title w-full">
											<span className="ts-eyebrow ts-indicator" data-animate="" data-animate-y="50" >PEOPLE AT THE HEART OF ASSESSMENT</span>
											<h3 className="ts-3" data-animate-title="" data-animate-delay="100" ><div className="title-line"><div className="title-line-inner" > Our philosophy puts the individual at the centre of all our </div></div><div className="title-line"><div className="title-line-inner" >efforts. From the assessee to the assessor, our tools and </div></div><div className="title-line"><div className="title-line-inner" >services foster a rich dialogue and a deep understanding </div></div><div className="title-line"><div className="title-line-inner" >of people’s needs. </div></div></h3>
										</div>
									</div>
								</div>

			<div className="c-lock-scroll-card mobile:!relative" data-animate-section="">
									<div className="c-grid items-center c-lock-scroll-card-inner" style={{opacity:1}}>
										<div className="c-lock-scroll-card-img col-span-10 md:col-span-6 md:col-start-2" data-animate="" data-animate-scale="0.8" >
		<svg className="c-illustration-security" width="419" height="294" viewBox="0 0 419 294" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g className="c-illustration-part blue-paper" style={{transform: 'translate(1.05413px, 2.07684px)'}}>
    <path fillRule="evenodd" clipRule="evenodd" d="M199.093 0H96.9529L53.1787 43.7987V189.794H199.093V0.000526633V0Z" fill="#2D62E8"></path>
    <path className="check" d="M97.8145 97.6786L115.575 115.865L155.028 73.209" stroke="#12389C" strokeWidth="2.89694" strokeMiterlimit="1.5" strokeLinecap="square"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M96.8464 0V43.8807H53.1787L96.8464 0Z" fill="#12389C"></path>
  </g>
<path className="c-illustration-part box-1" d="M31.4162 189.795H10.9995C4.97211 189.795 0.0859375 194.681 0.0859375 200.708V221.125C0.0859375 227.153 4.9721 232.039 10.9995 232.039H31.4162C37.4436 232.039 42.3298 227.153 42.3298 221.125V200.708C42.3298 194.681 37.4436 189.795 31.4162 189.795Z" fill="#25A4FF" style={{transform: 'translate(3.86961px, 0.331103px)'}}></path>
<g className="c-illustration-part eye-layer" style={{transform: 'translate(-3.08149px, 1.40072px)'}}>
  <path fillRule="evenodd" clipRule="evenodd" d="M323.415 186.67L57.1489 293.176L199.157 186.67H323.415Z" fill="url(#Svg_OVU3721UJ_98C1171ZI)"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M199.159 80.1621L57.1507 293.175L199.159 186.669V80.1621Z" fill="#2F4A8F"></path>
  <path d="M199.158 80.1621H323.415V186.669H199.158V80.1621Z" fill="#050B28"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M261.25 114.865C291.117 114.865 310.498 133.302 310.498 133.302C310.498 133.302 292.601 151.739 261.25 151.739C229.899 151.739 212.002 133.302 212.002 133.302C212.002 133.302 231.383 114.865 261.25 114.865Z" fill="#9CB8FF"></path>
  <circle cx="261.226" cy="133.126" r="18.4482" fill="white"></circle>
  <path className="c-illustration-part star" fillRule="evenodd" clipRule="evenodd" d="M261.188 115.238L263.454 126.273L271.785 118.676L267.122 128.933L278.335 127.676L268.523 133.238L278.335 138.8L267.122 137.542L271.785 147.8L263.454 140.203L261.188 151.237L258.921 140.203L250.59 147.8L255.253 137.542L244.04 138.8L253.852 133.238L244.04 127.676L255.253 128.933L250.59 118.676L258.921 126.273L261.188 115.238Z" fill="#2D62E8" style={{transform:' translate(0px, 0px) scaleX(1) scaleY(1) rotate(48.528deg)', opacity: 1}}></path>
</g>
<g className="c-illustration-part switch" style={{transform: 'translate(1.18124px, -2.75622px)'}}>
  <path d="M210.281 45.1816L167.937 45.1816C164.32 45.1816 161.389 42.2499 161.389 38.6335L161.389 30.3392C161.389 26.7227 164.32 23.791 167.937 23.791L210.281 23.791C213.898 23.791 216.83 26.7227 216.83 30.3392L216.83 38.6335C216.83 42.2499 213.898 45.1816 210.281 45.1816Z" fill="#69DFCA"></path>
  <path className="c-illustration-part switch-box" d="M218.689 45.1582L212.259 45.1582C208.643 45.1582 205.711 42.2265 205.711 38.6101L205.711 30.4051C205.711 26.7886 208.643 23.8569 212.259 23.8569L218.689 23.8569C222.305 23.8569 225.237 26.7886 225.237 30.4051L225.237 38.6101C225.237 42.2265 222.305 45.1582 218.689 45.1582Z" fill="#203A7B" style={{transform: 'translate(-7px, 0px) scaleX(1) scaleY(1) rotate(0deg)', opacity: 1}}></path>
</g>
<path className="c-illustration-part box-2" d="M381.998 186.6H343.135C338.313 186.6 334.404 190.509 334.404 195.33V206.043C334.404 210.865 338.313 214.774 343.135 214.774H381.998C386.82 214.774 390.729 210.865 390.729 206.043V195.33C390.729 190.509 386.82 186.6 381.998 186.6Z" fill="#9CAEDD" style={{transform: 'translate(-1.93373px, 4.34107px)'}}></path>
<path className="c-illustration-part box-3" d="M410.093 158.48H399.379C394.557 158.48 390.648 162.389 390.648 167.211V177.925C390.648 182.747 394.557 186.656 399.379 186.656H410.093C414.915 186.656 418.824 182.747 418.824 177.925V167.211C418.824 162.389 414.915 158.48 410.093 158.48Z" fill="#050B28" style={{transform: 'translate(3.0702px, -1.13669px)'}}></path>
<defs>
<linearGradient id="Svg_OVU3721UJ_98C1171ZI" x1="128.153" y1="221.958" x2="128.153" y2="293.177" gradientUnits="userSpaceOnUse">
<stop stopColor="#17274F"></stop>
<stop offset="1" stopColor="#071744"></stop>
</linearGradient>
</defs>
</svg>
																					</div>
										<div className="c-lock-scroll-card-text col-span-10 md:col-span-6 md:col-start-8">
											<h3 className="ts-3" data-animate-title="" ><div className="title-line"><div className="title-line-inner" > At the forefront of Psychometric </div></div><div className="title-line"><div className="title-line-inner" >technology </div></div></h3>
											<div className="ts-p" data-split-articles="" data-animate-paragraph="" data-animate-delay="200" >
												<div ><div className="line"><div className="line-inner" >PerformanSe combines 35 years of expertise, </div></div><div className="line"><div className="line-inner" >machine learning and IRT for ultra-precise tools. </div></div><div className="line"><div className="line-inner" >Our data, anonymised and hosted in France, feed </div></div><div className="line"><div className="line-inner" >algorithms which are constantly refined, offering the </div></div><div className="line"><div className="line-inner" >most predictive assessments on the market.</div></div></div>
											</div>
										</div>
									</div>
								</div>

											
				</div>
			</div>
		</div>
    </section>
  )
}

export default Aboutdetails