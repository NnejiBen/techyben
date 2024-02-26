'use client'

import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/public/images/github.svg";
import linkedinIcon from "@/public/images/linkedin.svg";
import gmailIcon from "@/public/images/gmail.svg";
import whatsappIcon from "@/public/images/whatsapp.svg";
import xIcon from "@/public/images/x.svg";
import facebookIcon from "@/public/images/facebook.svg";
import { useState } from "react"; // Import useState

const MobileNavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State variable to track menu open state

  const closeMobileMenu = () => {
    setMenuOpen(false); // Close the mobile menu
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.add("hidden");
  };

  return (
    <>
      <nav className={`mobile-menu ${menuOpen ? "" : "hidden"} fixed top-0 left-0 bg-[#00162B] font-akira text-white w-full h-full px-[1.25rem] pt-28 z-10`}>
        <div className="flex flex-col items-end justify-between gap-10 w-full h-full">
          <div className="flex flex-col w-full">
            <div className="mobile-menu-item border-b-[1px] border-[#EAEAEA] py-8 text-xl text-center">
              <Link href="/" onClick={closeMobileMenu}>
                HOME
              </Link>
            </div>
            <div className="mobile-menu-item border-b-[1px] border-[#EAEAEA] py-8 text-xl text-center">
              <Link href="/about" onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </div>
            <div className="mobile-menu-item border-b-[1px] border-[#EAEAEA] py-8 text-xl text-center">
              <Link href="/portfolio" onClick={closeMobileMenu}>
                PROJECTS
              </Link>
            </div>
            <div className="mobile-menu-item border-b-[1px] border-[#EAEAEA] py-8 text-xl text-center">
              <Link href="/contact" onClick={closeMobileMenu}>
                CONTACT
              </Link>
            </div>
          </div>

          {/* Contact icons container */}
          <div className="flex justify-center gap-4 w-full py-8">
            {/* Contact icon */}
            <div>
              <Link href="mailto:nnejiben@gmail.com" target="_blank">
                <Image src={gmailIcon} title="Email" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
              </Link>
            </div>
            {/* Contact icon */}
            <div>
              <Link href="https://api.whatsapp.com/send?phone=2348063062992" target="_blank">
                <Image src={whatsappIcon} title="WhatsApp" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
              </Link>
            </div>
            {/* Contact icon */}
            <div>
              <Link href="https://github.com/NnejiBen" target="_blank">
                <Image src={githubIcon} title="GitHub" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
              </Link>
            </div>
            {/* Contact icon */}
            <div>
              <Link href="https://www.linkedin.com/in/benjamin-nneji-a4372623a/" target="_blank">
                <Image src={linkedinIcon} title="LinkedIn" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
              </Link>
            </div>
            {/* Contact icon */}
            <div>
              <Link href="https://twitter.com/ben_nneji" target="_blank">
                <Image src={xIcon} title="X (Twitter)" className="max-w-[1.8em] max-h-[1.8em] object-cover" />
              </Link>
            </div>
            {/* Contact icon */}
            <div>
              <Link href="https://web.facebook.com/techyben" target="_blank">
                <Image src={facebookIcon} title="Facebook" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavMenu;
