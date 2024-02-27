import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] flex sm:flex-col items-center justify-between">
        {/* Heading */}
        <div className="text-[7rem] xl:text-[5rem] lg:text-[4rem] md:text-[2.5rem] text-[#EAEAEA] leading-[120%] sm:mb-6">
            <h2>LET'S CONNECT</h2>
        </div>
        {/* Card */}
        <div className="bg-[#C0D6DF] rounded-3xl flex flex-col h-min sm:w-full">
            {/* Card dots */}
            <div className="flex gap-2 px-8 py-3">
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FFB703]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#219EBC]"></div>
                <div className="min-w-[24px] min-h-[24px] rounded-full bg-[#FB8500]"></div>
            </div>
            <hr className="border-0 h-[1px] bg-black"/>
            {/* Buttons */}
            <div className="flex flex-col items-center gap-4 px-5 py-8">
                <Link href="mailto:nnejiben@gmail.com" target="_blank" title="Email me" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 md:px-6 sm:px-14 border-[1px] border-[#FB8500] hover:border-[#5DA9C8] rounded-3xl hover:bg-[#9FCFE2]">nnejiben@gmail.com</Link>
                <Link href="tel:+2348063062992" target="_blank" title="Call me" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 md:px-6 sm:px-14 border-[1px] border-[#FB8500] hover:border-[#5DA9C8] rounded-3xl hover:bg-[#9FCFE2]">+234-806-306-2992</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection