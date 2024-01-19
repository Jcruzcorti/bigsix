import Image from 'next/image'
import React from 'react'
import { NavigationMenuDemo } from './MenuBarNav'

export default function NavBarComponent() {
  return (
    <div className="z-10 max-w-5xl w-full flex items-center justify-between lg:flex ">
        <Image
        className="relative drop-shadow-md dark:drop-shadow-[0_0_0.2rem_#ffffff30] "
        src="/premierlogo.png"
        alt="Premier League logo"
        width={90}
        height={20}
        priority
        />
        <NavigationMenuDemo/>
  </div>
  )
}