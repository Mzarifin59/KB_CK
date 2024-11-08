"use client";

import { useState } from "react";
import Information from "@/components/content/information";
import Link from "@/components/link/linkcontent";
import Paginations from "@/components/pagination/pagenation-page";
import BreadCrumb from "@/components/Article/breadcrumb/breadcrumb";
import { getAllInformasiUmum } from "@/app/fetch/res";

export default function InformasiUmum({ initialData }) {
  const [articles, setArticles] = useState(initialData.articles);
  const [pagination, setPagination] = useState(initialData.pagination);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (newPage) => {
    try {
      const data = await getAllInformasiUmum(newPage);
      setArticles(data.articles);
      setPagination(data.pagination);
      setCurrentPage(newPage);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  return (
    <div className="px-6 md:p-8 xl:w-[100%] bs:mr-[40px] lg:w-[75%] lg:m-0 md:w-[60%] md:mx-[30px] mb:w-[100%] mb:px-8 nunito">
      <div className="flex items-center pb-3 flex-wrap mx-auto">
        <BreadCrumb title="Beranda" onPage="Informasi Umum" />
      </div>
      <Information title="Informasi Umum" />
      <div className="">
        {articles.map((informasi) => (
          <Link
            key={informasi.documentId}
            urlImage="/images/logo_cloudkilat.png"
            linkName={informasi.title}
            urlLink={`/informasi-umum/${informasi.slug}`}
          />
        ))}
      </div>
      <div className="py-6">
      <Paginations
          currentPage={currentPage}
          totalPages={pagination.pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
