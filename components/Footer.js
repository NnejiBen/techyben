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
                <Link href="#"><Image src={githubIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="#"><Image src={linkedinIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="#"><Image src={gmailIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="#"><Image src={whatsappIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="#"><Image src={xIcon} className="footer--icon"/></Link>
            </div>
            <div>
                <Link href="#"><Image src={facebookIcon} className="footer--icon"/></Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer