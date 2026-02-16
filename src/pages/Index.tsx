import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Terms from "@/components/Terms";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Catalog />
      <Terms />
      <About />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
