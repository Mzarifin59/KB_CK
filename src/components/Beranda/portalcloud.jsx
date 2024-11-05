import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

export default function Portal({ urlPath, urlImage, cardTitle, cardDescription }) {
  return (
    <>
          <Card className="max-w-[281px] h-[221px] flex flex-col justify-between bg-transparent border border-blue-500 dark:border-white hover:bg-[#136AAD] transition-colors duration-300 group">
              <CardContent className="flex items-center space-x-5 py-4">
                <Image
                  className="transition-all duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert"
                  src={urlImage}
                  alt="people"
                  width={50}
                  height={50}
                />
                <strong>
                  <h2 className="text-xl font-bold group-hover:text-white">{cardTitle}</h2>
                </strong>
              </CardContent>
              <CardFooter className="mt-4">
                <p className="text-base text-secondary-gray font-medium line-clamp-4 leading-[150%] group-hover:text-white">{cardDescription}</p>
              </CardFooter>
          </Card>
    </>
  );
}
