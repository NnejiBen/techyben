import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import framePortfolio from "@/public/images/frame-portfolio.png"
import HorizontalRule from "@/components/HorizontalRule"
import ReadMoreBtnSolid from "@/components/ReadMoreBtnSolid"

const portfolio = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-6 mb-16">
        <div className="mb-12">
          <HorizontalRule />
        </div>
        <div className="px-[7.5rem]">
          <h1 className="text-[#EAEAEA] text-[4rem] leading-none mb-10">MY PORTFOLIO</h1>
          <div className="flex justify-end mb-4">
            <p className="w-1/2 text-left text-[#F9F8F8] text-2xl">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <div className="mb-12">
          <HorizontalRule />
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-[7.5rem] mb-32">

        {/* Project 01 */}
        <div className="flex gap-14 items-center mb-10">
          <div className="min-w-[55%] flex flex-col bg-[#C0D6DF] rounded-3xl">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black mb-8"/>
            {/* Image */}
            <div className="w-full h-full">
              <Image src={framePortfolio} className="rounded-b-[24px] w-full h-full object-cover"/>
            </div>
          </div>
          {/* Heading, description, and button */}
          <div className="flex flex-col min-w-[40%]">
            <h2 className="text-5xl text-[#EAEAEA] leading-[110%] mb-6">JOBENY RESOURCES</h2>
            <p className="text-xl text-[#F9F8F8] mb-8">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            <div className="flex">
              <Link href="#"><ReadMoreBtnSolid /></Link>
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