import Navbar from "@/components/navbar/navbar1";
import Footer from "@/components/footer";

export default function HomeLayout({ children }) {
  return (
    <section className="nunito">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
      {children}
      </div>
      <Footer />
    </section>
  );
}
