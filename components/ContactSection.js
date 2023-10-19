import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="contact-section flex">
        <div className="contact-section--left">
            <h2>LET'S CONNECT</h2>
        </div>
        <div className="contact-section--right flex flex-col">
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex flex-col">
                <Link href="mailto:nnejiben@gmail.com">nnejiben@gmail.com</Link>
                <Link href="tel:+2348091803917">234-806-306-2992</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection