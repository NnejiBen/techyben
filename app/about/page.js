import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import benTall from "@/public/images/ben-nneji-tall.webp"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import HorizontalRule from "@/components/HorizontalRule"
import MobileNavbar from "@/components/MobileNavbar"

const about = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-6 sm:py-4 sm:mt-32 mb-32 md:mb-24 sm:mb-10">
        {/* Fixed navbar for mobile */}
        <div className="sm:fixed sm:top-0 sm:w-full sm:py-4 z-10 sm:bg-[#00162B] sm:bg-opacity-50">
          {/* Horizontal rule */}
          <div className="mb-6 sm:mb-4">
            <HorizontalRule />
          </div>
          {/* Mobile navbar */}
          <div className="hidden sm:flex justify-end px-[1.25rem]">
            <MobileNavbar />
          </div>
        </div>   
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem]">
          {/* Title */}
          <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">ABOUT ME</h1>
          <div className="flex justify-end mb-4 sm:mb-8">
            <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">If you're looking for a frontend software developer who is skilled, experienced, dedicated to customer satisfaction, and has a love for learning and teaching, then I'm your guy. I'm confident that I can help you build a website that is both beautiful and functional.</p>
          </div>
          <div className="sm:hidden mb-12">
            <Navbar />
          </div>
        </div>
        <div><HorizontalRule /></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="flex md:flex-col-reverse items-center px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-52 md:mb-24 sm:mb-16">
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-[#EAEAEA] text-[4rem] lg:text-[3rem] sm:text-[2rem] leading-none mb-10 sm:mb-6">MY STORY</h2>
          {/* Body text */}
          <p className="text-[#F9F8F8] text-2xl lg:text-xl sm:text-lg mb-6">I'm a career changer. Prior to returning to web development, I worked for several years as an electronics and broadcast technician. This experience gave me a strong foundation in problem-solving and troubleshooting, which are essential skills for any web developer.</p>
          <p className="text-[#F9F8F8] text-2xl lg:text-xl sm:text-lg mb-6">In addition to my work as a web developer, I also volunteer to teach coding to aspiring developers. I have a deep love for books and learning and I especially enjoy reading about airplanes and space exploration, and the beauties and wonders of our amazing planet.</p>
          <p className="text-[#F9F8F8] text-2xl lg:text-xl sm:text-lg">But what really sets me apart from other web developers is my commitment to customer satisfaction. I work hard to understand my client's needs and deliver a product that they're happy with. I also pay keen attention to detail and make sure that my code is clean and well-organized.</p>
        </div>
        <div className="flex flex-1 justify-end">
          {/* Image */}
          <div className="flex md:mx-auto max-w-[80%] xl:max-w-[90%] md:max-w-[60%] sm:max-w-full border-8 border-[#8ECAE6] rounded-[272.5px] md:mb-12 sm:mb-8">
            <Image src={benTall} alt="Photo of Ben Nneji standing" className="rounded-[272.5px] object-cover"/>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-32 md:mb-24 sm:mb-16">
        <div className="flex md:flex-col gap-4 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8">
          {/* Heading */}
          <div className="w-3/4">
            <h2 className="text-[#EAEAEA] text-[4rem] lg:text-[3rem] sm:text-[2rem] leading-none">MY SKILLS</h2>
          </div>
          {/* Description */}
          <div className="w-2/4 xl:w-2/3 md:w-full">
            <p className="text-[#F9F8F8] text-xl sm:text-lg">I'm always looking for new ways to improve my skills and learn new technologies, and I'm passionate about helping others learn about web development. I obtained the freeCodeCamp's <Link href="https://www.freecodecamp.org/certification/nnejiben/responsive-web-design" target="_blank" title="View certificate" className="hover:text-[#FB8500] underline decoration-solid">Responsive Web Design Certification</Link> and have completed other technical courses as well.</p>
          </div>
        </div>
        <MySkills />
      </section>

      {/* CONTACT SECTION */}
      <section className="mb-32 md:mb-24 sm:mb-16">
        <ContactSection />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default about