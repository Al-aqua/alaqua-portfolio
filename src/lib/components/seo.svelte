<script lang="ts">
	import { page } from '$app/state';
	import {
		absoluteUrl,
		defaultDescription,
		defaultTitle,
		ogImage,
		personJsonLd,
		siteName,
		twitterHandle
	} from '#lib/site.js';
	import SvelteSeo from 'svelte-seo';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
	}

	let {
		title = defaultTitle,
		description = defaultDescription,
		image = ogImage,
		type = 'website',
		noindex = false
	}: Props = $props();

	// Derived from the current route so every page gets its own canonical URL.
	let canonical = $derived(absoluteUrl(page.url.pathname));
	let imageUrl = $derived(absoluteUrl(image));
</script>

<SvelteSeo
	{title}
	{description}
	{canonical}
	{noindex}
	openGraph={{
		type,
		url: canonical,
		title,
		description,
		site_name: siteName,
		images: [
			{
				url: imageUrl,
				width: 1200,
				height: 630,
				alt: `${siteName} - ${title}`
			}
		]
	}}
	twitter={{
		card: 'summary_large_image',
		site: twitterHandle,
		title,
		description,
		image: imageUrl,
		imageAlt: `${siteName} - ${title}`
	}}
	jsonLd={personJsonLd}
/>
