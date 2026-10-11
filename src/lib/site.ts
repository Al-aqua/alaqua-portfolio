export const site = 'https://alaqua.dev';

/** Build an absolute URL for a site-relative path. Defaults to the homepage. */
export const absoluteUrl = (path = '/') => new URL(path, site).href;
export const siteName = 'Mohammad Al-aqua';
export const siteTitle = 'Full-Stack Developer & Cybersecurity Specialist';
export const defaultTitle = `${siteName} | ${siteTitle}`;
export const defaultDescription =
	'Yemeni-born software engineer with 3+ years building secure full-stack applications. Expert in Laravel, React, Svelte, and cybersecurity practices. Teaching 500+ students annually.';
export const ogImage = '/og-image.png';
export const twitterHandle = '@the_alaqua';

export const personJsonLd: {
	'@context': 'https://schema.org';
	'@type': 'Person';
	name: string;
	jobTitle: string;
	url: string;
	sameAs: string[];
	worksFor: { '@type': 'Organization'; name: string };
	knowsAbout: string[];
} = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: siteName,
	jobTitle: siteTitle,
	url: site,
	sameAs: [
		'https://github.com/Al-aqua',
		'https://www.linkedin.com/in/mohammad-al-aqua-b3987b294',
		'https://twitter.com/the_alaqua'
	],
	worksFor: {
		'@type': 'Organization',
		name: 'Warqatech'
	},
	knowsAbout: ['Full-Stack Development', 'Cybersecurity', 'Laravel', 'React', 'Svelte']
};
