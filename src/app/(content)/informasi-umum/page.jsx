import InformasiUmum from "./informasi-content";
import { getAllInformasiUmum } from "@/app/fetch/res";

export const metadata = {
  title: "Informasi Umum",
  description: "Informasi Umum",
};

export default async function InformasiUmumPage() {
  const initialData = await getAllInformasiUmum();

  return <InformasiUmum initialData={initialData} />;
}