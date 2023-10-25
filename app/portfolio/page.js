import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import framePortfolio from "@/public/images/frame-portfolio.png"
import HorizontalRule from "@/components/HorizontalRule"
import ReadMoreBtnSolid from "@/components/ReadMoreBtnSolid"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const portfolio = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-6 mb-16">
        <div className="mb-12">
          <HorizontalRule />
        </div>
        <div className="px-[7.5rem]">
          {/* Title */}
          <h1 className="text-[#F1F1F1] text-[4rem] leading-none mb-10">MY PORTFOLIO</h1>
          <div className="flex justify-end mb-4">
            <p className="w-1/2 text-left text-[#F1F1F1] text-2xl">Here are some of the projects that I've worked on as a frontend software developer. I'm always looking for new challenges and I'm passionate about building innovative and user-friendly websites and web applications. If you have a project in mind, please feel free to contact me.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <div className="mb-12">
          <HorizontalRule />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-[7.5rem] mb-32">

        {/* Project 01 */}
        <div className="flex gap-14 items-center mb-16">
          {/* Left side: Card dots and image */}
          <div className="min-w-[55%] flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl text-[#EAEAEA] leading-[110%] mb-6">MELODY GENIE</h2>
            <p className="text-xl text-[#F9F8F8] mb-8">This website was designed by Joygirl and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.</p>
            <div className="flex">
              <Link href="#"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="flex gap-14 items-center mb-16">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl text-[#EAEAEA] leading-[110%] mb-6">ELECTETRA</h2>
            <p className="text-xl text-[#F9F8F8] mb-8">I developed a new website for Electetra, an LED technology company. Built from scratch using HTML, CSS, and JavaScript, this website has a very aesthetically pleasing interface. It features two sliders, a marquee, and other features.</p>
            <div className="flex">
              <Link href="#"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
          {/* Right side: Card dots and image */}
          <div className="min-w-[55%] flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        {/* Project 03 */}
        <div className="flex gap-14 items-center mb-16">
          {/* Left side: Card dots and image */}
          <div className="min-w-[55%] flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Right side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl text-[#EAEAEA] leading-[110%] mb-6">JEB AUTO SERVICES</h2>
            <p className="text-xl text-[#F9F8F8] mb-8">I developed this WordPress website for Jeb Auto Services, an auto repair company. It has a simple and yet beautiful interface. It is responsive and easy to navigate. Some of the salient features include a WhatsApp chat button and contact forms.</p>
            <div className="flex">
              <Link href="#"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
        </div>

        {/* Project 04 */}
        <div className="flex gap-14 items-center mb-16 hidden">
          {/* Left side: Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl text-[#EAEAEA] leading-[110%] mb-6">PROJECT TITLE</h2>
            <p className="text-xl text-[#F9F8F8] mb-8">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            <div className="flex">
              <Link href="#"><ReadMoreBtnSolid /></Link>
            </div>
          </div>
          {/* Right side: Card dots and image */}
          <div className="min-w-[55%] flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <div className="mb-32">
        <ContactSection />
      </div>

      {/* FOOTER SECTION */}
      <Footer />
    </>
  )
}

export default portfolio