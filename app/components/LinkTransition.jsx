import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


function animateopacity(element, startValue, endValue, duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const currentValue = startValue + (endValue - startValue) * progress;
  
      element.style.opacity = currentValue; 
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  

  function animateTransform(element, startValue, endValue, duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const currentValue = startValue + (endValue - startValue) * progress;
  
      element.style.transform = `scaleY(${currentValue})`; // Example: translateX
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}


const LinkTransition = ({children, href,open,setOpen, ...props}) => {
const router=useRouter()
 

   
const handleTransition=async (e)=>{
    e.preventDefault()

const layer1=document.querySelector('.c-page-overlay-layer-1')
const layer2=document.querySelector('.c-page-overlay-layer-2')


// console.log(layer1,layer2);
 
animateopacity(layer1,0,1,300)
layer2.style.transformOrigin='center bottom'
animateTransform(layer2,0,1,300)
await sleep(500)
router.push(href)
// setOpen(false)
await sleep(500)
animateopacity(layer1,1,0,300)
layer2.style.transformOrigin='center top'
animateTransform(layer2,1,0,300)


}



  return (
    <Link onClick={handleTransition} href={href} {...props}>
        {children}
    </Link>
  )
}

export default LinkTransition