import Link from "next/link"
import HorizontalRule from "@/components/HorizontalRule"
import Navbar from "@/components/Navbar"
import ContactCard from "@/components/ContactCard"
import Footer from "@/components/Footer"

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
      <section className="flex justify-between px-[7.5rem] mb-32">
        {/* Heading */}
        <div className="max-w-[50%]">
          <h2 className="text-[#EAEAEA] text-[4rem] leading-none mb-4">PING ME</h2>
          <p className="text-left text-[#F1F1F1] text-2xl">Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Ut sem mattis condimentum risus risus scelerisque leo. Nibh nec euismod sem pretium. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        {/* Form */}
        <form id="" action="" method="post" className="min-w-[40%] flex flex-col gap-6">
          <label for="name" id="name-label" className="flex flex-col gap-2 text-lg text-[#EAEAEA] font-medium">NAME
            <input id="name" name="name" type="text" placeholder="Enter your name" required autocomplete="on" className="bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4]"/>
          </label>
          <label for="email" id="email-label" className="flex flex-col gap-2 text-[#EAEAEA] font-medium">EMAIL
            <input  id="email" name="email" type="email" placeholder="Enter your Email" required autocomplete="on" className="bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4]"/>
          </label>
          <label for="textarea" id="textarea-label" className="flex flex-col gap-2 text-[#EAEAEA] font-medium">MESSAGE
            <textarea id="textarea" name="textarea" rows="4" cols="" placeholder="Type your message" className="bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4]"></textarea>
          </label>
          <div className="text-right">
            <input id="submit" type="submit" value="SUBMIT" className="bg-[#FB8500] text-[#00162B] text-lg font-medium py-[14.5px] px-8 rounded-3xl w-max"/>
          </div>
        </form>
      </section>

      {/* CONTACT SECTION */}
      <section className="flex items-center gap-16 px-[7.5rem] mb-32">
        <div>
          <ContactCard />
        </div>
        <div>
          <h2 className="text-[4rem] text-[#EAEAEA] leading-[110%]">LET'S CONNECT</h2>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default contact