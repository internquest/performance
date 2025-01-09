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

export default function Home() {
  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  },)

  
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
      {/* <Hero/> */}
       </div>
      </div>
    </main>
  );
}
