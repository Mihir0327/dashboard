import React from 'react'
import Sidenavigation from './SideNavigation'
import NavBar from './NavBar'
import Profile from './Profile'

export default function Home() {

  return (
    <>
  
    <div className="">
      <div className="flex ml-3 md:ml-4 lg:ml-0 lg:gap-x-10 ">
        <Sidenavigation />
        <NavBar />
        <Profile />
      </div>
    </div>
  </>
  )
}
