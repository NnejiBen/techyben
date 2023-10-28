import Link from "next/link"
import Image from "next/image"
import profilePic from "../public/images/ben-nneji.webp"

const MobileNavbar = () => {
  return (
    <nav className="flex items-center gap-5 w-max bg-[#F9F8F8] rounded-l-[110px] text-[#023047] text-base font-medium p-2 z-10 sm:fixed">
        <div>
            <div className="max-w-[2rem] border-2 border-solid border-[#8ECAE6] rounded-full">
              <Link href="/">
                <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="rounded-full"/>
              </Link>
            </div>
        </div>
        <div className="flex flex-col gap-1 mr-1">
            <div className="w-6 h-[2px] bg-[#1C1B1F]"></div>
            <div className="w-6 h-[2px] bg-[#1C1B1F]"></div>
            <div className="w-6 h-[2px] bg-[#1C1B1F]"></div>
        </div>
    </nav>
  )
}

export default MobileNavbar