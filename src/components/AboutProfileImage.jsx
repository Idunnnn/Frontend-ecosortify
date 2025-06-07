import clsx from "clsx";
import Image from "next/image";

export default function AboutProfileImage({ name, role, text, className, src, ...props }) {
  return (
    <section {...props} className="lg:max-w-[300px] flex-col flex items-center">
      <div className="lg:h-[280px] lg:w-[280px] h-[180px] w-[180px] bg-gray-200  overflow-hidden rounded-full relative">
        <Image src={src} className={clsx("w-full h-full object-cover", className)} fill alt={name} />
      </div>
      <h3 className="subheading-5 mt-4 text-center">{name}</h3>
      <p className="body-8 text-center my-2">{role}</p>
      <p className="body-7 mt-2 text-[#383838] text-center">{text}</p>
    </section>
  );
}
