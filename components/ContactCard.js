const ContactCard = () => {
  return (
    <div className="flex flex-col gap-4 px-5 py-8">
        <Link href="mailto:nnejiben@gmail.com" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 border-[1px] border-[#FB8500] rounded-3xl">nnejiben@gmail.com</Link>
        <Link href="tel:+2348091803917" className="bg-transparent text-[#00162B] hover:text-[#FB8500] text-[1.125rem] font-medium py-3 px-14 border-[1px] border-[#FB8500] rounded-3xl">234-806-306-2992</Link>
    </div>
  )
}

export default ContactCard