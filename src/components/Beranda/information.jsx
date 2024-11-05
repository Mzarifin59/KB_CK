import Image from "next/image";

export default function Informasi({ urlImage, link }) {
  return (
    <>
        <div className="flex gap-3 text-[18px] sm:text-[18px] hover:text-[#136AAD] hover:underline mb-2">
            <Image 
              src={urlImage}
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <p className="flex-1 truncate">{link}</p>
          </div>
    </>
  );
}
