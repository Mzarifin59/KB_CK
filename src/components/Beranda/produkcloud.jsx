import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Produk({ urlPath, urlImage, cardTitle, cardDescription }) {
  return (
    <>
      {/* Kartu 1 */}
          <CardHeader>
            <Image
              className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert dark:brightness-0 dark:invert"
              src={urlImage}
              alt="Cloudkilat Laptop"
              width={50}
              height={50}
            />
            <CardTitle className="text-xl nunito font-extrabold group-hover:text-white">
              {cardTitle}
            </CardTitle>
            <CardDescription className="max-w-[30rem] leading-5 text-secondary-gray group-hover:text-white">
              {cardDescription}
            </CardDescription>
          </CardHeader>
    </>
  );
}
