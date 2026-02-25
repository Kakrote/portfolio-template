import NavLink from "./navLink"

type LinkItem = {
  label: string
  href: string
}

type NavbarData = {
  logo: string
  links: LinkItem[]
}

export default function Navbar({ data }: { data: NavbarData }) {
  return (
    <header className="
      sticky top-0 z-50
      border-b
      bg-white/80 backdrop-blur
      dark:bg-black/80
    ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="font-bold text-lg dark:text-white">
          {data.logo}
        </div>

        {/* Links */}
        <nav className="flex gap-6">
          {data.links.map((link, i) => (
            <NavLink key={i} {...link} />
          ))}
        </nav>

      </div>
    </header>
  )
}