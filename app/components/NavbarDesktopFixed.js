'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavbarDesktopFixed() {
  const [isScrolled, setIsScrolled] = useState(false);
  const currentRoute = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`md:hidden fixed w-full bg-[#1C1140] bg-opacity-90 z-20 ${isScrolled ? 'visible' : 'invisible'}`}>
      <div className="section-px flex justify-end gap-4 text-[#F9F8F8] text-base font-normal py-2">
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