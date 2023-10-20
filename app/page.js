import Link from "next/link"
import Image from "next/image"
import HorizontalRule from "@/components/HorizontalRule"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import benTall from "../public/images/ben-nneji-tall.webp"

export default function Home() {
  return (
    <>
      <section>

        <div className="home-hero-section max-h-screen flex flex-col mb-48">
          <HorizontalRule />
          <div className="section">
            <h1 className="home-page-title">BENJAMIN</h1>
            <h1 className="home-page-title text-right mb-4">NNEJI</h1>
            <div className="flex justify-end mb-10">
              <p className="text-right w-3/5">Frontend Software Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.</p>
            </div>
            <div className="text-right flex justify-end">
              <ContactMeBtn />
            </div>
            <Navbar />
          </div>
          <HorizontalRule />
        </div>

        <div className="home-about-section section flex mb-52">
          <div className="flex-1">
            <h1 className="heading mb-8">HI THERE, BEN HERE</h1>
            <p className="mb-12">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex">
              <Link className="solid-btn" href="/about">READ MORE</Link>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="home-about-section--img-cont flex">
              <Image src={benTall} alt="Photo of Ben Nneji standing" className="home-about-section--img object-cover"/>
            </div>
          </div>
        </div>

        <div className="home-portfolio-section section flex gap-32 mb-52">
          <div className="home-portfolio-section--left flex flex-col gap-24">
            {/* Portfolio card 01 */}
            <div className="home-portfolio-card">
              <div className="card--dots-cont flex gap-4 px-12 py-6">
                <div className="card-dot-01"></div>
                <div className="card-dot-02"></div>
                <div className="card-dot-03"></div>
              </div>
              <hr className="card-hr"/>
              <div className="home-portfolio-card--title flex items-center gap-8 px-8 py-12">
                <div><p className="home-portfolio-card--number">1</p></div>
                <div><h3 className="subheading">ELECTETRA</h3></div>
              </div>
              <div className="home-portfolio-card--body px-20 mb-10">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="home-portfolio-card--btn flex justify-end px-10 pb-12">
                <Link href="/portfolio" className="outline-btn">READ MORE</Link>
              </div>
            </div>
            {/* Portfolio card 02 */}
            <div className="home-portfolio-card">
              <div className="card--dots-cont flex gap-4 px-12 py-6">
                <div className="card-dot-01"></div>
                <div className="card-dot-02"></div>
                <div className="card-dot-03"></div>
              </div>
              <hr className="card-hr"/>
              <div className="home-portfolio-card--title flex items-center gap-8 px-8 py-12">
                <div><p className="home-portfolio-card--number">2</p></div>
                <div><h3 className="subheading">JOBENY RESOURCES</h3></div>
              </div>
              <div className="home-portfolio-card--body px-20 mb-10">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="home-portfolio-card--btn flex justify-end px-10 pb-12">
                <Link href="/portfolio" className="outline-btn">READ MORE</Link>
              </div>
            </div>
          </div>
          <div className="portfolio--right flex flex-col gap-32">
            <div className="portfolio--text">
              <h2 className="heading mb-12">WHAT I DO</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
            {/* Portfolio card 03 */}
            <div className="home-portfolio-card">
              <div className="card--dots-cont flex gap-4 px-12 py-6">
                <div className="card-dot-01"></div>
                <div className="card-dot-02"></div>
                <div className="card-dot-03"></div>
              </div>
              <hr className="card-hr"/>
              <div className="home-portfolio-card--title flex items-center gap-8 px-8 py-12">
                <div><p className="home-portfolio-card--number">3</p></div>
                <div><h3 className="subheading">JEB AUTO SERVICES</h3></div>
              </div>
              <div className="home-portfolio-card--body px-20 mb-10">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="home-portfolio-card--btn flex justify-end px-10 pb-12">
                <Link href="/portfolio" className="outline-btn">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section section">
          <h1 className="heading">MY SKILLS</h1>
          <MySkills />
        </div>

        <ContactSection />
        <Footer />

      </section>
    </>

  )
}
