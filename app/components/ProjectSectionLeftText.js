import Image from "next/image";

function ProjectSectionLeftText({ title, content, imgHref, imgAlt }) {
  return (
    <section className="">
        {/* Left side: text */}
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>

        {/* Right side: image */}
        <div>
            <Image src={imgHref} alt={imgAlt} />
        </div>
    </section>
  );
}

export default ProjectSectionLeftText;