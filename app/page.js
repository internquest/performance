
import Image from "next/image";

import Widget from "./components/Widget";
import Hero from "./components/Hero";
import Herobg from "./components/Herobg";

export default function Home() {


  
  return (
    <main>
      <div>
       <div className="w-screen">
      <Widget/>
      <Herobg/>
      {/* <Hero/> */}
       </div>
      </div>
    </main>
  );
}
