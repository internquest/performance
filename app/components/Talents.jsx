import React from 'react'

const Talents = () => {
    const words=['Reveal','Recruitment','Enlighten']
  return (
    <section className="c-section c-section--light c-section--cyan-highlight c-section--title-1" data-animate-section="" data-nav-section="light">
	<div className="wrap wrap--max">
		<div className="text-center">
			<h2 className="c-section--title-1-h2" data-animate-title="" >
        <div className="title-line">
          <div className="title-line-inner" >
                          {/* <span className="c-title-parts-wrap">
                <span className="c-title-parts-bg"></span>
                <span className="c-title-parts" style={{width: '225px', height: '80px'}}>
                                  
                               {
                                words.map((word,index)=>
                                
                                    <span className="c-title-part" data-split-chars="" data-split-resize="false" style="opacity: 0;">
                                    <div className="line">
                                        <div className="line-inner">
                                            {
                                                word.split().map((x,inde)=>
                                                    <span className="char" data-char="R" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>R</span>
                                            )
                                            }
                                            {/* <span className="char" data-char="R" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>R</span>
                                            <span className="char" data-char="e" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>e</span>
                                            <span className="char" data-char="v" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>v</span>
                                            <span className="char" data-char="e" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>e</span>
                                            <span className="char" data-char="a" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>a</span>
            //                                 <span className="char" data-char="l" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>l</span> */}
            {/* //                                 </div>
            //                                 </div>
            //                                 </span>)
            //                    }
                                 
            //                       </span>
            //   </span> */} 
                        your talents
          </div>
        </div>
			</h2>
		</div>
	</div>
</section>
  )
}

export default Talents