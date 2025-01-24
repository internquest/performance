'use client'
import React from 'react'
import { useEffect, useRef,useState } from "react";

const Widget = () => {
    
  const widgetarray=[
    {
      identity:"CASE STUDY",
      title:"How to detect the best talents?",
    },
    {
      identity:'E-book',
      title:"The predictive power of assessment methods"
    },
    {
      identity:'PRoduct',
      title:"Identify the managers of tomorrow!"
    }
  ]
const widgetref  = useRef(null) 

  const [identity, setIdentity] = useState(0);
  const intervalRef = useRef(null); // Ref to store the interval ID
  // const [title, setTitle] = useState("Title 1");
  const circleRef = useRef(null);
  const strokeDasharray = 81.6814;
  function animateTransform(element, startValue, endValue,opacstart,opacend, duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const currentValue = startValue + (endValue - startValue) * progress;
      const currentValue2 = opacstart + (opacend - opacstart) * progress;
  element.style.opacity = currentValue2;
      element.style.transform = `scale(${currentValue})`; // Example: translateX
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }

  useEffect(() => {
    const key=setTimeout(() => {
        animateTransform(widgetref.current, .88, 1,0,1,400);
        startInterval(); // Start the interval when the component mounts
        animateCircle();
    },3000)
    // updateIdentityAndTitle();
    return () => {
      clearInterval(intervalRef.current); // Clear interval on unmount
      clearInterval(key);
      }
}, []);

const startInterval = () => {
  clearInterval(intervalRef.current); // Clear any existing interval
  intervalRef.current = setInterval(() => {
    circleRef.current.classList.remove('circlebg');
      updateIdentityAndTitle();
      animateCircle();
  }, 7000); // 30 seconds
};


  const updateIdentityAndTitle = () => {
      setIdentity(prev =>{

    if(prev===widgetarray.length-1){
      return 0
    }else{

     return prev+1
    } 
      } 
    );
      // setTitle(prev => prev === "Title 1" ? "Title 2" : "Title 1");
  };
const updateleftidnetityAndTitle = () => {
      setIdentity(prev =>{
        if(prev===0){
          return widgetarray.length
        }else{
         return prev-1
        }
      })
    }

  const animateCircle = () => {
      if (circleRef.current) {
          // circleRef.current.style.transition = 'stroke-dashoffset 3s linear';
          // console.log('sjova');
          
          
          // Remove the class after the animation duration
          setTimeout(() => {
            // circleRef.current.classList.remove('circlebg'); // Remove the class after animation
            circleRef.current.classList.add('circlebg');
      }, 50); // Match this to the duration of the animation
  
          // circleRef.current.style.strokeDashoffset = strokeDasharray;
          // setTimeout(() => {
          //     circleRef.current.style.strokeDashoffset = 0; // Reset for next animation
          // }, 3000); // Match this to the duration of the animation
      }
  };

  const handleNext = () => {
    circleRef.current.classList.remove('circlebg');
      updateIdentityAndTitle();
      animateCircle();
      startInterval(); // Restart the interval
  };

  const handlePrev = () => {
    circleRef.current.classList.remove('circlebg');
    updateleftidnetityAndTitle();
      animateCircle();
      startInterval(); // Restart the interval
  }
  // console.log(identity);
  return (
    <div ref={widgetref} className="widget opacity-0">
    <ul className="relative overflow-hidden w-full widgetui">

      {
        widgetarray.map((item,index)=>{
          return(
            <li className={`widgetli ${index===identity &&'is-active'}`} key={index}>
            <span className="text-[var(--blue-fantasy)] widgetlispan">
              {item.identity}  
            </span>
            <a className="transition-colors duration-300 ease-linear whitespace-nowrap block text-[.875rem] leading-[1] tracking-[.02em] font-normal">
            {item.title}
            </a>
          </li>
          )
        })
      }
    
    </ul>
    <div className="flex items-center gap-[.3125rem] flex-none">
      <button onClick={handlePrev} className="widgetbutton">
      <svg className="icon" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5.53033 4.46967C5.82322 4.76256 5.82322 5.23744 5.53033 5.53033L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L3.93934 5L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="currentColor"></path>
</svg>
      </button>
      <button onClick={handleNext} className="widgetbutton relative">
      <svg className="icon" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5.53033 4.46967C5.82322 4.76256 5.82322 5.23744 5.53033 5.53033L1.53033 9.53033C1.23744 9.82322 0.762563 9.82322 0.46967 9.53033C0.176777 9.23744 0.176777 8.76256 0.46967 8.46967L3.93934 5L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z" fill="currentColor"></path>
</svg>
<div className=" absolute top-[-.0625rem] left-[-.0625rem]">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[1.75rem] h-[1.75rem] rotate-[-90deg]'>
                    <circle ref={circleRef} cx="14" cy="14" r="13" stroke="red" strokeDasharray="81.6814" strokeDashoffset="81.6814" strokeOpacity="1"  className="stroke-[length:0.0625rem]  fill-none  stroke-[var(--blue-fantasy)]"></circle>
                </svg>
</div>
      </button>
    </div>
   </div>
  )
}

export default Widget