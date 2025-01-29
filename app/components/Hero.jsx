'use client'
import React, { useEffect } from 'react'
import RevealButton from './RevealButton'
import { windowwidth } from '../utiliity/windowsize';

const Hero = ({loading}) => {
    function animateTransform(element, startValue, endValue,opacstart,opacend, duration) {
        const startTime = performance.now();
      
        function step(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
      
          const currentValue = startValue + (endValue - startValue) * progress;
          const currentValue2 = opacstart + (opacend - opacstart) * progress;
      element.style.opacity = currentValue2;
          element.style.transform = `translateY(${currentValue}%)`; // Example: translateX
      
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }
      
        requestAnimationFrame(step);
      }

const width=windowwidth()
      useEffect(() => {
        if(width>799){
        const lines=document.querySelectorAll('.line-inner')
        // console.log('shva')
        
        const key=setTimeout(() => {

//     animateTransform(document.querySelectorAll('.line-inner'), 100, 0, 1000);const key = setTimeout(() => {
    Array.from(lines).forEach((line, index) => {
        const delay = index * 50; // Adjust the multiplier for desired staggering ffect
        setTimeout(() => {
            animateTransform(line, 50, 0, 0, 1, 500);
        }, delay);
    });
}, 2000);

        return () => clearTimeout(key);
}
      }, [width])

  return (
    <>
    {
        width>799?
        <div className='relative block w-full my-0 mx-auto py-0 px-[6.25rem] m900:px-[3.75rem] mobile:px-[1.5625rem] mobile:max-w-[23.4375rem] '>
        <h1 className='text-[11.15vw] mobile:text-[3.25rem] mobile:pt-[10.75rem] mobile:leading-[1.05] leading-[1] tracking-[-.04em] pt-[13.75rem]'>
        <div className="grid grid-cols-10 md:grid-cols-[repeat(14,minmax(0,1fr))] gap-x-[1.25rem] md:gap-x-[3.75rem]">
  <div className="col-span-10 md:col-span-12 md:col-start-2 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.125em] ml-[-.06em]">
          <div className="line-inner" style={{opacity: 0, transform: 'translateY(0%)'}}>
                Unlock the
            </div>
        </div>
                                                                            
        <div className="col-span-7 mobile:mt-[-.2em] mobile:ml-[-.06em] col-start-3 md:col-span-8 md:col-start-6 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.275em] ml-[-.5em] flex justify-center">
            <div className="line-inner" style={{opacity: 0, transform: 'translateY(0%)'}}>
                power of
            </div>
        </div>
                                                                        
        <div className="col-span-9 col-start-2 md:col-span-10 mobile:ml-[-.02em] md:col-start-4 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-0 ml-[-.035em]">
            <div className="line-inner" style={{opacity: 0, transform: 'translateY(0%)'}}>
                soft skills
            </div>
        </div>
                </div>
        </h1>
        <div className='md:grid-cols-[repeat(14,minmax(0,1fr))] md:gap-[3.75rem]  grid grid-cols-10 gap-[1.25rem] '>
        <div className="col-span-8  col-start-2 md:col-span-5 md:col-start-6 lg:col-span-4 lg:col-start-6">
				<div className="mt-[2.75rem] mobile:!text-[.875rem] mobile:!leading-[1.57143] text-[1rem] leading-[1.4375] tracking-[.02em] text-white " >
					<div >
                        <div className="line">
                            <div className="line-inner" >...with the most reliable and innovative </div>
                            </div>
                            <div className="line">
                                <div className="line-inner" >psychometric tests on the market. Rely on </div>
                            </div>
                            <div className="line">
                                <div className="line-inner" >inclusive human resources management </div>
                            </div>
                            <div className="line">
                                <div className="line-inner" >with our most predictive assessment </div>
                            </div>
                            <div className="line">
                                <div className="line-inner" >methods.</div>
                            </div>
                    </div>
				</div>


              <RevealButton/>
							</div>
        </div>
    </div>

    :
    <div className='relative block w-full my-0 mx-auto py-0 px-[6.25rem] mobile:px-[1.5625rem] mobile:max-w-[23.4375rem] m900:px-[3.75rem]'>
    <h1 className='text-[11.15vw] mobile:text-[3.25rem] mobile:pt-[10.75rem] mobile:leading-[1.05] leading-[1] tracking-[-.04em] pt-[13.75rem]'>
    <div className="grid grid-cols-10 md:grid-cols-[repeat(14,minmax(0,1fr))] gap-x-[1.25rem] md:gap-x-[3.75rem]">
<div className="col-span-10 md:col-span-12 md:col-start-2 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.125em] ml-[-.06em]">
      <div className="line-inner" >
            Unlock the
        </div>
    </div>
                                                                        
    <div className="col-span-7 mobile:mt-[-.2em] mobile:ml-[-.06em] col-start-3 md:col-span-8 md:col-start-6 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.275em] ml-[-.5em] flex justify-center">
        <div className="line-inner" >
            power of
        </div>
    </div>
                                                                    
    <div className="col-span-9 col-start-2 md:col-span-10 mobile:ml-[-.02em] md:col-start-4 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-0 ml-[-.035em]">
        <div className="line-inner" >
            soft skills
        </div>
    </div>
            </div>
    </h1>
    <div className='md:grid-cols-[repeat(14,minmax(0,1fr))] md:gap-[3.75rem]  grid grid-cols-10 gap-[1.25rem] '>
    <div className="col-span-8 col-start-2 md:col-span-5 md:col-start-6 lg:col-span-4 lg:col-start-6">
            <div className="mt-[2.75rem] text-[1rem] leading-[1.4375] tracking-[.02em] mobile:!text-[.875rem] mobile:!leading-[1.57143] text-white " data-split-articles="">
                <div >
                    <div className="line">
                        <div className="line-inner" >...with the most reliable and innovative </div>
                        </div>
                        <div className="line">
                            <div className="line-inner" >psychometric tests on the market. Rely on </div>
                        </div>
                        <div className="line">
                            <div className="line-inner" >inclusive human resources management </div>
                        </div>
                        <div className="line">
                            <div className="line-inner" >with our most predictive assessment </div>
                        </div>
                        <div className="line">
                            <div className="line-inner" >methods.</div>
                        </div>
                </div>
            </div>


          <RevealButton/>
                        </div>
    </div>
</div>
    }
    </>
   
  )
}

export default Hero