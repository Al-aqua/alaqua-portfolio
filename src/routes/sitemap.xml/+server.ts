import { absoluteUrl } from '#lib/site.js';
import type { RequestHandler } from './$types';

// Required by adapter-static: all routes must be fully prerenderable.
export const prerender = true;

const pages: string[] = ['/', '/blog'];

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${pages
	.map(
		(page) => `  <url>
    <loc>${absoluteUrl(page)}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

export const GET: RequestHandler = async () => {
	return new Response(sitemap(pages), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
