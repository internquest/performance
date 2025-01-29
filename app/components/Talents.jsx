'use client'
import React, { useEffect, useRef, useState } from 'react'

const Talents = () => {
  const [no,setNo]=useState(1)
  const titlecont=useRef(null)
  const intervalref=useRef(null)
  const timeoutIds = []; // Array to hold timeout IDs
    const words=['Reveal','Recruitment','Enlighten']
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

useEffect(() => {
const key=setInterval(() => {
  setNo((prevNo) => {
    if(prevNo===words.length){
      return 1
    }else{

     return prevNo + 1
    }
     
  });
}, 3000);
return () => clearInterval(key);
},[])
const clearAllTimeouts = () => {
  timeoutIds.forEach(id => clearTimeout(id)); // Clear each timeout
  timeoutIds.length = 0; // Reset the array
};
useEffect(() => {
  // console.log(no);
      clearInterval(intervalref.current);
  
  if(no)
    {
      // Clear all timeouts when needed

clearAllTimeouts()

      const container=document.getElementsByClassName('c-title-part')[no-1]
      const conatinerDimesnions=container.getBoundingClientRect();
      titlecont.current.style.transitionDuration=`${400}ms`
      titlecont.current.style.height=`${conatinerDimesnions.height}px`
      titlecont.current.style.width=`${conatinerDimesnions.width}px`//conatinerDimesnions.width
      // console.log(conatinerDimesnions);
      const lines=container.children[0].children[0].children
      // console.log(lines);
      const linesArray=[...lines]
      // lines.map((line,index)=>
        
        linesArray.map((line, index) => {
        // animateTransform(line, 50, 0,0,1,500)
const delayindex=500/linesArray.length
        const delay = index * delayindex; // Adjust the multiplier for desired staggering effect
        const timeoutId1 = setTimeout(() => {
            animateTransform(line, 50, 0, 0, 1, 500); // Animate each line
        }, delay);
        timeoutIds.push(timeoutId1); // Store the timeout ID
        intervalref.current=setTimeout(() => {
          
          const timeoutId2 = setTimeout(() => {
            // console.log('shiva');
              animateTransform(line, 0, -50, 1, 0, 500); // Animate each line
              timeoutIds.push(timeoutId2); // Store the timeout ID
          }, delay);
        }, 2000);
    });
   
      // console.log(container);      
      // animateTransform(container, 50, 0,0,1,500)

      
    }
    return () => clearInterval(intervalref.current);
},[no])
useEffect(() => {
  return () => {
      clearAllTimeouts(); // Clear timeouts on component unmount
  };
}, []);
  return (
    <section className="c-section c-section--light c-section--cyan-highlight c-section--title-1" data-animate-section="" data-nav-section="light">
	<div className="wrap wrap--max">
		<div className="text-center">
			<h2 className="c-section--title-1-h2" data-animate-title="" >
        <div className="title-line">
          <div className="title-line-inner" >
                           <span className="c-title-parts-wrap">
                <span className="c-title-parts-bg"></span>
                <span ref={titlecont} className="c-title-parts" >
                                  
                               {
                                words.map((word,index)=>
                                
                                    <span key={index} className="c-title-part" data-split-chars="" data-split-resize="false" style={{opacity: index+1===no?1:0}}>
                                    <div className="line">
                                        <div className="line-inner">
                                            {
                                                word.split('').map((x,index)=>
                                                    <span key={index}  className="char" data-char="R" aria-hidden="true" >{x}</span>
                                            )
                                            }
                                           {/* <span className="char" data-char="R" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>R</span>
                                            <span className="char" data-char="e" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>e</span>
                                            <span className="char" data-char="v" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>v</span>
                                            <span className="char" data-char="e" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>e</span>
                                            <span className="char" data-char="a" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>a</span>
                               <span className="char" data-char="l" aria-hidden="true" style={{opacity: 1, transform: 'translateY(-50px)'}}>l</span>  */}
                                           </div>
                                            </div>
                                            </span>)
                               }
                            
                                  </span>
              </span> 
                     {' '}   your talents
          </div>
        </div>
			</h2>
		</div>
	</div>
</section>
  )
}

export default Talents