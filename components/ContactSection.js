import Link from "next/link"

const ContactSection = () => {
  return (
    <div className="contact-section section flex items-center justify-between">
        <div className="contact-section--left">
            <h2>LET'S CONNECT</h2>
        </div>
        <div className="contact-section--right home-portfolio-card flex flex-col h-min">
            <div className="card--dots-cont flex gap-4 px-12 py-6">
                <div className="card-dot-01"></div>
                <div className="card-dot-02"></div>
                <div className="card-dot-03"></div>
            </div>
            <hr className="card-hr"/>
            <div className="flex flex-col gap-6 px-10 py-12">
                <Link href="mailto:nnejiben@gmail.com" className="outline-btn-contact">nnejiben@gmail.com</Link>
                <Link href="tel:+2348091803917" className="outline-btn-contact">234-806-306-2992</Link>
            </div>
        </div>
    </div>
  )
}

export default ContactSection