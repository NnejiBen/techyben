import Link from "next/link"
import Image from "next/image";
import githubIcon from "../public/images/github.png"
import linkedinIcon from "../public/images/linkedin.png"
import gmailIcon from "../public/images/gmail.png"
import whatsappIcon from "../public/images/whatsapp.png"
import xIcon from "../public/images/x.png"
import facebookIcon from "../public/images/facebook.png"

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <footer className="flex justify-between items-center bg-[#020617] px-[7.5rem] py-8">
        <div>
            {/* Copyright information */}
            <div className="text-[#EAEAEA] text-[2rem]">
                <p>&copy; {year} Benjamin Nneji</p>
            </div>
            {/* Attribution */}
            <div className="text-[#EAEAEA] text-sm">
                <p>Designed by <Link href="https://hijoygirl.com" target="_blank" className="hover:text-[#FB8500]">Joygirl</Link></p>
            </div>
        </div>
        <div className='flex gap-6'>
            {/* Contact icon */}
            <div>
                <Link href="mailto:nnejiben@gmail.com" target="_blank">
                    <Image src={gmailIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://api.whatsapp.com/send?phone=2348063062992" target="_blank">
                    <Image src={whatsappIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://github.com/NnejiBen" target="_blank">
                    <Image src={githubIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://www.linkedin.com/in/benjamin-nneji-a4372623a/" target="_blank">
                    <Image src={linkedinIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://twitter.com/ben_nneji" target="_blank">
                    <Image src={xIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
            {/* Contact icon */}
            <div>
                <Link href="https://web.facebook.com/techyben" target="_blank">
                    <Image src={facebookIcon} className="max-w-[3.2em] max-h-[3.2em] object-cover hover:scale-110"/>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer