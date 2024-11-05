"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import Image from "next/image";
import Link from "next/link";
import DetailNav from "@/components/navbar/navbar2/detail-nav";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProdukOpen, setIsProdukOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <div className="overflow-hidden ">
        <div className="bg-white dark:bg-[#141414] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 py-4 nunito">
          <div className="flex justify-between items-center text-primary-blue px-10">
            {/* Logo */}
            <div className="flex items-center w-[100px] h-[33px] sm:w-[120px] sm:h-[40px] md:w-[150px] md:h-[50px]">
              <Image
                src="/images/documentation/logo-kilat.png"
                alt="Cloudkilat Logo"
                layout="responsive"
                width={150}
                height={50}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>

            {/* Navigation for larger screens */}
            <div className="hidden lg:flex items-center gap-2 space-x-5">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-bold">
                      Produk
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href="#">
                        <div className="w-[200px] text-left nunito p-4 text-[#136AAD]">
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Kilat Vm 2.0</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Kilat Hosting 2.0</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Kilat Storage</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Kilat Protect</Link>
                          </ul>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:text-[#130AAD]">
                      Portal
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href="#">
                        <div className="w-[200px] text-left nunito p-4 text-[#136AAD]">
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Akun</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Pemesanan</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Pembayaran</Link>
                          </ul>
                          <ul className="py-1 px-1 rounded-md hover:bg-gray-100">
                            <Link href="">Tiket</Link>
                          </ul>
                        </div>
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuViewport />
              </NavigationMenu>

              {/* Links */}
              <div className="flex gap-4 space-x-5">
                <a href="" className="hover:text-[#130AAD]">
                  Blog
                </a>
                <a href="" className="hover:text-[#130AAD]">
                  Promosi
                </a>
              </div>

              {/* Buttons */}
              <button className="px-4 py-2 border border-[#136AAD] rounded-md hover:bg-[#136AAD] hover:text-white transition-colors duration-300 text-sm">
                Masuk
              </button>
              <button className="px-4 py-2 border border-[#136AAD] rounded-md hover:bg-[#136AAD] hover:text-white transition-colors duration-300 text-sm">
                Kontak
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 flex flex-col space-y-4 text-[#136AAD]">
              <div>
                <button
                  className="p-1 w-full flex justify-between items-center rounded-md hover:text-[#132AAD] hover:bg-gray-100"
                  onClick={() => setIsProdukOpen(!isProdukOpen)}
                >
                  Produk <ChevronDown size={20} />
                </button>
                {isProdukOpen && (
                  <div className="pl-4">
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Kilat VM 2.0
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Kilat Hosting 2.0
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Kilat Storage
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Kilat Protect
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  className=" p-1 w-full flex justify-between items-center rounded-md hover:bg-gray-100 hover:text-[#132AAD]"
                  onClick={() => setIsPortalOpen(!isPortalOpen)}
                >
                  Portal <ChevronDown size={20} />
                </button>
                {isPortalOpen && (
                  <div className="pl-4">
                    <Link
                      href="#"
                      className=" p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                     Akun
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Pemesanan
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Pembayaran
                    </Link>
                    <Link
                      href="#"
                      className="p-1 block py-2 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
                    >
                      Tiket
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="p-1 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
              >
                Blog
              </a>
              <a
                href="#"
                className="p-1 hover:text-[#132AAD] hover:bg-gray-100 rounded-md"
              >
                Promosi
              </a>
              <button className="w-[70%] mx-auto py-2 border border-[#136AAD] rounded-md hover:bg-[#136AAD] hover:text-white transition-colors duration-300 text-sm">
                Masuk
              </button>
              <button className="w-[70%] mx-auto py-2 border border-[#136AAD] rounded-md hover:bg-[#136AAD] hover:text-white transition-colors duration-300 text-sm">
                Kontak
              </button>
            </div>
          )}
        </div>

        {/* Panduan Lengkap Section */}
        <DetailNav />
      </div>
    </div>
  );
};

export default Page;
