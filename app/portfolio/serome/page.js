import Link from "next/link"
import Image from "next/image"
import seromeFull from "@/public/images/serome-full.webp"
import seromePlans from "@/public/images/serome-plans.webp"
import seromeFooter from "@/public/images/serome-footer.webp"
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">SEROME</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I developed a visually appealing landing page for Serome, a health insurance provider based in Nigeria. The page was created using vanilla HTML, CSS, and JavaScript, and it is hosted on a cPanel Linux hosting plan.</p>
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Serome</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Develop a landing page based on the Figma design. Visitors can access Serome's portal by clicking a link on this landing page.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>HTML, CSS, and JavaScript</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://seromehealth.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={seromePlans}
                imgAlt="A sreenshot from the website of Serome Health showing the company's health insurance plans"
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="LESSONS"
                content={
                    <>
                        <p>Learned how to host a website on a cPanel Linux hosting plan. I also learned that the language or technology stack used in developing a website determines the type of hosting required. For instance, React and Next.js sites necessitate Node.js hosting (or server-side JavaScript hosting), while vanilla sites like this one can utilize a regular cPanel web hosting plan.</p>
                    </>
                }
                imgHref={seromeFooter}
                imgAlt="A sreenshot from the website of Serome Health showing parts of the About and Footer sections"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={seromeFull} alt="A sreenshot from the website of Serome Health website showing the navbar and hero section" className="w-full h-full object-cover"/>
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