import Link from "next/link"
import Image from "next/image"
import melodyGenie from "@/public/images/melody-genie.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"

const Electetra = () => {
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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">ELECTETRA</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I developed a new website for Electetra, an LED technology company. Built from scratch using HTML, CSS, and JavaScript, this website has a very aesthetically pleasing interface. It features two sliders, a marquee, and other features.</p>
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Electetra Engineering</li>
                            <li className="mb-3"><span className="font-medium">Purpose: </span>Develop a new website to showcase the company’s products and services.</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>HTML, CCS, JavaScript</li>
                            <li className="mb-3"><span className="font-medium">Live Link: </span><Link href="https://electetra.netlify.app/" target="_blank" className="hover:text-[#FB8500] underline decoration-solid">View site</Link></li>
                            <li className="mb-3"><span className="font-medium">Note: </span>The website is still under construction.</li>
                        </ul>
                    </>
                }
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />

            {/* Features */}
            <ProjectSectionRightText 
                title="FEATURES"
                content={
                    <>
                        <ul>
                            <li className="mb-3"><span className="font-medium">Touch sliders: </span>The beautifully styled services and testimonial sections are touch sliders built with Swiper JS.</li>
                            <li className="mb-3"><span className="font-medium">Social media integration: </span>A section displays social media feeds from the company’s Facebook and Instagram accounts.</li>
                            <li><span className="font-medium">Live chat: </span>A floating chat button lets visitors chat with customer support.</li>
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
            {/* Challenges */}
            <ProjectSectionLeftText 
                title="CHALLENGES"
                content="Besides development, I had to write some content for the website. I also had to collaborate with the UI/UX designer in designing the various sections and pages. A lot of research was involved. There were also some coding challenges. For example, after trying unsuccessfully to code the sliders using vanilla JavaScript, I had to resort to using Swiper JS."
                imgHref={melodyGenie}
                imgAlt="A short description of the image"
            />

            {/* Lessons Learned */}
            <ProjectSectionRightText 
                title="LESSONS LEARNED"
                content="I learned how to use Swiper JS to build sliders. I also learned how to build infinite scroll marquees using just HTML and CSS, all thanks to the internet and a developer friend. I also learned to use Google material symbols, how to center an absolute element, and using flex-shrink set to zero to prevent a div from shrinking. I was also introduced to some new HTML tags such as “figure” and “figcaption”."
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

export default Electetra