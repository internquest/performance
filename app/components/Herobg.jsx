'use client'
import React, { useEffect, useRef } from 'react'
import Hero from './Hero'

const Herobg = ({loading}) => {
  const containref=useRef(null)
  const firstpath=useRef(null)
  // const secondpath=useRef(null)
  const square1=useRef(null)
  const square2=useRef(null)
  const square3=useRef(null)
  const bottom1=useRef(null)
  const bottom2=useRef(null)
  const hand =useRef(null)
  const face=useRef(null)
  const head= useRef(null)

  function animateTransform(element,perc, xstartValue, xendValue,ystartValue,yendValue,scalestartValue,scaleendValue ,duration) {
    const startTime = performance.now();
  
    function step(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Clamp progress between 0 and 1
  
      const xcurrentValue = xstartValue + (xendValue - xstartValue) * progress;
      const ycurrentValue = ystartValue + (yendValue - ystartValue) * progress;
      const scalecurrentValue = scalestartValue + (scaleendValue - scalestartValue) * progress;
  if(perc){

    element.style.transform = `translate(${xcurrentValue}%, ${ycurrentValue}%) scale(${scalecurrentValue})`;
  }else{
    element.style.transform = `translate(${xcurrentValue}px, ${ycurrentValue}px) scale(${scalecurrentValue})`;

  }
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  useEffect(() => {
    let interval
    if(!loading){
      // console.log(loading);
      
    // console.log('done');
    // const key=setInterval(() => {
      
    
    
     interval=setTimeout(() => {
      
      animateTransform(containref.current,true,0,0,-35,0,1.3,1, 1000);
    }, 1000);
    animateTransform(firstpath.current,false,0,0, 1372, 0,1,1, 1000);
    animateTransform(square1.current,false,0,0,1346, 0, 1,1, 1000);
    animateTransform(square2.current,false,0,0,1307, 0,1,1, 1000);
    animateTransform(square3.current,false, 0,0,1265,0, 1,1, 1000);
    animateTransform(bottom1.current,false, 0,0,660,0, 1,1, 1000);
    animateTransform(bottom2.current,false, 0,0,660,0, 1,1, 1000);
    animateTransform(hand.current,false, -314,0,0,0, 1,1, 500);
    animateTransform(face.current,false, 300,0,0,0, 1,1, 500);
    animateTransform(head.current,false, 122,0,184,0, 1,1, 500);
  // }, 1200);
}
  return () =>{

    clearInterval(interval);
    // clearInterval(key)
  } 
  
}
  ,[loading])
  return (
    <div className='h-[120vw] c-hero mobile:h-[374.93333vw] bg-[var(--off-black)] text-white relative overflow-hidden'>
<div className='h-[calc(100%-12.15278vw)] top-0 absolute w-full left-0 opacity-50 '></div>
<div className='md:top-[11.18vw] md:left-[-4.027vw] inset-0 absolute w-full mobile:hidden c-hero-bg'>

<div 
ref={containref}
  className="c-hero-illustration w-full h-full"
   style={{ transform: "translate(0px, -35%) scale(1.3)", opacity: 1 }}
>
  <div
    className="c-hero-illustration-part"
    data-scroll=""
    data-scroll-speed="-.9"
  >
    <svg
      width={1535}
      height={1577}
      viewBox="0 0 1535 1577"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path ref={firstpath}
        className="c-hero-part c-hero-part--1"
        d="M400 297.21V1363C400 1385.09 417.909 1403 440 1403H483.108H651.62H696C718.091 1403 736 1385.09 736 1363V440.419C736 425.934 728.17 412.581 715.528 405.51L459.528 262.301C432.865 247.385 400 266.658 400 297.21Z"
        fill="url(#Svg_A3FV1DDDP_3NFHXFDOF)"
         style={{ transform: "translate(0px, 1372px) scale(1)", opacity: 1 }}
      />
      <defs>
        <linearGradient
          id="Svg_A3FV1DDDP_3NFHXFDOF"
          x1="567.804"
          y1="273.612"
          x2="567.804"
          y2="1175.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01031A" />
          <stop offset={1} stopColor="#081948" />
        </linearGradient>
      </defs>
    </svg>
  </div>


  <div
    className="c-hero-illustration-part"
    data-scroll=""
    data-scroll-speed="-0.8"
  >
    <div
      className="c-hero-part c-hero-part--2"
      style={{ transform: "translate(0px, 0px) scale(1)", opacity: 1 }}
    >
      <svg
        width={1535}
        height={1577}
        viewBox="0 0 1535 1577"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 118.564C0 100.825 11.6832 85.2048 28.6997 80.1934L249.7 15.1081C275.322 7.56227 301 26.7685 301 53.4787V1363C301 1385.09 283.091 1403 261 1403H40C17.9086 1403 0 1385.09 0 1363V118.564Z"
          fill="url(#Svg_8P7GI93HL_JEAWC2KRU)"
        />
        <mask
          id="Svg_8P7GI93HL_79BQPDHVN"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={301}
          height={1403}
        >
          <path d="M0 88.6456L301 0V1403H0V88.6456Z" fill="white" />
        </mask>
        <g mask="url(#Svg_8P7GI93HL_79BQPDHVN)">
          <path
            d="M-123.514 216.146H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 74.0195H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 358.273H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 263.475H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 121.42H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 405.602H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 500.328H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 310.873H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 168.746H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 453.002H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 547.729H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 737.184H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 595.055H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 879.311H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 784.584H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 642.455H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 926.711H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 1021.44H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 831.91H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 689.855H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 974.037H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M-123.514 1068.76H340.95"
            stroke="#020621"
            strokeWidth="3.00838"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="Svg_8P7GI93HL_JEAWC2KRU"
            x1="150.386"
            y1="-17.4311"
            x2="150.386"
            y2="801.041"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#071744" />
            <stop offset={1} stopColor="#020621" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>


  <div
    className="c-hero-illustration-part"
    data-scroll=""
    data-scroll-speed="-0.4"
   
  >
    <div
      className="c-hero-part c-hero-part--3"
      style={{ transform: "translate(0px, 0px) scale(1)", opacity: 1 }}
    >
      <svg
        width={1535}
        height={1577}
        viewBox="0 0 1535 1577"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
        ref={square1}
          className="c-hero-part--3-square-1"
           style={{ transform: "translate(0px, 1346px) scale(1)", opacity: 1 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1204 642L751.5 957L1204 943V642Z"
            fill="#2D62E8"
          />
          <path
            d="M1222 943H786C758.386 943 736 965.386 736 993V1434C736 1461.61 758.386 1484 786 1484H1172C1199.61 1484 1222 1461.61 1222 1434V943Z"
            fill="url(#Svg_0PNW29CIR_8QJ3RSRSL)"
          />
          <mask
            id="Svg_0PNW29CIR_B0B5CSX3W"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={736}
            y={943}
            width={486}
            height={541}
          >
            <path d="M1222 943H736V1484H1222V943Z" fill="white" />
          </mask>
          <g
            transform="translate(0 -125.5)"
            mask="url(#Svg_0PNW29CIR_B0B5CSX3W)"
          >
            <path
              d="M1220.2 1111.33C1220.2 1111.33 1165.9 1061.98 1116.07 1125.23C1078.43 1173.03 1030.63 1372.1 948.939 1361.21C893.174 1353.73 869.681 1270.17 812.047 1267.57C741.243 1264.31 725.311 1339.99 725.311 1339.99"
              stroke="#2A5FE6"
              strokeWidth="3.33288"
              strokeMiterlimit={10}
              strokeLinecap="square"
            />
          </g>
        </g>
        <g
        ref={square2}
          className="c-hero-part--3-square-2"
          style={{ transform: "translate(0px, 1307px) scale(1)", opacity: 1 }}
        >
          <mask
            id="Svg_0PNW29CIR_OLGFUXXB2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={1204}
            y={442}
            width={294}
            height={1042}
          >
            <path d="M1498 442H1204V1484H1498V442Z" fill="#BBBBBB" />
          </mask>
          <g mask="url(#Svg_0PNW29CIR_OLGFUXXB2)">
            <path
              d="M1495 442H1244C1221.91 442 1204 459.909 1204 482V1443C1204 1465.09 1221.91 1483 1244 1483H1495C1517.09 1483 1535 1465.09 1535 1443V482C1535 459.909 1517.09 442 1495 442Z"
              fill="url(#Svg_0PNW29CIR_O2I3UJ18X)"
            />
          </g>
          <mask
            id="Svg_0PNW29CIR_KP5BAKOTC"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={1204}
            y={442}
            width={331}
            height={1041}
          >
            <path d="M1535 442H1204V1483H1535V442Z" fill="white" />
          </mask>
          <g mask="url(#Svg_0PNW29CIR_KP5BAKOTC)">
            <path
              d="M1275 371V1444"
              stroke="#050B28"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <path
              d="M1338 371V1444"
              stroke="#050B28"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <path
              d="M1400.63 370.529V1429.18"
              stroke="#050B28"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
            <path
              d="M1463 370.529V1429.18"
              stroke="#050B28"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinejoin="round"
            />
          </g>
          <path d="M1498 303.41H1364.77V441.999H1498V303.41Z" fill="#07296F" />
          <mask
            id="Svg_0PNW29CIR_ZKUYF4812"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={1364}
            y={302}
            width={134}
            height={140}
          >
            <path
              d="M1498 302.645H1364.77V441.234H1498V302.645Z"
              fill="white"
            />
          </mask>
          <g mask="url(#Svg_0PNW29CIR_ZKUYF4812)">
            <path
              d="M1434.01 425.703C1463.7 425.703 1487.77 401.631 1487.77 371.936C1487.77 342.242 1463.7 318.17 1434.01 318.17C1404.31 318.17 1380.24 342.242 1380.24 371.936C1380.24 401.631 1404.31 425.703 1434.01 425.703Z"
              fill="#081948"
            />
            <mask
              id="Svg_0PNW29CIR_TMWB9F9YV"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x={1380}
              y={318}
              width={108}
              height={108}
            >
              <path
                d="M1434.01 425.703C1463.7 425.703 1487.77 401.631 1487.77 371.936C1487.77 342.242 1463.7 318.17 1434.01 318.17C1404.31 318.17 1380.24 342.242 1380.24 371.936C1380.24 401.631 1404.31 425.703 1434.01 425.703Z"
                fill="white"
              />
            </mask>
            <g mask="url(#Svg_0PNW29CIR_TMWB9F9YV)">
              <path
                d="M1434.01 314.631H1378.05V470.031H1434.01V314.631Z"
                fill="#0040B4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1434.01 371.936L1388.28 305.979H1434.01V371.936Z"
                fill="#2D62E8"
              />
            </g>
          </g>
          <path
            d="M1333.45 258H1312C1305.37 258 1300 263.373 1300 270V291.451C1300 298.079 1305.37 303.451 1312 303.451H1333.45C1340.08 303.451 1345.45 298.079 1345.45 291.451V270C1345.45 263.373 1340.08 258 1333.45 258Z"
            fill="#081948"
          />
          <defs>
            <linearGradient
              id="Svg_0PNW29CIR_8QJ3RSRSL"
              x1="979.073"
              y1="847.816"
              x2="979.073"
              y2="1456.83"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F4A8F" />
              <stop offset={1} stopColor="#102458" />
            </linearGradient>
            <linearGradient
              id="Svg_0PNW29CIR_O2I3UJ18X"
              x1="1369.31"
              y1="481.558"
              x2="1369.31"
              y2="1281.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#081948" />
              <stop offset="0.58" stopColor="#040C2D" />
              <stop offset={1} stopColor="#020621" />
            </linearGradient>
          </defs>
        </g>
      </svg>
    </div>
  </div>


  <div className="c-hero-illustration-part">
    <div
      className="c-hero-part c-hero-part--4"
      style={{ transform: "translate(0px, 0px) scale(1)", opacity: 1 }}
    >
      <svg
        style={{ overflow: "visible" }}
        width={1535}
        height={1577}
        viewBox="0 0 1535 1577"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
        ref={bottom1}
          className="c-hero-part c-hero-part--4-bottom-1"
          style={{ transform: "translate(0px, 660px) scale(1)", opacity: 1 }}
        >
          <path d="M525 1503H201V1370H525V1503Z" fill="white" />
          <rect x={0} y={1469} width={1498} height={660} fill="white" />
        </g>
        <g
        ref={square3}
          className="c-hero-part c-hero-part--4-square-1"
           style={{ transform: "translate(0px, 1265px) scale(1)", opacity: 1 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M301 582L502 702.308V973H301V582Z"
            fill="#0E1A3F"
          />
          <path
            d="M502 702H141V1403H502V702Z"
            fill="url(#Svg_CIH88KQUN_12VKIN11P)"
          />
          <path
            d="M502 1164H0V1403H502V1164Z"
            fill="url(#Svg_CIH88KQUN_F3SHMGU27)"
          />
          <mask
            id="Svg_CIH88KQUN_UK6MBWYQ0"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={1164}
            width={502}
            height={239}
          >
            <path d="M502 1164H0V1403H502V1164Z" fill="white" />
          </mask>
          <g mask="url(#Svg_CIH88KQUN_UK6MBWYQ0)">
            <path
              d="M425 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M343 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M261 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M179 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M97 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.6494 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M466 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M384 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M302 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M220 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M138 1163.56V1484.43"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1243.84H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1324.04H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1404.23H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1203.7H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1283.9H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M-97.0986 1364.17H501.935"
              stroke="#2D62E8"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M179 1290C182.314 1290 185 1287.31 185 1284C185 1280.69 182.314 1278 179 1278C175.686 1278 173 1280.69 173 1284C173 1287.31 175.686 1290 179 1290Z"
            fill="#2F4A8F"
          />
          <path
            d="M220 1370C223.314 1370 226 1367.31 226 1364C226 1360.69 223.314 1358 220 1358C216.686 1358 214 1360.69 214 1364C214 1367.31 216.686 1370 220 1370Z"
            fill="#1C336E"
          />
          <path
            d="M425 1250C428.314 1250 431 1247.31 431 1244C431 1240.69 428.314 1238 425 1238C421.686 1238 419 1240.69 419 1244C419 1247.31 421.686 1250 425 1250Z"
            fill="#1C336E"
          />
        </g>
        <g
        ref={bottom2}
          className="c-hero-part c-hero-part--4-bottom-2"
           style={{ transform: "translate(0px, 660px) scale(1)", opacity: 1 }}
        >
          <path
            d="M1498 1184H1339V1484H1498V1184Z"
            fill="url(#Svg_CIH88KQUN_PDJCWVPKJ)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M502 881V1484H1339V1444.19C1339 1444.19 1250.88 1444.19 1133.37 1444.19C801.262 1444.19 525.58 1198.26 502 881Z"
            fill="url(#Svg_CIH88KQUN_31QERBSKV)"
          />
          <mask
            id="Svg_CIH88KQUN_NFA76OFON"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={502}
            y={862}
            width={46}
            height={641}
          >
            <rect x={502} y={862} width={46} height={641} fill="#D9D9D9" />
          </mask>
          <g mask="url(#Svg_CIH88KQUN_NFA76OFON)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M502 881V1484H1365V1444.19C1365 1444.19 1274.15 1444.19 1152.98 1444.19C810.558 1444.19 526.312 1198.26 502 881Z"
              fill="url(#Svg_CIH88KQUN_PTE3XP17O)"
            />
          </g>
          <mask
            id="Svg_CIH88KQUN_TMWU2KBPI"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={502}
            y={881}
            width={837}
            height={603}
          >
            <path
              d="M502 881V1484H1339V1444.19C1339 1444.19 1250.88 1444.19 1133.37 1444.19C801.262 1444.19 525.58 1198.26 502 881Z"
              fill="white"
            />
          </mask>
          <g mask="url(#Svg_CIH88KQUN_TMWU2KBPI)">
            <path
              d="M549.188 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M691.169 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M833.149 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M975.131 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M596.516 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M738.496 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M880.477 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1022.38 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1117.04 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M643.843 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M785.823 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M927.804 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1069.71 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1164.36 926.564V1517.01"
              stroke="#C4E7FF"
              strokeWidth="3.00838"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path d="M222 1403H0V1484H222V1403Z" fill="#9CAEDD" />
          <path d="M1498 1484H1257V1545H1498V1484Z" fill="#C4E7FE" />
          <path
            d="M1239 1545H1223C1218.58 1545 1215 1548.58 1215 1553V1569C1215 1573.42 1218.58 1577 1223 1577H1239C1243.42 1577 1247 1573.42 1247 1569V1553C1247 1548.58 1243.42 1545 1239 1545Z"
            fill="#9CAEDD"
          />
          <path
            d="M296 1484H267C258.716 1484 252 1490.72 252 1499V1528C252 1536.28 258.716 1543 267 1543H296C304.284 1543 311 1536.28 311 1528V1499C311 1490.72 304.284 1484 296 1484Z"
            fill="#E1E2F7"
          />
        </g>
        <g
        ref={hand}
          className="c-hero-part c-hero-part--4-hand"
           style={{ transform: "translate(-314px,0px) scale(1)", opacity: 1 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M283.497 1166.21L289.44 1199.23C289.44 1199.23 299.86 1200.33 309.765 1201.43C320.625 1202.6 331.411 1199.15 339.629 1192.03C355.331 1178.39 381.599 1155.49 396.568 1142.51C399.136 1140.23 400.457 1136.93 400.09 1133.48C399.723 1130.11 397.742 1127.1 394.734 1125.41C394.66 1125.41 394.66 1125.34 394.587 1125.34C391.432 1123.58 387.616 1123.58 384.534 1125.34C371.4 1132.6 336.034 1152.04 318.864 1161.58C312.48 1165.11 305.363 1166.79 298.099 1166.65C291.128 1166.35 283.497 1166.21 283.497 1166.21Z"
            fill="url(#Svg_CIH88KQUN_L78HONO5H)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299.713 1166.5L305.656 1199.08C305.656 1199.08 316.222 1200.18 326.128 1201.21C336.767 1202.31 347.407 1199.08 355.625 1192.11C371.033 1179.05 396.568 1157.4 411.39 1144.85C414.031 1142.65 415.352 1139.28 414.985 1135.9C414.618 1132.53 412.637 1129.45 409.629 1127.83C409.482 1127.76 409.409 1127.68 409.262 1127.61C406.18 1125.92 402.511 1125.92 399.356 1127.54C386.442 1134.43 351.589 1153 334.639 1162.02C328.403 1165.33 321.432 1167.01 314.388 1166.79C307.491 1166.65 299.713 1166.5 299.713 1166.5Z"
            fill="url(#Svg_CIH88KQUN_ZLB9I4LJT)"
          />
          <path
            d="M391.999 854.918H234.462V1012.46H391.999V854.918Z"
            fill="#2F4A8F"
          />
          <path
            d="M391.999 1011.67H234.462V1170.98H391.999V1011.67Z"
            fill="#2D62E8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M313.28 986.904L321.044 952.311L351.116 971.376L331.952 941.501L366.742 933.835L331.952 926.169L351.116 896.293L321.044 915.359L313.28 880.766L305.516 915.359L275.443 896.293L294.607 926.169L259.817 933.835L294.607 941.501L275.443 971.376L305.516 952.311L313.28 986.904Z"
            fill="#071744"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M277.114 1091.37C277.114 1081.84 280.947 1072.6 287.728 1065.82C294.509 1059.04 303.649 1055.21 313.28 1055.21C322.813 1055.21 332.051 1059.04 338.832 1065.82C345.613 1072.6 349.446 1081.74 349.446 1091.37C349.446 1100.9 345.613 1110.14 338.832 1116.92C332.051 1123.7 322.911 1127.54 313.28 1127.54C303.747 1127.54 294.509 1123.7 287.728 1116.92C280.947 1110.14 277.114 1100.9 277.114 1091.37Z"
            fill="#25A4FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.5228 1265.92C82.5228 1265.92 124.86 1244.72 151.128 1231.58C164.483 1224.91 179.231 1221.24 194.2 1220.87C226.705 1220.14 286.579 1218.74 323.119 1217.93C343.224 1217.49 362.742 1210.82 378.958 1198.78C395.834 1186.24 417.406 1170.24 430.614 1160.48C433.696 1158.21 435.75 1154.69 436.117 1150.87C436.557 1147.05 435.31 1143.17 432.815 1140.23C432.742 1140.08 432.595 1140.01 432.522 1139.86C428.339 1135.09 421.515 1133.7 415.865 1136.56C401.117 1143.9 373.014 1157.91 357.459 1165.62C350.268 1169.21 342.27 1170.53 334.346 1169.58C312.627 1166.87 267.648 1161.29 249.818 1159.01C245.489 1158.5 242.334 1154.76 242.407 1150.43C242.48 1148.08 243.508 1145.81 245.195 1144.19C246.956 1142.58 249.231 1141.77 251.652 1141.92C269.189 1142.95 307.931 1145.15 329.356 1146.39C337.721 1146.91 344.985 1140.67 345.719 1132.31C345.719 1132.23 345.719 1132.23 345.719 1132.16C346.379 1124.97 342.05 1118.22 335.153 1115.94C319.304 1110.66 290.027 1100.83 263.539 1091.95C227.952 1079.99 189.137 1081.9 154.797 1097.23C114.734 1115.14 66.6738 1136.56 66.6738 1136.56L82.5228 1265.92Z"
            fill="#2F4A8F"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M96.5371 1123.13L140.929 1236.65L0.489258 1344.07V1164.44L96.5371 1123.13Z"
            fill="#071744"
          />
        </g>
        <defs>
          <linearGradient
            id="Svg_CIH88KQUN_12VKIN11P"
            x1="321.444"
            y1="578.679"
            x2="321.444"
            y2="1367.79"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F4A8F" />
            <stop offset={1} stopColor="#102458" />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_F3SHMGU27"
            x1="251.063"
            y1="1140.95"
            x2="251.063"
            y2="1643.99"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2D62E8" />
            <stop offset={1} stopColor="#2F4A8F" />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_PDJCWVPKJ"
            x1="1418.51"
            y1="1099.39"
            x2="1418.51"
            y2="1848.52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F4A8F" />
            <stop offset={1} stopColor="#102458" />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_31QERBSKV"
            x1="1155.47"
            y1="1182.3"
            x2="419.734"
            y2="1182.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9CB8FF" />
            <stop offset={1} stopColor="#C4E7FE" />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_PTE3XP17O"
            x1={502}
            y1={881}
            x2={502}
            y2={1484}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25A3FF" />
            <stop offset={1} stopColor="#25A3FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_L78HONO5H"
            x1="341.846"
            y1="1068.96"
            x2="341.846"
            y2="1223.31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F4A8F" />
            <stop offset={1} stopColor="#09215A" />
          </linearGradient>
          <linearGradient
            id="Svg_CIH88KQUN_ZLB9I4LJT"
            x1="360.986"
            y1="1084.32"
            x2="349.235"
            y2="1299.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2F4A8F" />
            <stop offset={1} stopColor="#09215A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>


  <div
    className="c-hero-illustration-part"
    data-scroll=""
    data-scroll-speed="0.2"
  >
    <div
      className="c-hero-part c-hero-part--5"
      style={{ transform: "translate(0px, 0px) scale(1)", opacity: 1 }}
    >
      <svg
        width={1535}
        height={1577}
        viewBox="0 0 1535 1577"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
        ref={face}
          className="c-hero-part c-hero-part--5-container"
           style={{ transform: "translate(300px, 0px) scale(1)", opacity: 1 }}
        >
          <path
            d="M1279.58 779H1118C1101.43 779 1088 792.431 1088 809V970.58C1088 987.149 1101.43 1000.58 1118 1000.58H1279.58C1296.15 1000.58 1309.58 987.149 1309.58 970.58V809C1309.58 792.431 1296.15 779 1279.58 779Z"
            fill="url(#Svg_3IXOMV5TH_DDDUOG94V)"
          />
          <mask
            className="c-hero-part c-hero-part--5-head-mask"
            id="Svg_3IXOMV5TH_EJ2DJAJ8X"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={1088}
            y={779}
            width={222}
            height={222}
          >
            <path
              d="M1279.58 779H1118C1101.43 779 1088 792.431 1088 809V970.58C1088 987.149 1101.43 1000.58 1118 1000.58H1279.58C1296.15 1000.58 1309.58 987.149 1309.58 970.58V809C1309.58 792.431 1296.15 779 1279.58 779Z"
              fill="white"
            />
          </mask>
          <path
            d="M1382 1003.58H1350.58C1343.95 1003.58 1338.58 1008.95 1338.58 1015.58V1047C1338.58 1053.63 1343.95 1059 1350.58 1059H1382C1388.63 1059 1394 1053.63 1394 1047V1015.58C1394 1008.95 1388.63 1003.58 1382 1003.58Z"
            fill="#07296F"
          />
          <g mask="url(#Svg_3IXOMV5TH_EJ2DJAJ8X)">
            <g
            ref={head}
              className="c-hero-part c-hero-part--5-head"
              style={{ transform: "translate(122px, 184px) scale(1)", opacity: 1 }}
            >
              <path
                d="M1281.31 1019.12C1305.32 1019.12 1324.78 999.117 1324.78 974.441C1324.78 949.764 1305.32 929.76 1281.31 929.76C1257.31 929.76 1237.85 949.764 1237.85 974.441C1237.85 999.117 1257.31 1019.12 1281.31 1019.12Z"
                fill="#020621"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1138.25 876.569C1138.05 881.837 1136.23 887.004 1132.98 891.26C1128.93 896.731 1123.46 904.026 1120.02 908.686C1119.1 909.902 1118.7 911.422 1119 912.941C1119.21 914.461 1120.02 915.778 1121.33 916.69C1123.06 917.906 1124.98 919.324 1126.3 920.338C1127.72 921.351 1128.63 922.87 1128.83 924.593C1129.44 929.152 1130.65 938.575 1131.67 946.579C1132.68 954.583 1139.47 960.459 1147.47 960.459C1156.79 960.459 1167.23 960.459 1167.23 960.459L1176.65 1008.58L1251.93 1008.99C1251.93 1008.99 1252.34 961.776 1252.54 941.006C1252.64 934.725 1253.65 928.443 1255.58 922.465C1257.6 916.082 1260.54 906.964 1263.89 896.731C1268.85 881.331 1266.32 864.411 1257.1 851.138C1247.78 837.866 1232.88 829.659 1216.67 829.051C1148.18 826.315 1138.96 861.067 1138.25 876.569Z"
                fill="#25A3FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1252.44 958.533L1148.79 1003.62L1265.71 1003.42L1252.44 958.533Z"
                fill="#2D62E8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1139.98 865.93L1177.06 857.926C1177.06 857.926 1176.96 864.309 1176.85 873.731C1176.25 917.399 1209.18 954.177 1252.64 958.533C1252.64 958.533 1262.06 933.508 1272.8 905.038C1279.69 886.599 1277.16 865.93 1266.01 849.82C1254.87 833.61 1236.43 823.985 1216.67 823.883C1209.38 823.883 1202.18 823.883 1195.4 823.883C1169.46 823.782 1146.87 841.006 1139.98 865.93Z"
                fill="#020621"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="Svg_3IXOMV5TH_DDDUOG94V"
            x1="1147.08"
            y1="934.105"
            x2="1709.2"
            y2="934.105"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0040B4" />
            <stop offset={1} stopColor="#0B1841" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>



    {/* <div>
        <div className='relative top-0 left-0 [will-change:transform]' data-scroll data-scroll-speed='-.9'>
        <svg width="1535" height="1577" viewBox="0 0 1535 1577" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="c-hero-part c-hero-part--1" d="M400 297.21V1363C400 1385.09 417.909 1403 440 1403H483.108H651.62H696C718.091 1403 736 1385.09 736 1363V440.419C736 425.934 728.17 412.581 715.528 405.51L459.528 262.301C432.865 247.385 400 266.658 400 297.21Z" fill="url(#Svg_XH7YVUYD6_YA8Q1CRPH)" ></path>
        <defs>
          <linearGradient id="Svg_XH7YVUYD6_YA8Q1CRPH" x1="567.804" y1="273.612" x2="567.804" y2="1175.62" gradientUnits="userSpaceOnUse">
            <stop stopColor="#01031A"></stop>
            <stop offset="1" stopColor="#081948"></stop>
          </linearGradient>
        </defs>
      </svg>
        </div>
        <div className='absolute top-0 left-0 [will-change:transform]' data-scroll data-scroll-speed='-.8'>
          <div>
          <svg width="1535" height="1577" viewBox="0 0 1535 1577" fill="none" xmlns="http://www.w3.org/2000/svg">
      
      <path fillRule="evenodd" clipRule="evenodd" d="M0 118.564C0 100.825 11.6832 85.2048 28.6997 80.1934L249.7 15.1081C275.322 7.56227 301 26.7685 301 53.4787V1363C301 1385.09 283.091 1403 261 1403H40C17.9086 1403 0 1385.09 0 1363V118.564Z" fill="url(#Svg_SWCB17V1I_LDK1QB2N2)"></path>
      <mask id="Svg_SWCB17V1I_0GT1XOTCL" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="301" height="1403">
        <path d="M0 88.6456L301 0V1403H0V88.6456Z" fill="white"></path>
      </mask>
      <g mask="url(#Svg_SWCB17V1I_0GT1XOTCL)">
        <path d="M-123.514 216.146H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 74.0195H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 358.273H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 263.475H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 121.42H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 405.602H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 500.328H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 310.873H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 168.746H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 453.002H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 547.729H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 737.184H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 595.055H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 879.311H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 784.584H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 642.455H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 926.711H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 1021.44H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 831.91H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 689.855H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 974.037H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M-123.514 1068.76H340.95" stroke="#020621" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
      </g>
    
      <defs>
        <linearGradient id="Svg_SWCB17V1I_LDK1QB2N2" x1="150.386" y1="-17.4311" x2="150.386" y2="801.041" gradientUnits="userSpaceOnUse">
          <stop stopColor="#071744"></stop>
          <stop offset="1" stopColor="#020621"></stop>
        </linearGradient>
      </defs>
    </svg>
          </div>
        </div>
        <div className='absolute top-0 left-0 [will-change:transform]' data-scroll data-scroll-speed='-.4'>
          <div className="c-hero-part c-hero-part--3" style={{transform: 'translate(0px, 0px) scale(1)', opacity: 1}}>
          <svg width="1535" height="1577" viewBox="0 0 1535 1577" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="c-hero-part--3-square-1" style={{transform: 'translate(0px, 0px) scale(1)', opacity: 1}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M1204 642L751.5 957L1204 943V642Z" fill="#2D62E8"></path>
          <path d="M1222 943H786C758.386 943 736 965.386 736 993V1434C736 1461.61 758.386 1484 786 1484H1172C1199.61 1484 1222 1461.61 1222 1434V943Z" fill="url(#Svg_WK5F7QP2P_C5MD80L7X)"></path>
          <mask id="Svg_WK5F7QP2P_8LRGHQU59" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="736" y="943" width="486" height="541">
            <path d="M1222 943H736V1484H1222V943Z" fill="white"></path>
          </mask>
          
          <g transform="translate(0 -125.5)" mask="url(#Svg_WK5F7QP2P_8LRGHQU59)">
            <path d="M1220.2 1111.33C1220.2 1111.33 1165.9 1061.98 1116.07 1125.23C1078.43 1173.03 1030.63 1372.1 948.939 1361.21C893.174 1353.73 869.681 1270.17 812.047 1267.57C741.243 1264.31 725.311 1339.99 725.311 1339.99" stroke="#2A5FE6" strokeWidth="3.33288" strokeMiterlimit="10" strokeLinecap="square"></path>
          </g>
        </g>

        <g className="c-hero-part--3-square-2" style={{transform: 'translate(0px, 0px) scale(1)', opacity: 1}}>
          <mask id="Svg_WK5F7QP2P_MTZZQOBNW" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="1204" y="442" width="294" height="1042">
            <path d="M1498 442H1204V1484H1498V442Z" fill="#BBBBBB"></path>
          </mask>
          
          <g mask="url(#Svg_WK5F7QP2P_MTZZQOBNW)">
            <path d="M1495 442H1244C1221.91 442 1204 459.909 1204 482V1443C1204 1465.09 1221.91 1483 1244 1483H1495C1517.09 1483 1535 1465.09 1535 1443V482C1535 459.909 1517.09 442 1495 442Z" fill="url(#Svg_WK5F7QP2P_HSS4VQBPM)"></path>
          </g>
          
          <mask id="Svg_WK5F7QP2P_SW22QUT0L" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="1204" y="442" width="331" height="1041">
            <path d="M1535 442H1204V1483H1535V442Z" fill="white"></path>
          </mask>
          
          <g mask="url(#Svg_WK5F7QP2P_SW22QUT0L)">
            <path d="M1275 371V1444" stroke="#050B28" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinejoin="round"></path>
            <path d="M1338 371V1444" stroke="#050B28" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinejoin="round"></path>
            <path d="M1400.63 370.529V1429.18" stroke="#050B28" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinejoin="round"></path>
            <path d="M1463 370.529V1429.18" stroke="#050B28" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinejoin="round"></path>
          </g>
          <path d="M1498 303.41H1364.77V441.999H1498V303.41Z" fill="#07296F"></path>
          <mask id="Svg_WK5F7QP2P_WG456A56B" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="1364" y="302" width="134" height="140">
            <path d="M1498 302.645H1364.77V441.234H1498V302.645Z" fill="white"></path>
          </mask>
          <g mask="url(#Svg_WK5F7QP2P_WG456A56B)">
            <path d="M1434.01 425.703C1463.7 425.703 1487.77 401.631 1487.77 371.936C1487.77 342.242 1463.7 318.17 1434.01 318.17C1404.31 318.17 1380.24 342.242 1380.24 371.936C1380.24 401.631 1404.31 425.703 1434.01 425.703Z" fill="#081948"></path>
            <mask id="Svg_WK5F7QP2P_0EQSL17WQ" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="1380" y="318" width="108" height="108">
              <path d="M1434.01 425.703C1463.7 425.703 1487.77 401.631 1487.77 371.936C1487.77 342.242 1463.7 318.17 1434.01 318.17C1404.31 318.17 1380.24 342.242 1380.24 371.936C1380.24 401.631 1404.31 425.703 1434.01 425.703Z" fill="white"></path>
            </mask>
            <g mask="url(#Svg_WK5F7QP2P_0EQSL17WQ)">
              <path d="M1434.01 314.631H1378.05V470.031H1434.01V314.631Z" fill="#0040B4"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1434.01 371.936L1388.28 305.979H1434.01V371.936Z" fill="#2D62E8"></path>
            </g>
          </g>
          <path d="M1333.45 258H1312C1305.37 258 1300 263.373 1300 270V291.451C1300 298.079 1305.37 303.451 1312 303.451H1333.45C1340.08 303.451 1345.45 298.079 1345.45 291.451V270C1345.45 263.373 1340.08 258 1333.45 258Z" fill="#081948"></path>
          <defs>
            <linearGradient id="Svg_WK5F7QP2P_C5MD80L7X" x1="979.073" y1="847.816" x2="979.073" y2="1456.83" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2F4A8F"></stop>
              <stop offset="1" stopColor="#102458"></stop>
            </linearGradient>
            <linearGradient id="Svg_WK5F7QP2P_HSS4VQBPM" x1="1369.31" y1="481.558" x2="1369.31" y2="1281.38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#081948"></stop>
              <stop offset="0.58" stopColor="#040C2D"></stop>
              <stop offset="1" stopColor="#020621"></stop>
            </linearGradient>
          </defs>
        </g>
        
      </svg>
          </div>
        </div>
        <div className='absolute top-0 left-0 [will-change:transform] '>
          <div>
          <svg  width="1535" height="1577" viewBox="0 0 1535 1577" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="c-hero-part c-hero-part--4-bottom-1" >
          <path d="M525 1503H201V1370H525V1503Z" fill="white"></path>
          <rect x="0" y="1469" width="1498" height="660" fill="white"></rect>
        </g>

        <g className="c-hero-part c-hero-part--4-square-1" >
          <path fillRule="evenodd" clipRule="evenodd" d="M301 582L502 702.308V973H301V582Z" fill="#0E1A3F"></path>
          <path d="M502 702H141V1403H502V702Z" fill="url(#Svg_FNR7CDCZR_QWPHMOP9I)"></path>
          <path d="M502 1164H0V1403H502V1164Z" fill="url(#Svg_FNR7CDCZR_CXKM90HMW)"></path>
          <mask id="Svg_FNR7CDCZR_Y0UVGRTDB" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="1164" width="502" height="239">
            <path d="M502 1164H0V1403H502V1164Z" fill="white"></path>
          </mask>

          <g mask="url(#Svg_FNR7CDCZR_Y0UVGRTDB)">
            <path d="M425 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M343 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M261 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M179 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M97 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M22.6494 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M466 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M384 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M302 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M220 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M138 1163.56V1484.43" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1243.84H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1324.04H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1404.23H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1203.7H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1283.9H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M-97.0986 1364.17H501.935" stroke="#2D62E8" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
          <path d="M179 1290C182.314 1290 185 1287.31 185 1284C185 1280.69 182.314 1278 179 1278C175.686 1278 173 1280.69 173 1284C173 1287.31 175.686 1290 179 1290Z" fill="#2F4A8F"></path>
          <path d="M220 1370C223.314 1370 226 1367.31 226 1364C226 1360.69 223.314 1358 220 1358C216.686 1358 214 1360.69 214 1364C214 1367.31 216.686 1370 220 1370Z" fill="#1C336E"></path>
          <path d="M425 1250C428.314 1250 431 1247.31 431 1244C431 1240.69 428.314 1238 425 1238C421.686 1238 419 1240.69 419 1244C419 1247.31 421.686 1250 425 1250Z" fill="#1C336E"></path>
        </g>


        <g className="c-hero-part c-hero-part--4-bottom-2" >
          <path d="M1498 1184H1339V1484H1498V1184Z" fill="url(#Svg_FNR7CDCZR_AWXAOJGOO)"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M502 881V1484H1339V1444.19C1339 1444.19 1250.88 1444.19 1133.37 1444.19C801.262 1444.19 525.58 1198.26 502 881Z" fill="url(#Svg_FNR7CDCZR_1OI09ACG1)"></path>
          
          <mask id="Svg_FNR7CDCZR_VTA7XFFBD" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="502" y="862" width="46" height="641">
            <rect x="502" y="862" width="46" height="641" fill="#D9D9D9"></rect>
          </mask>
          <g mask="url(#Svg_FNR7CDCZR_VTA7XFFBD)">
            <path fillRule="evenodd" clipRule="evenodd" d="M502 881V1484H1365V1444.19C1365 1444.19 1274.15 1444.19 1152.98 1444.19C810.558 1444.19 526.312 1198.26 502 881Z" fill="url(#Svg_FNR7CDCZR_IOAMGQJ02)"></path>
          </g>
          <mask id="Svg_FNR7CDCZR_EP56K7580" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="502" y="881" width="837" height="603">
            <path d="M502 881V1484H1339V1444.19C1339 1444.19 1250.88 1444.19 1133.37 1444.19C801.262 1444.19 525.58 1198.26 502 881Z" fill="white"></path>
          </mask>

          <g mask="url(#Svg_FNR7CDCZR_EP56K7580)">
            <path d="M549.188 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M691.169 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M833.149 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M975.131 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M596.516 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M738.496 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M880.477 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1022.38 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1117.04 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M643.843 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M785.823 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M927.804 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1069.71 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M1164.36 926.564V1517.01" stroke="#C4E7FF" strokeWidth="3.00838" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>

           <path d="M222 1403H0V1484H222V1403Z" fill="#9CAEDD"></path>
        <path d="M1498 1484H1257V1545H1498V1484Z" fill="#C4E7FE"></path>
        <path d="M1239 1545H1223C1218.58 1545 1215 1548.58 1215 1553V1569C1215 1573.42 1218.58 1577 1223 1577H1239C1243.42 1577 1247 1573.42 1247 1569V1553C1247 1548.58 1243.42 1545 1239 1545Z" fill="#9CAEDD"></path>
        <path d="M296 1484H267C258.716 1484 252 1490.72 252 1499V1528C252 1536.28 258.716 1543 267 1543H296C304.284 1543 311 1536.28 311 1528V1499C311 1490.72 304.284 1484 296 1484Z" fill="#E1E2F7"></path>
        </g>

      
        <g className="c-hero-part c-hero-part--4-hand" >
          <path fillRule="evenodd" clipRule="evenodd" d="M283.497 1166.21L289.44 1199.23C289.44 1199.23 299.86 1200.33 309.765 1201.43C320.625 1202.6 331.411 1199.15 339.629 1192.03C355.331 1178.39 381.599 1155.49 396.568 1142.51C399.136 1140.23 400.457 1136.93 400.09 1133.48C399.723 1130.11 397.742 1127.1 394.734 1125.41C394.66 1125.41 394.66 1125.34 394.587 1125.34C391.432 1123.58 387.616 1123.58 384.534 1125.34C371.4 1132.6 336.034 1152.04 318.864 1161.58C312.48 1165.11 305.363 1166.79 298.099 1166.65C291.128 1166.35 283.497 1166.21 283.497 1166.21Z" fill="url(#Svg_FNR7CDCZR_08PJ8PLF1)"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M299.713 1166.5L305.656 1199.08C305.656 1199.08 316.222 1200.18 326.128 1201.21C336.767 1202.31 347.407 1199.08 355.625 1192.11C371.033 1179.05 396.568 1157.4 411.39 1144.85C414.031 1142.65 415.352 1139.28 414.985 1135.9C414.618 1132.53 412.637 1129.45 409.629 1127.83C409.482 1127.76 409.409 1127.68 409.262 1127.61C406.18 1125.92 402.511 1125.92 399.356 1127.54C386.442 1134.43 351.589 1153 334.639 1162.02C328.403 1165.33 321.432 1167.01 314.388 1166.79C307.491 1166.65 299.713 1166.5 299.713 1166.5Z" fill="url(#Svg_FNR7CDCZR_5T89KKG5H)"></path>
          <path d="M391.999 854.918H234.462V1012.46H391.999V854.918Z" fill="#2F4A8F"></path>
          <path d="M391.999 1011.67H234.462V1170.98H391.999V1011.67Z" fill="#2D62E8"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M313.28 986.904L321.044 952.311L351.116 971.376L331.952 941.501L366.742 933.835L331.952 926.169L351.116 896.293L321.044 915.359L313.28 880.766L305.516 915.359L275.443 896.293L294.607 926.169L259.817 933.835L294.607 941.501L275.443 971.376L305.516 952.311L313.28 986.904Z" fill="#071744"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M277.114 1091.37C277.114 1081.84 280.947 1072.6 287.728 1065.82C294.509 1059.04 303.649 1055.21 313.28 1055.21C322.813 1055.21 332.051 1059.04 338.832 1065.82C345.613 1072.6 349.446 1081.74 349.446 1091.37C349.446 1100.9 345.613 1110.14 338.832 1116.92C332.051 1123.7 322.911 1127.54 313.28 1127.54C303.747 1127.54 294.509 1123.7 287.728 1116.92C280.947 1110.14 277.114 1100.9 277.114 1091.37Z" fill="#25A4FF"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M82.5228 1265.92C82.5228 1265.92 124.86 1244.72 151.128 1231.58C164.483 1224.91 179.231 1221.24 194.2 1220.87C226.705 1220.14 286.579 1218.74 323.119 1217.93C343.224 1217.49 362.742 1210.82 378.958 1198.78C395.834 1186.24 417.406 1170.24 430.614 1160.48C433.696 1158.21 435.75 1154.69 436.117 1150.87C436.557 1147.05 435.31 1143.17 432.815 1140.23C432.742 1140.08 432.595 1140.01 432.522 1139.86C428.339 1135.09 421.515 1133.7 415.865 1136.56C401.117 1143.9 373.014 1157.91 357.459 1165.62C350.268 1169.21 342.27 1170.53 334.346 1169.58C312.627 1166.87 267.648 1161.29 249.818 1159.01C245.489 1158.5 242.334 1154.76 242.407 1150.43C242.48 1148.08 243.508 1145.81 245.195 1144.19C246.956 1142.58 249.231 1141.77 251.652 1141.92C269.189 1142.95 307.931 1145.15 329.356 1146.39C337.721 1146.91 344.985 1140.67 345.719 1132.31C345.719 1132.23 345.719 1132.23 345.719 1132.16C346.379 1124.97 342.05 1118.22 335.153 1115.94C319.304 1110.66 290.027 1100.83 263.539 1091.95C227.952 1079.99 189.137 1081.9 154.797 1097.23C114.734 1115.14 66.6738 1136.56 66.6738 1136.56L82.5228 1265.92Z" fill="#2F4A8F"></path>
          <path fillRule="evenodd" clipRule="evenodd" d="M96.5371 1123.13L140.929 1236.65L0.489258 1344.07V1164.44L96.5371 1123.13Z" fill="#071744"></path>
        </g>
     
        <defs>
          <linearGradient id="Svg_FNR7CDCZR_QWPHMOP9I" x1="321.444" y1="578.679" x2="321.444" y2="1367.79" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F4A8F"></stop>
            <stop offset="1" stopColor="#102458"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_CXKM90HMW" x1="251.063" y1="1140.95" x2="251.063" y2="1643.99" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2D62E8"></stop>
            <stop offset="1" stopColor="#2F4A8F"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_AWXAOJGOO" x1="1418.51" y1="1099.39" x2="1418.51" y2="1848.52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F4A8F"></stop>
            <stop offset="1" stopColor="#102458"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_1OI09ACG1" x1="1155.47" y1="1182.3" x2="419.734" y2="1182.3" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9CB8FF"></stop>
            <stop offset="1" stopColor="#C4E7FE"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_IOAMGQJ02" x1="502" y1="881" x2="502" y2="1484" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25A3FF"></stop>
            <stop offset="1" stopColor="#25A3FF" stopOpacity="0"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_08PJ8PLF1" x1="341.846" y1="1068.96" x2="341.846" y2="1223.31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F4A8F"></stop>
            <stop offset="1" stopColor="#09215A"></stop>
          </linearGradient>
          <linearGradient id="Svg_FNR7CDCZR_5T89KKG5H" x1="360.986" y1="1084.32" x2="349.235" y2="1299.53" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2F4A8F"></stop>
            <stop offset="1" stopColor="#09215A"></stop>
          </linearGradient>
        </defs>
      </svg>
          </div>
        </div>
        <div className='absolute top-0 left-0 [will-change:transform] ' data-scroll data-scroll-speed='.2'>
          <div>
          <svg width="1535" height="1577" viewBox="0 0 1535 1577" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="c-hero-part c-hero-part--5-container" >
          <path d="M1279.58 779H1118C1101.43 779 1088 792.431 1088 809V970.58C1088 987.149 1101.43 1000.58 1118 1000.58H1279.58C1296.15 1000.58 1309.58 987.149 1309.58 970.58V809C1309.58 792.431 1296.15 779 1279.58 779Z" fill="url(#Svg_Y2TTGKYVJ_8298BZ07U)"></path>
          <mask className="c-hero-part c-hero-part--5-head-mask" id="Svg_Y2TTGKYVJ_VBNKTFN12" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="1088" y="779" width="222" height="222">
            <path d="M1279.58 779H1118C1101.43 779 1088 792.431 1088 809V970.58C1088 987.149 1101.43 1000.58 1118 1000.58H1279.58C1296.15 1000.58 1309.58 987.149 1309.58 970.58V809C1309.58 792.431 1296.15 779 1279.58 779Z" fill="white"></path>
          </mask>

          <path d="M1382 1003.58H1350.58C1343.95 1003.58 1338.58 1008.95 1338.58 1015.58V1047C1338.58 1053.63 1343.95 1059 1350.58 1059H1382C1388.63 1059 1394 1053.63 1394 1047V1015.58C1394 1008.95 1388.63 1003.58 1382 1003.58Z" fill="#07296F"></path>

          
          <g mask="url(#Svg_Y2TTGKYVJ_VBNKTFN12)">
            <g className="c-hero-part c-hero-part--5-head" >
              <path d="M1281.31 1019.12C1305.32 1019.12 1324.78 999.117 1324.78 974.441C1324.78 949.764 1305.32 929.76 1281.31 929.76C1257.31 929.76 1237.85 949.764 1237.85 974.441C1237.85 999.117 1257.31 1019.12 1281.31 1019.12Z" fill="#020621"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1138.25 876.569C1138.05 881.837 1136.23 887.004 1132.98 891.26C1128.93 896.731 1123.46 904.026 1120.02 908.686C1119.1 909.902 1118.7 911.422 1119 912.941C1119.21 914.461 1120.02 915.778 1121.33 916.69C1123.06 917.906 1124.98 919.324 1126.3 920.338C1127.72 921.351 1128.63 922.87 1128.83 924.593C1129.44 929.152 1130.65 938.575 1131.67 946.579C1132.68 954.583 1139.47 960.459 1147.47 960.459C1156.79 960.459 1167.23 960.459 1167.23 960.459L1176.65 1008.58L1251.93 1008.99C1251.93 1008.99 1252.34 961.776 1252.54 941.006C1252.64 934.725 1253.65 928.443 1255.58 922.465C1257.6 916.082 1260.54 906.964 1263.89 896.731C1268.85 881.331 1266.32 864.411 1257.1 851.138C1247.78 837.866 1232.88 829.659 1216.67 829.051C1148.18 826.315 1138.96 861.067 1138.25 876.569Z" fill="#25A3FF"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1252.44 958.533L1148.79 1003.62L1265.71 1003.42L1252.44 958.533Z" fill="#2D62E8"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M1139.98 865.93L1177.06 857.926C1177.06 857.926 1176.96 864.309 1176.85 873.731C1176.25 917.399 1209.18 954.177 1252.64 958.533C1252.64 958.533 1262.06 933.508 1272.8 905.038C1279.69 886.599 1277.16 865.93 1266.01 849.82C1254.87 833.61 1236.43 823.985 1216.67 823.883C1209.38 823.883 1202.18 823.883 1195.4 823.883C1169.46 823.782 1146.87 841.006 1139.98 865.93Z" fill="#020621"></path>
            </g>
          </g>
        </g>
        
        <defs>
          <linearGradient id="Svg_Y2TTGKYVJ_8298BZ07U" x1="1147.08" y1="934.105" x2="1709.2" y2="934.105" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0040B4"></stop>
            <stop offset="1" stopColor="#0B1841"></stop>
          </linearGradient>
        </defs>
      </svg>
          </div>
        </div>
        <div>

        </div>
    </div> */}
</div>
<div className="c-hero-bg top-[30.13333vw] left-[0] absolute w-full block md:hidden">
<div>
<svg width="375" height="1294" viewBox="0 0 375 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="894" width="375" height="400" fill="#FFFFFF"></rect>
  <path className="c-hero-part c-hero-part--1" d="M184 122.062V887.225C184 895.385 190.615 902 198.775 902H214.671H276.86H293.225C301.385 902 308 895.385 308 887.225V221.695C308 217.913 306.55 214.275 303.948 211.53L209.498 111.897C200.311 102.206 184 108.708 184 122.062Z" fill="url(#Svg_YJ9HLT7DJ_8ZLAML80R)" style={{transform: 'translate(0px, 0px) scale(1)', opacity: 1}}></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M-1 43.7954C-1 37.2429 3.31557 31.4731 9.60115 29.622L91.2345 5.58066C100.699 2.79337 110.184 9.8878 110.184 19.7541V799.225C110.184 807.385 103.569 814 95.4086 814H13.7753C5.61512 814 -1 807.385 -1 799.225V43.7954Z" fill="url(#Svg_YJ9HLT7DJ_60DM5IFLX)"></path>
  <mask id="Svg_YJ9HLT7DJ_DZ8Y3J7K9" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="-1" y="0" width="111" height="796">
    <path d="M-1 50.2936L110 0V796H-1V50.2936Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_DZ8Y3J7K9)">
    <path d="M-46.6245 79.8398H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 27.3403H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 132.338H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 97.3223H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 44.8491H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 149.82H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 184.811H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 114.829H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 62.3311H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 167.331H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 202.32H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 272.302H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 219.8H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 324.8H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 289.811H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 237.309H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 342.309H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 377.299H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 307.291H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 254.818H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 359.791H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-46.6245 394.782H124.94" stroke="#020621" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
  </g>
  <path fillRule="evenodd" clipRule="evenodd" d="M110 374L184 446.615V610H110V374Z" fill="#0E1A3F"></path>
  <path d="M184 447H35V871H184V447Z" fill="url(#Svg_YJ9HLT7DJ_AK483O67C)"></path>
  <path d="M172.919 783H10.0815C3.96134 783 -1 787.961 -1 794.081V979.919C-1 986.039 3.96134 991 10.0815 991H172.919C179.039 991 184 986.039 184 979.919V794.081C184 787.961 179.039 783 172.919 783Z" fill="url(#Svg_YJ9HLT7DJ_Y15CY7JQY)"></path>
  <mask id="Svg_YJ9HLT7DJ_6R9U9IWZ1" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="-1" y="783" width="185" height="214">
    <path d="M184 783H-1V997H184V783Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_6R9U9IWZ1)">
    <path d="M154 782.819V901.342" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M122 782.819V901.342" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M89.9995 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M57.9995 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M25.9995 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M9.99951 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M170 782.819V901.342" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M138 782.819V901.342" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M106 782.819V901.342" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M73.9995 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M41.9995 783V981" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 812.469H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 842.094H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 871.717H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 915.824H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 944.824H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 959H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 797.645H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 827.269H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 856.92H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 886.543H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 901H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M-36.8667 930H184.405" stroke="#152A61" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
  </g>
  <path d="M58.1186 829.522C59.3427 829.522 60.3349 828.53 60.3349 827.306C60.3349 826.082 59.3427 825.09 58.1186 825.09C56.8946 825.09 55.9023 826.082 55.9023 827.306C55.9023 828.53 56.8946 829.522 58.1186 829.522Z" fill="#25A3FF"></path>
  <path d="M74.2632 859.073C75.4872 859.073 76.4795 858.081 76.4795 856.857C76.4795 855.633 75.4872 854.641 74.2632 854.641C73.0391 854.641 72.0469 855.633 72.0469 856.857C72.0469 858.081 73.0391 859.073 74.2632 859.073Z" fill="#2D62E8"></path>
  <path d="M153.99 814.747C155.214 814.747 156.206 813.755 156.206 812.531C156.206 811.307 155.214 810.314 153.99 810.314C152.766 810.314 151.773 811.307 151.773 812.531C151.773 813.755 152.766 814.747 153.99 814.747Z" fill="#2D62E8"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M103.717 782.984L105.913 795.18C105.913 795.18 109.761 795.587 113.42 795.994C117.432 796.427 121.416 795.153 124.451 792.524C130.251 787.483 139.955 779.027 145.484 774.229C146.432 773.389 146.92 772.17 146.785 770.896C146.649 769.649 145.917 768.538 144.806 767.914C144.779 767.914 144.779 767.887 144.752 767.887C143.586 767.237 142.177 767.237 141.039 767.887C136.187 770.571 123.123 777.753 116.781 781.276C114.423 782.577 111.794 783.201 109.111 783.146C106.536 783.038 103.717 782.984 103.717 782.984Z" fill="url(#Svg_YJ9HLT7DJ_E9NKE8V4J)"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M109.708 783.091L111.903 795.125C111.903 795.125 115.806 795.531 119.465 795.911C123.395 796.317 127.325 795.125 130.36 792.55C136.052 787.725 145.484 779.73 150.959 775.095C151.935 774.282 152.422 773.035 152.287 771.789C152.151 770.542 151.42 769.403 150.308 768.807C150.254 768.78 150.227 768.753 150.173 768.726C149.035 768.102 147.679 768.102 146.514 768.699C141.744 771.246 128.87 778.104 122.609 781.437C120.305 782.657 117.73 783.28 115.128 783.199C112.58 783.145 109.708 783.091 109.708 783.091Z" fill="url(#Svg_YJ9HLT7DJ_X625OSKYQ)"></path>
  <path d="M143.799 667.999H85.6079V726.19H143.799V667.999Z" fill="#2F4A8F"></path>
  <path d="M143.799 725.901H85.6079V784.746H143.799V725.901Z" fill="#2D62E8"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M114.722 716.753L117.59 703.974L128.698 711.017L121.619 699.981L134.47 697.15L121.619 694.318L128.698 683.283L117.59 690.325L114.722 677.547L111.854 690.325L100.746 683.283L107.825 694.318L94.9741 697.15L107.825 699.981L100.746 711.017L111.854 703.974L114.722 716.753Z" fill="#071744"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M101.364 755.341C101.364 751.82 102.78 748.408 105.284 745.903C107.789 743.398 111.165 741.982 114.723 741.982C118.244 741.982 121.656 743.398 124.161 745.903C126.666 748.408 128.082 751.784 128.082 755.341C128.082 758.863 126.666 762.275 124.161 764.78C121.656 767.285 118.28 768.7 114.723 768.7C111.201 768.7 107.789 767.285 105.284 764.78C102.78 762.275 101.364 758.863 101.364 755.341Z" fill="#25A4FF"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M29.4818 819.815C29.4818 819.815 45.1204 811.983 54.8234 807.131C59.7562 804.665 65.204 803.31 70.7331 803.174C82.7399 802.903 104.856 802.388 118.354 802.09C125.78 801.927 132.99 799.461 138.979 795.016C145.213 790.381 153.182 784.473 158.06 780.868C159.199 780.028 159.957 778.727 160.093 777.317C160.256 775.908 159.795 774.472 158.873 773.387C158.846 773.333 158.792 773.306 158.765 773.252C157.22 771.49 154.699 770.975 152.612 772.032C147.165 774.743 136.784 779.919 131.038 782.765C128.382 784.093 125.428 784.581 122.501 784.229C114.478 783.226 97.8636 781.166 91.2775 780.326C89.6784 780.136 88.5129 778.754 88.54 777.155C88.5672 776.287 88.9466 775.447 89.57 774.851C90.2205 774.255 91.0607 773.957 91.9551 774.011C98.4328 774.39 112.743 775.203 120.658 775.664C123.747 775.854 126.431 773.55 126.702 770.46C126.702 770.433 126.702 770.433 126.702 770.406C126.946 767.75 125.346 765.256 122.799 764.416C116.944 762.465 106.13 758.833 96.3458 755.553C83.2007 751.136 68.863 751.84 56.1786 757.505C41.3802 764.118 23.6274 772.032 23.6274 772.032L29.4818 819.815Z" fill="#2F4A8F"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M34.6585 767.073L51.0561 809.002L-0.819824 848.682V782.332L34.6585 767.073Z" fill="#071744"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M229.142 800L6.62109 954.904L229.142 948.019V800Z" fill="#2D62E8"></path>
  <path d="M245.412 948H23.5879C10.0084 948 -1 959.008 -1 972.588V1213.41C-1 1226.99 10.0084 1238 23.5879 1238H245.412C258.992 1238 270 1226.99 270 1213.41V972.588C270 959.008 258.992 948 245.412 948Z" fill="url(#Svg_YJ9HLT7DJ_96O7PRZMP)"></path>
  <mask id="Svg_YJ9HLT7DJ_KGKZ8HA2O" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="-1" y="948" width="271" height="290">
    <path d="M270 948H-1V1238H270V948Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_KGKZ8HA2O)">
    <path d="M237.113 1030.79C237.113 1030.79 210.409 1006.53 185.905 1037.63C167.396 1061.13 143.891 1159.03 103.716 1153.67C76.2934 1150 64.7406 1108.9 36.3984 1107.62C1.58019 1106.02 -6.25488 1143.24 -6.25488 1143.24" stroke="#2A5FE6" strokeWidth="1.63897" strokeMiterlimit="10" strokeLinecap="square"></path>
  </g>
  <mask id="Svg_YJ9HLT7DJ_ZXSD1GK0M" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="224" y="235" width="151" height="1003">
    <path d="M375 235H224V1238H375V235Z" fill="#BBBBBB"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_ZXSD1GK0M)">
    <path d="M379.225 251H238.775C230.615 251 224 257.615 224 265.775V1223.22C224 1231.38 230.615 1238 238.775 1238H379.225C387.385 1238 394 1231.38 394 1223.22V265.775C394 257.615 387.385 251 379.225 251Z" fill="url(#Svg_YJ9HLT7DJ_6DFVAB16D)"></path>
  </g>
  <mask id="Svg_YJ9HLT7DJ_X3B7OF2VM" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="224" y="251" width="164" height="987">
    <path d="M388 251H224V1238H388V251Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_X3B7OF2VM)">
    <path d="M259 235V1238" stroke="#050B28" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinejoin="round"></path>
    <path d="M290 235V1238" stroke="#050B28" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinejoin="round"></path>
    <path d="M322 235V1223" stroke="#050B28" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinejoin="round"></path>
    <path d="M353 235V1223" stroke="#050B28" strokeWidth="1.11124" strokeMiterlimit="10" strokeLinejoin="round"></path>
  </g>
  <path d="M280.766 532.002H221.081C214.961 532.002 210 536.963 210 543.083V602.768C210 608.888 214.961 613.85 221.081 613.85H280.766C286.886 613.85 291.848 608.888 291.848 602.768V543.083C291.848 536.963 286.886 532.002 280.766 532.002Z" fill="url(#Svg_YJ9HLT7DJ_9SQMFWS7K)"></path>
  <mask id="Svg_YJ9HLT7DJ_I4RHVNDVK" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="210" y="532" width="82" height="82">
    <path d="M291.852 532H210.004V613.848H291.852V532Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_I4RHVNDVK)">
    <path d="M281.407 620.698C290.274 620.698 297.462 613.309 297.462 604.194C297.462 595.079 290.274 587.689 281.407 587.689C272.54 587.689 265.352 595.079 265.352 604.194C265.352 613.309 272.54 620.698 281.407 620.698Z" fill="#020621"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M228.563 568.041C228.488 569.987 227.815 571.896 226.617 573.468C225.12 575.489 223.099 578.183 221.827 579.905C221.49 580.354 221.34 580.915 221.452 581.477C221.527 582.038 221.827 582.524 222.313 582.861C222.949 583.31 223.66 583.834 224.147 584.209C224.671 584.583 225.008 585.144 225.083 585.78C225.307 587.464 225.756 590.945 226.13 593.902C226.505 596.858 229.012 599.029 231.969 599.029C235.412 599.029 239.267 599.029 239.267 599.029L242.747 616.805L270.553 616.955C270.553 616.955 270.703 599.515 270.778 591.843C270.815 589.523 271.19 587.203 271.901 584.994C272.649 582.637 273.735 579.268 274.97 575.489C276.803 569.8 275.868 563.55 272.462 558.648C269.019 553.745 263.518 550.714 257.53 550.489C232.231 549.479 228.825 562.315 228.563 568.041Z" fill="#25A3FF"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M270.74 598.317L232.455 614.971L275.643 614.896L270.74 598.317Z" fill="#2D62E8"></path>
    <path fillRule="evenodd" clipRule="evenodd" d="M229.2 564.111L242.897 561.154C242.897 561.154 242.86 563.512 242.822 566.993C242.598 583.123 254.761 596.708 270.816 598.317C270.816 598.317 274.296 589.073 278.263 578.557C280.808 571.746 279.873 564.111 275.756 558.16C271.639 552.173 264.828 548.617 257.53 548.58C254.836 548.58 252.178 548.58 249.671 548.58C240.09 548.542 231.745 554.905 229.2 564.111Z" fill="#020621"></path>
  </g>
  <path d="M375.136 199.773H325.924V250.966H375.136V199.773Z" fill="#07296F"></path>
  <mask id="Svg_YJ9HLT7DJ_A1P4JERJR" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="325" y="199" width="51" height="52">
    <path d="M375.138 199.484H325.926V250.677H375.138V199.484Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_A1P4JERJR)">
    <path d="M351.502 244.94C362.47 244.94 371.362 236.049 371.362 225.08C371.362 214.111 362.47 205.22 351.502 205.22C340.533 205.22 331.642 214.111 331.642 225.08C331.642 236.049 340.533 244.94 351.502 244.94Z" fill="#081948"></path>
    <mask id="Svg_YJ9HLT7DJ_Z797TYU4I" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="331" y="205" width="41" height="40">
      <path d="M351.503 244.942C362.471 244.942 371.363 236.051 371.363 225.082C371.363 214.113 362.471 205.222 351.503 205.222C340.534 205.222 331.643 214.113 331.643 225.082C331.643 236.051 340.534 244.942 351.503 244.942Z" fill="white"></path>
    </mask>
    <g mask="url(#Svg_YJ9HLT7DJ_Z797TYU4I)">
      <path d="M351.503 203.914H330.833V261.315H351.503V203.914Z" fill="#0040B4"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M351.503 225.081L334.611 200.718H351.503V225.081Z" fill="#2D62E8"></path>
    </g>
  </g>
  <path d="M314.356 183H306.433C303.985 183 302 184.985 302 187.433V195.356C302 197.804 303.985 199.789 306.433 199.789H314.356C316.804 199.789 318.789 197.804 318.789 195.356V187.433C318.789 184.985 316.804 183 314.356 183Z" fill="#081948"></path>
  <path d="M375 1127H316V1243H375V1127Z" fill="url(#Svg_YJ9HLT7DJ_JPD8VR7HZ)"></path>
  <path d="M318.599 613.85H306.993C304.545 613.85 302.561 615.834 302.561 618.282V629.888C302.561 632.336 304.545 634.321 306.993 634.321H318.599C321.047 634.321 323.032 632.336 323.032 629.888V618.282C323.032 615.834 321.047 613.85 318.599 613.85Z" fill="#07296F"></path>
  <path fillRule="evenodd" clipRule="evenodd" d="M-1 1014.21V1242.58H315.997V1227.5C315.997 1227.5 282.624 1227.5 238.117 1227.5C112.339 1227.5 7.9303 1134.36 -1 1014.21Z" fill="url(#Svg_YJ9HLT7DJ_27W2I8ZCB)"></path>
  <mask id="Svg_YJ9HLT7DJ_DJX7DS59B" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="-1" y="1007" width="18" height="243">
    <rect x="-0.998047" y="1007.01" width="17.4216" height="242.766" fill="#D9D9D9"></rect>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_DJX7DS59B)">
    <path fillRule="evenodd" clipRule="evenodd" d="M-0.998047 1014.21V1242.58H325.846V1227.5C325.846 1227.5 291.436 1227.5 245.547 1227.5C115.862 1227.5 8.20966 1134.36 -0.998047 1014.21Z" fill="url(#Svg_YJ9HLT7DJ_FOK7G6N3J)"></path>
  </g>
  <mask id="Svg_YJ9HLT7DJ_94KYVAKVZ" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="-1" y="1014" width="318" height="229">
    <path d="M-0.996094 1014.2V1242.58H316.001V1227.5C316.001 1227.5 282.628 1227.5 238.121 1227.5C112.343 1227.5 7.93421 1134.36 -0.996094 1014.2Z" fill="white"></path>
  </mask>
  <g mask="url(#Svg_YJ9HLT7DJ_94KYVAKVZ)">
    <path d="M16.8745 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M70.647 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M124.419 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M178.192 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M34.7993 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M88.5718 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M142.342 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M196.089 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M231.935 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M52.7222 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M106.497 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M160.267 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M214.012 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M249.859 1031.46V1255.08" stroke="#C4E7FF" strokeWidth="1.13936" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
  </g>
  <path d="M81.0027 1242H-1V1271.92H81.0027V1242Z" fill="#9CAEDD"></path>
  <path d="M375 1242H286V1265H375V1242Z" fill="#C4E7FE"></path>
  <path d="M278.93 1264.53H273.02C271.387 1264.53 270.064 1265.86 270.064 1267.49V1273.4C270.064 1275.03 271.387 1276.35 273.02 1276.35H278.93C280.562 1276.35 281.885 1275.03 281.885 1273.4V1267.49C281.885 1265.86 280.562 1264.53 278.93 1264.53Z" fill="#9CAEDD"></path>
  <path d="M108.337 1271.92H97.6247C94.5647 1271.92 92.084 1274.4 92.084 1277.46V1288.17C92.084 1291.23 94.5647 1293.71 97.6247 1293.71H108.337C111.397 1293.71 113.878 1291.23 113.878 1288.17V1277.46C113.878 1274.4 111.397 1271.92 108.337 1271.92Z" fill="#E1E2F7"></path>
  <defs>
    <linearGradient id="Svg_YJ9HLT7DJ_8ZLAML80R" x1="245.928" y1="116.046" x2="245.928" y2="743.761" gradientUnits="userSpaceOnUse">
      <stop stopColor="#01031A"></stop>
      <stop offset="1" stopColor="#081948"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_60DM5IFLX" x1="54.5497" y1="-6.43872" x2="54.5497" y2="295.89" gradientUnits="userSpaceOnUse">
      <stop stopColor="#071744"></stop>
      <stop offset="1" stopColor="#020621"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_AK483O67C" x1="109.477" y1="372.41" x2="109.477" y2="849.701" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#102458"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_Y15CY7JQY" x1="48.3254" y1="928.599" x2="517.651" y2="928.599" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0040B4"></stop>
      <stop offset="1" stopColor="#0B1841"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_E9NKE8V4J" x1="125.27" y1="747.062" x2="125.27" y2="804.076" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#09215A"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_X625OSKYQ" x1="132.341" y1="752.735" x2="128" y2="832.231" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#09215A"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_96O7PRZMP" x1="134.541" y1="896.977" x2="134.541" y2="1223.43" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#102458"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_6DFVAB16D" x1="308.901" y1="288.506" x2="308.901" y2="1046.84" gradientUnits="userSpaceOnUse">
      <stop stopColor="#081948"></stop>
      <stop offset="0.58" stopColor="#040C2D"></stop>
      <stop offset="1" stopColor="#020621"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_9SQMFWS7K" x1="231.823" y1="589.295" x2="439.461" y2="589.295" gradientUnits="userSpaceOnUse">
      <stop stopColor="#0040B4"></stop>
      <stop offset="1" stopColor="#0B1841"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_JPD8VR7HZ" x1="345.504" y1="1094.28" x2="345.504" y2="1383.95" gradientUnits="userSpaceOnUse">
      <stop stopColor="#2F4A8F"></stop>
      <stop offset="1" stopColor="#102458"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_27W2I8ZCB" x1="246.49" y1="1128.32" x2="-32.1567" y2="1128.32" gradientUnits="userSpaceOnUse">
      <stop stopColor="#9CB8FF"></stop>
      <stop offset="1" stopColor="#C4E7FE"></stop>
    </linearGradient>
    <linearGradient id="Svg_YJ9HLT7DJ_FOK7G6N3J" x1="-0.998047" y1="1014.21" x2="-0.998049" y2="1242.58" gradientUnits="userSpaceOnUse">
      <stop stopColor="#25A3FF"></stop>
      <stop offset="1" stopColor="#25A3FF" stopOpacity="0"></stop>
    </linearGradient>
  </defs>
</svg>
</div>
</div>
<Hero/>
    </div>
  )
}

export default Herobg