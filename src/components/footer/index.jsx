import ScrollToTopButton from "../ScrollTopButton/ScrollTopButton";
import ThemeTogle from "@/components/ThemeTogle/ThemeTogle"
import Image from "next/image";
import { Icon } from '@iconify/react';

const Page = () => {
  return (
    <>
    {/* Bagian Footer */}
      <footer className="bg-primary-blue text-white py-10 p-24 nunito">
        <div className="max-w-[1440px] mx-auto">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 md:gap-2 sm:grid-cols-2 justify-items-center py-auto">
          <div className="sm:text-left mb-6 md:mb-0 mb:text-center mb:justify">
            <Image
              className="mx-auto"
              src="/images/footer-images/infinys-logo.png"
              alt="icon-facebook"
              width={150}
              height={150}
            />
            <p className="text-sm mt-5 max-w-[15rem] ">
              CLOUDKILAT merupakan bagian dan merk dagang dari PT Infinys System
              Indonesia
            </p>
            <div className="flex mt-6 space-x-4 mb:justify-center">
            <a href="">
                  <div className="border border-white rounded-lg p-1">
                    <Icon
                      icon="fa6-brands:square-x-twitter"
                      width={20}
                      height={20}
                      color="#fff"
                    />
                  </div>
                </a>

                <a href="">
                  <div className="border border-white rounded-lg p-1">
                    <Icon
                      icon="humbleicons:brand-instagram"
                      width={20}
                      height={20}
                      color="#fff"
                    />
                  </div>
                </a>

                <a href="">
                  <div className="border border-white rounded-lg p-1">
                    <Icon
                      icon="basil:facebook-outline"
                      width={20}
                      height={20}
                      color="#fff"
                    />
                  </div>
                </a>

                <a href="">
                  <div className="border border-white rounded-lg p-1">
                    <Icon
                      icon="proicons:tiktok"
                      width={20}
                      height={20}
                      color="#fff"
                    />
                  </div>
                </a>
            </div>
          </div>

          {/* Products Link's */}
          <div className="mb-6 sm:ml-10 md:ml-10 md:mb-0 max-sm:text-center">
            <h3 className="font-bold">Produk</h3>
            <ul className="mt-2 leading-8">
              <li>
                <a href="#">Kilat VM 2.0</a>
              </li>
              <li>
                <a href="#">Kilat Hosting 2.0</a>
              </li>
              <li>
                <a href="#">Kilat Storage</a>
              </li>
              <li>
                <a href="#">Kilat Protect</a>
              </li>
            </ul>
          </div>

          {/* Service Link's */}
          <div className="mb-6  md:mb-0 max-sm:text-center">
            <h3 className="font-bold ">Layanan</h3>
            <ul className="mt-2 leading-8">
              <li>
                <a href="#">Infrastuktur</a>
              </li>
              <li>
                <a href="#">Platform</a>
              </li>
              <li>
                <a href="#">Domain</a>
              </li>
              <li>
                <a href="">Tambahan</a>
              </li>
            </ul>
          </div>

          {/* contact link's */}
          <div className="sm:ml-10 max-sm:text-center">
            <h3 className="font-bold">Contact Us</h3>

              <div className="flex items-center mt-2 mb:flex-none">
                <Icon icon="ic:baseline-email" width={16} height={16} color="#fff" />
                <p className="ml-2">info@cloudkilat.com</p>
              </div>

              <div className="flex items-center mt-2 max-w-[12rem]">
                <Icon icon="mdi:location" width={50} height={50} color="#fff" />
                <p className="ml-2">
                  Pakuwon Tower lt. 9 F-G. Jl. Cassablanca Raya Kav. 88 Jakarta
                  Selatan 12870.
                </p>
              </div>

              <div className="flex items-center mt-2">
                <Icon icon="ic:baseline-phone" width={16} height={16} color="#fff" />
                <p className="ml-2">+62 21 2968 2828</p>

              </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white flex sm:flex-row mb:flex-col max-sm:text-center mb:gap-3 justify-between items-center text-sm">
          <p>Copyright © 2024 Knowledge Base CloudKilat</p>
          <ScrollToTopButton/>
          <ThemeTogle />
          <p className="flex items-center">
            Status:{" "}
            <span className="w-2 h-2 bg-green-400 rounded-full ml-2 mr-1"></span>{" "}
            Seluruh Sistem Normal
          </p>
        </div>
        </div>
      </footer>
    </>
  );
};
export default Page;