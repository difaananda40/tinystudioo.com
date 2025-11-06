import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE_URL = "https://tinystudioo.com";

export const GET: APIRoute = async () => {
  // Get all projects
  const projects = await getCollection("projects");

  // Static pages
  const staticPages = [
    {
      url: SITE_URL,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "1.0",
    },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastmod: new Date().toISOString().split("T")[0],
    changefreq: "monthly",
    priority: "0.8",
  }));

  // Combine all pages
  const allPages = [...staticPages, ...projectPages];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
