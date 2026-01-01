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
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Prateek Karn | AI Business Architect & MarTech Strategist</title>
        <meta name="description" content="Prateek Karn is an AI Business Architect who designs intelligent MarTech systems, AI-powered automation, and data pipelines for enterprise growth." />
        <link rel="canonical" href="https://prateekkarn.com" />
        <meta property="og:title" content="Prateek Karn | AI Business Architect & MarTech Strategist" />
        <meta property="og:description" content="I design AI-powered business systems that integrate marketing, data, and automation into intelligent growth engines for enterprises." />
        <meta property="og:url" content="https://prateekkarn.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      <StructuredData />
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
