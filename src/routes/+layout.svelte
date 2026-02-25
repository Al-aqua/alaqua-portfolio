<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import SvelteSeo from 'svelte-seo';
	import { cn } from '$lib/utils';
	import GridPattern from '$lib/components/GridPattern.svelte';

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

<div class="relative min-h-screen w-full">
	<GridPattern
		class={cn('bg-foreground,transparent)]', 'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12')}
		fillColor="rgb(156 163 175 / 0.15)"
	/>
	{@render children()}
</div>
<div style="display:none">
	{#each locales as locale (locale)}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
