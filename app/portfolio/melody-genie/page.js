import Link from "next/link"
import Image from "next/image"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"
import melodyGenieFull from "@/public/images/melody-genie-full.webp"
import melodyGenieMusicPlayer01 from "@/public/images/melody-genie-music-player-01.webp"
import melodyGenieMusicPlayer02 from "@/public/images/melody-genie-music-player-02.webp"
import melodyGenieMusicPlayer03 from "@/public/images/melody-genie-music-player-03.webp"
import melodyGenieMusicPlayer04 from "@/public/images/melody-genie-music-player-04.webp"
import BackToProjectsBtn from "@/app/components/BackToProjectsBtn"

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
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">This website was designed by <Link href="https://hijoygirl.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">Joygirl</Link> and I brought it to life using HTML, CSS, and JavaScript. This is one of my early projects and offered some very interesting challenges such as the animations and music player. It’s a beautiful site and I consider it a work of art.</p>
                </div>
            </div>
        </section>

        {/* Navbar */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] z-20 mb-8"><Navbar /></div>
     
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
                            <li className="mb-3"><span className="font-medium">Purpose: </span>I took this on as a fun project to challenge myself and bring a beautiful design to life.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>HTML, CSS, JavaScript</li>
                            <li className="mb-3"><span className="font-medium">Live Link: </span><Link href="https://melody-genie.netlify.app/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                            <li className="mb-3"><span className="font-medium">Note: </span>The website is still under construction.</li>
                        </ul>
                    </>
                }
                imgHref={melodyGenieMusicPlayer04}
                imgAlt="A sreenshot from the website of Melody Genie"
            />

            {/* Features */}
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
                imgHref={melodyGenieMusicPlayer01}
                imgAlt="A sreenshot from the website of Melody Genie"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={melodyGenieFull} alt="A sreenshot from the website of Melody Genie" className="w-full h-full object-cover"/>
        </div>

        {/* Challenges */}
        {/* PROJECT SECTION 02*/}
        <section>
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Bringing the homepage animation to life is a tough challenge. Other challenges include coding the custom music players, positioning some of the elements, and the mobile view for some of the sections."
                imgHref={melodyGenieMusicPlayer02}
                imgAlt="A sreenshot from the website of Melody Genie"
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="I learned that having images inside divs makes styling (such as resizing and scaling) easier. I also learned that conflicts can occur in your JavaScript code when you have different HTML elements with the same class names or IDs. I needed to apply this lesson to make two music players on the same page work properly."
                imgHref={melodyGenieMusicPlayer03}
                imgAlt="A sreenshot from the website of Melody Genie"
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

export default MelodyGenie