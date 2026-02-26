import NavLink from "./navLink"
import SocialLink from "./socialLink"

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
  return (
    <header className="
      top-0 
     w-full   z-50
      py-5 bg-transparent  backdrop-blur-lg
    ">
      <div className="container mx-auto  px-6 py-4 grid grid-cols-2 lg:grid-cols-3">

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
    </header>
  )
}