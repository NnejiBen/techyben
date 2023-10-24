import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import benTall from "@/public/images/ben-nneji-tall.webp"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import HorizontalRule from "@/components/HorizontalRule"

const about = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-6 mb-32">
        <div className="mb-12">
          <HorizontalRule />
        </div>
        <div className="px-[7.5rem]">
          <h1 className="text-[#EAEAEA] text-[4rem] leading-none mb-10">ABOUT ME</h1>
          <div className="flex justify-end mb-4">
            <p className="w-1/2 text-left text-[#F9F8F8] text-2xl">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <div><HorizontalRule /></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-about-section section flex items-center mb-52">
        <div className="flex-1">
          <h2 className="heading mb-14">A LITTLE ABOUT ME</h2>
          <p className="mb-10">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="about-about-section--img-cont flex">
            <Image src={benTall} alt="Photo of Ben Nneji standing" className="about-about-section--img object-cover"/>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="about-skills-section section mb-52">
        <div className="flex mb-12">
          <div className="w-3/4">
            <h1 className="heading">MY SKILLS</h1>
          </div>
          <div className="w-2/4">
            <p className="about-skills-section-desc">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
          </div>
        </div>
        <MySkills />
      </section>

      {/* CONTACT SECTION */}
      <section className="mb-52">
        <ContactSection />
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default about