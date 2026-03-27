"use client"
import Image from "next/image"
import NavLink from "./navLink"
import SocialLink from "./socialLink"
import Drawer from "./drawer"
import { useState } from "react"

type LinkItem = {
  label: string
  href: string
}

type SocialLinks={
  label : string
  href  : string
  logo   : string
}

type NavbarData = {
  logo: string
  profile:string
  links: LinkItem[]
  socials:SocialLinks[]
}

export default function Navbar({ data }: { data: NavbarData }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }
  return (
    <>
      <header className="
        top-0
       w-full   z-20
        py-5 bg-transparent  backdrop-blur-lg
      ">
        {/* desktop navbar view */}
        <div className="container mx-auto hidden lg:grid px-6 py-4 grid-cols-2 lg:grid-cols-3">

          {/* Links */}
          <nav className="flex gap-6 items-center">
            {data.links.map((link, i) => (
              <NavLink key={i} {...link} />
            ))}
          </nav>

          {/* Logo */}
          <div className=" text-lg text-[#101]">
            <h2 className="text-center font-bold">{data.logo}</h2>
            <h2 className="text-center text-base  ">{data.profile}</h2>
          </div>

           {/* Social Link */}
          <div className="font-bold  flex justify-end items-center dark:text-white gap-6">
            {data.socials.map((slink,i)=>(
              <SocialLink key={i} {...slink}/>
            ))}
          </div>

        </div>

        {/* mobile navbar view */}
        <div className="container mx-auto lg:hidden px-6 py-4 flex justify-between items-center">
          {/* menu button */}
          <div className="flex  items-center">
            <button onClick={toggleDrawer} className="text-lg font-bold">
              <Image
              src={"/images/icons/menu-bar.png"}
              alt="menu"
              width={34}
              height={24}
              className="invert dark:invert-0"
            />
            </button>
          </div>
          {/* logo */}
          <div className="flex flex-col justify-center items-center  w-full">
            <h2 className="text-lg text-center font-bold">{data.logo}</h2>
            <h2 className="text-base text-center">{data.profile}</h2>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Now outside header for full viewport coverage */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        links={data.links}
        socials={data.socials}
      />
    </>
  )
}