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
    <footer className="footer section flex justify-between items-center">
        <div className='footer--left'>
            <div className="footer--copyright">
                <p>&copy; {year} Benjamin Nneji</p>
            </div>
            <div className="footer--attribution">
                <p>Designed by <Link href="https://hijoygirl.com" target="_blank">Joygirl</Link></p>
            </div>
        </div>
        <div className='footer--right flex gap-6'>
            <div>
                <Link href="mailto:nnejiben@gmail.com" target="_blank"><Image src={gmailIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="https://api.whatsapp.com/send?phone=2348063062992" target="_blank"><Image src={whatsappIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="https://github.com/NnejiBen" target="_blank"><Image src={githubIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="https://www.linkedin.com/in/benjamin-nneji-a4372623a/" target="_blank"><Image src={linkedinIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="https://twitter.com/ben_nneji" target="_blank"><Image src={xIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="https://web.facebook.com/techyben" target="_blank"><Image src={facebookIcon} className="footer--icon"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer