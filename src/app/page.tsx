import AboutPreview from "@/components/home/AboutPreview";
import ColdEmailExpertise from "@/components/home/ColdEmailExpertise";
import DevelopmentServices from "@/components/home/DevelopmentServices";
import FeaturedWork from "@/components/home/FeaturedWork";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import ProofStrip from "@/components/home/ProofStrip";
import TechnicalCapabilities from "@/components/home/TechnicalCapabilities";
import WorkingProcess from "@/components/home/WorkingProcess";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedWork />
      <DevelopmentServices />
      <ColdEmailExpertise />
      <TechnicalCapabilities />
      <WorkingProcess />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
