'use client';

import Question from "@/components/Beranda/Questions/questions";
import { Accordion } from "@/components/ui/accordion";
import PaginationFaq from "./pagination";
import { getAllFaq } from "@/app/fetch/res";
import TagArticle from "../tag";
import { useState } from "react";

export default function Questions({ faq, tags }) {
  const [articles, setArticles] = useState(faq.articles);
  const [pagination, setPagination] = useState(faq.pagination);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (newPage) => {
    try {
      const data = await getAllFaq(newPage);
      setArticles(data.articles);
      setPagination(data.pagination);
      setCurrentPage(newPage);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  return (
    <div className="p-4 md:px-24 md:py-[69px] mb:p-8 sm:p-24 overflow-hidden">
      <h1 className="font-extrabold text-[32px] text-primary-blue max-sm:text-center mb-10">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div className="flex flex-col lg:flex-row md:p-0 max-md:justify-center justify-between">
        <div className="lg:hidden mb-10 lg:w-1/3 md:w-full sm:w-[95%] mb:w-full justify-items-center">
          <TagArticle tags={tags} />
        </div>
        <div className="lg:w-2/3 md:w-full sm:w-[95%] text-left">
          <Accordion type="single" collapsible>
            {articles.map((faqs) => (
              <Question
                key={faqs.documentId}
                accTriger={faqs.question}
                accContent={faqs.answer}
                item={faqs.id}
              />
            ))}
          </Accordion>

          <div className="mt-8">
            <PaginationFaq 
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalPages={pagination.pageCount}
            />
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3 md:w-full sm:w-[95%] sm:p-20 mb:p-8 lg:p-0 ml-10">
          <TagArticle tags={tags} />
        </div>
      </div>
    </div>
  );
}
