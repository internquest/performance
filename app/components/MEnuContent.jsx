'use client'
import React, { useEffect, useRef } from 'react'

const MEnuContent = ({menucontext,open,navmenu}) => {
  const locomotiveScroll=useRef(null)
    useEffect(() => {
        // menucontext.current.addEventListener('scroll', (event) => {
        //     event.stopPropagation();
        //     console.log(event);
            
        // })
        if (open && menucontext.current) {
            // Create a new Lenis instance for the menu contextz
        ( 
            async () => {
                console.log('shiva');
                
          const LocomotiveScroll =  (await import('locomotive-scroll')).default
               locomotiveScroll.current = new LocomotiveScroll()
            locomotiveScroll.current.lenisInstance.options.wrapper=menucontext.current
            
           
              // console.log(locomotiveScroll.current);
              
              }
              )()
           
            }  
          
              if(!open && locomotiveScroll.current){
            
                locomotiveScroll.current.lenisInstance.options.wrapper=''
                locomotiveScroll.current.lenisInstance.options.content=''
                // console.log(locomotiveScroll.current);
                menucontext.current.classList.remove('lenis')
                
                // locomotiveScroll.current.classList.remove('lenis')
                // locomotiveScroll.current.destroy()
                locomotiveScroll.current=null
                // console.log('skjbfsa');
                
              }
            
          // console.log(locomotiveScroll.current);
          
            
    }, [open]);
    // if(!open){
    //   console.log('sjiav');
      
    // }
    // useEffect(() => {
        
    // })
  return (
    <div ref={menucontext} className="c-nav-menu-content"
    style={{ transform: "translateX(-50%)" }}
  >
    <div className="c-nav-menu-content-inner">
      <div className="wrap wrap--max">
        <div className="grid grid-cols-10 md:grid-cols-14 lg:gap-x-60">
          <div className="c-nav-menu-content-dark col-span-10 md:col-span-14 lg:col-span-6">
            <div className="c-nav-menu-content-illustration">
              <svg
                className="c-illustration-menu-dark"
                width={470}
                height={350}
                viewBox="0 0 470 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c-illustration-part box-5"
                  fill="#000014"
                  d="M80,39c5.5,0,10,4.5,10,10v39c0,5.5-4.5,10-10,10H41c-5.5,0-10-4.5-10-10V49c0-5.5,4.5-10,10-10 H80z"
                />
                <path
                  className="c-illustration-part box-4"
                  fill="#1B3372"
                  d="M16,98H5c-2.8,0-5,2.2-5,5v11c0,2.8,2.2,5,5,5h11c2.8,0,5-2.2,5-5v-11C21,100.2,18.8,98,16,98z"
                />
                <linearGradient
                  id="box-3_00000043432431702465588030000014618737457836606641_"
                  gradientUnits="userSpaceOnUse"
                  x1="252.6743"
                  y1="241.683"
                  x2="367.7853"
                  y2="56.684"
                  gradientTransform="matrix(1 0 0 -1 0 349.8898)"
                >
                  <stop
                    offset={0}
                    style={{ stopColor: "#102458", stopOpacity: 0 }}
                  />
                  <stop offset={1} style={{ stopColor: "#102458" }} />
                </linearGradient>
                <path
                  className="c-illustration-part box-3"
                  fill="url(#box-3_00000043432431702465588030000014618737457836606641_)"
                  d="M352.7,117.3H236.4v116.4h116.4V117.3z
  "
                />
                <linearGradient
                  id="box-1_00000145746085537635137840000011506026458380074391_"
                  gradientUnits="userSpaceOnUse"
                  x1="122.387"
                  y1="2.2708"
                  x2="351.048"
                  y2="230.9318"
                  gradientTransform="matrix(1 0 0 -1 0 349.8898)"
                >
                  <stop
                    offset={0}
                    style={{ stopColor: "#102458", stopOpacity: 0 }}
                  />
                  <stop
                    offset="0.1286"
                    style={{
                      stopColor: "#102458",
                      stopOpacity: "1.531000e-02"
                    }}
                  />
                  <stop
                    offset="0.2546"
                    style={{
                      stopColor: "#102458",
                      stopOpacity: "6.155000e-02"
                    }}
                  />
                  <stop
                    offset="0.3795"
                    style={{ stopColor: "#102458", stopOpacity: "0.1388" }}
                  />
                  <stop
                    offset="0.5038"
                    style={{ stopColor: "#102458", stopOpacity: "0.2474" }}
                  />
                  <stop
                    offset="0.6278"
                    style={{ stopColor: "#102458", stopOpacity: "0.3873" }}
                  />
                  <stop
                    offset="0.7515"
                    style={{ stopColor: "#102458", stopOpacity: "0.5587" }}
                  />
                  <stop
                    offset="0.875"
                    style={{ stopColor: "#102458", stopOpacity: "0.7618" }}
                  />
                  <stop
                    offset="0.9955"
                    style={{ stopColor: "#102458", stopOpacity: "0.9909" }}
                  />
                  <stop offset={1} style={{ stopColor: "#102458" }} />
                </linearGradient>
                <path
                  className="c-illustration-part box-1"
                  fill="url(#box-1_00000145746085537635137840000011506026458380074391_)"
                  d="M352.7,117.3H120V350h232.7V117.3z"
                />
                <linearGradient
                  id="box-2_00000152952259493852938340000015463531670965894078_"
                  gradientUnits="userSpaceOnUse"
                  x1="254.8461"
                  y1="134.7297"
                  x2="460.6781"
                  y2="340.5621"
                  gradientTransform="matrix(1 0 0 -1 0 349.8898)"
                >
                  <stop
                    offset={0}
                    style={{ stopColor: "#102458", stopOpacity: 0 }}
                  />
                  <stop
                    offset="0.2062"
                    style={{
                      stopColor: "#102458",
                      stopOpacity: "1.054000e-02"
                    }}
                  />
                  <stop
                    offset="0.3411"
                    style={{
                      stopColor: "#102458",
                      stopOpacity: "4.498000e-02"
                    }}
                  />
                  <stop
                    offset="0.4555"
                    style={{ stopColor: "#102458", stopOpacity: "0.1036" }}
                  />
                  <stop
                    offset="0.5586"
                    style={{ stopColor: "#102458", stopOpacity: "0.1866" }}
                  />
                  <stop
                    offset="0.654"
                    style={{ stopColor: "#102458", stopOpacity: "0.294" }}
                  />
                  <stop
                    offset="0.7439"
                    style={{ stopColor: "#102458", stopOpacity: "0.4261" }}
                  />
                  <stop
                    offset="0.8293"
                    style={{ stopColor: "#102458", stopOpacity: "0.583" }}
                  />
                  <stop
                    offset="0.9112"
                    style={{ stopColor: "#102458", stopOpacity: "0.7648" }}
                  />
                  <stop
                    offset="0.9877"
                    style={{ stopColor: "#102458", stopOpacity: "0.9649" }}
                  />
                  <stop offset={1} style={{ stopColor: "#102458" }} />
                </linearGradient>
                <path
                  className="c-illustration-part box-2"
                  fill="url(#box-2_00000152952259493852938340000015463531670965894078_)"
                  d="M449.1,0.9H256.4c-11,0-20,9-20,20
  v192.7c0,11,9,20,20,20h192.7c11,0,20-9,20-20V20.9C469.1,9.9,460.1,0.9,449.1,0.9z"
                />
                <g>
                  <defs>
                    <path
                      className="c-illustration-part eye"
                      id="SVGID_1_"
                      d="M295.5,193c17.9,0,34.2-6.8,46.6-18c-12.4-11.2-28.8-18-46.6-18c-17.9,0-34.1,6.8-46.6,18
          C261.4,186.2,277.6,193,295.5,193z"
                      style={{
                        transform:
                          "translate(0px, 0px) scaleX(1) scaleY(1) rotate(0deg)",
                        opacity: 1
                      }}
                    />
                  </defs>
                  <clipPath id="SVGID_00000115508294369876013940000015555830408347978916_">
                    <use
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xlinkHref="#SVGID_1_"
                      overflow="visible"
                    />
                  </clipPath>
                  <g clipPath="url(#SVGID_00000115508294369876013940000015555830408347978916_)">
                    <rect
                      x="247.2"
                      y={157}
                      fill="#2F4A8F"
                      width="94.9"
                      height={37}
                    />
                    <path
                      fill="#050B28"
                      d="M294.7,193c9.9,0,18-8.1,18-18s-8.1-18-18-18c-9.9,0-18,8.1-18,18S284.7,193,294.7,193z"
                    />
                    <path
                      fill="#9CAEDD"
                      d="M294.7,181.5c3.6,0,6.5-2.9,6.5-6.5s-2.9-6.5-6.5-6.5c-3.6,0-6.5,2.9-6.5,6.5S291.1,181.5,294.7,181.5z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <ul className="c-nav-menu-content-ul">
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/your-needs/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Your Needs
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/our-products/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Our Products
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/our-services/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Our Services
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="c-nav-menu-content-light col-span-10 md:col-span-14 lg:col-span-5 lg:col-start-10">
            <div className="c-nav-menu-content-illustration">
              <svg
                className="c-illustration-menu-light"
                width={89}
                height={78}
                viewBox="0 0 89 78"
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 89 78"
                xmlSpace="preserve"
              >
                <path
                  className="c-illustration-part box-1"
                  fill="#F7FAF9"
                  d="M1,67.6v-29c0-5.5,4.5-10,10-10h28c5.5,0,10,4.5,10,10v29c0,5.5-4.5,10-10,10H11C5.5,77.6,1,73.1,1,67.6z"
                />
                <path
                  className="c-illustration-part box-2"
                  fill="#69DFCA"
                  d="M89,5v20.2c0,2.8-2.2,5-5,5H63.8c-2.8,0-5-2.2-5-5V5c0-2.8,2.2-5,5-5H84C86.8,0,89,2.2,89,5z"
                />
              </svg>
            </div>
            <ul className="c-nav-menu-content-ul c-nav-menu-content-ul--main">
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/blog/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Blog
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/business-cases/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Business Cases
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/about-us/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      About Us
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/science-and-innovation/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Science &amp; Innovation
                    </span>
                  </span>
                </a>
              </li>
            </ul>
            <ul className="c-nav-menu-content-ul c-nav-menu-content-ul--sub">
              <li className="c-nav-menu-content-li">
                <a
                  href="https://app.performanse.com/?l=en_EN/"
                  target="_blank"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Personal Account
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/blog/articles/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      Articles
                    </span>
                  </span>
                </a>
              </li>
              <li className="c-nav-menu-content-li">
                <a
                  href="https://www.performanse.com/en/blog/e-books/"
                  className="c-nav-menu-content-a"
                >
                  <span className="c-nav-menu-content-a-text">
                    <span className="c-nav-menu-content-a-text-static">
                      E-books
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MEnuContent