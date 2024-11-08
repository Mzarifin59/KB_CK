'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Paginations({ currentPage, totalPages, onPageChange }) {
  const maxVisiblePages = 4;

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  const adjustedStartPage = Math.max(1, Math.min(startPage, totalPages - maxVisiblePages + 1));

  const visiblePages = Array.from(
    { length: Math.min(maxVisiblePages, totalPages) },
    (_, index) => adjustedStartPage + index
  );

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* Tombol Previous */}
        <PaginationItem
          className="bg-[#F9F9F9] p-1 rounded-md dark:rounded-full w-7 h-7 hover:bg-gray-200 dark:hover:bg-black"
          onClick={handlePrevious}
        >
          <div className="flex">
            <ChevronLeft className="text-black dark:text-[#136AAD] mx-auto w-5 h-5" />
          </div>
        </PaginationItem>

        {/* Nomor Halaman */}
        {visiblePages.map((page) => (
          <PaginationItem key={page} onClick={() => onPageChange(page)}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              className={`${
                page === currentPage
                  ? "bg-[#0084C8] text-white rounded-md dark:bg-[#136AAD] dark:rounded-full"
                  : ""
              }`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Tombol Next */}
        <PaginationItem
          className="bg-[#F9F9F9] p-1 rounded-md dark:rounded-full w-7 h-7 hover:bg-gray-200 dark:hover:bg-black"
          onClick={handleNext}
        >
          <div className="flex">
            <ChevronRight className="text-black dark:text-[#136AAD] mx-auto w-5 h-5" />
          </div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
