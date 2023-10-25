import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="px-[7.5rem] flex items-center justify-between">
        <div className="text-[7rem] text-[#EAEAEA] leading-[120%]">
            <h2>LET'S CONNECT</h2>
        </div>
        <div className="bg-[#C0D6DF] rounded-3xl flex flex-col h-min">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            {/* Buttons */}
            <div className="flex flex-col gap-4 px-5 py-8">
                <Link href="mailto:nnejiben@gmail.com" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 border-[1px] border-[#FB8500] rounded-3xl">nnejiben@gmail.com</Link>
                <Link href="tel:+2348063062992" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 border-[1px] border-[#FB8500] rounded-3xl">234-806-306-2992</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection