import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "favorites" | "genres"
}

const items = [
    { label : "dashboard", href : "/dashboard" },
    { label : "favorites", href : "/favorites" },
    { label : "genres", href : "/genres" }
]

export default function NavBar(props: NavBarProps) {

    const { active } = props

    const classActive = "border-b-4 border-[#00AC9E]"

    return (
        <nav className="flex justify-between bg-[#000F08] text-[#E2E8F0] px-6 pt-6">
            <h1 className="text-2xl fond-bold">Read Easy</h1>
            <ul className="flex gap-12">
                {
                    items.map((link, key) => (
                        <li key={key} className={active === link.label ? classActive : ""}><Link href={link.href}>{link.label}</Link></li>
                    ))
                }                
            </ul>
            <img className="size-12 rounded-full" src="https://github.com/MUKINH4.png" alt="User Icon" />
        </nav>
    )
}