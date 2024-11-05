"use client";
import { useEffect, useState } from "react";
import { getAllFaq } from "@/app/fetch/res";
import Question from "@/components/Beranda/Questions/questions";
import { Accordion } from "@/components/ui/accordion";
import PaginationFaq from "./pagination"; 
import TagArticle from "../tag"; 

export default function Questions() {
    const [faq, setFaq] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const { faq: fetchedFaq, totalPages } = await getAllFaq(currentPage);
                setFaq(fetchedFaq);
                setTotalPages(totalPages);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchFaqs();
    }, [currentPage]);

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-4 md:px-24 md:py-[69px] mb:p-8 sm:p-24 overflow-hidden">
            <h1 className="font-extrabold text-[32px] text-primary-blue max-sm:text-center mb-10">
                FREQUENTLY ASKED QUESTIONS
            </h1>
            <div className="flex flex-col lg:flex-row md:p-0 max-md:justify-center justify-between">
                <div className="lg:hidden mb-10 lg:w-1/3 md:w-full sm:w-[95%] mb:w-full justify-items-center">
                    <TagArticle /> 
                </div>
                <div className="lg:w-2/3 md:w-full sm:w-[95%] text-left">
                    <Accordion type="single" collapsible>
                        {faq.length > 0 
                            ? faq.map((faqs) => (
                                <Question 
                                    key={faqs.id} 
                                    accTriger={faqs.question} 
                                    accContent={faqs.answer} 
                                    item={faqs.id} 
                                />
                              ))
                            : <div>Loading...</div>
                        }
                    </Accordion>

                    <div className="mt-8">
                        <PaginationFaq 
                            currentPage={currentPage} 
                            setCurrentPage={setCurrentPage} 
                            totalPages={totalPages} 
                        />
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/3 md:w-full sm:w-[95%] sm:p-20 mb:p-8 lg:p-0 ml-10">
                    <TagArticle /> 
                </div>
            </div>
        </div>
    );
}