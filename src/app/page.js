import ThemeToggle from "@/components/common/ThemeToggle";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats/>
      <FeaturedProjects projects={featuredProjects} />
    </>
  );
}
