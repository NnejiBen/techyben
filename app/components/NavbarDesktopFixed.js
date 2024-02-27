'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks

function NavbarDesktopFixed() {
  const currentRoute = usePathname();
  const [isVisible, setIsVisible] = useState(false); // State to manage navbar visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isVisible = scrollTop > 0; // Set visibility based on scroll position
      setIsVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener on component unmount
    };
  }, []); // Empty dependency array to ensure the effect only runs once

  return (
    <nav className={`md:hidden fixed w-full bg-[#1C1140] bg-opacity-90 z-20 ${isVisible ? 'visible' : 'hidden'}`}>
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
