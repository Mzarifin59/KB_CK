import Image from "next/image";
import Produk from "@/components/Beranda/produkcloud";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function ProdukCloud({produk}) {
  return (
    <>
      <div className="relative">
        <div className="p-4 md:px-24 md:py-[69px] sm:p-24 mb:p-8">
          <h1 className="font-extrabold text-[32px] text-primary-blue mb-14 max-sm:text-center">
            PRODUK CLOUDKILAT
          </h1>
          <div className="absolute left-0 bottom-0 translate-x-[0px] translate-y-[0px]">
            {" "}
            <Image
              src="/images/bulat2-bg.png"
              alt="Elips"
              width={530}
              height={530}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
            {produk.map((product) => (
              <>
              <Card className="max-w-[595px] max-h-[260px] card-primary-color shadow-lg rounded-lg transition-all transform hover:scale-105 hover:bg-[#136AAD] mx-auto group">
              <Link href={`/produk-cloud/${product.slug}`}>
                <Produk
                  key={product.documentId}
                  urlImage={product.IconImage[0]?.url}
                  cardTitle={product.text}
                  cardDescription={product.description}
                />
              </Link>
              </Card>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
