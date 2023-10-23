import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import framePortfolio from "@/public/images/frame-portfolio.png"

const portfolio = () => {
  return (
    <>
      <section className="portfolio-hero-section py-10 mb-48">
        <hr className="horizontal-rule mb-16"/>
        <div className="section">
          <h1 className="heading mb-12">MY PORTFOLIO</h1>
          <div className="flex justify-end mb-4">
            <p className="text-left w-1/2">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <hr className="horizontal-rule"/>
      </section>

      <section className="portfolio-projects-section section max-w-full mb-52">
        {/* Project 01 */}
        <div className="flex gap-24 mb-24">
          <div className="home-portfolio-card min-w-[55%] flex flex-col">
            <div className="card--dots-cont flex gap-4 px-12 py-6">
              <div className="card-dot-01"></div>
              <div className="card-dot-02"></div>
              <div className="card-dot-03"></div>
            </div>
            <hr className="card-hr mb-12"/>
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-[5rem] mb-10">JOBENY RESOURCES</h2>
            <p className="mb-12 text-[2rem]">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            <div className="flex">
              <Link href="#" className="solid-btn">READ MORE</Link>
            </div>
          </div>
        </div>

        {/* Project 02 */}
        <div className="flex gap-24">
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-[5rem] mb-10">ELECTETRA</h2>
            <p className="mb-12 text-[2rem]">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            <div className="flex">
              <Link href="#" className="solid-btn">READ MORE</Link>
            </div>
          </div>
          <div className="home-portfolio-card min-w-[55%] flex flex-col">
            <div className="card--dots-cont flex gap-4 px-12 py-6">
              <div className="card-dot-01"></div>
              <div className="card-dot-02"></div>
              <div className="card-dot-03"></div>
            </div>
            <hr className="card-hr mb-12"/>
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default portfolio