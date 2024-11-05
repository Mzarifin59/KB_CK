import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight, } from "lucide-react"

export default function Paginations() {
  return (
    <Pagination>
      <PaginationContent>
        {/* Previous Button */}
        <PaginationItem className=" bg-[#F9F9F9] p-1 rounded-md dark:rounded-full w-7 h-7 hover:bg-gray-200 dark:hover:bg-black ">
          <div className="flex">
            <ChevronLeft className="text-black dark:text-[#136AAD] mx-auto w-5 h-5 " />
          </div>
        </PaginationItem>


        {/* Page Numbers */}
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>

        {/* Active Page */}
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="bg-[#0084C8] text-white rounded-md dark:bg-[#136AAD] dark:rounded-full"
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>

        {/* Next Button */}
        <PaginationItem className=" bg-[#F9F9F9] p-1 rounded-md dark:rounded-full w-7 h-7 hover:bg-gray-200 dark:hover:bg-black">
          <div className="flex">
            <ChevronRight className="text-black dark:text-[#136AAD] mx-auto w-5 h-5 " />
          </div>

          <PaginationPrevious href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
