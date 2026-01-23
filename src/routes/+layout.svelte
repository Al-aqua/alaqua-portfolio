<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import SvelteSeo from 'svelte-seo';

	let { children } = $props();
</script>

<SvelteSeo
	title="Mohammad AL-aqua | Full-Stack Developer & Cybersecurity Specialist"
	description="Yemeni-born software engineer with 3+ years building secure full-stack applications. Expert in Laravel, React, Svelte, and cybersecurity practices. Teaching 500+ students annually."
	canonical="https://alaqua.dev"
	openGraph={{
		type: 'website',
		url: 'https://alaqua.dev',
		title: 'Mohammad Al-aqua - Full-Stack Developer & Cybersecurity Expert',
		description:
			'Building secure, scalable web applications. Specializing in Laravel, React, Svelte, and security hardening.',
		images: [
			{
				url: 'https://alaqua.dev/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Mohammad Al-aqua Portfolio'
			}
		],
		site_name: 'Mohammad Al-aqua Portfolio'
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@the_alaqua',
		title: 'Mohammad Al-aqua - Full-Stack Developer & Cybersecurity Expert',
		description: 'Building secure, scalable web applications.',
		image: 'https://alaqua.dev/og-image.png',
		imageAlt: 'Mohammad Al-aqua Portfolio'
	}}
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Mohammad Al-aqua',
		jobTitle: 'Full-Stack Developer & Cybersecurity Specialist',
		url: 'https://alaqua.dev',
		sameAs: [
			'https://github.com/Al-aqua',
			'https://www.linkedin.com/in/mohammad-al-aqua-b3987b294',
			'https://twitter.com/the_alaqua'
		],
		worksFor: {
			'@type': 'Organization',
			name: 'Warqatech'
		},
		alumniOf: 'Warqatech',
		knowsAbout: ['Full-Stack Development', 'Cybersecurity', 'Laravel', 'React', 'Svelte']
	}}
/>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<ModeWatcher />

{@render children()}
<div style="display:none">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
