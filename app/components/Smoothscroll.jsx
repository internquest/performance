'use client'
import React, { useEffect } from 'react'

const Smoothscroll = () => {
   useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  })
  return (
    <div></div>
  )
}

export default Smoothscroll