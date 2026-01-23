<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import ScrollButton from './scrollButton.svelte';
</script>

<section
	class="flex min-h-svh flex-col items-center justify-between px-16 py-28 md:px-28 md:py-48"
	aria-label="Hero section"
	role="banner"
>
	<div>
		<h1 class="pb-2 text-5xl font-bold">Mohammad Al-aqua</h1>
		<p class="text-2xl">Teacher by day, coder by night.</p>
		<p class="text-2xl">
			I craft full-stack solutions that are as easy to maintain as they are to explain.
		</p>
		<div class="mt-6 flex gap-4">
			<Button
				href="#get-in-touch"
				class="text-md transition-all hover:-translate-y-0.5 active:scale-98"
				variant="default">Get in touch</Button
			>
			<Button
				href="/blog"
				class="text-md transition-all hover:-translate-y-0.5 active:scale-98"
				variant="secondary">Read my blog</Button
			>
		</div>
	</div>

	<ScrollButton link="#behind-the-code" />
</section>
