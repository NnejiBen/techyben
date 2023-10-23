import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import benTall from "@/public/images/ben-nneji-tall.webp"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const about = () => {
  return (
    <>
      <section className="about-hero-section py-10 mb-48">
        <hr className="horizontal-rule mb-16"/>
        <div className="section">
          <h1 className="heading mb-12">ABOUT ME</h1>
          <div className="flex justify-end mb-4">
            <p className="text-left w-1/2">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <hr className="horizontal-rule"/>
      </section>

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

      <section className="mb-52">
        <ContactSection />
      </section>

      <Footer />
    </>
  )
}

export default about