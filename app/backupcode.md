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


'use client'

import Draggable from "react-draggable";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import profilePic from "@/public/images/ben-nneji.webp";

function Navbar() {
  {/* Get the current route */}
  const currentRoute = usePathname();

  return (
    <Draggable 
      bounds="parent"
      cancel=".menu-link, .profile-picture"
    >
      <nav title="Click and drag to move" className="md:hidden sm:hidden flex items-center gap-10 w-max bg-[#F9F8F8] rounded-r-[110px] text-[#023047] text-base font-medium p-4 cursor-grab">
        <div className="flex flex-col justify-center ml-6">
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
        <div>
          <div className="max-w-[6em] border-4 border-solid border-[#8ECAE6] rounded-full">
            <Link href="/">
              <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="profile-picture rounded-full" />
            </Link>
          </div>
        </div>
      </nav>
    </Draggable>
  );
}

export default Navbar;


IMPORT FOR HAMBURGER ICONS
// import { FaBars, FaTimes } from "react-icons/fa";


// Create custom components for hamburger icons
const HamburgerBars = () => (
  <Image src="/images/hamburger-bars-icon.png" alt="Hamburger Bars Icon" width={20} height={20} />
);

const HamburgerTimes = () => (
  <Image src="/images/hamburger-times-icon.png" alt="Hamburger Times Icon" width={20} height={20} />
);


NAVBAR

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
            Projects
          </Link> 
          <Link href="/contact" className={currentRoute === "/contact" ? "active-link" : "menu-link"}>
            Contact
          </Link> 
        </div>
        <div className="navbar--img-container">
          <div className="navbar--img-wrapper min-w-[6em] min-h-[6em] relative transition-all duration-1000 ease-linear">
            <div className="navbar--img-wrapper-front absolute z-[2] border-4 border-solid border-[#8ECAE6] rounded-full">
              <Link href="/">
                <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="profile-picture rounded-full" />
              </Link>
            </div>
            <div className="navbar--img-wrapper-back absolute z-[1] border-4 border-solid border-[#8ECAE6] rounded-full">
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


JEB AUTO SERVICES - From Portfolio page

        {/* Project 03 */}
        <div className="flex md:flex-col gap-14 sm:gap-10 items-center mb-16">
          {/* Left side: Card dots and image */}
          <div className="min-w-[55%] md:min-w-full flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={jebAutoServices} alt="Homepage screenshot of the Jeb Auto Services website" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">JEB AUTO SERVICES</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I developed this WordPress website for Jeb Auto Services, an auto repair company. It has a simple and beautiful interface. It is responsive and easy to navigate. Some of the salient features include a WhatsApp chat button and contact forms.</p>
            <div className="flex">
              <Link href="/portfolio/jeb-auto-services"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>


NAVBAR DESKTOP FIXED

'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavbarDesktopFixed() {
  const currentRoute = usePathname();

  return (
        <nav className="md:hidden fixed w-full bg-[#1C1140] bg-opacity-90 z-20">
            <div className="section-px flex justify-end gap-4 text-[#F9F8F8] text-base font-normal">

                {/* Home */}
                <Link href="/" className={currentRoute === '/' ? 'active-link-desktop-fixed' : 'menu-link'}>
                    Home
                </Link>

                {/* About */}
                <Link href="/about" className={currentRoute === '/about' ? 'active-link-desktop-fixed' : 'menu-link'}>
                    About
                </Link>

                {/* Portfolio */}
                <Link href="/portfolio" className={currentRoute === '/portfolio' ? 'active-link-desktop-fixed' : 'menu-link'}>
                    Projects
                </Link>

                {/* Contact */}
                <Link href="/contact" className={currentRoute === '/contact' ? 'active-link-desktop-fixed' : 'menu-link'}>
                    Contact
                </Link>

            </div>
        </nav>
  );
}

export default NavbarDesktopFixed;