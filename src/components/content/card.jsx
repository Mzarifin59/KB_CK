import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContentCard({ cardTitle, cardLink }) {
  return (
    <>
      <Card className=" card-primary-color shadow-xl w-full p-6 min-h-[200px] flex flex-col">
        <CardHeader>
          <CardTitle className="text-[18px] font-extrabold">{cardTitle}</CardTitle>
          <CardDescription className="text-base text-secondary-gray font-medium">{cardLink}</CardDescription>
        </CardHeader>
      </Card>

    </>
  );
}
