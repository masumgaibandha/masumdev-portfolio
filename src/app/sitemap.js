import { featuredProjects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = "https://masumdev.com";
  const lastModified = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/projects`, priority: 0.9 },
    { url: `${baseUrl}/services`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
  ].map((route) => ({
    ...route,
    lastModified,
    changeFrequency: "monthly",
  }));

  const projectRoutes = featuredProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
