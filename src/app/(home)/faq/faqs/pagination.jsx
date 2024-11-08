"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationFaq({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          onClick={handlePrevious}
          className={`bg-[#136AAD] p-1 rounded-md dark:rounded-full w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-500 mr-10 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center h-full">
            <ChevronLeft className="text-white dark:text-white w-5 h-5" />
          </div>
        </PaginationItem>
        <PaginationItem
          onClick={handleNext}
          className={`bg-[#136AAD] p-1 rounded-md dark:rounded-full w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <div className="flex items-center justify-center h-full">
            <ChevronRight className="text-white dark:text-white w-5 h-5" />
          </div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}