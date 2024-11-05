import Menu from "./sidebar-strukture/menu";
import SubMenu from "./sidebar-strukture/sub-menu";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const information = [
  "Panduan Lengkap: Cara Instal LEMP Stack (Nginx, MySQL, PHP) di KILAT VM 2.0 dengan OneinStack",
  "Cara Menginstal Control Panel HestiaCP pada Ubuntu 22.04",
  "Upgrade In-Place CentOS 7 ke AlmaLinux 8 dengan ELevate",
];

export default function GeneralInformation() {
  return (
    <>
      <div className="px-6 pt-2 max-md:px-2">
        <h2 className="text-[10px] px-3 font-semibold text-gray-500">
          LAINNYA
        </h2>
        <Accordion type="single" collapsible>
          <Menu
            valueAcc="general information"
            urlMenu="/informasi-umum"
            menuName="Informasi Umum"
            urlImage="/images/documentation/accordion/information-logo.png"
            accContent={
              <>
              {information.map((info, index) => (
                <div className="py-2 relative">
                <div className="h-4 w-5 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                <Link href="#" key={index}>
                  <div className="mt-2 pb-2 pl-6 flex gap-3 hover:text-[#136AAD] hover:underline">
                    <Image
                      src="/images/logo_cloudkilat.png"
                      alt="Cloudkilat"
                      width={20}
                      height={20}
                    />
                    <p className="text-xs flex-1 truncate">{info}</p>
                  </div>
                </Link>
              </div>
              ))}
                <div className="py-2 relative">
                  <div className="h-4 w-5 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                  <Link href="/informasi-umum">
                    <div className="mt-2 pb-2 pl-6 flex gap-3 hover:text-[#136AAD] hover:underline hover:decoration-[#136AAD] dark:hover:underline dark:hover:decoration-white">
                      <p className="text-xs text-primary-blue flex-1 truncate">Tampilkan Semua</p>
                    </div>
                  </Link>

                </div>
              </>
            }
          />
        </Accordion>
      </div>
    </>
  );
}
