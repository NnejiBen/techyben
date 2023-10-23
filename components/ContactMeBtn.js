import contact from "@/app/contact/page"
import Link from "next/link"

const ContactMeBtn = () => {
  return (
    <Link href="/contact" className="bg-[#FB8500] text-[#00162B text-lg font-medium] py-[14.5px] px-8 rounded-3xl">CONTACT ME</Link>
  )
}

export default ContactMeBtn