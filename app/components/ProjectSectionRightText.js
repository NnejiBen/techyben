import Image from "next/image";

function ProjectSectionRightText({ title, content, imgHref, imgAlt }) {
  return (
    <section className="flex md:flex-col gap-14 sm:gap-10 items-center px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-16">
        {/* Left side: image */}
        <div className="flex flex-1 w-full h-full">
            <Image src={imgHref} alt={imgAlt} className="w-full h-full object-cover" />
        </div>        
        {/* Right side: text */}
        <div className="flex flex-col flex-1">
            <h2 className="text-[4rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] mb-6 md:mb-4">{title}</h2>
            <p className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal">{content}</p>
        </div>
    </section>
  );
}

export default ProjectSectionRightText;