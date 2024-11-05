import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

const Sidebar = () => {
  return (
    <>
      <div className="max-md:hidden">
        <h2 className="text-md nunito mb-4 nunito font-semibold text-gray-500">
          PORTAL
        </h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="kilat-vm">
            
            <AccordionTrigger className=" px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
              
              <Image
                src="/images/documentation/accordion/pemesanan-icon.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500 ">
              <a href="/portal-cloud/kilat-storage">Pemesanan</a>
              </span>
             
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="akun">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
              <Image
                src="/images/documentation/accordion/akun-icon.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500 truncate">
                Akun Cloudkilat
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kilat-storage">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/documentation/accordion/pembayaran-icon.png"
                alt="Kilat Storage"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500">
                Pembayaran
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Memulai Kilat Storage</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="kilat-protect">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/documentation/accordion/tiket-icon.png"
                alt="Kilat Protect"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500">
                Tiket
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" max-md:hidden mt-5 pt-4  flex justify-between  border-t border-gray-200 items-center text-sm"></div>

      {/* ---------------------------------------------------------------------------- */}
      
      <div className="md:hidden">
        <Accordion type="single" collapsible>
          {/* Accordion Item for Produk */}
          <AccordionItem value="portal">
            <AccordionTrigger className="px-2 text-md nunito mb-4 font-semibold text-gray-500 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              PORTAL
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="kilat-vm">
                  <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left ">
                    <Image
                      src="/images/documentation/accordion/pemesanan-icon.png"
                      alt="Kilat VM 2.0"
                      width={20}
                      height={20}
                    />
                  
                    <span className="flex-1 nunito font-bold text-gray-500 ">
                      Pemesanan
                    </span>
                    
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <p>Submenu 1</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kilat-hosting">
                  <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                    <Image
                      src="/images/documentation/accordion/akun-icon.png"
                      alt="Kilat Hosting 2.0"
                      width={20}
                      height={20}
                    />
                    <span className="flex-1 nunito font-bold text-gray-500 ">
                      Akun Cloudkilat
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <p>Submenu 1</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kilat-storage">
                  <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                    <Image
                      src="/images/documentation/accordion/pembayaran-icon.png"
                      alt="Kilat Storage"
                      width={20}
                      height={20}
                    />
                    <span className="flex-1 nunito font-bold text-gray-500">
                      Pembayaran
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <p>Memulai Kilat Storage</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kilat-protect">
                  <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                    <Image
                      src="/images/documentation/accordion/tiket-icon.png"
                      alt="Kilat Protect"
                      width={20}
                      height={20}
                    />
                    <span className="flex-1 nunito font-bold text-gray-500">
                      Tiket
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-8">
                    <p>Submenu 1</p>
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
