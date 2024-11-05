import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import AccordionPortal from "@/components/side-bar/accportal";
import General from "@/components/side-bar/general-information";

const Sidebar = () => {
  return (
    <>
      <div className=" max-md:hidden w-64 p-6 border-r border-gray-200 dark:border-[#141414]">
        <h2 className="text-md nunito mb-4 nunito font-semibold text-gray-500">
          PRODUK
        </h2>

        {/* KILAT VM */}
        <Accordion type="single" collapsible>
          <AccordionItem value="kilat-vm">
            <AccordionTrigger className="hover:bg-blue-300 px-2 rounded-lg flex items-center gap-3 text-left ">
              <Image
                src="/images/kilatvm-logo.png"
                alt="Kilat VM 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-bold text-gray-500 border-0 hover:text-blue-600">
                Kilat VM 2.0
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <a href="">
                <div className="flex gap-3 hover:text-[#136AAD] hover:underline">
                  <Image
                    src="/images/logo_cloudkilat.png"
                    alt="Cloudkilat"
                    width={20}
                    height={20}
                  />
                  <p className="flex-1 truncate">kilat vm 2.0</p>
                </div>
              </a>
            </AccordionContent>
          </AccordionItem>

          {/* KILAT HOSTING */}
          <AccordionItem value="kilat-hosting">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilathosting-logo.png"
                alt="Kilat Hosting 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                Kilat Hosting
              </span>
            </AccordionTrigger>
          </AccordionItem>

          {/* KILAT STORAGE */}
          <AccordionItem value="kilat-storage">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilathosting-logo.png"
                alt="Kilat Hosting 2.0"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                Kilat Storage
              </span>
            </AccordionTrigger>

            <AccordionContent>
              <div className="ml-2 border-l-4 border-gray-200">
                {/* Submenu: Kilat Storage */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="sub-item-1">
                    <AccordionTrigger className="py-2 relative">
                      <div className="h-4 w-6 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                      <div className="pl-5 flex-1">
                        <p className="hover:bg-gray-100 rounded-md p-2 text-sm truncate">
                          Memulai Kilat Storage
                        </p>
                      </div>
                    </AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                {/* Submenu: Cara Pengunaan */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="sub-item-2">
                    <AccordionTrigger className="py-2 relative">
                      <div className="h-4 w-6 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                      <div className="pl-5 flex-1">
                        <p className="hover:bg-gray-100 rounded-md p-2 text-sm">
                          Cara Pengunaan
                        </p>
                      </div>
                    </AccordionTrigger>

                    <div className="ml-6 border-l-[3px] border-gray-200">
                      <AccordionContent className="pb-0">
                        <div className="py-2 relative">
                          <div className="h-4 w-6 border-b-[3px] border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                          <div className="pl-5 flex-1">
                            <p className="hover:bg-gray-100 rounded-md p-2 text-sm">
                              Cara Pengunaan
                            </p>
                          </div>
                        </div>
                        <div className="py-2 relative">
                          <div className="h-4 w-6 border-b-[3px] border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                          <div className="pl-5 flex-1">
                            <p className="hover:bg-gray-100 rounded-md p-2 text-sm">
                              Cara Pengunaan
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                </Accordion>

                {/* Submenu: Akses Kilat Storage */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="sub-item-3">
                    <AccordionTrigger className="py-2 relative">
                      {/* Border Lengkung di Trigger */}
                      <div className="h-4 w-6 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                      <div className="pl-5 flex-1">
                        <p className="hover:bg-gray-100 rounded-md p-2 text-sm">
                          Akses Kilat Storage
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="py-2 relative">
                        <div className="h-4 w-6 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-4 left-0.5 -translate-x-1"></div>
                        <div className="pl-4 flex-1">
                          <div className="pl-5">
                            <a href="">
                              <div className="flex gap-3 hover:text-[#136AAD] hover:underline">
                                <Image
                                  src="/images/logo_cloudkilat.png"
                                  alt="Cloudkilat"
                                  width={20}
                                  height={20}
                                />
                                <p className="flex-1 truncate">
                                  Mengenal FileZilla...
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                    
                  </AccordionItem>
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* KILAT PROTECT */}
          <AccordionItem value="kilat-protect">
            <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
              <Image
                src="/images/kilatprotect-logo.png"
                alt="Kilat Protect"
                width={20}
                height={20}
              />
              <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                Kilat Protect
              </span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <p>Submenu 1</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-5 pt-4  flex justify-between  border-t border-gray-200 items-center text-sm"></div>

        <AccordionPortal />
        <General />
      </div>

      {/* -------------------------------------------------------------------- */}

      <div className="p-8 md:border-x md:border-gray-200 md:hidden">
        <div className="w-[100%]">
          <Accordion type="single" collapsible>
            {/* Accordion Item for Produk */}
            <AccordionItem value="produk">
              <AccordionTrigger className="px-2 text-md nunito mb-4 font-semibold text-gray-500 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                PRODUK
              </AccordionTrigger>
              <AccordionContent>
                {/* Sub Accordion for Produk Items */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="kilat-vm">
                    <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                      <Image
                        src="/images/kilatvm-logo.png"
                        alt="Kilat VM 2.0"
                        width={20}
                        height={20}
                      />
                      <span className="flex-1 nunito font-bold text-gray-500 hover:text-blue-600">
                        Kilat VM 2.0
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      <p>Submenu 1</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="kilat-hosting">
                    <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                      <Image
                        src="/images/kilathosting-logo.png"
                        alt="Kilat Hosting 2.0"
                        width={20}
                        height={20}
                      />
                      <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                        Kilat Hosting 2.0
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      <p>Submenu 1</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="kilat-storage">
                    <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                      <Image
                        src="/images/kilatstorage-logo.png"
                        alt="Kilat Storage"
                        width={20}
                        height={20}
                      />
                      <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                        Kilat Storage
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-8">
                      <p>Memulai Kilat Storage</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="kilat-protect">
                    <AccordionTrigger className="px-2 hover:bg-blue-300 rounded-lg flex items-center gap-3 text-left">
                      <Image
                        src="/images/kilatprotect-logo.png"
                        alt="Kilat Protect"
                        width={20}
                        height={20}
                      />
                      <span className="flex-1 nunito font-semibold text-gray-500 hover:text-blue-600">
                        Kilat Protect
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

        <div className="w-[100%]">
          <AccordionPortal />
          <General />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
