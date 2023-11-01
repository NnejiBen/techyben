'use client'

import Link from "next/link";
import Image from "next/image";
import profilePic from "@/public/images/ben-nneji.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react"; // Import useState

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State variable to track menu open state

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    setMenuOpen(!menuOpen); // Toggle the state
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <nav className="flex items-center gap-4 w-max bg-[#F9F8F8] rounded-l-[110px] text-[#023047] text-base font-medium p-[6px]">
      <div>
        <div className="max-w-[1.5rem] max-h-[1.5rem] border-2 border-solid border-[#8ECAE6] rounded-full">
          <Link href="/">
            <Image src={profilePic} alt="Ben Nneji profile picture" title="Home" className="rounded-full" />
          </Link>
        </div>
      </div>
      <div id="menuToggle" onClick={toggleMobileMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Render the icons based on menuOpen state */}
      </div>
    </nav>
  );
};

export default MobileNavbar;