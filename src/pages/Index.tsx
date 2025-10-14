import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import ProofOfImpactSection from "@/components/ProofOfImpactSection";
import TrustedBySection from "@/components/TrustedBySection";
import AreasOfArchitectureSection from "@/components/AreasOfArchitectureSection";
import CareerTrajectorySection from "@/components/CareerTrajectorySection";
import GrowthStackSection from "@/components/GrowthStackSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PrinciplesSection />
      <ProofOfImpactSection />
      <TrustedBySection />
      <AreasOfArchitectureSection />
      <CareerTrajectorySection />
      <GrowthStackSection />
      <ContactSection />
    </main>
  );
};

export default Index;