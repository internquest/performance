'use client'
import Image from "next/image";

import Widget from "./components/Widget";
import Hero from "./components/Hero";
import Herobg from "./components/Herobg";
import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  })

  
  return (
    <main>
      <div>
       <div className="w-screen">
      <Widget/>
      <Herobg/>
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
      <DiscoveTalents/>
      {/* <Hero/> */}
       </div>
      </div>
    </main>
  );
}
