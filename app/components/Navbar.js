'use client'

import Draggable from "react-draggable";
import Link from "next/link"
import Image from "next/image"
import profilePic from "@/public/images/ben-nneji.webp"

function Navbar() {
  return (
    <Draggable 
      bounds="parent"
    >
        <nav title="Click and drag to move" className="md:hidden sm:hidden flex items-center gap-10 w-max bg-[#F9F8F8] rounded-r-[110px] text-[#023047] text-base font-medium p-4 cursor-grab">
            <div className="flex flex-col justify-center ml-6">
                <Link href="/" className="hover:text-[#FB8500]">Home</Link>
                <Link href="/about" className="hover:text-[#FB8500]">About</Link>
                <Link href="/portfolio" className="hover:text-[#FB8500]">Portfolio</Link>
                <Link href="/contact" className="hover:text-[#FB8500]">Contact</Link>
            </div>
            <div>
                <div className="max-w-[6em] border-4 border-solid border-[#8ECAE6] rounded-full">
                <Link href="/">
                    <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="rounded-full"/>
                </Link>
                </div>
            </div>
        </nav>
    </Draggable>
  );
}

export default Navbar;