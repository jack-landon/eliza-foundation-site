import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FundingSection } from "@/components/FundingSection";
import { SupportSection } from "@/components/SupportSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero />
        <SupportSection />
        <FundingSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
