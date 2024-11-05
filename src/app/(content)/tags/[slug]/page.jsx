import Tag from "@/components/tags/tag";
import Link from "@/components/link/linkcontent";
import Paginations from "@/components/pagination/pagenation-page";
import BreadCrumb from "@/components/Article/breadcrumb/breadcrumb";
import { getArticleByTag} from "@/app/fetch/res";

export async function generateMetadata({params}){
  return {
    title : params.slug || 'Tag',
  }
};

export default async function TagsPage({ params }) {
  const tag = await getArticleByTag(params.slug);

  return <Tags tag={tag} slug={params.slug} />;
}

function Tags({ tag, slug }) {
  return (
    <div className="px-6 md:p-8 xl:w-[100%] bs:mr-[40px] lg:w-[75%] lg:m-0 md:w-[60%] md:mx-[30px] mb:w-[100%] mb:px-8 nunito">
      <div className="flex items-center pb-3 flex-wrap mx-auto">
        <BreadCrumb title="Beranda" />
        <BreadCrumb title="Tags" onPage={slug} />
      </div>
      <div className="mb-7 md:text-5xl font-bold mb:text-3xl pt-serif">
        <Tag tag={slug} bgColor="bg-purple-200" />
      </div>
      <div className="flex-grow">
        <div className="">
          {tag.map((article) => (
            <Link
              key={article.documentId}
              urlImage="/images/logo_cloudkilat.png"
              linkName={article.title}
              urlLink={`/informasi-umum/${article.slug}`}
            />
          ))}
        </div>
      </div>
      <div className="py-6">
        <Paginations />
      </div>
    </div>
  );
}
  
