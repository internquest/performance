'use client'
import { useWindowSize } from '@uidotdev/usehooks'
import React from 'react'

const SoftSkills = () => {
	const windowwidth=useWindowSize().width
  return (
    <section className="c-section c-section--title-text-center c-section--light" data-animate-section="" data-nav-section="light" >
	<div className="wrap wrap--max">
		<div className="flex flex-col items-center">
							<span className="ts-eyebrow ts-indicator" data-animate="" data-animate-y="50" >Your Needs</span>
							{
								windowwidth>799?
								<h2 className="ts-2 mobile:hidden" data-animate-title="" data-animate-delay="100" ><div className="title-line"><div className="title-line-inner">Place the <span  className="title-span">soft skills</span>  at the </div></div><div className="title-line"><div className="title-line-inner">heart of your strategy</div></div></h2>
								:
                        <h2 className="ts-2 md:!hidden" data-animate-title="" data-animate-delay="100" ><div className="title-line"><div className="title-line-inner" >Place the <span className="title-span" >soft skills</span> </div></div><div className="title-line"><div className="title-line-inner" > at the heart of your </div></div><div className="title-line"><div className="title-line-inner" >strategy</div></div></h2>
							}
			<div className="ts-p" data-split-articles="" data-animate-paragraph="" data-animate-delay="500" >
				{
					windowwidth>799?
					<div ><div className="line"><div className="line-inner">In a future where the obsolescence of technical skills is fast and environmental conditions evolve </div></div><div className="line"><div className="line-inner">at full speed, soft skills are essential. They are the foundation of learning and performing </div></div><div className="line"><div className="line-inner">organisations. Go beyond your intuition: discover our psychometric tests that assess and value </div></div><div className="line"><div className="line-inner">those skills which are essential to adapt to a changing world.</div></div></div>
					:
					<div ><div className="line"><div className="line-inner">In a future where the obsolescence of technical skills </div></div><div className="line"><div className="line-inner">is fast and environmental conditions evolve at full </div></div><div className="line"><div className="line-inner">speed, soft skills are essential. They are the </div></div><div className="line"><div className="line-inner">foundation of learning and performing organisations. </div></div><div className="line"><div className="line-inner">Go beyond your intuition: discover our psychometric </div></div><div className="line"><div className="line-inner">tests that assess and value those skills which are </div></div><div className="line"><div className="line-inner">essential to adapt to a changing world.</div></div></div>
				}
			</div>
			</div>
	</div>
</section>
  )
}

export default SoftSkills