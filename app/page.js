import Link from "next/link"
import HorizontalRule from "@/components/HorizontalRule"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <section>

        <div className="hero-section max-h-screen flex flex-col">
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

        <div className="about-section section">
          <h1>HI THERE, BEN HERE</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/about">READ MORE</Link>
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
