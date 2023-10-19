import Link from "next/link"
import HorizontalRule from "@/components/HorizontalRule"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <>
      <section>

        <div className="hero-section h-screen">
          <HorizontalRule />
          <h1>BENJAMIN</h1>
          <h1>NNEJI</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <ContactMeBtn />
          <Navbar />
          <HorizontalRule />
        </div>

        <div className="about-section">
          <h1>HI THERE, BEN HERE</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/about">READ MORE</Link>
        </div>

        <div className="portfolio-section flex">
          <div className="portfolio--left flex flex-col">
            <div className="portfolio-card">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="portfolio-card--title"></div>
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
              <div className="portfolio-card--title"></div>
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
              <div className="portfolio-card--title"></div>
              <div className="portfolio-card--body">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="portfolio-card--btn">
                <Link href="/portfolio">READ MORE</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h1>MY SKILLS</h1>
          <MySkills />
        </div>

        <ContactSection />

      </section>
    </>

  )
}
