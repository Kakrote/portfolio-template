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
       text-[#161515]
      "
    >
      {label}
    </Link>
  )
}