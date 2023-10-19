import Link from "next/link"
import Image from "next/image"
import profilePic from "../public/images/ben-nneji.webp"

const Navbar = () => {
  return (
    <nav className="flex">
        <div className="flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div>
            <div className="w-40">
                <Image src={profilePic} alt="Ben Nneji profile picture" className="w-full"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar