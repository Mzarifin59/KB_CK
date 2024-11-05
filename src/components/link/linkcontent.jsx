import Image from "next/image";
import Link from "next/link";

export default function LinkContent({ urlImage, linkName, urlLink }) {
  return (
    <>
      <div className="nunito">
        <Link href={urlLink}>
          <div className="flex gap-3 text-sm sm:text-base hover:text-[#136AAD] hover:underline dark:hover:text-white dark:hover:underline-white mb-4">
            <Image
              src={urlImage}
              alt="Cloudkilat"
              width={25}
              height={20}
            />
            <p className="flex-1 text-xl max-sm:text-sm font-semibold truncate">
              {linkName}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}
