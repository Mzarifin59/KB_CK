import HomeLayout from "@/components/layouts/home";

export const metadata = {
  title: "Knowladge Base Cloudkilat",
  description: "Knowladge Base Cloudkilat",
};

export default function LayoutHome({ 
  children, 
}) {
    return <HomeLayout>{children}</HomeLayout>
  }