import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import TechStack from "@/components/home/TechStack";
import WhyMe from "@/components/home/WhyMe";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats/>
      <FeaturedProjects projects={featuredProjects} />
      <Services />
      <TechStack />
      <WhyMe/>
      <AboutPreview />
      <CTA />

    </>
  );
}
