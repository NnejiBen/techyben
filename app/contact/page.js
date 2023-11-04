'use client'

import React, { useState } from "react"
import Image from "next/image"
import HorizontalRule from "@/app/components/HorizontalRule"
import Navbar from "@/app/components/Navbar"
import ContactCard from "@/app/components/ContactCard"
import worldMap from "@/public/images/world-map.png"
import MobileNavbar from "@/app/components/MobileNavbar"

// export const metadata = {
//   title: "Contact | Benjamin Nneji | Frontend Web Developer",
//   description: "I work with clients of all sizes, from small businesses to large enterprises, to create websites that meet their specific needs and goals. Contact me today to learn more about my services.",
// }

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault()

    const formURL = e.target.action
    const data = new FormData()

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    })

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        'accept': 'application/json',
      },
    }).then((response) => response.json())
    .then((data) => {
      setFormData({ 
        name: "", 
        email: "", 
        message: "" 
      })

      setFormSuccess(true)
      setFormSuccessMessage(data.submission_text)
    })
  }

  return (
    <>

      {/* Horizontal rule */}
      <div className="sticky md:bg-[#00162B] sm:bg-[#00162B] bg-opacity-50 pt-6 sm:pt-4 z-10 mb-8 md:mb-0">
        <HorizontalRule />
      </div>

      {/* Mobile navbar */}
      <div className="hidden sticky top-0 md:flex sm:flex justify-end bg-[#00162B] bg-opacity-50 px-[1.25rem] w-full py-4 z-10 md:mb-10">
        <MobileNavbar />
      </div>

      {/* HERO SECTION */}
      <section className="pt-6 mb-6">
        <div className="px-[7.5rem] lg:px-[4rem] md:px-[1.25rem]">
          {/* Title */}
          <h1 className="text-[#F1F1F1] text-[4rem] sm:text-[2.5rem] leading-none mb-10 sm:mb-7">CONTACT ME</h1>
          {/* Subtitle */}
          <div className="flex justify-end mb-4 sm:mb-8">
            <p className="w-1/2 md:w-2/3 sm:w-full text-left text-[#F1F1F1] text-2xl lg:text-xl sm:text-lg">I work with clients of all sizes, from small businesses to large enterprises, to create websites that meet their specific needs and goals. I'm always up for a challenge, and I love working on new and innovative projects. Contact me today to learn more about my services.</p>
          </div>
        </div>
      </section>


      {/* Navbar */}
      <div className="sticky top-0 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8"><Navbar /></div>
     
      {/* Horizontal rule */}
      <div className="mb-32 md:mb-24 sm:mb-16"><HorizontalRule /></div>

      {/* FORM SECTION */}
      <section className="flex md:flex-col justify-between items-center sm:gap-10 md:items-start px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-32 md:mb-24 sm:mb-16">
              {/* Heading */}
              <div className="max-w-[50%] md:max-w-full">
                <h2 className="text-[#EAEAEA] text-[4rem] sm:text-[2.5rem] md:text-left leading-none mb-8 sm:mb-6">SAY HI</h2>
                <div>
                  <Image src={worldMap}/>
                </div>
              </div>

      {formSuccess ? 
        <div className="flex justify-end md:justify-center md:w-full lg:px-5 sm:px-0">
          <p className="text-[#F1F1F1] text-4xl lg:text-3xl sm:text-2xl">Form submitted. Thank you! <br/> I'll get back to you shortly.</p>
        </div> 
        : 
      <form id="" action="https://formspree.io/f/xwkdzbyq" method="POST" onSubmit={submitForm} className="min-w-[40%] md:min-w-full flex flex-col gap-6">
          <label for="name" id="name-label" className="flex flex-col gap-2 text-lg text-[#EAEAEA] font-akira font-medium">NAME
            <input id="name" name="name" onChange={handleInput} value={formData.name} type="text" placeholder="Enter your name" required autocomplete="on" className="font-oswald bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4] focus:outline-none"/>
          </label>
          <label for="email" id="email-label" className="flex flex-col gap-2 text-[#EAEAEA] font-akira font-medium">EMAIL
            <input  id="email" name="email" onChange={handleInput} value={formData.email} type="email" placeholder="Enter your Email" required autocomplete="on" className="font-oswald bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4] focus:outline-none "/>
          </label>
          <label for="textarea" id="textarea-label" className="flex flex-col gap-2 text-[#EAEAEA] font-akira font-medium">MESSAGE
            <textarea id="message" name="message" onChange={handleInput} value={formData.message} rows="4" cols="" placeholder="Type your message" className="font-oswald bg-transparent py-[14.5px] px-8 rounded-3xl border-[1px] border-[#D4D4D4] focus:outline-none"></textarea>
          </label>
          <div className="text-right">
            <input id="submit" type="submit" value="SUBMIT" className="bg-[#FB8500] text-[#00162B] text-lg font-medium py-[14.5px] px-8 rounded-3xl w-max"/>
          </div>
        </form>
      }
      </section>

      {/* CONTACT SECTION */}
      <section className="flex sm:flex-col-reverse items-center sm:items-stretch gap-16 lg:gap-8 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] sm:w-full mb-32 md:mb-24 sm:mb-16">
        <div>
          <ContactCard />
        </div>
        <div>
          <h2 className="text-[4rem] lg:text-5xl md:text-4xl text-[#EAEAEA] leading-[110%]">LET'S CONNECT</h2>
        </div>
      </section>

    </>
  )
}