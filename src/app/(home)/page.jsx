import Produk from "./card-content/produk";
import Portal from "./card-content/portal";
import Information from "./information/general-information";
import FAQ from "./faq/faqs/question";
import { getAllCategories, getAllTags, getAllFaq, getArticleInformasiUmum } from "@/app/fetch/res";

export async function getProdukById() {
  const category = await getAllCategories();
  const filteredCategories = category.filter((category) =>
    [96, 100, 97, 98].includes(category.id)
  );

  return filteredCategories;
}

export async function getPortalById() {
  const category = await getAllCategories();
  const order = [105, 106, 101, 103]; // Array urutan ID
  const filteredCategories = category.filter((category) =>
    order.includes(category.id)
  );

  const sortedCategories = order.map((id) =>
    filteredCategories.find((category) => category.id === id)
  );

  return sortedCategories.filter(Boolean);
}

export default async function Coba() {
  const produk = await getProdukById();
  const portal = await getPortalById();
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
        <FAQ/>
      </div>
    </div>
  );
}
