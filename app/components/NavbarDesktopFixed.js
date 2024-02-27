'use client'

// import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavbarDesktopFixed() {
  const currentRoute = usePathname();

  return (
        <nav className="md:hidden fixed w-full bg-[#1C1140] z-20">
            <div className="section-px flex justify-end gap-4 text-[#F9F8F8] text-base font-medium">

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