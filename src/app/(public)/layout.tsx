import Header from "@/components/Header/header";
import Footer from "@/components/Footer/Footer";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
