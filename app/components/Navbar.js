'use client'

import Draggable from "react-draggable";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import profilePic from "@/public/images/ben-nneji.webp";
import TecybenLogo from "@/public/images/techyben-logo.png";

function Navbar() {
  {/* Get the current route */}
  const currentRoute = usePathname();

  return (
    <Draggable 
      bounds="parent"
      cancel=".menu-link, .profile-picture"
    >
      <nav title="Click and drag to move" className="md:hidden sm:hidden flex items-center gap-10 w-max bg-[#F9F8F8] rounded-r-[110px] text-[#023047] text-base font-medium p-4 cursor-grab">
        <div className="flex flex-col justify-center min-w-max ml-6">
          <Link href="/" className={currentRoute === "/" ? "active-link" : "menu-link"}>
            Home
          </Link>
          <Link href="/about" className={currentRoute === "/about" ? "active-link" : "menu-link"}>
            About
          </Link> 
          <Link href="/portfolio" className={currentRoute === "/portfolio" ? "active-link" : "menu-link"}>
            Portfolio
          </Link> 
          <Link href="/contact" className={currentRoute === "/contact" ? "active-link" : "menu-link"}>
            Contact
          </Link> 
        </div>
        <div className="container">
          <div className="card">
            <div className="front max-w-[6em] border-4 border-solid border-[#8ECAE6] rounded-full">
              <Link href="/">
                <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="profile-picture rounded-full" />
              </Link>
            </div>
            <div className="back max-w-[6em] border-4 border-solid border-[#8ECAE6] rounded-full">
              <Link href="/">
                <Image src={TecybenLogo} alt="Ben Nneji profile picture" title="Home" className="profile-picture rounded-full" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Draggable>
  );
}

export default Navbar;