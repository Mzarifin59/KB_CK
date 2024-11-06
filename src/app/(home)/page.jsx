import Produk from "./card-content/produk";
import Portal from "./card-content/portal";
import Information from "./information/general-information";
import FAQ from "./faq/faqs/question";
import { getHomeProduk, getHomePortal, getAllTags, getAllFaq, getArticleInformasiUmum} from "@/app/fetch/res";


export default async function Coba() {
  const produk = await getHomeProduk();
  const portal = await getHomePortal();
  const article = await getArticleInformasiUmum();
  const tag = await getAllTags();
  const faq = await getAllFaq();
  return (
    <div> 
      <Produk produk={produk}/>
      <div className="bg-sky-blue">
        <Portal portal={portal}/>
      </div>
      <Information article={article}/>
      <div className="bg-sky-blue">
        <FAQ faq={faq}/>
      </div>
    </div>
  );
}
