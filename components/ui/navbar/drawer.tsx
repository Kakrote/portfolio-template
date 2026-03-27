import Image from "next/image"
import NavLink from "./navLink"
import SocialLink from "./socialLink"

type LinkItem = {
  label: string
  href: string
}

type SocialLinks = {
  label: string
  href: string
  logo: string
}

type DrawerProps = {
  isOpen: boolean
  onClose: () => void
  links: LinkItem[]
  socials: SocialLinks[]
}

export default function Drawer({ isOpen, onClose, links, socials }: DrawerProps) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900
          shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors right-5 absolute  border"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex flex-col h-full">
          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              {links.map((link, i) => (
                <div key={i} onClick={onClose}>
                  <NavLink {...link} />
                </div>
              ))}
            </div>
          </nav>

          {/* Social links */}
          <div className="px-6 py-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <div key={i} onClick={onClose}>
                  <SocialLink {...social} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}