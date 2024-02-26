import Link from "next/link"
import Image from "next/image"
import melodyGenie from "@/public/images/melody-genie-home.webp"
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">JOYGIRL PORTFOLIO</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I developed a portfolio website for Joygirl, a Product Designer. The website, built from scratch using Next.js and Tailwind CSS, features a captivating dark-themed design, making it both beautiful and engaging.</p>
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Joygirl (a Product Designer)</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Develop a new website from Figma design to showcase the client's work.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>Next.js, Tailwind CSS, Swiper.js</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://hijoygirl.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Video and Google Slides: </span>The home page features a video set to autoplay and loop indefinitely. Additionally, Google Slides are embedded to showcase features of select client projects.</li>
                            <li className="mb-3"><span className="font-medium">Testimonial slider: </span>A custom Slider.js slider for testimonials.</li>
                            <li><span className="font-medium">Filter tabs: </span>Tabs are used to filter projects by categories.</li>
                        </ul>
                    </>
                }
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={melodyGenie} alt="A sreenshot from the website of ..." className="w-full h-full object-cover"/>
        </div>

        {/* PROJECT SECTION 02*/}
        <section className="mb-32 md:mb-24 sm:mb-14">
            {/* Challenges */}
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Styling the testimonial section was difficult and time consuming. This is because the UI is somewhat complex and the design for mobile screens is quite different from the desktop design. Though not very challenging, it was fun figuring out how to customize the border styling of form inputs when they are focused, which was needed for the contact form."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="(1) An HTML element's attribute (e.g. 'target') can be passed in as a prop. (2) Used the flex-row-reverse CSS property for the first time. (3) It's acceptable practice to apply flexbox properties to heading elements (such as h2). This helped with styling an inline span element within an h2 element. (4) Used the CSS unit svh (small viewport height) in place of vh (viewport height) for the first time."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />
        </section>

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