import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ReactMarkdown from "react-markdown";

export default function Question({accTriger, accContent, item}) {
  
  return (
    <> 
              <AccordionItem value={item}>
                <AccordionTrigger className="font-bold text-[18px] border-b">
                  {accTriger}
                </AccordionTrigger>
                <AccordionContent className="mt-5 text-[16px]">
                <ReactMarkdown>{accContent}</ReactMarkdown>
                </AccordionContent>
              </AccordionItem>
    </>
  );
}
