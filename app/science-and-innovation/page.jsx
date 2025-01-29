'use client'
import React, { useEffect,useState,useRef } from 'react'
import Hero from '../components/aboutUs/Hero'
import BeyondPersonality from '../components/science/BeyondPersonality'
import BeyondPoints from '../components/science/BeyondPoints'
import { Cardo } from 'next/font/google'
import Cards from '../components/science/Cards'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'

const page = () => {
  const locomotiveScrollRef = useRef(null);
  
  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

         locomotiveScrollRef.current = new LocomotiveScroll();
// console.log(locomotiveScrollRef.current);

      }

    )()
    return () => {
      if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
      }

  }

  }, []);
      const scienthero=['A predictable assessment of','human potential']
      const Aitricks=['An ethical alliance between','AI, psychology, and the','workplace to provide you','with the fairest and most','predictive assessments']
  return (
    <>
    <main>
        <div>
            <div>
                <div className="c-section c-section--title-text-center c-section--hero c-section--hero-1 c-section--dark c-section--science-hero" data-nav-section="dark">
                    <div>
                    <div className="c-section-bg">
                            <svg
    width={1440}
    height={1513}
    viewBox="0 0 1440 1513"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1430 26.0002L1430 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1410 26.0002L1410 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1390 26.0002L1390 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1370 26.0002L1370 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1350 26.0002L1350 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1330 26.0002L1330 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1310 26.0002L1310 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1290 26.0002L1290 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1270 26.0002L1270 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1250 26.0002L1250 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1230 26.0002L1230 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1210 26.0002L1210 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1190 26.0002L1190 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1170 26.0002L1170 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1150 26.0002L1150 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1130 26.0002L1130 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1110 26.0002L1110 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1090 26.0002L1090 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1070 26.0002L1070 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1050 26.0002L1050 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1030 26.0002L1030 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M1010 26.0002L1010 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M990 26.0002L990 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M970 26.0002L970 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M950 26.0002L950 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M930 26.0002L930 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M910 26.0002L910 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M890 26.0002L890 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M870 26.0002L870 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M850 26.0002L850 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M830 26.0002L830 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M810 26.0002L810 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M790 26.0002L790 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M770 26.0002L770 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M750 26.0002L750 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M730 26.0002L730 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M710 26.0002L710 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M690 26.0002L690 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M670 26.0002L670 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M650 26.0002L650 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M630 26.0002L630 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M610 26.0002L610 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M590 26.0002L590 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M570 26.0002L570 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M550 26.0002L550 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M530 26.0002L530 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M510 26.0002L510 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M490 26.0002L490 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M470 26.0002L470 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M450 26.0002L450 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M430 26.0002L430 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M410 26.0002L410 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M390 26.0002L390 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M370 26.0001L370 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M350 26.0001L350 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M330 26.0001L330 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M310 26.0001L310 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M290 26.0001L290 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M270 26.0001L270 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M250 26.0001L250 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M230 26.0001L230 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M210 26.0001L210 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M190 26.0001L190 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M170 26.0001L170 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M150 26.0001L150 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M130 26.0001L130 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M110 26.0001L110 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M90 26.0001L89.9999 1466"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M70 26.0001L69.9999 1420"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M50 26.0001L49.9999 1444"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M30 26.0001L29.9999 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M10 26.0001L9.99994 1392"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 136H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 156H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 176H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 196H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 216H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 236H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 256H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 276H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 296H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 316H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 336H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 356H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 376H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 396H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 416H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 436H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 456H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 476H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 496H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 516H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 536H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 556H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 576H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 596H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 616H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 636H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 656H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 676H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 696H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 716H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 736H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 756H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 776H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 796H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 816H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 836H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 856H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 876H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 896H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 916H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 936H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 956H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 976H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 996H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1016H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1036H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1056H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1076H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1096H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1116H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1136H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1156H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1176H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1196H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1216H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1236H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1256H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1276H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1296H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1316H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1336H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1356H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1376H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <path
      d="M0 1396H1440"
      stroke="#0B1841"
      strokeWidth="1.5"
      strokeMiterlimit={2}
      strokeLinejoin="round"
    />
    <circle
      opacity="0.6"
      cx={431}
      cy={448}
      r={308}
      fill="url(#Svg_QVO5KZO7Q_082FKOFNY)"
    />
    <ellipse
      opacity="0.7"
      cx={910}
      cy="892.5"
      rx={453}
      ry="360.5"
      fill="url(#Svg_QVO5KZO7Q_T6A0E27SF)"
    />
    <circle cx={210} cy={736} r={4} fill="#1B2C5D" />
    <circle cx={130} cy={636} r={4} fill="#1B2C5D" />
    <circle cx={270} cy={696} r={4} fill="#25A4FF" />
    <circle cx={1170} cy={1196} r={4} fill="#1B2C5D" />
    <circle cx={1230} cy={1076} r={4} fill="#1B2C5D" />
    <circle cx={1330} cy={1296} r={4} fill="#25A3FF" />
    <circle cx={450} cy={1256} r={4} fill="#1B2C5D" />
    <circle cx={690} cy={1196} r={4} fill="#1B2C5D" />
    <circle cx={570} cy={1296} r={4} fill="#25A3FF" />
    <circle cx={1150} cy={456} r={4} fill="#1B2C5D" />
    <circle cx={990} cy={536} r={4} fill="#25A3FF" />
    <circle cx={1070} cy={596} r={4} fill="#1B2C5D" />
    <rect
      y={870}
      width={1440}
      height={643}
      fill="url(#Svg_QVO5KZO7Q_SDN0A9WY7)"
    />
    <rect
      x={1440}
      y={643}
      width={1440}
      height={643}
      transform="rotate(-180 1440 643)"
      fill="url(#Svg_QVO5KZO7Q_KO2K54SW2)"
    />
    <defs>
      <radialGradient
        id="Svg_QVO5KZO7Q_082FKOFNY"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(431 448) rotate(90) scale(308)"
      >
        <stop stopColor="#050B28" />
        <stop offset={1} stopColor="#050B28" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="Svg_QVO5KZO7Q_T6A0E27SF"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(910 892.5) rotate(90) scale(360.5 453)"
      >
        <stop stopColor="#050B28" />
        <stop offset={1} stopColor="#050B28" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="Svg_QVO5KZO7Q_SDN0A9WY7"
        x1={720}
        y1={870}
        x2={720}
        y2={1513}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#050B28" stopOpacity={0} />
        <stop offset={1} stopColor="#050B28" />
      </linearGradient>
      <linearGradient
        id="Svg_QVO5KZO7Q_KO2K54SW2"
        x1={2160}
        y1={643}
        x2={2160}
        y2={1286}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#050B28" stopOpacity={0} />
        <stop offset={1} stopColor="#050B28" />
      </linearGradient>
    </defs>
                            </svg>
                    </div>
 <Hero para={scienthero} identifier={'Science & Innovation'} svg={true}/>
 

                    </div>
                    <div>
                        <Hero para={Aitricks} identifier={'AI and Psychometrics'} text={true} />
                    </div>
                </div>
                <BeyondPersonality/>
                <BeyondPoints/>
                <Cards/>
            </div>
        </div>
    </main>
    <Navbar lenisref={locomotiveScrollRef}/>
    
    </>
  )
}

export default page