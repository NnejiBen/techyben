import Link from "next/link"
import Image from "next/image"
import melodyGenie from "@/public/images/melody-genie.webp"
import deekesServices from "@/public/images/deekes-services.webp"
import deekesContactForm from "@/public/images/deekes-contact-form.webp"
import deekesFull from "@/public/images/deekes-full.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"
import BackToProjectsBtn from "@/app/components/BackToProjectsBtn"

const ProjectName = () => {
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">DEEKES</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I created this WordPress website for Deekes Construction and Real Estate Ltd. The site features a visually appealing interface, intuitive navigation, and full responsiveness.</p>
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Deekes Construction and Real Estate Ltd</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Create a new website to highlight the company's services and showcase images of completed projects and real estate properties.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>WordPress</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://deekesconstruction.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={deekesServices}
                imgAlt="A sreenshot from the website of Deekes Construction showing parts of the company statistics and services sections of the home page "
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Contact form: </span>Contact form with hCaptcha integration to effectively combat spam.</li>
                            <li className="mb-3"><span className="font-medium">Chat button: </span>A prominent floating WhatsApp chat button for easy and quick communication with the company.</li>
                            <li><span className="font-medium">Google Maps: </span>Provide users with accurate location information and directions through Google Maps integration on the contact page.</li>
                        </ul>
                    </>
                }
                imgHref={deekesContactForm}
                imgAlt="A sreenshot from the website of Deekes Construction showing the contact form and FAQ sections"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={deekesFull} alt="A sreenshot from the website of Deekes Construction showing the navbar and hero section" className="w-full h-full object-cover"/>
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

export default ProjectName