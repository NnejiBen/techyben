import Link from "next/link"
import Image from "next/image"
import melodyGenie from "@/public/images/melody-genie.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"

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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">PROJECT NAME</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </section>

        {/* Navbar */}
        <div className="sticky top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8"><Navbar /></div>
     
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Client name</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Description of purpose.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>Technology stack here</li>
                            <li><span className="font-medium">Live Link: </span><Link href="" target="_blank" className="hover:text-[#FB8500] underline decoration-solid">View site</Link></li>
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
                            <li className="mb-3"><span className="font-medium">Feature 01: </span>Description of feature.</li>
                            <li className="mb-3"><span className="font-medium">Feature 02: </span>Description of feature.</li>
                            <li><span className="font-medium">Feature 03: </span>Description of feature.</li>
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
                content="Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur."
                imgHref={melodyGenie}
                imgAlt="A sreenshot from the website of ..."
            />
        </section>
      
        {/* CONTACT SECTION */}
        <section className="mb-32 md:mb-24 sm:mb-14">
            <ContactSection />
        </section>

    </>
  )
}

export default ProjectName