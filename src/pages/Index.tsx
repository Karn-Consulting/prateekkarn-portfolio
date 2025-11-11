import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import ProofOfImpactSection from "@/components/ProofOfImpactSection";
import MidPageCTASection from "@/components/MidPageCTASection";
import TrustedBySection from "@/components/TrustedBySection";
import AreasOfArchitectureSection from "@/components/AreasOfArchitectureSection";
import CareerTrajectorySection from "@/components/CareerTrajectorySection";
import GrowthStackSection from "@/components/GrowthStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ManifestoSection />
      <ProofOfImpactSection />
      <MidPageCTASection />
      <TrustedBySection />
      <AreasOfArchitectureSection />
      <CareerTrajectorySection />
      <GrowthStackSection />
      <ContactSection />
    </main>
  );
};

export default Index;