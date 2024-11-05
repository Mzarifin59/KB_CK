import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

export default function SubMenu({ valueSubMenu, subMenuName, childMenu }) {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value={valueSubMenu}>
          <AccordionTrigger className="py-2 relative">
            <div className="h-4 w-6 border-b-4 border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
            <div className="pl-5 flex-1">
              <p className="hover:bg-gray-100 dark:hover:bg-[#DDF2FF] dark:hover:text-black rounded-md p-2 text-xs font-medium text-secondary-gray">
                {subMenuName}
              </p>
            </div>
          </AccordionTrigger>

          <div className="ml-6 border-l-[3px] border-gray-200">
            <AccordionContent className="pb-0">
              <div className="py-2 relative">
                <div className="h-4 w-5 border-b-[3px] border-gray-200 rounded-bl-lg absolute bottom-6 left-0.5 -translate-x-1"></div>
                <div className="pl-6 pb-2 flex-1">{childMenu}</div>
              </div>  
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
}
