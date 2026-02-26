import Image from "next/image"
import Link from "next/link"

type socialLinkProps = {
    label: string
    href: string
    logo: string
}

export default function SocialLink({ label, href, logo }: socialLinkProps) {
    return (
        <Link
            href={href}
            className="
        text-sm font-medium
        text-gray-700 hover:text-black
        dark:text-gray-300 dark:hover:text-white
      "
        >
            <Image
                src={logo}
                alt={label}
                width={34}
                height={34}
                className=""
            />
        </Link>
    )
}