import Link from "next/link"
import Image from "next/image"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"
import BackToProjectsBtn from "@/app/components/BackToProjectsBtn"
import parkscapesWhyChooseUs from "@/public/images/parkscapes-why-choose-us.webp"
import parkscapesCarousel from "@/public/images/parkscapes-carousel.webp"
import parkscapesFull from "@/public/images/parkscapes-full.webp"

const Parkscapes = () => {
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">Parkscapes</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">
                        This project aimed to design and develop a clean, professional, and visually appealing website for Parkscapes LLC, a U.S.-based company specializing in commercial parking garage cleaning. Starting with the provided Figma designs, I built the website from scratch using Next.js and Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>

        {/* Navbar */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] z-20 mb-8"><Navbar /></div>
     
        {/* Horizontal rule */}
        <div className="mb-32 xl:mb-52 md:mb-24 sm:mb-16"><HorizontalRule /></div>

        {/* PROJECT SECTION 01*/}
        <section className="mb-16">
            {/* Overview */}
            <ProjectSectionLeftText 
                title="OVERVIEW"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Client: </span>Parkscapes LLC</li>
                            <li className="mb-3"><span className="font-medium">My Role: </span>Full-Stack Web Developer</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>Next.js, Tailwind CSS, Swiper.js, Email.js</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://www.parkscapesllc.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={parkscapesWhyChooseUs}
                imgAlt="A sreenshot from the website of Parkscapes showing the Why Choose Us section"
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3">Implemented Email.js for a reliable contact form backend, Google reCAPTCHA for spam protection, and Swiper.js to create a smooth, interactive image carousel.</li>
                        </ul>
                    </>
                }
                imgHref={parkscapesCarousel}
                imgAlt="A sreenshot from the website of Parkscapes showing an image carousel"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={parkscapesFull} alt="A sreenshot from the website of Parkscapes showing a section of the home page" className="w-full h-full object-cover"/>
        </div>

        {/* BACK TO PROJECTS BUTTON */}
        <div className="flex justify-center px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-32 md:mb-24 sm:mb-14">
            <BackToProjectsBtn />
        </div>
      
        {/* CONTACT SECTION */}
        <section className="mb-32 md:mb-24 sm:mb-14">
            <ContactSection />
        </section>

    </>
  )
}

export default Parkscapes