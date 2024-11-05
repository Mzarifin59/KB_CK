import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="max-md:hidden">
        <h2 className="text-md nunito mb-4 nunito font-semibold text-gray-500">
          LAINNYA
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="kilat-vm">
            <Link href="/informasi-umum">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
              <Image
                src="/images/information-logo.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold truncate text-gray-500 ">
                Informasi Umum
              </span>
            </AccordionTrigger>
            </Link>
            <AccordionContent className="pl-8">
              <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline mb-5">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">Panduan Lengkap: Ca...</p>
                </div>
              </a>
              <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline mb-5">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">Cara Menginstal Cont...</p>
                </div>
              </a>
              <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline mb-5">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">Upgrade In-Place Ce...</p>
                </div>
              </a>
              <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline mb-5">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">Menambahkan Fitur...</p>
                </div>
              </a>

             <a href="">
                <div className="flex gap-3 items-center">
                  <p className="flex-1 text-blue-600 truncate underline ">Tampilkan Semua</p>
                </div>
                </a>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* ---------------------------------------------------------------------------- */}

      <div className="md:hidden">
        <Accordion type="single" collapsible>
          {/* Accordion Item for Produk */}
          <AccordionItem value="portal">
            <AccordionTrigger className="px-2 text-md nunito mb-4 font-semibold text-gray-500 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
             LAINNYA
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="kilat-vm">
                  <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
                    <Image
                      src="/images/information-logo.png"
                      alt="Kilat VM 2.0"
                      width={15}
                      height={15}
                    />
                    <span className="flex-1 nunito font-bold text-gray-500 ">
                      Informasi Umum
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8 pt-2">
                  <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">Mengenal FileZilla dan Instalasinya dengan mudah</p>
                </div>
              </a>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="border-b border-gray-200 items-center text-sm"></div>
      </div>
    </>
  );
};

export default Sidebar;
