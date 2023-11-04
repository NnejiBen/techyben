import Link from "next/link"
import Image from "next/image"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"
import melodyGenie from "@/public/images/melody-genie.webp"
import jebAutoServicesFull from "@/public/images/jeb-auto-services-full.webp"
import jebAutoServicesServices from "@/public/images/jeb-auto-services-services.webp"
import jebAutoServicesForm from "@/public/images/jeb-auto-services-form.webp"

const JebAutoServices = () => {
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">JEB AUTO SERVICES</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I developed this WordPress website for Jeb Auto Services, an auto repair company. It has a simple and beautiful interface. It is responsive and easy to navigate. Some of the salient features include a WhatsApp chat button and contact forms.</p>
                </div>
            </div>
        </section>

        {/* Navbar */}
        <div className="sticky top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8"><Navbar /></div>
     
        {/* Horizontal rule */}
        <div className="mb-32 md:mb-24 sm:mb-16"><HorizontalRule /></div>

        {/* PROJECT SECTION 01*/}
        <section className="mb-16">
            {/* Overview */}
            <ProjectSectionLeftText 
                title="OVERVIEW"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Client: </span>Jeb Auto Services</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Develop a new website to showcase the company’s services. Because the client needed to be able to manage the website's content, a content management system was chosen.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>WordPress</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://jebautoservices.com/" target="_blank" className="hover:text-[#FB8500] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={jebAutoServicesServices}
                imgAlt="A sreenshot from the website of Jeb Auto Services"
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Design: </span>The website's interface is visually appealing and matches the company's industry and target audience.</li>
                            <li className="mb-3"><span className="font-medium">Chat button: </span>A WhatsApp chat button is placed prominently on the website so that users can easily and quickly contact the company.</li>
                        </ul>
                    </>
                }
                imgHref={jebAutoServicesForm}
                imgAlt="A sreenshot from the website of Jeb Auto Services"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-32 md:mb-24 sm:mb-16">
            <Image src={jebAutoServicesFull} alt="A sreenshot from the website of Jeb Auto Services" className="w-full h-full object-cover"/>
        </div>

        {/* PROJECT SECTION 02*/}
        <section className="hidden mb-32 md:mb-24 sm:mb-14">
            {/* Challenges */}
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of Jeb Auto Services"
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of Jeb Auto Services"
            />
        </section>
      
        {/* CONTACT SECTION */}
        <section className="mb-32 md:mb-24 sm:mb-14">
            <ContactSection />
        </section>

    </>
  )
}

export default JebAutoServices