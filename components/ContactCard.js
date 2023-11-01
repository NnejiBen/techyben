import Link from "next/link"

const ContactCard = () => {
  return (
    <div className="bg-[#C0D6DF] rounded-3xl flex flex-col h-min sm:w-full">
      {/* Card dots */}
      <div className="flex gap-2 px-8 py-3">
          <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
          <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
          <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
      </div>
      <hr className="border-0 h-[1px] bg-black"/>
      {/* Buttons */}
      <div className="flex flex-col gap-4 px-5 py-8">
          <Link href="mailto:nnejiben@gmail.com" target="_blank" title="Email me" className="bg-transparent text-center text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 md:px-6 sm:px-14 border-[1px] border-[#FB8500] rounded-3xl">nnejiben@gmail.com</Link>
          <Link href="tel:+2348063062992" target="_blank" title="Call me" className="bg-transparent text-center text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 md:px-6 sm:px-14 border-[1px] border-[#FB8500] rounded-3xl">234-806-306-2992</Link>
      </div>
    </div>
  )
}

export default ContactCard