import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CallToAction />
      <Pricing />
      <Faqs />
      <Footer />
    </>
  );
}
