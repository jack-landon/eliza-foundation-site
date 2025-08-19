import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import { DreamBuildSeparator } from "@/components/DreamBuildSeparator";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FundingSection } from "@/components/FundingSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero />
        <DreamBuildSeparator />
        <ProjectsSection />
        <FundingSection />
      </main>
      <Footer />
    </div>
  );
}
