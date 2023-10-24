import Link from "next/link"
import Image from "next/image"
import ContactMeBtn from "@/components/ContactMeBtn"
import Navbar from "@/components/Navbar"
import MySkills from "@/components/MySkills"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import benTall from "../public/images/ben-nneji-tall.webp"
import HorizontalRule from "@/components/HorizontalRule"
import ReadMoreBtnSolid from "@/components/ReadMoreBtnSolid"
import ReadMoreBtnOutline from "@/components/ReadMoreBtnOutline"

export default function Home() {
  return (
    <>
      <section className="home-hero-section h-screen flex flex-col justify-between py-6 mb-32">
        <div className="mb-6"><HorizontalRule /></div>
        <div className="px-[7.5rem]">
          <h1 className="text-[7rem] text-[#EAEAEA] leading-[90%]">BENJAMIN</h1>
          <h1 className="text-[7rem] text-[#EAEAEA] leading-[90%] text-right mb-2">NNEJI</h1>
          <div className="flex justify-end mb-6">
            <p className="text-right text-[1.5rem] text-[#F9F8F8] w-3/5">Frontend Software Developer with a love for learning and airplanes. I build modern, elegant and functional websites. I pay great attention to detail.</p>
          </div>
          <div className="text-right flex justify-end">
            <ContactMeBtn />
          </div>
          <div className="mb-8"><Navbar /></div>
        </div>
        <div><HorizontalRule /></div>
      </section>

      <section className="home-about-section px-[7.5rem] flex mb-32">
        <div className="flex-1">
          <h1 className="text-[4rem] text-[#EAEAEA] leading-[110%] mb-6">HI THERE, BEN HERE</h1>
          <p className="text-2xl text-[#F9F8F8] mb-8">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/about"><ReadMoreBtnSolid /></Link>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="max-w-[60%] border-8 border-solid border-[#8ECAE6] rounded-[272.5px] flex">
            <Image src={benTall} alt="Photo of Ben Nneji standing" className="rounded-[272.5px] object-cover"/>
          </div>
        </div>
      </section>

      <section className="home-portfolio-section px-[7.5rem] flex gap-20 mb-52">
        {/* Home Portfolio Section Left */}
        <div className="flex flex-col gap-24">
          {/* Portfolio card 01 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            <div className="flex gap-2 px-8 py-4">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">1</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">JOBENY RESOURCES</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            </div>
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
          {/* Portfolio card 02 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            <div className="flex gap-2 px-8 py-4">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">1</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">JOBENY RESOURCES</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            </div>
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
        </div>
        {/* Home Portfolio Section Right */}
        <div className="flex flex-col gap-32">
          <div className="portfolio--text">
            <h2 className="heading mb-12">WHAT I DO</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. </p>
          </div>
          {/* Portfolio card 03 */}
          <div className="bg-[#C0D6DF] rounded-3xl">
            <div className="flex gap-2 px-8 py-4">
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
              <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            <div className="flex items-center gap-6 px-8 py-12">
              <div><p className="text-[#00162B] text-5xl font-bold">1</p></div>
              <div><h3 className="text-[#00162B] text-[2rem] leading-none">JOBENY RESOURCES</h3></div>
            </div>
            <div className="text-[#1E1E1E] text-xl px-12 mb-8">
              <p>Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo.</p>
            </div>
            <div className="flex justify-end px-6 pb-8">
              <Link href="/portfolio"><ReadMoreBtnOutline /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section section mb-52">
        <h1 className="heading mb-16">MY SKILLS</h1>
        <MySkills />
      </section>

      <section className="my-52">
        <ContactSection />
      </section>
      
      <Footer />

    </>
  )
}
