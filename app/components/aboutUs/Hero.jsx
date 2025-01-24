'use client'
import { usePathname } from 'next/navigation'
import Ract from 'react'

const Hero = ({para,identifier,svg,text}) => {
    // const pathName=usePathname()
    console.log(para);
    
  return (
   
  <div className="wrap wrap--max">
    <div className="flex flex-col items-center">
      <div
        className="c-breadcrumb"
        aria-label="breadcrumb"
        data-animate=""
        data-animate-y={75}
        style={{}}
      >
        <ul className="c-breadcrumb-ul">
          <li className="c-breadcrumb-li">
            <a href="https://www.performanse.com/en/">Home</a>
          </li>
          <li className="c-breadcrumb-li active" aria-current="page">
            {identifier}
          </li>
        </ul>
      </div>
      <h1 className="ts-2" data-animate-title="" style={{}}>
        {
            para?.map((line,index)=>
                <div key={index} className="title-line">
                <div className="title-line-inner" style={{}}>
                  {line}
                </div>
              </div>
            )
        }
        
      </h1>
      {
        svg&&
        <div
  className="c-section-illustration"
  data-animate=""
  data-animate-scale=".8"
  data-animate-delay={200}
  style={{}}
>
  <div className="c-hero-science-illustration">
    <div
      className="c-hero-science-illustration-part"
      data-scroll
      data-scroll-speed="-0.05"
      
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part notification"
          style={{ transform: "translate(8.88817px, 0.780878px)" }}
        >
          <path
            fill="#17274F"
            d="M828.8,789h127c6.6,0,12,5.4,12,12v22c0,6.6-5.4,12-12,12h-127V789z"
          />
          <g>
            <defs>
              <rect
                id="Svg_O776IVIB2_CQ5W1M1OP"
                x="782.8"
                y={789}
                width={46}
                height={46}
              />
            </defs>
            <clipPath id="Svg_O776IVIB2_VGFVDONT6">
              <use xlinkHref="#Svg_O776IVIB2_CQ5W1M1OP" overflow="visible" />
            </clipPath>
            <g clipPath="url(#Svg_O776IVIB2_VGFVDONT6)">
              <rect x="782.8" y={789} fill="#0B1841" width={46} height={46} />
              <line
                fill="none"
                stroke="#2F4A8F"
                x1={781}
                y1="786.5"
                x2={831}
                y2="836.5"
              />
              <line
                fill="none"
                stroke="#2F4A8F"
                x1="831.2"
                y1="787.4"
                x2="781.2"
                y2="837.4"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div
      className="c-hero-science-illustration-part"
      data-scroll
      data-scroll-speed={0}
      
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part grid"
          style={{ transform: "translate(8.39941px, -4.09839px)" }}
        >
          <defs>
            <rect
              id="Svg_06H1RKVLK_3W8CE2R78"
              x="383.1"
              y={470}
              width={320}
              height={320}
            />
          </defs>
          <clipPath id="Svg_06H1RKVLK_2DAPPEN1I">
            <use xlinkHref="#Svg_06H1RKVLK_3W8CE2R78" overflow="visible" />
          </clipPath>
          <g clipPath="url(#Svg_06H1RKVLK_2DAPPEN1I)">
            <rect x="383.1" y={470} fill="#17274F" width={320} height={320} />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,514h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,560h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,606h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,652h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,698h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,744h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M382.8,790h320"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M427.8,789V469"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M473.8,789V469"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M519.8,789V469"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M565.8,789V469"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M611.8,789V469"
            />
            <path
              fill="none"
              stroke="#0B1841"
              strokeWidth="1.18"
              strokeLinejoin="round"
              strokeMiterlimit={2}
              d="M657.8,789V469"
            />
            <path
              className="c-illustration-part grid-circle-1"
              fill="#2F4A8F"
              d="M422.8,743.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7
      C424.9,739,422.8,741.1,422.8,743.7z"
              style={{
                transform:
                  "translate(184px, -233.41px) scaleX(1) scaleY(1) rotate(0deg)",
                opacity: 1
              }}
            />
            <path
              className="c-illustration-part grid-circle-2"
              fill="#2F4A8F"
              d="M468.8,559.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7
      C470.9,555,468.8,557.1,468.8,559.7z"
              style={{
                transform:
                  "translate(47px, 91px) scaleX(1) scaleY(1) rotate(0deg)",
                opacity: 1
              }}
            />
            <path
              className="c-illustration-part grid-circle-3"
              fill="#69DFCA"
              d="M514.8,651.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7
      C516.9,647,514.8,649.1,514.8,651.7z"
              style={{
                transform:
                  "translate(139px, -93px) scaleX(1) scaleY(1) rotate(0deg)",
                opacity: 1
              }}
            />
            <path
              className="c-illustration-part grid-circle-4"
              fill="#2F4A8F"
              d="M652.8,651.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7s-2.1-4.7-4.7-4.7
      C654.9,647,652.8,649.1,652.8,651.7z"
              style={{
                transform:
                  "translate(-92px, -46px) scaleX(1) scaleY(1) rotate(0deg)",
                opacity: 1
              }}
            />
          </g>
        </g>
      </svg>
    </div>
    <div
      className="c-hero-science-illustration-part"
      data-scroll
      data-scroll-speed="0.2"
      
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part cross-window"
          style={{ transform: "translate(-2.08082px, 0.285144px)" }}
        >
          <defs>
            <path
              id="Svg_UTCY589YJ_M8TBMV9FB"
              d="M312.8,729h142c11,0,20,9,20,20v82c0,11-9,20-20,20h-142
      c-11,0-20-9-20-20v-82C292.8,738,301.8,729,312.8,729z"
            />
          </defs>
          <clipPath id="Svg_UTCY589YJ_N4V2D74ZN">
            <use xlinkHref="#Svg_UTCY589YJ_M8TBMV9FB" overflow="visible" />
          </clipPath>
          <g clipPath="url(#Svg_UTCY589YJ_N4V2D74ZN)">
            <path
              fill="#0B1841"
              d="M312.8,729h142c11,0,20,9,20,20v82c0,11-9,20-20,20h-142c-11,0-20-9-20-20v-82
      C292.8,738,301.8,729,312.8,729z"
            />
            <path
              fill="none"
              stroke="#17274F"
              strokeWidth="1.18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              d="
      M292.8,851.1L475,729"
            />
            <path
              fill="none"
              stroke="#17274F"
              strokeWidth="1.18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              d="
      M383.4,851.1V729"
            />
            <path
              fill="none"
              stroke="#17274F"
              strokeWidth="1.18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              d="
      M475,851.1L292.8,729"
            />
            <path
              fill="none"
              stroke="#17274F"
              strokeWidth="1.18"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="1.5"
              d="
      M475,790.1H292.8"
            />
          </g>
        </g>
      </svg>
    </div>
    <div
      className="c-hero-science-illustration-part"
      data-scroll=""
      data-scroll-speed="-0.15"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part graph-paper"
          style={{ transform: "translate(5.80462px, 6.70193px)" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#17274F"
            d="M661.8,127H525.3l-58.5,58.2V379h195V127L661.8,127z"
          />
          <g>
            <defs>
              <rect
                id="Svg_GNQQPYNNI_7V0YD62SH"
                x="466.8"
                y={188}
                width={195}
                height={124}
              />
            </defs>
            <clipPath id="Svg_GNQQPYNNI_S6Q7E0VJZ">
              <use xlinkHref="#Svg_GNQQPYNNI_7V0YD62SH" overflow="visible" />
            </clipPath>
            <g clipPath="url(#Svg_GNQQPYNNI_S6Q7E0VJZ)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#2F4A8F"
                d="M674.8,207.3V316h-217c0,0,20.1-44.7,52-44.7
							                                                                            c25.2,0,30.6,20.5,53.1,22.6c24.2,2.3,36.8-13.4,53.7-53C639,188.6,674.8,207.3,674.8,207.3z M672.9,208.6
							                                                                            c-3.3-1.4-13.6-4.8-25.4-0.2c-9.8,3.8-20.4,13.1-29.1,33.4c-6.8,16-13,28.1-19.5,36.8c-10.1,13.5-21,18.8-36.2,17.4
							                                                                            c-11.6-1.1-18.9-6.9-26.5-12.5c-7-5.2-14.3-10.1-26.4-10.1c-12.2,0-22.6,6.9-30.7,15.2c-9.2,9.4-15.5,20.5-18.2,25.6h211.8V208.6
							                                                                            z"
              />
              <path
                fill="#69DFCA"
                d="M505.8,272.7c0,2.6,2.1,4.7,4.7,4.7c2.6,0,4.7-2.1,4.7-4.7c0-2.6-2.1-4.7-4.7-4.7
						                                                                C507.9,268,505.8,270.1,505.8,272.7z"
              />
            </g>
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#0B1841"
            d="M524.8,127v58h-58L524.8,127z"
          />
        </g>
      </svg>
    </div>
    <div
      className="c-hero-science-illustration-part"
      data-scroll=""
      data-scroll-speed=".1"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part star-window"
          style={{ transform: "translate(3.25401px, -7.90705px)" }}
        >
          <defs>
            <rect
              id="Svg_05VO6YXI1_6GGEUIW9O"
              x="585.8"
              y={263}
              width={310}
              height={307}
            />
          </defs>
          <clipPath id="Svg_05VO6YXI1_O620ZNBN9">
            <use xlinkHref="#Svg_05VO6YXI1_6GGEUIW9O" overflow="visible" />
          </clipPath>
          <g clipPath="url(#Svg_05VO6YXI1_O620ZNBN9)">
            <rect x="585.8" y={263} fill="#0B1841" width={310} height={307} />
            <rect x="585.8" y={263} fill="#081134" width={310} height={50} />
            <rect x="845.8" y={263} fill="#17274F" width={50} height={50} />
            <circle fill="#69DFCA" cx="870.8" cy={288} r={8} />
            <path
              className="c-illustration-part star"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#1B2C5D"
              d="M740.8,324l7.3,72.5l30.5-66.2L762,401.3l50.3-52.7l-38.8,61.7
					                                                  l64.7-33.5l-56.7,45.8l72.1-10.7l-68.5,24.9l71.7,13.3l-72.9,1.3l63.5,35.8l-69.4-22.4l48.4,54.5l-58.3-43.7l28.1,67.2l-41-60.3
					                                                  L760,555l-19.2-70.3L721.7,555l4.7-72.7l-41,60.3l28.1-67.2l-58.3,43.7l48.4-54.5L634.2,487l63.5-35.8l-72.9-1.3l71.7-13.3
					                                                  L628,411.8l72.1,10.7l-56.7-45.8l64.7,33.5l-38.8-61.7l50.3,52.7L703,330.3l30.5,66.2L740.8,324z"
              style={{
                transform:
                  "translate(0px, 0px) scaleX(1) scaleY(1) rotate(157.099deg)",
                opacity: 1
              }}
            />
          </g>
        </g>
      </svg>
    </div>
    <div
      className="c-hero-science-illustration-part"
      data-scroll
      data-scroll-speed="-0.05"
      style={{ transform: "translate3d(0px, 0px, 0px)" }}
    >
      <svg
        width="1191.7"
        height="1017.1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1191.7 1017.1"
        enableBackground="new 0 0 1191.7 1017.1"
        xmlSpace="preserve"
      >
        <g
          className="c-illustration-part pie-chart"
          style={{ transform: "translate(4.88707px, -3.37558px)" }}
        >
          <circle fill="#050B28" cx="244.8" cy={374} r={75} />
          <path
            fill="#081134"
            d="M244.8,299c-18.2,0-35.7,6.6-49.4,18.6c-13.7,12-22.5,28.5-24.9,46.5s1.8,36.3,11.9,51.4
					                                              c10.1,15.1,25.3,26.1,42.8,30.9c17.5,4.8,36.2,3,52.5-5c16.3-8,29.2-21.6,36.2-38.4s7.7-35.5,2-52.7c-5.7-17.2-17.6-31.8-33.2-41
					                                              L244.8,374V299z"
          />
          <path
            fill="#17274F"
            d="M244.8,299c-14.8,0-29.3,4.4-41.7,12.6c-12.3,8.2-21.9,20-27.6,33.7c-5.7,13.7-7.2,28.8-4.3,43.3
					                                              c2.9,14.5,10,27.9,20.5,38.4c10.5,10.5,23.9,17.6,38.4,20.5c14.5,2.9,29.6,1.4,43.3-4.3c13.7-5.7,25.4-15.3,33.7-27.6
					                                              c8.2-12.3,12.6-26.8,12.6-41.7h-75V299z"
          />
          <path
            fill="#0B1841"
            d="M244.8,299c-9.8,0-19.6,1.9-28.7,5.7c-9.1,3.8-17.4,9.3-24.3,16.3c-7,7-12.5,15.2-16.3,24.3
				                                  c-3.8,9.1-5.7,18.9-5.7,28.7s1.9,19.6,5.7,28.7c3.8,9.1,9.3,17.4,16.3,24.3c7,7,15.2,12.5,24.3,16.3c9.1,3.8,18.9,5.7,28.7,5.7v-75
				                                  V299z"
          />
        </g>
      </svg>
    </div>
  </div>
</div>
      }
      {
        text&&
        <div
  className="ts-p"
  data-split-articles=""
  data-animate-paragraph=""
  data-animate-delay={400}
  style={{}}
>
  <p style={{}} />
  <div className="line">
    <div className="line-inner" style={{}}>
      Based on reliable scientific models, such as the Big Five theory,
      motivations, and cognitive{" "}
    </div>
  </div>
  <div className="line">
    <div className="line-inner" style={{}}>
      patterns, our research and development (R&amp;D) team identifies,
      innovates, and designs{" "}
    </div>
  </div>
  <div className="line">
    <div className="line-inner" style={{}}>
      cutting-edge tools for understanding behaviors in the professional
      environment.
    </div>
  </div>
  <p />
</div>

      }
    </div>
  </div>


  )
}

export default Hero