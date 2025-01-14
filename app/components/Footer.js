import Link from "next/link"
import Image from "next/image";
import githubIcon from "@/public/images/github.svg"
import linkedinIcon from "@/public/images/linkedin.svg"
import gmailIcon from "@/public/images/gmail.svg"
import whatsappIcon from "@/public/images/whatsapp.svg"
import xIcon from "@/public/images/x.svg"
import facebookIcon from "@/public/images/facebook.svg"

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="flex sm:flex-col justify-between items-center bg-[#020617] px-[7.5rem] lg:px-[4em] md:px-[1.25em] py-8">
        <div className="sm:flex flex-col items-center sm:mb-10">
            {/* Copyright information */}
            <div className="text-[#EAEAEA] text-[2rem] md:text-[1.5rem]">
                <p>&copy; {year} Benjamin Nneji</p>
            </div>
            {/* Attribution */}
            <div className="hidden text-[#EAEAEA] text-sm">
                <p>Designed by <Link href="https://hijoygirl.com" target="_blank" title="Visit portfolio" className="text-[#FB8500] hover:text-[#F9F8F8] underline decoration-solid">Joygirl</Link></p>
            </div>
        </div>
        <div className='flex items-center gap-6 md:gap-3'>
            {/* Contact icon */}
            <div>
                <Link href="mailto:nnejiben@gmail.com" target="_blank">
                    <Image src={gmailIcon} title="Email" className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://api.whatsapp.com/send?phone=2348063062992" target="_blank">
                    <Image src={whatsappIcon} title="WhatsApp" className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://github.com/NnejiBen" target="_blank">
                    <Image src={githubIcon} title="GitHub" className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://www.linkedin.com/in/benjamin-nneji-a4372623a/" target="_blank">
                    <Image src={linkedinIcon} title="LinkedIn" className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://twitter.com/ben_nneji" target="_blank">
                    <Image src={xIcon} title="X (Twitter)" className="max-w-[1.8em] max-h-[1.8em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://web.facebook.com/techyben" target="_blank">
                    <Image src={facebookIcon} title="Facebook" className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer