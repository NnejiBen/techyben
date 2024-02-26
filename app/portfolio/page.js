import Link from "next/link"
import Image from "next/image"
import Navbar from "@/app/components/Navbar"
import HorizontalRule from "@/app/components/HorizontalRule"
import ReadMoreBtnSolid from "@/app/components/ReadMoreBtnSolid"
import ContactSection from "@/app/components/ContactSection"
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

        {/* Project 01 - Jobeny Resources */}
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
              <Image src={jobenyResources} alt="Homepage screenshot of the Jobeny Resources website showing the navbar and hero section of the home page" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">JOBENY RESOURCES</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I developed a new website for Jobeny Resources, a web design and development agency. Built from scratch using Next.js and Tailwind CSS, this website has a unique and attractive modern interface. In addition to development, I was also responsible for the content writing of this website.</p>
            <div className="flex">
              <Link href="/portfolio/jobeny-resources"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 02 - Joygirl Portfolio */}
        <div className="flex md:flex-col-reverse gap-14 sm:gap-10 items-center mb-16">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">JOYGIRL PORTFOLIO</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I developed a portfolio website for Joygirl, a Product Designer. The website, built from scratch using Next.js and Tailwind CSS, features a captivating dark-themed design, making it both beautiful and engaging.</p>
            <div className="flex">
              <Link href="/portfolio/joygirl-portfolio"><ReadMoreBtnSolid /></Link>
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
              <Image src={joygirlPortfolio} alt="Homepage screenshot of the Joygirl portfolio website" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        {/* Project 03 - Electetra */}
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
              <Image src={electetra} alt="Homepage screenshot of the Jeb Auto Services website" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">ELECTETRA</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I developed a new website for Electetra, an LED technology company. Built from scratch using HTML, CSS, and JavaScript, this website has a very aesthetically pleasing interface. It features two sliders, a marquee, and other features.</p>
            <div className="flex">
              <Link href="/portfolio/electetra"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 04 - Serome Health */}
        <div className="flex md:flex-col-reverse gap-14 sm:gap-10 items-center mb-16">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">SEROME HEALTH</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I developed a visually appealing landing page for Serome Limited, a health insurance provider based in Nigeria. The page was created using vanilla HTML, CSS, and JavaScript, and is hosted on a cPanel Linux hosting plan.</p>
            <div className="flex">
              <Link href="/portfolio/serome-health"><ReadMoreBtnSolid /></Link>
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
              <Image src={seromeHealth} alt="Homepage screenshot of the Serome Health website" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        {/* Project 05 - Melody Genie */}
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
              <Image src={melodyGenie} alt="Homepage screenshot of the Melody Genie website" className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">MELODY GENIE</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">This website was designed by <Link href="https://hijoygirl.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">Joygirl</Link> and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.</p>
            <div className="flex">
              <Link href="/portfolio/melody-genie"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 06 - Deekes Construction */}
        <div className="flex md:flex-col-reverse gap-14 sm:gap-10 items-center mb-16">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl xl:text-4xl text-[#EAEAEA] leading-[110%] mb-6">DEEKES</h2>
            <p className="text-xl sm:text-lg text-[#F9F8F8] mb-8">I created this WordPress website for Deekes Construction and Real Estate Ltd. The site features a visually appealing interface, intuitive navigation, and full responsiveness.</p>
            <div className="flex">
              <Link href="/portfolio/deekes-construction"><ReadMoreBtnSolid /></Link>
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
              <Image src={deekesConstruction} alt="Homepage screenshot of the Deekes Construction website" className="rounded-b-[24px] w-full h-full object-cover"/>
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