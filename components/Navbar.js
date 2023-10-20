import Link from "next/link"
import Image from "next/image"
import profilePic from "../public/images/ben-nneji.webp"

const Navbar = () => {
  return (
    <nav className="navbar flex">
        <div className="flex flex-col justify-center ml-10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div>
            <div className=" navbar--img-container">
                <Image src={profilePic} alt="Ben Nneji profile picture" className="w-full rounded-full"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar