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

const portal = [
  {
    value: "pemesanan",
    url: "/portal-cloud/kilat-storage",
    menu: "Pemesanan",
    image: "/images/documentation/accordion/pemesanan-icon.png",
    linkName: [],
    submenu: [
      {
        title: "Layanan Kilat VM 2.0",
        value: "sub-menu1",
        link: ["kilat vm 2.0"],
      },
      {
        title: "Layanan Kilat Hosting 2.0",
        value: "sub-menu2",
        link: ["kilat hosting 2.0"],
      },
    ],
  },
  {
    value: "akun",
    url: "/portal-cloud/kilat-storage",
    menu: "Akun Cloudkilat",
    image: "/images/documentation/accordion/akun-icon.png",
    linkName: ["kilat hosting 2.0"],
    submenu: [],
  },
  {
    value: "pembayaran",
    url: "/portal-cloud/kilat-storage",
    menu: "Pembayaran",
    image: "/images/documentation/accordion/pembayaran-icon.png",
    linkName: ["Mengenal FileZilla dan Cara Instalasinya dengan Mudah"],
    submenu: [],
  },
  {
    value: "tiket",
    url: "/portal-cloud/kilat-storage",
    menu: "Tiket",
    image: "/images/documentation/accordion/tiket-icon.png",
    linkName: ["kilat protect"],
    submenu: [],
  },
];

export default function PortalSideBar() {
  return (
    <>
      <div className="px-6 pt-2 max-md:px-2">
        <h2 className="text-[10px] px-3 font-semibold text-gray-500">
          PORTAL CLOUDKILAT
        </h2>
        <Accordion type="single" collapsible>
          {portal.map((port) => (
            <Menu
            valueAcc={port.value}
            urlMenu={port.url}
            menuName={port.menu}
            urlImage={port.image}
            accContent={
              <>
              {port.submenu.map((sub) => (
                <SubMenu
                valueSubMenu={sub.value}
                subMenuName={sub.title}
                childMenu={
                  <>
                  {sub.link.map((links) => (
                    <Link href="/portal-cloud/kilat-storage/cara-pemesanan">
                    <div className="mt-2 flex gap-3 hover:text-[#136AAD] hover:underline">
                      <Image
                        src="/images/logo_cloudkilat.png"
                        alt="Cloudkilat"
                        width={20}
                        height={20}
                      />
                      <p className="flex-1 truncate">{links}</p>
                    </div>
                  </Link>
                  ))}
                  </>
                }
              />
              ))}
              {port.linkName.map((linknames) => (
                <div className="py-2 relative">
                <div className="h-4 w-5 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                <Link href="">
                  <div className="mt-2 pb-2 pl-6 flex gap-3 hover:text-[#136AAD] hover:underline">
                    <Image
                      src="/images/logo_cloudkilat.png"
                      alt="Cloudkilat"
                      width={20}
                      height={20}
                    />
                    <p className="flex-1 truncate">{linknames}</p>
                  </div>
                </Link>
              </div>
              ))}
              </>
            }
          />
          ))}
        </Accordion>
        <div className="mt-5 pt-4  flex justify-between  border-t-2 border-gray-200 items-center text-sm"></div>
      </div>
    </>
  );
}
