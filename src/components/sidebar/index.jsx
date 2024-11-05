import ProdukSideBar from "./produk-side";
import PortalSideBar from "./portal-side";
import GeneralInformation from "./general-information";
import { ScrollArea } from "../ui/scroll-area";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";



export default function SideBar() {
  return (
    <>
      <div className="max-md:hidden py-[46px] w-64 border-r border-gray-200">
        <ProdukSideBar />
        <PortalSideBar />
        <GeneralInformation />
      </div>

      {/*---------------------------------------------------------------------------------- */}

      <div className="px-7 pt-6 pb-4 md:border-x md:border-gray-200 md:hidden nunito">
        <div className="w-[100%]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Menu</Button>
            </SheetTrigger>
            <SheetContent side="left" className="nunito">
            <ScrollArea className="md:h-[100vh] h-[700px]">
              <SheetHeader>
                <SheetTitle className="mb-3">Menu Sidebar</SheetTitle>
              </SheetHeader>
              <ProdukSideBar />
              <PortalSideBar />
              <GeneralInformation />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
