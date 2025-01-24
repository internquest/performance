import React from 'react'
import { windowwidth } from '../utiliity/windowsize'

const AiSoftskills = () => {
	// const width=windowwidth()
  return (
    <div className="c-section c-section--title-text-center c-section--hero c-section--hero-1 c-section--dark c-section--dark-2" data-animate-section="" data-nav-section="dark">
	<div className="wrap wrap--max">
		<div className="flex flex-col items-center">
      
			
              <h2 className="ts-2" data-animate-title="" >
				{
					windowwidth()>799?
					<div className="title-line"><div className="title-line-inner" >When AI meets soft skills</div></div>
					:
					<>
					<div className="title-line"><div className="title-line-inner" >When AI meets </div></div>
					<div className="title-line"><div className="title-line-inner" >soft skills</div></div>
					</>
				}
				</h2>
      
							<div className="ts-p" data-animate-paragraph="" data-animate-delay="400" data-split-articles="" >
								{
									windowwidth()>799?
									<div >
						<div className="line"><div className="line-inner" >Based on the big five model, The Theory of Needs and cognitive patterns, our psychometric </div></div>
						<div className="line"><div className="line-inner" >algorithms provide an in-depth analyse of the uniqueness of individuals at work and allow you to go </div></div>
						<div className="line"><div className="line-inner" >beyond the CV.</div></div></div>
						:
						<div ><div class="line"><div class="line-inner" >Based on the big five model, The Theory of Needs </div></div><div class="line"><div class="line-inner" >and cognitive patterns, our psychometric algorithms </div></div><div class="line"><div class="line-inner" >provide an in-depth analyse of the uniqueness of </div></div><div class="line"><div class="line-inner" >individuals at work and allow you to go beyond the CV.</div></div></div>
					}
				</div>
					</div>
	</div>
</div>
  )
}

export default AiSoftskills