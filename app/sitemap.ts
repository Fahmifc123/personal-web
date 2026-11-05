import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE_URL = "https://fahmi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/teaching",
    "/contact",
    "/experience",
    "/ask-ai",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
