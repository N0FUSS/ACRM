import type { MetadataRoute } from "next";

const siteUrl = "https://centrallakesremovals.co.nz";

const routes = [
  "",
  "/about",
  "/contact",
  "/reviews",
  "/services",
  "/services/house-moving",
  "/services/furniture-moving",
  "/services/long-distance",
  "/services/packing",
  "/service-areas",
  "/service-areas/cromwell",
  "/service-areas/queenstown",
  "/service-areas/wanaka",
  "/service-areas/alexandra",
  "/service-areas/central-otago",
  "/service-areas/christchurch",
  "/service-areas/dunedin",
  "/service-areas/invercargill",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-05-04"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
