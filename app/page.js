import Link from "next/link"
import Image from "next/image"
import ContactMeBtn from "@/app/components/ContactMeBtn"
import Navbar from "@/app/components/Navbar"
import MySkills from "@/app/components/MySkills"
import ContactSection from "@/app/components/ContactSection"
import benTall from "@/public/images/ben-nneji-tall.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import ReadMoreBtnSolid from "@/app/components/ReadMoreBtnSolid"
import PortfolioCard from "@/app/components/PortfolioCard"
import MobileNavbar from "@/app/components/MobileNavbar"

export const metadata = {
  title: "Benjamin Nneji | Frontend Web Developer",
  description: "Frontend Web Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.",
}

export default function Home() {
  return (
    <>
      {/* Horizontal rule */}
      <div className="sticky md:bg-[#00162B] bg-opacity-50 pt-6 sm:pt-4 z-10 mb-8 md:mb-0">
        <HorizontalRule />
      </div>

      {/* Mobile navbar */}
      <div className="hidden sticky top-0 md:flex sm:flex justify-end bg-[#00162B] bg-opacity-50 px-[1.25rem] w-full py-4 z-10 md:mb-10">
        <MobileNavbar />
      </div>
      
      {/* HERO SECTION */}
      <section className="flex flex-col">
        {/* Title and subtitle */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem]">
          <h1 className="text-[7rem] xl:text-[6rem] lg:text-[4.5rem] sm:text-[2.5rem] text-[#F1F1F1] leading-[90%] sm:mb-3">BENJAMIN</h1>
          <h1 className="text-[7rem] xl:text-[6rem] lg:text-[4.5rem] sm:text-[2.5rem] text-[#F1F1F1] leading-[90%] text-right mb-2 sm:mb-7">NNEJI</h1>
          <div className="flex justify-end mb-6">
            <p className="text-right sm:text-left text-[1.5rem] sm:text-lg text-[#F1F1F1] font-normal w-3/5 sm:w-full">Frontend Web Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.</p>
          </div>
          <div className="text-right flex justify-end">
            <ContactMeBtn />
          </div>
        </div>
      </section>

      {/* Navbar */}
      <div className="sticky top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8"><Navbar /></div>
   
      {/* Horizontal rule */}
      <div className="mb-32 md:mb-24 sm:mb-16"><HorizontalRule /></div>

      {/* ABOUT SECTION */}
      <section className="home-about-section px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] flex md:flex-col-reverse mb-32 md:mb-24 sm:mb-16">
        <div className="flex-1">
          <h2 className="text-[4rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] mb-6">HI THERE, BEN HERE</h2>
          <p className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal mb-8 sm:mb-6">I'm a frontend web developer with a passion for building beautiful and user-friendly websites. I got my start in web development back in 2007 using Dreamweaver, but I've since transitioned to using the latest technologies, such as React and Next.js. I work hard to understand my client's needs and deliver a product that they're happy with. I also pay keen attention to detail and make sure that my code is clean and well-organized.</p>
          <Link href="/about"><ReadMoreBtnSolid /></Link>
        </div>
        <div className="flex flex-1 justify-end md:justify-center md:mb-12 sm:mb-8">
          <div className="max-w-[60%] xl:max-w-[80%] lg:max-w-[90%] md:max-w-[70%] sm:max-w-full border-8 border-solid border-[#8ECAE6] rounded-[272.5px] flex">
            <Image src={benTall} alt="Photo of Ben Nneji standing" className="rounded-[272.5px] object-cover"/>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] flex md:flex-col gap-20 lg:gap-10 sm:gap-8 mb-32 md:mb-24 sm:mb-16">
        
        {/* Heading and description text for mobile only */}
        <div className="hidden md:block">
          <h2 className="text-[4rem] lg:text-[3rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] mb-8 sm:mb-6">WHAT I DO</h2>
          <p className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal">I build beautiful and user-friendly websites using the latest frontend development technologies, such as React, Next.js, and WordPress. I'm always up for a challenge, and I love working on new and innovative projects.</p>
        </div>

        {/* Home Portfolio Section Left */}
        <div className="flex flex-col gap-14 lg:gap-8">

          {/* Portfolio card 01 */}
          <PortfolioCard
            number="1"
            title="MELODY GENIE"
            content={
              <>
                This website was designed by{' '}
                <Link href="https://joygirl.super.site/" className="hover:text-[#FB8500] underline decoration-solid" target="_blank">
                  Joygirl
                </Link>{' '}
                and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.
              </>
            }
            linkHref="/portfolio/melody-genie"
          />

          {/* Portfolio card 02 */}
          <PortfolioCard
            number="2"
            title="ELECTETRA"
            content="I developed a new website for Electetra, an LED technology company. Built from scratch using HTML, CSS, and JavaScript, this website has a very aesthetically pleasing interface. It features two sliders, a marquee, and other features."
            linkHref="/portfolio/electetra"
          />
        </div>

        {/* Home Portfolio Section Right */}
        <div className="flex flex-col gap-20 lg:gap-10 sm:gap-8">
          {/* Heading and description text for desktop only */}
          <div className="md:hidden">
            <h2 className="text-[4rem] lg:text-[3rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] mb-8 sm:mb-6">WHAT I DO</h2>
            <p className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal">I build beautiful and user-friendly websites using the latest frontend development technologies, such as React, Next.js, and WordPress. I'm always up for a challenge, and I love working on new and innovative projects.</p>
          </div>

          {/* Portfolio card 03 */}
          <PortfolioCard
            number="3"
            title="JEB AUTO SERVICES"
            content="I developed this WordPress website for Jeb Auto Services, an auto repair company. It has a simple and beautiful interface. It is responsive and easy to navigate. Some of the salient features include a WhatsApp chat button and contact forms."
            linkHref="/portfolio/jeb-auto-services"
          />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-32 md:mb-24 sm:mb-16">
        <h2 className="text-[4rem] md:text-[3rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-10 sm:mb-8">MY SKILLS</h2>
        <MySkills />
      </section>

      {/* CONTACT SECTION */}
      <section className="mb-32 md:mb-24 sm:mb-14">
        <ContactSection />
      </section>
    </>
  )
}