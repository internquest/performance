import React from 'react'
import RevealButton from './RevealButton'

const Hero = () => {
  return (
    <div className='relative block w-full my-0 mx-auto py-0 px-[6.25rem] mobile:px-[1.5625rem] mobile:max-w-[23.4375rem] m900:px-[3.75rem]'>
        <h1 className='text-[11.15vw] mobile:text-[3.25rem] mobile:pt-[10.75rem] mobile:leading-[1.05] leading-[1] tracking-[-.04em] pt-[13.75rem]'>
        <div className="grid grid-cols-10 md:grid-cols-[repeat(14,minmax(0,1fr))] gap-x-[1.25rem] md:gap-x-[3.75rem]">
  <div className="col-span-10 md:col-span-12 md:col-start-2 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.125em] ml-[-.06em]">
          <div className="line-inner" style={{opacity: 1, transform: 'translateY(0%)'}}>
                Unlock the
            </div>
        </div>
                                                                            
        <div className="col-span-7 mobile:mt-[-.2em] mobile:ml-[-.06em] col-start-3 md:col-span-8 md:col-start-6 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-[-.275em] ml-[-.5em] flex justify-center">
            <div className="py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap-inner" style={{opacity: 1, transform: 'translateY(0%)'}}>
                power of
            </div>
        </div>
                                                                        
        <div className="col-span-9 col-start-2 md:col-span-10 mobile:ml-[-.02em] md:col-start-4 py-[.1em] px-0 my-[-.1em] mx-0 whitespace-nowrap mt-0 ml-[-.035em]">
            <div className="line-inner" style={{opacity: 1, transform: 'translateY(0%)'}}>
                soft skills
            </div>
        </div>
                </div>
        </h1>
        <div className='md:grid-cols-[repeat(14,minmax(0,1fr))] md:gap-[3.75rem]  grid grid-cols-10 gap-[1.25rem] '>
        <div className="col-span-8 col-start-2 md:col-span-5 md:col-start-6 lg:col-span-4 lg:col-start-6">
				<div className="mt-[2.75rem] text-[1rem] leading-[1.4375] tracking-[.02em] tewhi " data-split-articles="">
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
  )
}

export default Hero