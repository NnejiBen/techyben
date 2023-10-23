import Link from "next/link"
import Image from "next/image"
import profilePic from "../public/images/ben-nneji.webp"

const Navbar = () => {
  return (
    <nav className="flex gap-8 w-max bg-[#F9F8F8] rounded-r-[110px] text-[#023047 text-xl font-medium] p-4">
        <div className="flex flex-col justify-center ml-10">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
        </div>
        <div>
            <div className=" navbar--img-cont">
                <Image src={profilePic} alt="Ben Nneji profile picture" className="rounded-full"/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar