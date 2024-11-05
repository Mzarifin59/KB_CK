import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";
import Link from "next/link";

export default function Menu({
  urlImage,
  menuName,
  valueAcc,
  accContent,
  urlMenu,
}) {
  return (
    <>
      <div className="py-1">
        <AccordionItem value={valueAcc} data-state="open">
        <Link href={urlMenu}>
          <AccordionTrigger className="hover:bg-blue-300 px-3 py-[10px] rounded-lg flex items-center gap-3 text-left group">
            <Image src={urlImage} alt={menuName} width={20} height={20} />
            <span className="flex-1 font-bold text-sm text-gray-500 border-0 group-hover:text-blue-600">
              {menuName}
            </span>
          </AccordionTrigger>
          </Link>
          <AccordionContent className="px-[14px]">
            <div className="border-l-[3px] border-gray-200">{accContent}</div>
          </AccordionContent>
        </AccordionItem>
      </div>
    </>
  );
}

