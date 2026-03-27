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
        text-base font-medium
        text-[#161515] dark:text-gray-200
        hover:text-blue-600 dark:hover:text-blue-400
        transition-colors duration-200
      "
    >
      {label}
    </Link>
  )
}