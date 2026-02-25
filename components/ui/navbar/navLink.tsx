import Link from "next/link"

type NavLinkProps = {
  label: string
  href: string
}

export default function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-sm font-medium
        text-gray-700 hover:text-black
        dark:text-gray-300 dark:hover:text-white
      "
    >
      {label}
    </Link>
  )
}