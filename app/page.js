import Link from "next/link"
import HorizontalRule from "@/components/HorizontalRule"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <section>

        <div className="h-screen">
          <HorizontalRule />
          <h1>BENJAMIN</h1>
          <h1>NNEJI</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <ContactMeBtn />
          <Navbar />
          <HorizontalRule />
        </div>

        <div>
          <h1>HI THERE, BEN HERE</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/about">READ MORE</Link>
        </div>

        <div>
          <div>
            <div className="card">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="card--title"></div>
              <div className="card--body">
                <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
              </div>
              <div className="card--btn">
                <Link href="/portfolio">READ MORE</Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>

      </section>
    </>

  )
}
