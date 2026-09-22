import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const paths = ["", "/services/", "/vehicules/", "/contact/", "/rgpd/", "/cgu/"];
  const now = new Date();

  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/vehicules/" || path === "/services/" ? 0.8 : 0.5,
  }));
}
