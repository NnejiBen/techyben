import Link from "next/link"
import Image from "next/image"
import jobenyServices from "@/public/images/jobeny-services.webp"
import jobenyValue from "@/public/images/jobeny-value.webp"
import jobenyFull from "@/public/images/jobeny-full.webp"
import jobenyPortfolio from "@/public/images/jobeny-portfolio.webp"
import jobenyCollaborate from "@/public/images/jobeny-collaborate.webp"
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">JOBENY RESOURCES</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">
                        I developed a new website for Jobeny Resources, a web design and development agency. Built from scratch using Next.js and Tailwind CSS, this website has a unique and attractive modern interface. In addition to development, I was also responsible for the content writing of this website.
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Jobeny Resources</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Develop a new website to showcase the agency's services and write an engaging copy.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>Next.js, Tailwind CSS, Swiper.js, Email.js</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://www.jobeny.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={jobenyServices}
                imgAlt="A sreenshot from the website of ..."
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Typewriter effect animation: </span>This is on the hero section of the home page.</li>
                            <li className="mb-3"><span className="font-medium">Linear gradient border: </span>A linear gradient was applied to the border of a container (a contact card).</li>
                            <li><span className="font-medium">Offset borders: </span>Certain containers feature dual borders, with the second border positioned at a specific distance from the first</li>
                        </ul>
                    </>
                }
                imgHref={jobenyValue}
                imgAlt="A sreenshot from the website of ..."
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={jobenyFull} alt="A sreenshot from the website of ..." className="w-full h-full object-cover"/>
        </div>

        {/* PROJECT SECTION 02*/}
        <section className="mb-32 md:mb-24 sm:mb-14">
            {/* Challenges */}
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Crafting an engaging copy was a challenge. I made good use of ChatGPT and Gemini but did not rely solely on these AI tools. Also, a decent amount of time went into researching such features as the typewriter effect, social media sharing preview, and linear gradient border."
                imgHref={jobenyPortfolio}
                imgAlt="A sreenshot from the website of ..."
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="One of the best lessons was figuring out how to conditionally render a button based on a prop instead of having separate components one with a button and one without a button. I also learned how to set up Email.js to forward contact form submissions to email. Previously I had used Formspree. I also learned to uninstall unneeded packages using npm uninstall."
                imgHref={jobenyCollaborate}
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