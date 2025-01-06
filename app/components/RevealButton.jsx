import React from 'react'

const RevealButton = () => {
  return (
    <a href="https://www.performanse.com/en/our-products/" className="mt-[1.875rem]  c-button c-button--icon-hover c-button--ts-1 c-button--cyan c-button--hover-blue" >
  <span className="c-button-bg">
    <span className="c-button-bg-hover"></span>
  </span>
  <span className="c-button-text">
		<span className="c-button-text-inner">
			<span className="c-button-text-hover">Discover our tests</span>
			<span className="c-button-text-static">Discover our tests</span>
		</span>
	</span>
    <span className="c-button-icon">
    <svg className="c-icon-arrow-right-sm" width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.91609 0.541046L9.06254 3.68749C9.2578 3.88276 9.2578 4.19934 9.06254 4.3946L5.91609 7.54105M9.04338 4.04105H0.791091" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
    </span>
  </a>
  )
}

export default RevealButton