import Information from "@/components/content/information";
import Card from "@/components/content/card";
import BreadCrumb from "@/components/Article/breadcrumb/breadcrumb";
import LinkContent from "@/components/link/linkcontent";
import { getCategoryDynamic } from "@/app/fetch/res";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const metaData = await getCategoryDynamic(params.slug);

  return {
    title: metaData[0]?.text || "Portal Cloud",
    description:
      metaData[0]?.description ||
      "Produk Cloudkilat yang menjadi produk utama cloud",
  };
}

export default async function PortalCloudPage({params}) {
  const category = await getCategoryDynamic(params.slug);

  return <KilatStorage category={category} slug={params.slug}/>
}

function KilatStorage({ category, slug }) {
  return (
    <>
      <div className="flex-1 overflow-hidden">
        <div className="flex flex-wrap items-center mx-auto mt-6 px-8">
          {category.map((breadcrumb) => (
            <>
            <BreadCrumb key={breadcrumb.id} title="Beranda" onPage={breadcrumb.text} />
            </>
          ))}
        </div>
        <div className="px-6 py-5 md:py-4 md:px-8 xl:w-[100%] bs:mr-[10px] bs:w-full lg:w-full lg:m-0 md:w-[90%] md:mx-[10px] mb:w-[100%] mb:px-8">
          {category.map((categoryHeader) => (
            <Information
              key={categoryHeader.documnetId}
              title={categoryHeader.text}
              description={categoryHeader.description}
            />
          ))}
          <hr className="bordet-t border-gray-300 dark:border-[#141414]" />
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 mt-8">
            {category.map((categories) => (
              <>
                {categories.ChildCategories.map((child) => (
                  <Card
                    key={child.documentId}
                    cardTitle={child.text}
                    cardLink={
                      <>
                        {child.articles.map((link) => (
                          <>
                            <Link
                              key={link.documentId}
                              href={`/portal-cloud/${slug}/${child.slug}/${link.slug}`}
                              className="no-underline hover:underline block pb-3"
                            >
                              {link.title}
                            </Link>
                          </>
                        ))}
                      </>
                    }
                  />
                ))}
              </>
            ))}
          </div>
          <div className="py-8">
            <div className="pt-8 border-t border-gray-200">
              {category.map((article) => (
                <>
                  {article.articles.map((link) => (
                    <LinkContent
                      key={link.documentId}
                      urlImage="/images/logo_cloudkilat.png"
                      linkName={link.title}
                      urlLink={`/produk-cloud/${slug}/${link.slug}`}
                    />
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
