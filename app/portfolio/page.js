import Link from "next/link"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import HorizontalRule from "@/app/components/HorizontalRule"
import ReadMoreBtnSolid from "@/app/components/ReadMoreBtnSolid"
import ContactSection from "@/app/components/ContactSection"
import complianceCiso from "@/public/images/compliance-ciso-full.webp"
import parkscapes from "@/public/images/parkscapes-full.webp"
import serome from "@/public/images/serome-full.webp"
import jobenyResources from "@/public/images/jobeny-home.webp"
import joygirlPortfolio from "@/public/images/joygirl-home.webp"
import electetra from "@/public/images/electetra-home.webp"
import seromeHealth from "@/public/images/serome-home.webp"
import melodyGenie from "@/public/images/melody-genie-home.webp"
import deekesConstruction from "@/public/images/deekes-home.webp"
import MobileNavbar from "@/app/components/MobileNavbar"

export const metadata = {
  title: "Portfolio | Benjamin Nneji | Frontend Web Developer",
  description: "Here are some of the projects that I've worked on as a frontend web developer. If you have a project in mind, please feel free to contact me.",
}

const portfolio = () => {
  return (
    <>
      {/* Horizontal rule */}
      <div className="sticky md:bg-[#00162B] sm:bg-[#00162B] bg-opacity-50 pt-6 z-10 sm:pt-4 mb-8 md:mb-0">
        <HorizontalRule />
      </div>

      {/* Mobile navbar */}
      <div className="hidden sticky top-0 md:flex sm:flex justify-end bg-[#00162B] bg-opacity-50 px-[1.25rem] w-full py-4 z-10 md:mb-10">
        <MobileNavbar />
      </div>

      {/* HERO SECTION */}
      <section className="pt-6 mb-6">
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem]">
          {/* Title */}
          <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">MY PROJECTS</h1>
          {/* Subtitle */}
          <div className="flex justify-end mb-4 sm:mb-8">
            <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">Here are some of the projects that I've worked on as a frontend web developer. I'm always looking for new challenges and I'm passionate about building innovative and user-friendly websites and web applications. If you have a project in mind, please feel free to contact me.</p>
          </div>
        </div>
      </section>

      {/* Navbar */}
      <div className="top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] z-20 mb-8"><Navbar /></div>
     
      {/* Horizontal rule */}
      <div className="mb-32 md:mb-24 sm:mb-16"><HorizontalRule /></div>

      {/* PROJECTS SECTION */}
      <section className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-32 md:mb-24 sm:mb-16">

        {/* Project 01 - Compliance CISO */}
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
              <Image 
                src={complianceCiso} alt="Screenshot of the Compliance CISO website showing a section of the home page" 
                className="rounded-b-[24px] w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">Compliance CISO</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">
              This project involved designing and developing a custom website for Compliance CISO, a cybersecurity firm. The goal was to create a professional, secure site showcasing the firm's services. Using provided Figma designs, I built the site from scratch with Next.js and Tailwind CSS.
            </p>
            <div className="flex">
              <Link href="/portfolio/compliance-ciso"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 02 - Parkscapes */}
        <div className="flex md:flex-col-reverse gap-14 sm:gap-10 items-center mb-16">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">Parkscapes</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">
              This project aimed to design and develop a clean, professional, and visually appealing website for Parkscapes LLC, a U.S.-based company specializing in commercial parking garage cleaning. Starting with the provided Figma designs, I built the website from scratch using Next.js and Tailwind CSS.
            </p>
            <div className="flex">
              <Link href="https://www.parkscapesllc.com/"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
          {/* Right side: Card dots and image */}
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
              <Image 
                src={parkscapes} alt="Screenshot of the Parkscapes website showing a section of the home page" 
                className="rounded-b-[24px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Project 03 - Serome */}
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
              <Image 
                src={serome} 
                alt="Screenshot of the Serome website showing a section of the home page" 
                className="rounded-b-[24px] w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">Serome</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">
              The project involved designing and developing a custom landing page for Serome Limited, a health insurance provider in Nigeria. The goal was to create a visually appealing and user-friendly page that reflects the brand. Using the provided Figma designs, I built the site from scratch with HTML, CSS, and JavaScript.
            </p>
            <div className="flex">
              <Link href="/portfolio/serome"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

      </section>

      {/* CONTACT SECTION */}
      <div className="mb-32 md:mb-24 sm:mb-16">
        <ContactSection />
      </div>
    </>
  )
}

export default portfolio