import Image from "next/image";
import Search from "@/components/navbar/navbar1/search"

const Page = () => {
  return (
    <>
      <div className="bg-primary-blue">
        <div className="max-w-[1500px] mx-auto text-white px-6 pt-20 md:px-20 md:py-16 h-80 relative overflow-hidden">
          <div className="flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="font-bold nunito text-[24px] mb:text-[30px] text-center">
              Cari Dokumentasi
            </h1>

            {/* Search Box */}
            <div className="mt-4 mb:mt-8 flex items-center justify-center w-full">
             <Search/>
            </div>

            <Image
              className="absolute right-0 md:mt-6 z-0 top-0 max-lg:w-0"
              src="/images/documentation/cloud-logo.png"
              alt="Cloud Logo"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
