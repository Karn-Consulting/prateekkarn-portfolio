import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ProofOfImpactSection from "@/components/ProofOfImpactSection";
import TrustedBySection from "@/components/TrustedBySection";
import AreasOfArchitectureSection from "@/components/AreasOfArchitectureSection";
import CareerTrajectorySection from "@/components/CareerTrajectorySection";
import MyWorkSection from "@/components/MyWorkSection";
import GrowthStackSection from "@/components/GrowthStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutPrateekSection from "@/components/AboutPrateekSection";
import KarnInsightsSection from "@/components/KarnInsightsSection";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prateek Karn | AI Business Architect & Growth Strategist</title>
        <meta name="description" content="Prateek Karn - AI Business Architect specializing in MarTech, growth systems, and data-driven marketing strategies for enterprise transformation." />
        <link rel="canonical" href="https://prateekkarn.com" />
        <meta property="og:title" content="Prateek Karn | AI Business Architect & Growth Strategist" />
        <meta property="og:description" content="AI Business Architect specializing in MarTech, growth systems, and data-driven marketing strategies." />
        <meta property="og:url" content="https://prateekkarn.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <main className="min-h-screen">
        <HeroSection />
        <ManifestoSection />
        <ProofOfImpactSection />
        <TrustedBySection />
        <AreasOfArchitectureSection />
        <CareerTrajectorySection />
        <MyWorkSection />
        <TestimonialsSection />
        <AboutPrateekSection />
        <GrowthStackSection />
        <KarnInsightsSection />
      </main>
    </>
  );
};

export default Index;
