import Image from "next/image";

function ProjectSectionLeftText({ title, content, imgHref, imgAlt }) {
  return (
    <section className="flex md:flex-col-reverse gap-14 items-center sm:gap-10 px-[7.5rem] lg:px-[4rem] md:px-[1.25rem] mb-16">
        {/* Left side: text */}
        <div className="flex-1">
            <h2 className="text-5xl xl:text-4xl lg:text-3xl text-[#EAEAEA] leading-[110%] mb-6 md:mb-4">{title}</h2>
            <div className="text-2xl lg:text-xl sm:text-lg text-[#F9F8F8] font-normal">{content}</div>
        </div>
        {/* Right side: image */}
        <div className="flex-1 w-full h-full">
            <Image src={imgHref} alt={imgAlt} className="w-full h-full object-cover" />
        </div>
    </section>
  );
}

export default ProjectSectionLeftText;