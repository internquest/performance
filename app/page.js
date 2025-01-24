'use client'
import Image from "next/image";

import Widget from "./components/Widget";
import Hero from "./components/Hero";
import Herobg from "./components/Herobg";
import { useEffect, useRef, useState } from "react";
import SoftSkills from "./components/SoftSkills";
import StickyCards from "./components/StickyCards";
import Talents from "./components/Talents";
import Details from "./components/Details";
import Hrchalleneges from "./components/Hrchalleneges";
import Carousel from "./components/Carousel";
import AiSoftskills from "./components/AiSoftskills";
import Aboutdetails from "./components/Aboutdetails";
import Questions from "./components/Questions";
import JUstCurious from "./components/JUstCurious";
import DiscoveTalents from "./components/DiscoveTalents";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";



export default function Home() {
  const locomotiveScrollRef = useRef(null);
  // export { locomotiveScrollRef };
  const [loading,setLoading]=useState(true)
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

  console.log(loading);
  
  return (
    <>
    <main>
      <div>
       <div className="w-screen">
      <Widget/>
      <Herobg loading={loading}/>
      <SoftSkills/>
      <StickyCards/>
      <Talents/>
      <Details/>
      <Hrchalleneges/>
      <Carousel/>
      <AiSoftskills/>
      <Aboutdetails/>
      <Questions/>
      <JUstCurious/>
      {/* <DiscoveTalents/> */}
      {/* <Hero/> */}
       </div>
      </div>
    </main>
    <Navbar lenisref={locomotiveScrollRef}/>
    <Loader loading={loading} setLoading={setLoading} />
    </>
  );
}
