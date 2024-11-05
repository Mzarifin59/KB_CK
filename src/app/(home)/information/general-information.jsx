import Image from "next/image";
import Informasi from "@/components/Beranda/information";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

export default function informasiUmum({article}) {
  return (
    <>
      <div className="p-4 relative md:px-24 md:py-[69px] sm:p-24 mb:p-8 overflow-hidden">
        <div className="relative flex justify-between items-center mb-5 z-10">
          <strong>
            <h1 className="font-extrabold text-[32px] text-primary-blue ">
              INFORMASI UMUM
            </h1>
          </strong>
          <Link href="/informasi-umum">
            <div className="flex items-center gap-2">
              <p className="hidden sm:block text-xl font-medium sm:text-base">
                Tampilkan Semua
              </p>
              <ArrowRight strokeWidth={1} size={20} />
            </div>
          </Link>
        </div>
        <Image
          className="absolute bottom-0 translate-x-[0px] translate-y-[0px] z-0"
          src="/images/elips5.png"
          alt="Elips"
          width={1177}
          height={1177}
        />
        <div className="font-bold relative">
          {article.map((articles) => (
            <Link href="">
            <Informasi
            key={articles.documentId}
            urlImage="/images/logo_cloudkilat.png"
            link={articles.title}
          />
          </Link>
          ))}
        </div>
      </div>
    </>
  );
}
