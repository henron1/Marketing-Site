import { CallToAction } from "@/components/CallToAction";
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
    </>
  );
}
