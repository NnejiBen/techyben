'use client'

import Link from "next/link";
import Image from "next/image";
import githubIcon from "../public/images/github.png";
import linkedinIcon from "../public/images/linkedin.png";
import gmailIcon from "../public/images/gmail.png";
import whatsappIcon from "../public/images/whatsapp.png";
import xIcon from "../public/images/x.png";
import facebookIcon from "../public/images/facebook.png";

const MobileNavMenu = () => {
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.add("hidden");
    const menuToggle = document.querySelector("#menuToggle");
    menuToggle.innerHTML = "<FaBars />";
  };

  return (
    <>
      <nav className="mobile-menu hidden flex-col justify-between fixed top-0 left-0 w-full h-full bg-[#00162B] text-white px-[1.25rem] pt-32 z-10">
        <div>
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
              PORTFOLIO
            </Link>
          </div>
          <div className="mobile-menu-item border-b-[1px] border-[#EAEAEA] py-8 text-xl text-center">
            <Link href="/contact" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </div>
        </div>
        {/* Contact icons */}
        <div className="flex justify-center gap-4 border-[#EAEAEA] py-8">
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
              <Image src={xIcon} title="X (Twitter)" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
            </Link>
          </div>
          {/* Contact icon */}
          <div>
            <Link href="https://web.facebook.com/techyben" target="_blank">
              <Image src={facebookIcon} title="Facebook" className="max-w-[3.2em] max-h-[3.2em] object-cover" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNavMenu;
