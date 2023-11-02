import Link from "next/link"
import Image from "next/image"
import melodyGenie from "@/public/images/melody-genie.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"

const MelodyGenie = () => {
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">MELODY GENIE</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">This website was designed by <Link href="https://joygirl.super.site/" target="_blank" className="hover:text-[#FB8500] underline decoration-solid">Joygirl</Link> and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.</p>
                </div>
            </div>
        </section>

        {/* Navbar */}
        <div className="sticky top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8"><Navbar /></div>
     
        {/* Horizontal rule */}
        <div className="mb-32 xl:mb-52 md:mb-24 sm:mb-16"><HorizontalRule /></div>

        {/* PROJECT SECTION 01*/}
        <section className="mb-16">
            <ProjectSectionLeftText 
                title="OVERVIEW"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>I took this on as a fun project to challenge myself and bring a beautiful design to life.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>HTML, CSS, JavaScript</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://melody-genie.netlify.app/" target="_blank" className="hover:text-[#FB8500] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />

            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Animation: </span>There is a unique animation on the homepage. There are also two infinite scroll marquees.</li>
                            <li className="mb-3"><span className="font-medium">Music player: </span>Each page has a custom and attractive music player. Features include loop, shuffle and a playlist.</li>
                            <li><span className="font-medium">Colors: </span>The site is aesthetically pleasing and features a nice collection of beautiful colors.</li>
                        </ul>
                    </>
                }
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />
        </section>

        {/* Full page image */}
        <div className="flex px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={melodyGenie} alt="A short description of the image" className="w-full h-screen sm:h-full object-cover"/>
        </div>

        {/* PROJECT SECTION 02*/}
        <section className="mb-32 md:mb-24 sm:mb-14">
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Bringing the animation to life was a tough challenge. Other challenges included coding the custom music players, positioning some of the elements, and the mobile view for some of the sections."
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />

            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="I learned that having images inside divs makes styling (such as resizing and scaling) easier. I also learned that conflicts can occur in your JavaScript code when you have different HTML elements with the same class names or IDs. I needed to apply this lesson to make two music players on the same page work properly."
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />
        </section>
      
        {/* CONTACT SECTION */}
        <section className="mb-32 md:mb-24 sm:mb-14">
            <ContactSection />
        </section>

    </>
  )
}

export default MelodyGenie