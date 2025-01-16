import Link from "next/link"
import Image from "next/image"
import imagePlaceholder from "@/public/images/image-placeholder-projects.webp"
import HorizontalRule from "@/app/components/HorizontalRule"
import MobileNavbar from "@/app/components/MobileNavbar"
import Navbar from "@/app/components/Navbar"
import ProjectSectionLeftText from "@/app/components/ProjectSectionLeftText"
import ProjectSectionRightText from "@/app/components/ProjectSectionRightText"
import ContactSection from "@/app/components/ContactSection"
import BackToProjectsBtn from "@/app/components/BackToProjectsBtn"
import complianceCiso from "@/public/images/compliance-ciso-full.webp"
import complianceCisoBlog from "@/public/images/compliance-ciso-blog-thumbnails.webp"
import complianceCisoContactForm from "@/public/images/compliance-ciso-contact-form.webp"
import complianceCisoPricingPlans from "@/public/images/compliance-ciso-pricing-plans.webp"

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
                <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">Compliance CISO</h1>
                {/* Subtitle */}
                <div className="flex justify-end mb-4 sm:mb-8">
                    <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">This project involved designing and developing a custom website for Compliance CISO, a cybersecurity firm. The goal was to create a professional, secure site showcasing the firm's services. Using provided Figma designs, I built the site from scratch with Next.js and Tailwind CSS.</p>
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
                            <li className="mb-3"><span className="font-medium">Client: </span>Compliance CISO</li>
                            <li className="mb-3"><span className="font-medium">My Role: </span>Full-Stack Web Developer</li>
                            <li className="mb-3"><span className="font-medium">Technology Stack: </span>Next.js, Tailwind CSS,  Email.js, WordPress</li>
                            <li><span className="font-medium">Live Link: </span><Link href="https://www.complianceciso.com/" target="_blank" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">View site</Link></li>
                        </ul>
                    </>
                }
                imgHref={complianceCiso}
                imgAlt="A sreenshot from the website of Compliance CISO showing a section of the home page"
            />

            {/* Feature 01 */}
            <ProjectSectionRightText 
                title="FEATURE"
                content={
                    <>
                        <ul>
                            <li className="mb-3">
                                <span className="font-medium">Headless CMS: </span>
                                I integrated a headless CMS (using WordPress) to enable the client to add blog posts without the need for a code editor. This provides an intuitive interface for managing content while allowing the site to benefit from modern web performance features provided by Next.js.
                            </li>
                        </ul>
                    </>
                }
                imgHref={complianceCisoBlog}
                imgAlt="A sreenshot from the website of Compliance CISO website showing the blog thumbnails"
            />
        </section>

        {/* Full page image */}
        <div className="px-[7.5rem] lg:px-[4rem] md:px-0 mb-16">
            <Image src={complianceCiso} alt="A sreenshot from the website of Compliance CISO showing a section of the homepage" className="w-full h-full object-cover"/>
        </div>

        {/* PROJECT SECTION 02*/}
        <section className="mb-32 md:mb-24 sm:mb-14">
            {/* Feature 02 */}
            <ProjectSectionLeftText 
                title="FEATURE"
                content={
                    <>
                        <ul>
                            <li className="mb-3">
                                <span className="font-medium">Google Analytics: </span>
                                To help the client track visitor interactions and understand user behavior, I integrated Google Analytics. This allows them to monitor site performance, analyze traffic sources, and optimize content based on data-driven insights.
                            </li>
                        </ul>
                    </>
                }
                imgHref={complianceCisoPricingPlans}
                imgAlt="A sreenshot from the website of Compliance CISO showing the pricing plans"
            />

            {/* Feature 03 */}
            <ProjectSectionRightText 
                title="FEATURE"
                content={
                    <>
                        <ul>
                            <li className="mb-3">
                                <span className="font-medium">Google reCAPTCHA: </span>
                                To protect the website from spam and abuse, I implemented Google reCAPTCHA. This ensures that all form submissions are made by genuine users, enhancing site security and reducing the risk of bot attacks.
                            </li>
                        </ul>
                    </>
                }
                imgHref={complianceCisoContactForm}
                imgAlt="A sreenshot from the website of Compliance CISO showing the contact form"
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