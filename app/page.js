import Link from "next/link"
import Image from "next/image"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import benTall from "../public/images/ben-nneji-tall.webp"
import HorizontalRule from "@/components/HorizontalRule"
import ReadMoreBtnSolid from "@/components/ReadMoreBtnSolid"
import ReadMoreBtnOutline from "@/components/ReadMoreBtnOutline"

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-between py-6 mb-32">
        <div className="mb-6"><HorizontalRule /></div>
        <div className="px-[7.5rem]">
          <h1 className="text-[7rem] text-[#F1F1F1] leading-[90%]">BENJAMIN</h1>
          <h1 className="text-[7rem] text-[#F1F1F1] leading-[90%] text-right mb-2">NNEJI</h1>
          <div className="flex justify-end mb-6">
            <p className="text-right text-[1.5rem] text-[#F1F1F1] w-3/5">Frontend Software Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.</p>
          </div>
          <div className="text-right flex justify-end">
            <ContactMeBtn />
          </div>
          <div className="mb-8"><Navbar /></div>
        </div>
        <div><HorizontalRule /></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="home-about-section px-[7.5rem] flex mb-32">
        <div className="flex-1">
          <h2 className="text-[4rem] text-[#EAEAEA] leading-[110%] mb-6">HI THERE, BEN HERE</h2>
          <p className="text-2xl text-[#F9F8F8] mb-8">I'm a frontend software developer with a passion for building beautiful and user-friendly websites. I got my start in web development back in 2007 using Dreamweaver, but I've since transitioned to using the latest technologies, such as React and Next.js. I work hard to understand my client's needs and deliver a product that they're happy with. I also pay keen attention to detail and make sure that my code is clean and well-organized.</p>
          <Link href="/about"><ReadMoreBtnSolid /></Link>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="max-w-[60%] border-8 border-solid border-[#8ECAE6] rounded-[272.5px] flex">
            <Image src={benTall} alt="Photo of Ben Nneji standing" className="rounded-[272.5px] object-cover"/>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="home-portfolio-section px-[7.5rem] flex gap-20 mb-32">
        {/* Home Portfolio Section Left */}
        <div className="flex flex-col gap-14">
          {/* Portfolio card 01 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            {/* Heading and number */}
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">1</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">MELODY GENIE</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>This website was designed by <Link href="https://hijoygirl.com" className="hover:text-[#FB8500]" title="Visit portfolio">Joygirl</Link> and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.</p>
            </div>
            {/* Button */}
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
          {/* Portfolio card 02 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            {/* Heading and number */}
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">2</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">ELECTETRA</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>I developed a new website for Electetra, an LED technology company. Built from scratch using HTML, CSS, and JavaScript, this website has a very aesthetically pleasing interface. It features two sliders, a marquee, and other features.</p>
            </div>
            {/* Button */}
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
        </div>
        {/* Home Portfolio Section Right */}
        <div className="flex flex-col gap-20">
          {/* Heading and description text */}
          <div className="portfolio--text">
            <h2 className="text-[4rem] text-[#EAEAEA] leading-[110%] mb-8">WHAT I DO</h2>
            <p className="text-2xl text-[#F9F8F8]">I build beautiful and user-friendly websites using the latest frontend development technologies, such as React, Next.js, and WordPress. I'm always up for a challenge, and I love working on new and innovative projects.</p>
          </div>
          {/* Portfolio card 03 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            {/* Heading and number */}
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">3</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">JEB AUTO SERVICES</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>I developed this WordPress website for Jeb Auto Services, an auto repair company. It has a simple and yet beautiful interface. It is responsive and easy to navigate. Some of the salient features include a WhatsApp chat button and contact forms.</p>
            </div>
            {/* Button */}
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-32">
        <h2 className="text-[4rem] text-[#EAEAEA] leading-[110%] px-[7.5rem] mb-10">MY SKILLS</h2>
        <MySkills />
      </section>

      {/* CONTACT SECTION */}
      <section className="my-32">
        <ContactSection />
      </section>
      
      {/* FOOTER */}
      <Footer />
    </>
  )
}
