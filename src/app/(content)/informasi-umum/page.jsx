import Information from "@/components/content/information";
import Link from "@/components/link/linkcontent";
import Paginations from "@/components/pagination/pagenation-page";
import BreadCrumb from "@/components/Article/breadcrumb/breadcrumb";

export const metadata = {
  title: "Informasi Umum",
  description: "Informasi Umum",
};

export async function getAllInformasiUmum(){
  const res = await fetch(process.env.BASE_URL_FETCH + '/articles?filters[category][text][$eq]=Informasi Umum&populate[category][fields][0]=text&populate[category][fields][1]=slug&pagination[page]=1&pagination[pageSize]=12');
  const data = await res.json();
  const information = data.data;

  return information;
}

export default async function InformasiUmumPage() {
  const information = await getAllInformasiUmum();

  return <InformasiUmum information={information} />;
}


function InformasiUmum({ information }) {
  return (
    <div className="px-6 md:p-8 xl:w-[100%] bs:mr-[40px] lg:w-[75%] lg:m-0 md:w-[60%] md:mx-[30px] mb:w-[100%] mb:px-8 nunito">
      <div className="flex items-center pb-3 flex-wrap mx-auto">
        <BreadCrumb title="Beranda" onPage="Informasi Umum" />
      </div>
      <Information title="Informasi Umum" />
      <div className="">
        {information.map((informasi) => (
          <Link
            key={informasi.documentId}
            urlImage="/images/logo_cloudkilat.png"
            linkName={informasi.title}
            urlLink={`/informasi-umum/${informasi.slug}`}
          />
        ))}
      </div>
      <div className="py-6">
        <Paginations />
      </div>
    </div>
  );
}