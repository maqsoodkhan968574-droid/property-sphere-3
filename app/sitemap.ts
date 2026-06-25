import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const routes = [
    "",
    "/how-it-works",
    "/destinations",
    "/travel-categories",
    "/compatibility-quiz",
    "/group-packages",
    "/partner-with-us",
    "/about-us",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  return routes;
}
