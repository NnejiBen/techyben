import Image from "next/image";

function ProjectSectionLeftText({ title, content, imgHref, imgAlt }) {
  return (
    <section className="flex md:flex-col-reverse gap-14 sm:gap-10 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-8">
        {/* Left side: text */}
        <div className="flex flex-col flex-1">
            <h2 className="text-[4rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[#EAEAEA] leading-[110%] mb-6">{title}</h2>
            <p className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal mb-8 sm:mb-6">{content}</p>
        </div>
        {/* Right side: image */}
        <div className="flex flex-1">
            <Image src={imgHref} alt={imgAlt} className="w-full h-full object-cover" />
        </div>
    </section>
  );
}

export default ProjectSectionLeftText;