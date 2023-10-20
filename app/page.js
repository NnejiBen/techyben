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

        <div className="hero-section max-h-screen flex flex-col mb-32">
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

        <div className="about-section section flex mb-32">
          <div className="flex-1">
            <h1 className="heading mb-8">HI THERE, BEN HERE</h1>
            <p className="mb-12">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex">
              <Link className="solid-btn" href="/about">READ MORE</Link>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div className="about--img-cont flex">
              <Image src={benTall} alt="Photo of Ben Nneji standing" className="about--img object-cover"/>
            </div>
          </div>
        </div>

        <div className="portfolio-section section flex">
          <div className="portfolio--left flex flex-col">
            <div className="portfolio-card">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="portfolio-card--title flex">
                <div><h3>1</h3></div>
                <div><h3>ELECTETRA</h3></div>
              </div>
              <div className="portfolio-card--body">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="portfolio-card--btn">
                <Link href="/portfolio">READ MORE</Link>
              </div>
            </div>
            <div className="portfolio-card">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="portfolio-card--title flex">
                <div><h3>1</h3></div>
                <div><h3>ELECTETRA</h3></div>
              </div>
              <div className="portfolio-card--body">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="portfolio-card--btn">
                <Link href="/portfolio">READ MORE</Link>
              </div>
            </div>
          </div>
          <div className="portfolio--right flex flex-col">
            <div className="portfolio--text">
              <h2>WHAT I DO</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
            <div className="portfolio-card">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="portfolio-card--title flex">
                <div><h3>1</h3></div>
                <div><h3>ELECTETRA</h3></div>
              </div>
              <div className="portfolio-card--body">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="portfolio-card--btn">
                <Link href="/portfolio">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section section">
          <h1>MY SKILLS</h1>
          <MySkills />
        </div>

        <ContactSection />
        <Footer />

      </section>
    </>

  )
}
