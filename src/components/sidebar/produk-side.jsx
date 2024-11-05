'use clients'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import ProdukSide from "./sidebar-strukture/menu";
import SubContent from "./sidebar-strukture/sub-menu";
import Link from "next/link";
import { getSidebarCategory } from "../../app/fetch/res";

export async function getCategoryById() {
  const category = await getSidebarCategory();
  const filteredCategories = category.filter((category) =>
    [96, 100, 97, 98].includes(category.id)
  );

  return filteredCategories;
}

export default async function ProdukSideBar() {
  const produk = await getCategoryById();
  
  return (
    <>
      <div className="px-6 max-md:px-2">
        <h2 className="text-[10px] px-3 font-semibold text-secondary-gray">
          PRODUK
        </h2>

        <Accordion type="single" collapsible>
          {produk.map((product) => (
            <ProdukSide
            key={product.id}
            valueAcc={product.id}
            urlMenu={`/produk-cloud/${product.slug}`}
            menuName={product.text}
            urlImage={product.IconImage[0]?.url}
            accContent={
              <>
              {product.ChildCategories?.map((child) => (
                <SubContent
                key={child.id}
                valueSubMenu={child.id}
                subMenuName={child.text}
                childMenu={
                  <>
                  {child.articles.map((article) => (
                    <Link href={`/produk-cloud/${child.slug}/${article.slug}`}>
                    <div className="mt-2 flex gap-3 hover:text-[#136AAD] hover:underline">
                      <Image
                        src="/images/logo_cloudkilat.png"
                        alt="Cloudkilat"
                        width={20}
                        height={20}
                      />
                      <p className="flex-1 truncate">{article.title}</p>
                    </div>
                  </Link>
                  ))}
                  </>
                }
              />
              ))}
              {product.articles.map((article) => (
                <div className="py-2 relative">
                <div className="h-4 w-5 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                <Link href={`/produk-cloud/${product.slug}/${article.slug}`}>
                  <div className="mt-2 pb-2 pl-6 flex gap-3 hover:text-[#136AAD] hover:underline">
                    <Image
                      src="/images/logo_cloudkilat.png"
                      alt="Cloudkilat"
                      width={20}
                      height={20}
                    />
                    <p className="flex-1 truncate">
                      {article.title}
                    </p>
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
