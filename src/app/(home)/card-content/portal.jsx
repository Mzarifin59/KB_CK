import Image from "next/image";
import Portal from "@/components/Beranda/portalcloud";
import Link from "next/link";

export default  function PortalCloud({portal}) {
  return (
    <>
      <div className="p-4 md:px-24 md:py-[69px] sm:p-24 mb:p-8 relative">
        <strong>
          <h1 className="font-extrabold text-3xl text-primary-blue mb-12 max-sm:text-center">
            PORTAL CLOUDKILAT
          </h1>
        </strong>
        <Image
          className="absolute right-0 bottom-0 translate-x-[0px] translate-y-[0px]"
          src="/images/elips4.png"
          alt="Elips"
          width={440}
          height={440}
        />
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2  gap-7 lg:gap-10  justify-items-center relative overflow-hidden">
          {portal.map((portals) => (
            <div key={portals.documentId}>
              <Link href={`/portal-cloud/${portals.slug}`} className="flex flex-col h-full">
                <Portal
                  urlImage={portals.IconImage[0]?.url}
                  cardTitle={portals.text}
                  cardDescription={portals.description}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
