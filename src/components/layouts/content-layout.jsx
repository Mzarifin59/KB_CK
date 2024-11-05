import Navbar from "@/components/navbar/navbar2";
import Footer from "@/components/footer";
import Sidebar from "../sidebar/index";

export default function ContentLayout({ children }) {
  return (
    <section className="nunito">
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto md:flex">
        <div className="max-md:w-full">
      <Sidebar />
      </div>
      {children}
      </div>
      <Footer />
    </section>
  );
}