'use client'
import React, { useEffect, useRef, useState } from 'react'

const Indivquest = () => {
    const [open, setOpen] = useState(false);
    const solref=useRef(null)
    const [expanded,setexpanded]=useState(false)
    const isMounted = useRef(false); // Track if the component has mounted
    const handleClick = () => {

        setOpen(!open)
    }
    function animateTransform(element, startValue, endValue, duration,open) {
        const startTime = performance.now();
      
        function step(currentTime) {
          const elapsedTime = currentTime - startTime;
          
          const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
          
          const currentValue = startValue + (endValue - startValue) * progress;
        //   console.log(currentValue);
      
          element.style.height = `${currentValue}px`; // Example: translateX
      
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            console.log('Animation complete',progress);
            setTimeout(() => {
                element.style.removeProperty('height');
              }, 500);
                
            
            if (open) {
                // console.log('shiav');
                setexpanded(true)
                element.classList.add('is-expanded');
                // if(progress===1||progress>.95){
                //  element.style=''   
                // }
            } else {
                // console.log('fuck');
                setexpanded(false)
                element.classList.remove('is-expanded');
                // element.style.removeProperty('height')
                // element.style=''
            }
           
        }     


        }
      
        requestAnimationFrame(step);
      }




    useEffect(() => {
       
        const total = solref.current.firstElementChild.offsetHeight + solref.current.lastElementChild.scrollHeight;
        const quest=solref.current.firstElementChild.offsetHeight
      
        console.log(solref.current.offsetHeight);
        if (solref) {
            if (isMounted.current) {
        if(open){
            // solref.current.style.height=`${quest}px`
            
            solref.current.classList.add('is-active')
            // solref.current.offsetHeight;
            animateTransform(solref.current,quest,total,50,true)
        }
        else{
            solref.current.classList.remove('is-active')
            // solref.current.style.height=`${solref.current.firstElementChild.scrollHeight}px`
            animateTransform(solref.current,total,quest,50,false)   
        }
    }else {
        // Skip the animation logic on the first render
        isMounted.current = true;
      }
    }
       
    },[open])


  
    
    // useEffect(() => {
    //     const handleTransitionEnd = (e) => {
    //         if (e.propertyName === 'height') {
    //             console.log(open);
    //             // console.log('Transition End:', open);
    
    //             // Clear inline styles
    //             solref.current.style.transitionDuration='0s'
    //             solref.current.style = '';
                
    //             if (open) {
    //                 // console.log('opes');
    //                 solref.current.classList.add('is-expanded');
    //             } else {
    //                 // console.log('closes');
    //                 // solref.current.style.transitionDuration='0s'
                    
    //                 solref.current.classList.remove('is-expanded');
    //             }
                
    //         }    
    //     };
    
    //     // Add the transitionend listener
    //     solref.current.addEventListener('transitionend', handleTransitionEnd);
    
    //     return () => 
    //         // Cleanup the listener
    //         solref.current.removeEventListener('transitionend', handleTransitionEnd);
    
    // }, [open]);


  return (
    <li ref={solref}  className={`c-dropdown-item  relative`} data-accordion="" >
    <div onClick={()=>handleClick()} className="c-dropdown-item-title" data-accordion-trigger="">
        <span className="c-dropdown-item-title-text">
            On which scientific models are PerformanSe questionnaires based?
        </span>
        <span className="c-dropdown-item-title-icon">
            <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<g strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5">
<path d="m3.7 12h16.6"></path>
<path d="m12 3.7v16.6"></path>
</g>
</svg>									</span>
    </div>
    <div  data-accordion-content="">
        <div className="c-dropdown-item-text">
            <div>
                <p>The PerformanSe questionnaires are based mainly on the Big Five theory, the personality model most recognised by the scientific community, describing personality according to five major traits. This model is complemented by other theoretical approaches, such as the systemic principles of the Palo Alto School and McClelland’s Theory of Needs.<br/></p>
            </div>
            <div className="c-dropdown-item-text--sm">
                <p>To learn more about our scientific approach, click here.</p>
            </div>
        </div>
                                        </div>
</li>
  )
}

export default Indivquest