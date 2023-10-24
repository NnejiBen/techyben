import Link from "next/link"
import HorizontalRule from "@/components/HorizontalRule"
import Navbar from "@/components/Navbar"

const contact = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-6 mb-16">
        <div className="mb-12">
          <HorizontalRule />
        </div>
        <div className="px-[7.5rem]">
          <h1 className="text-[#F1F1F1] text-[4rem] leading-none mb-10">CONTACT ME</h1>
          <div className="flex justify-end mb-4">
            <p className="w-1/2 text-left text-[#F1F1F1] text-2xl">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="mb-12">
            <Navbar />
          </div>
        </div>
        <div className="mb-12">
          <HorizontalRule />
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="flex gap-10 px-[7.5rem] mb-32">
        <div className="min-w-[55%]">
          <h2 className="text-[#EAEAEA] text-[4rem] leading-none">SEND A MESSAGE</h2>
        </div>
        <form className="min-w-[40%]">

        </form>
      </section>
    </>
  )
}

export default contact